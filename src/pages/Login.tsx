import Form from "../components/Form";
function Login() {
  const inputs = ["email", "password"];

  return <Form inputs={inputs} endpoint="login" />;
}

export default Login;
