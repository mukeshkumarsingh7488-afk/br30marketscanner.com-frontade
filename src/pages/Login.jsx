import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo-light-Purple.png";

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
    <>
      <main className="scannerAuthPage">
        <form className="scannerAuthCard" onSubmit={submit}>
          <div className="scannerAuthLogo">
            <img src={logo} alt="BR30 Market Scanner" />
          </div>

          <h1>BR30 Market Scanner</h1>
          <p className="scannerAuthSub">Secure login to your market scanner dashboard.</p>

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <label>Password</label>
          <div className="scannerPassBox">
            <input type={show ? "text" : "password"} placeholder="Enter your password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

            <button type="button" className="scannerEyeBtn" onClick={() => setShow(!show)}>
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="scannerAuthRow">
            <label className="scannerRemember">
              <input type="checkbox" checked={show} onChange={() => setShow(!show)} />
              <span>Show password</span>
            </label>

            <Link to="/forgot-password" className="scannerForgot">
              Forgot?
            </Link>
          </div>

          <button type="submit" className="scannerAuthBtn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {msg && <p className={`scannerAuthMsg ${ok ? "success" : "error"}`}>{msg}</p>}

          <div className="scannerAuthFooter">
            <span>New user?</span>

            <Link to="/register">Create account</Link>
          </div>
        </form>
      </main>
      <style>{`.scannerAuthPage{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:30px 18px;background:radial-gradient(circle at top,#f3d8ff 0%,transparent 35%),#f8f7fb;}.scannerAuthCard{width:100%;max-width:430px;background:#fff;padding:34px;border-radius:28px;box-shadow:0 20px 60px rgba(168,85,247,.15);}.scannerAuthLogo{width:72px;height:72px;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;border-radius:22px;overflow:hidden;background:transparent;}.scannerAuthLogo img{width:100%;height:100%;display:block;object-fit:contain;border-radius:22px;}.scannerAuthCard h1{font-size:40px;font-weight:900;text-align:center;margin:0;color:#161616;}.scannerAuthSub{text-align:center;color:#6b7280;margin:10px 0 28px;font-size:15px;}.scannerAuthCard label{display:block;font-size:15px;font-weight:700;margin:16px 0 8px;color:#222;}.scannerAuthCard input{width:100%;height:52px;border:1px solid #eadcf8;border-radius:14px;padding:0 16px;font-size:15px;outline:none;transition:.25s;background:#fff;}.scannerAuthCard input:focus{border-color:#c026d3;box-shadow:0 0 0 4px rgba(192,38,211,.12);}.scannerPassBox{position:relative;}.scannerPassBox input{padding-right:56px;}.scannerEyeBtn{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:40px;height:40px;border:none;border-radius:12px;background:#f5e9ff;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#a21caf;}.scannerAuthRow{display:flex;justify-content:space-between;align-items:center;margin:16px 0 24px;}.scannerRemember{display:flex!important;align-items:center;gap:8px;margin:0!important;font-size:14px!important;font-weight:500!important;}.scannerRemember input{width:16px!important;height:16px!important;}.scannerForgot{text-decoration:none;font-weight:700;color:#a21caf;}.scannerAuthBtn{width:100%;height:54px;border:none;border-radius:16px;background:linear-gradient(90deg,#ec2ad5,#8b2cf5);color:#fff;font-size:18px;font-weight:800;cursor:pointer;transition:.25s;}.scannerAuthBtn:hover{transform:translateY(-2px);box-shadow:0 16px 35px rgba(168,85,247,.35);}.scannerAuthMsg{margin-top:18px;text-align:center;font-weight:700;}.scannerAuthMsg.success{color:#16a34a;}.scannerAuthMsg.error{color:#dc2626;}.scannerAuthFooter{margin-top:28px;display:flex;justify-content:center;gap:6px;font-size:16px;}.scannerAuthFooter span{color:#666;}.scannerAuthFooter a{text-decoration:none;font-weight:800;color:#9333ea;}@media(max-width:480px){.scannerAuthCard{padding:28px 22px;border-radius:24px;}.scannerAuthCard h1{font-size:34px;}.scannerAuthLogo{width:64px;height:64px;}.scannerAuthLogo img{width:64px;height:64px;}.scannerAuthRow{flex-direction:column;align-items:flex-start;gap:14px;}.scannerForgot{margin-left:auto;}}`}</style>
    </>
  );
}
