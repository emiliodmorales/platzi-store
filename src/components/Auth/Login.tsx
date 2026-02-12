import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

export default function Login() {
  const [error, setError] = useState<String | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function tryLogin(formData: FormData) {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    try {
      await login({ email, password });
      navigate("/products");
    } catch (e) {
      if (e instanceof Error) setError(e.message);
      else throw new Error("An unknown login error occured");
    }
  }

  return (
    <form className="login" action={tryLogin}>
      <label>
        <p>Email</p>
        <input type="text" name="email" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" name="password" />
      </label>
      <button>Login</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
