import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { verifyOtp, resendOtp } from "../api/authApi";

export default function VerifyOtp() {
  const nav = useNavigate();

  const [email, setEmail] = useState(localStorage.getItem("verifyEmail") || "");
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

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

    if (!email || !otp) {
      setOk(false);
      setMsg("All fields required");
      toast("error", "All fields required");
      return;
    }

    try {
      setLoading(true);
      setMsg("");
      setOk(false);

      await verifyOtp({
        email: email.trim().toLowerCase(),
        otp,
      });

      localStorage.removeItem("verifyEmail");
      localStorage.removeItem("verifyTradingViewUsername");

      setOk(true);
      setMsg("Register success");
      toast("success", "Register success");

      setTimeout(() => nav("/login"), 1000);
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Invalid OTP";
      setOk(false);
      setMsg(errorMsg);
      toast("error", errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setOk(false);
      setMsg("Email required");
      toast("error", "Email required");
      return;
    }

    try {
      setResending(true);
      setMsg("");
      setOk(false);

      await resendOtp({
        email: email.trim().toLowerCase(),
        type: "verify",
      });

      setOk(true);
      setMsg("OTP sent successfully");
      toast("success", "OTP sent successfully");
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Resend failed";
      setOk(false);
      setMsg(errorMsg);
      toast("error", errorMsg);
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="authPage">
      <form className="authCard" onSubmit={submit}>
        <h1>Verify OTP</h1>

        <label>Email Address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" />

        <label>OTP</label>
        <input maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} placeholder="6 Digit OTP" />

        <button type="submit" className="authBtn" disabled={loading}>
          {loading ? "Verifying..." : "Verify"}
        </button>

        <button type="button" className="resendBtn" onClick={handleResend} disabled={resending}>
          {resending ? "Resending..." : "Resend OTP"}
        </button>

        {msg && <p className={`authMsg ${ok ? "success" : "error"}`}>{msg}</p>}
      </form>
    </main>
  );
}
