import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { forgotPassword } from "../api/authApi";
import logo from "../assets/logo-light-Purple.png";

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
    <>
      <main className="scannerAuthPage">
        <form className="scannerAuthCard" onSubmit={submit}>
          <div className="scannerAuthLogo">
            <img src={logo} alt="BR30 Market Scanner" />
          </div>

          <h1>Forgot Password</h1>
          <p className="scannerAuthSub">BR30 Market Scanner reset your password securely with email OTP.</p>

          <label>Registered Email</label>

          <input type="email" placeholder="Enter registered email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <button type="submit" className="scannerAuthBtn" disabled={loading}>
            {loading ? "Sending..." : "Send Reset OTP"}
          </button>

          {msg && <p className={`scannerAuthMsg ${ok ? "success" : "error"}`}>{msg}</p>}

          <div className="scannerAuthFooter">
            <span>Already have an account?</span>
            <Link to="/login">Sign In</Link>
          </div>
        </form>
      </main>

      <style>{`.scannerAuthPage{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:30px 18px;background:radial-gradient(circle at top,#f3d8ff 0%,transparent 35%),#f8f7fb;}.scannerAuthCard{width:100%;max-width:430px;background:#fff;padding:34px;border-radius:28px;box-shadow:0 20px 60px rgba(168,85,247,.15);}.scannerAuthLogo{width:72px;height:72px;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;border-radius:22px;overflow:hidden;background:transparent;}.scannerAuthLogo img{width:100%;height:100%;display:block;object-fit:contain;border-radius:22px;}.scannerAuthCard h1{font-size:34px;font-weight:900;text-align:center;margin:0;color:#161616;}.scannerAuthSub{text-align:center;color:#6b7280;margin:12px auto 28px;font-size:15px;line-height:1.55;max-width:330px;}.scannerAuthCard label{display:block;font-size:15px;font-weight:800;margin:16px 0 8px;color:#111827;}.scannerAuthCard input{width:100%;height:52px;border:1px solid #eadcf8;border-radius:14px;padding:0 16px;font-size:15px;font-weight:700;outline:none;transition:.25s;background:#fff;color:#111827;}.scannerAuthCard input:focus{border-color:#c026d3;box-shadow:0 0 0 4px rgba(192,38,211,.12);}.scannerAuthBtn{width:100%;height:54px;border:none;border-radius:16px;background:linear-gradient(90deg,#ec2ad5,#8b2cf5);color:#fff;font-size:17px;font-weight:900;cursor:pointer;transition:.25s;margin-top:20px;}.scannerAuthBtn:hover{transform:translateY(-2px);box-shadow:0 16px 35px rgba(168,85,247,.35);}.scannerAuthBtn:disabled{opacity:.75;cursor:not-allowed;transform:none;}.scannerAuthMsg{margin-top:18px;text-align:center;font-weight:800;}.scannerAuthMsg.success{color:#16a34a;}.scannerAuthMsg.error{color:#dc2626;}.scannerAuthFooter{margin-top:28px;display:flex;justify-content:center;gap:6px;font-size:16px;}.scannerAuthFooter span{color:#666;}.scannerAuthFooter a{text-decoration:none;font-weight:900;color:#9333ea;}@media(max-width:480px){.scannerAuthCard{padding:28px 22px;border-radius:24px;}.scannerAuthCard h1{font-size:30px;}.scannerAuthLogo{width:64px;height:64px;border-radius:18px;}.scannerAuthLogo img{width:100%;height:100%;border-radius:18px;}.scannerAuthFooter{font-size:14px;flex-wrap:wrap;}}`}</style>
    </>
  );
}
