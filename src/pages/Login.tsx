import { useState, useEffect, FormEvent } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../constants";

function Login() {
  const [form, setForm] = useState<{ [input: string]: string }>({
    email: "",
    password: "",
  });
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    const baseURL = API_URL;
    const res = await fetch(`${baseURL}/auth/login`, options);
    const data = await res.json();
    if (res.status !== 200) {
      return toast.error(data.message);
    } else {
      return toast.success(data.message);
    }
  };

  const onFormChangeHandler = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((curr) => ({ ...curr, [name]: value }));
  };

  useEffect(() => {}, [form]);

  return (
    <div className="m-2 p-10 bg-black/25 shadow-md rounded-md">
      <form
        action="submit"
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col relative h-96"
      >
        {Object.keys(form).map((input, i) => (
          <div key={i} className="mb-4">
            <label htmlFor={input} className="capitalize">
              {input}
            </label>
            <input
              className="bg-black/25 p-1 text-dark text-lg w-full"
              type={input === "password" ? "password" : "text"}
              value={form[input]}
              name={input}
              id={input}
              onChange={(e) => onFormChangeHandler(e)}
            />
          </div>
        ))}
        <button type="submit" className="btn-style ml-auto mt-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
