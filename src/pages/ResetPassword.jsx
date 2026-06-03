import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { resetPassword } from "../api/authApi";
import { strongPassword } from "../utils/validators";

export default function ResetPassword() {
  const nav = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);

  const [form, setForm] = useState({
    email: localStorage.getItem("resetEmail") || "",
    otp: "",
    newPassword: "",
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

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    setOk(false);

    if (!form.email || !form.otp || !form.newPassword) {
      setMsg("All fields required");
      toast("error", "All fields required");
      return;
    }

    if (!strongPassword(form.newPassword)) {
      setMsg("Password must be strong");
      toast("error", "Use strong password");
      return;
    }

    try {
      setLoading(true);

      await resetPassword({
        email: form.email.trim().toLowerCase(),
        otp: form.otp,
        newPassword: form.newPassword,
      });

      setOk(true);
      setMsg("Password reset success");
      toast("success", "Password reset success");

      setTimeout(() => {
        nav("/login");
      }, 900);
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Reset failed";
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
        <h1>Reset Password</h1>

        <label>Email Address</label>
        <input type="email" value={form.email} placeholder="example@mail.com" onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <label>OTP</label>
        <input maxLength="6" value={form.otp} placeholder="6 Digit OTP" onChange={(e) => setForm({ ...form, otp: e.target.value.replace(/\D/g, "") })} />

        <label>New Password</label>
        <div className="passBox">
          <input type={show ? "text" : "password"} value={form.newPassword} placeholder="New Strong Password" onChange={(e) => setForm({ ...form, newPassword: e.target.value })} />

          <button type="button" className="eyeBtn" onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        <button type="submit" className="authBtn" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {msg && <p className={`authMsg ${ok ? "success" : "error"}`}>{msg}</p>}
      </form>
    </main>
  );
}
