import { useState, FormEvent } from "react";
import { toast, ToastContentProps } from "react-toastify";
import { ENV_API_URL } from "../constants";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState<{ [input: string]: string }>({
    email: "",
    username: "",
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
        const res = await fetch(`${ENV_API_URL}/auth/register`, options);
        const { message } = (await res.json()) as { message: string };
        if (res.status === 200) {
          setTimeout(() => {
            resolve(message);
            navigate(`/verify?email=${form.email}`);
          }, 2000);
        } else {
          reject(message);
        }
      } catch (error) {
        reject("There was an issue on our end");
      }
    });

    toast.promise(resPromise, {
      pending: "We are processing your request.",
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
    <div className="h-full flex flex-col">
      <nav className="mb-4 flex items-center justify-around">
        <p className="capitalize">{location.pathname.replace("/", "")}</p>
        <Link to="/login" className="opacity-60 underline">
          Login
        </Link>
      </nav>
      <form
        action="submit"
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col relative grow"
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
              className="bg-black/25 p-1 text-lg w-full"
            />
          </div>
        ))}
        <button type="submit" className="btn-style w-full mt-auto">
          register
        </button>
      </form>
    </div>
  );
}

export default Register;
