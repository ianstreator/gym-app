import { useState, FormEvent } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { toast, ToastContentProps } from "react-toastify";
import { ENV_API_URL } from "../constants";
import { Types } from "@constfitness/types";
import { useUserStore } from "../state.ts";

function Login() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const navigate = useNavigate();

  const [form, setForm] = useState<{ [input: string]: string }>({
    email: email || "",
    password: "",
  });


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    const resPromise: Promise<string> = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${ENV_API_URL}/auth/login`, options);
        console.log(res.headers);
        const { user, message } = (await res.json()) as {
          user?: Types.User;
          message: string;
        };
        console.log(user);
        if (res.status === 200) {
          resolve(message);
          // userState.setUsername!(user!.username);
          useUserStore.setState({ user });
          navigate(`/user/${user?._id}`);
        } else if (res.status === 401) {
          reject(message);
        } else if (res.status === 403) {
          reject(message);
          navigate(`/verify?email=${form.email}`);
        }
      } catch (error) {
        reject("There was an issue on our end");
      }
    });

    toast.promise(resPromise, {
      pending: "Logging in.",
      success: {
        render({ data }: ToastContentProps<string>) {
          return data;
        },
      },
      error: {
        render({ data }: ToastContentProps<string>) {
          return data;
        },
      },
    });
  };

  const onFormChangeHandler = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((curr) => ({ ...curr, [name]: value }));
  };

  return (
    <div className="h-full w-full flex flex-col">
      <nav className="mb-4 flex items-center justify-around">
        <Link to="/register" className="opacity-60 underline">
          Register
        </Link>
        <p className="capitalize">{location.pathname.replace("/", "")}</p>
      </nav>
      <form
        action="submit"
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col relative h-full"
      >
        {Object.keys(form).map((input, i) => (
          <div key={i} className="mb-4">
            <label htmlFor={input} className="capitalize">
              {input}
            </label>
            <input
              required
              type={input === "password" ? "password" : "text"}
              value={form[input]}
              name={input}
              id={input}
              onChange={(e) => onFormChangeHandler(e)}
              className="bg-black/25 backdrop-blur-md p-1 text-lg w-full"
            />
          </div>
        ))}
        <button type="submit" className="btn-style w-full mt-auto">
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
