import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUser } from "../api/authApi";
import { onlyName, validEmail, strongPassword } from "../utils/validators";

export default function Register() {
  const nav = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

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

    if (!form.name || !form.email || !form.password) {
      setMsg("All fields required");
      toast("error", "All fields required");
      return;
    }

    if (!onlyName(form.name)) {
      setMsg("Only letters allowed in name");
      toast("error", "Only letters allowed");
      return;
    }

    if (!validEmail(form.email)) {
      setMsg("Invalid email");
      toast("error", "Invalid email");
      return;
    }

    if (!strongPassword(form.password)) {
      setMsg("Password must be strong");
      toast("error", "Use strong password");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      localStorage.setItem("verifyEmail", form.email.trim().toLowerCase());

      setOk(true);
      setMsg("OTP sent successfully");
      toast("success", "OTP sent successfully");

      setTimeout(() => nav("/verify-otp"), 900);
    } catch (err) {
      setOk(false);
      const errorMsg = err.response?.data?.msg || "Register failed";
      setMsg(errorMsg);
      toast("error", errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="authPage">
      <form className="authCard" onSubmit={submit}>
        <h1>Register</h1>

        <label>Full Name</label>
        <input
          value={form.name}
          placeholder="Only letters allowed"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value.replace(/[^A-Za-z ]/g, ""),
            })
          }
        />

        <label>Email Address</label>
        <input type="email" value={form.email} placeholder="example@mail.com" onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <label>Password</label>
        <div className="passBox">
          <input type={show ? "text" : "password"} value={form.password} placeholder="8+ chars, 1 Special (@#$%^&*)" onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <button type="button" className="eyeBtn" onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        <button type="submit" className="authBtn" disabled={loading}>
          {loading ? "Sending..." : "Send OTP"}
        </button>

        {msg && <p className={`authMsg ${ok ? "success" : "error"}`}>{msg}</p>}

        <p className="authCenter">
          <Link to="/login">Already have an account? Login</Link>
        </p>
      </form>
    </main>
  );
}
