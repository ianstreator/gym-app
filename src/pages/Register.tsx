import Form from "../components/Form";
function Register() {
  const inputs = ["email", "username", "password"];

  return <Form inputs={inputs} endpoint="register" />;
}

export default Register;
