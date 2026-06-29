import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const toast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon,
      title,
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
      background: "#0b111c",
      color: "#fff",
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    setOk(false);

    if (!form.email || !form.password) {
      setMsg("All fields required");
      toast("error", "All fields required");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      if (!res?.data?.token || !res?.data?.user) {
        throw new Error(res?.data?.msg || "Invalid login response");
      }

      login(res.data.token, res.data.user);

      setOk(true);
      setMsg("Login success");
      toast("success", "Login success");

      setTimeout(() => {
        nav("/dashboard", { replace: true });
      }, 700);
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Login failed";
      setOk(false);
      setMsg(errorMsg);
      toast("error", errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="authPage">
      <form className="authCard" onSubmit={submit}>
        <h1>Login</h1>

        <label>Email Address</label>
        <input type="email" placeholder="example@mail.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <label>Password</label>
        <div className="passBox">
          <input type={show ? "text" : "password"} placeholder="Enter your password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <button type="button" className="eyeBtn" onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        <button type="submit" className="authBtn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {msg && <p className={`authMsg ${ok ? "success" : "error"}`}>{msg}</p>}

        <div className="authLinks">
          <Link to="/register">Create Account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </main>
  );
}
