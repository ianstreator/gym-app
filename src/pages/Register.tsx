import { useState, useEffect, FormEvent } from "react";

function Register() {
  const [form, setForm] = useState<{ [input: string]: string }>({
    email: "",
    username: "",
    password: "",
  });
  console.log(form);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    const baseURL = "http://localhost:4000/auth/";
    const res = await fetch(`${baseURL}register`, options);
    if (res.status !== 200) {
      return console.log(res);
    }
    const data = await res.json();
  };

  const onFormChangeHandler = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((curr) => ({ ...curr, [name]: value }));
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="m-2 p-10 bg-white shadow-md rounded-md">
      <form
        action="submit"
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col relative h-96"
      >
        {Object.keys(form).map((input, i) => (
          <div key={i} className="mb-4 text-dark/50">
            <label htmlFor={input} className="capitalize">{input}</label>
            <input
              className="bg-gray-100 p-1 text-dark text-lg w-full"
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

export default Register;
