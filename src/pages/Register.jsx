import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "../api/authApi";
import { onlyName, validEmail, strongPassword } from "../utils/validators";
import logo from "../assets/logo-light-Purple.png";

export default function Register() {
  const nav = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    tradingViewUsername: "",
    password: "",
  });

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

  const cleanTradingViewUsername = (value) => value.replace(/[^A-Za-z0-9_.-]/g, "");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    setOk(false);

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    const tradingViewUsername = form.tradingViewUsername.trim();
    const password = form.password;

    if (!name || !email || !tradingViewUsername || !password) {
      setMsg("All fields required");
      toast("error", "All fields required");
      return;
    }

    if (!onlyName(name)) {
      setMsg("Only letters allowed in name");
      toast("error", "Only letters allowed");
      return;
    }

    if (!validEmail(email)) {
      setMsg("Invalid email");
      toast("error", "Invalid email");
      return;
    }

    if (tradingViewUsername.length < 3) {
      setMsg("Enter valid TradingView username");
      toast("error", "Invalid TradingView username");
      return;
    }

    if (!strongPassword(password)) {
      setMsg("Password must be strong");
      toast("error", "Use strong password");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name,
        email,
        tradingViewUsername,
        password,
      });

      localStorage.setItem("verifyEmail", email);
      localStorage.setItem("verifyTradingViewUsername", tradingViewUsername);

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
    <>
      <main className="scannerAuthPage">
        <form className="scannerAuthCard scannerRegisterCard" onSubmit={submit}>
          <div className="scannerAuthLogo">
            <img src={logo} alt="BR30 Market Scanner" />
          </div>

          <h1>Create Account</h1>
          <p className="scannerAuthSub">Join BR30 Market Scanner and start your scanner journey.</p>

          <label>Full Name</label>
          <input value={form.name} placeholder="Enter full name" onChange={(e) => setForm({ ...form, name: e.target.value.replace(/[^A-Za-z ]/g, "") })} />

          <label>Email Address</label>
          <input type="email" value={form.email} placeholder="Enter email" onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <label>TradingView Username</label>
          <input value={form.tradingViewUsername} placeholder="Your TradingView ID" onChange={(e) => setForm({ ...form, tradingViewUsername: cleanTradingViewUsername(e.target.value) })} />

          <small className="scannerAuthNote">Required for BR30 Infinity Sniper indicator access</small>

          <label>Password</label>
          <div className="scannerPassBox">
            <input type={show ? "text" : "password"} value={form.password} placeholder="8+ chars, 1 Special (@#$%^&*)" onChange={(e) => setForm({ ...form, password: e.target.value })} />

            <button type="button" className="scannerEyeBtn" onClick={() => setShow(!show)}>
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="scannerAuthBtn" disabled={loading}>
            {loading ? "Sending..." : "Send OTP"}
          </button>

          {msg && <p className={`scannerAuthMsg ${ok ? "success" : "error"}`}>{msg}</p>}

          <div className="scannerAuthFooter">
            <span>Already registered?</span>
            <Link to="/login">Sign In</Link>
          </div>
        </form>
      </main>

      <style>{`.scannerAuthPage{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:30px 18px;background:radial-gradient(circle at top,#f3d8ff 0%,transparent 35%),#f8f7fb;}.scannerAuthCard{width:100%;max-width:430px;background:#fff;padding:34px;border-radius:28px;box-shadow:0 20px 60px rgba(168,85,247,.15);}.scannerRegisterCard{max-width:470px;}.scannerAuthLogo{width:72px;height:72px;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;border-radius:22px;overflow:hidden;background:transparent;}.scannerAuthLogo img{width:100%;height:100%;display:block;object-fit:contain;border-radius:22px;}.scannerAuthCard h1{font-size:34px;font-weight:900;text-align:center;margin:0;color:#161616;}.scannerAuthSub{text-align:center;color:#6b7280;margin:12px auto 26px;font-size:15px;line-height:1.55;max-width:350px;}.scannerAuthCard label{display:block;font-size:15px;font-weight:800;margin:14px 0 8px;color:#111827;}.scannerAuthCard input{width:100%;height:52px;border:1px solid #eadcf8;border-radius:14px;padding:0 16px;font-size:15px;font-weight:700;outline:none;transition:.25s;background:#fff;color:#111827;}.scannerAuthCard input:focus{border-color:#c026d3;box-shadow:0 0 0 4px rgba(192,38,211,.12);}.scannerAuthNote{display:block;margin:8px 0 2px;color:#8a6b96;font-size:12px;font-weight:800;}.scannerPassBox{position:relative;}.scannerPassBox input{padding-right:56px;}.scannerEyeBtn{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:40px;height:40px;border:none;border-radius:12px;background:#f5e9ff;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#a21caf;}.scannerAuthBtn{width:100%;height:54px;border:none;border-radius:16px;background:linear-gradient(90deg,#ec2ad5,#8b2cf5);color:#fff;font-size:17px;font-weight:900;cursor:pointer;transition:.25s;margin-top:20px;}.scannerAuthBtn:hover{transform:translateY(-2px);box-shadow:0 16px 35px rgba(168,85,247,.35);}.scannerAuthBtn:disabled{opacity:.75;cursor:not-allowed;transform:none;}.scannerAuthMsg{margin-top:18px;text-align:center;font-weight:800;}.scannerAuthMsg.success{color:#16a34a;}.scannerAuthMsg.error{color:#dc2626;}.scannerAuthFooter{margin-top:24px;display:flex;justify-content:center;gap:6px;font-size:16px;}.scannerAuthFooter span{color:#666;}.scannerAuthFooter a{text-decoration:none;font-weight:900;color:#9333ea;}@media(max-width:480px){.scannerAuthCard{padding:28px 22px;border-radius:24px;}.scannerAuthCard h1{font-size:30px;}.scannerAuthLogo{width:64px;height:64px;border-radius:18px;}.scannerAuthLogo img{width:100%;height:100%;border-radius:18px;}.scannerAuthFooter{font-size:14px;flex-wrap:wrap;}}`}</style>
    </>
  );
}
