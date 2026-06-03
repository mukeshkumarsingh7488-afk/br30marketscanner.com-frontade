import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { forgotPassword } from "../api/authApi";

export default function ForgotPassword() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);

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

    if (!email) {
      setOk(false);
      setMsg("Email required");
      toast("error", "Email required");
      return;
    }

    try {
      setLoading(true);

      await forgotPassword({
        email: email.trim().toLowerCase(),
      });

      localStorage.setItem("resetEmail", email.trim().toLowerCase());

      setOk(true);
      setMsg("Reset OTP sent");
      toast("success", "Reset OTP sent");

      setTimeout(() => {
        nav("/reset-password");
      }, 800);
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Failed";

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
        <h1>Forgot Password</h1>

        <label>Email Address</label>

        <input type="email" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="submit" className="authBtn" disabled={loading}>
          {loading ? "Sending..." : "Send Reset OTP"}
        </button>

        {msg && <p className={`authMsg ${ok ? "success" : "error"}`}>{msg}</p>}
      </form>
    </main>
  );
}
