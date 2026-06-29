import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { approveUser, deleteUser, getAdminStats, getAllPayments, getAllUsers, sendBulkMail, unapproveUser, updateUserRole, updateUserSubscription } from "../api/authApi";

const fmtDate = (d) => (d ? new Date(d).toLocaleDateString("en-IN") : "-");

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("users");
  const [filter, setFilter] = useState("all");
  const [mail, setMail] = useState({ target: "all", subject: "", message: "" });

  const toast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon,
      title,
      showConfirmButton: false,
      timer: 1600,
      background: "#0b111c",
      color: "#fff",
    });
  };

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await getAllUsers();
      setUsers(res.data.users || []);
    } catch {
      toast("error", "Users load failed");
    } finally {
      setLoading(false);
    }
  };

  const loadExtra = async () => {
    try {
      const [statsRes, paymentRes] = await Promise.all([getAdminStats(), getAllPayments()]);
      setStats(statsRes.data.stats || {});
      setPayments(paymentRes.data.payments || []);
    } catch {
      toast("error", "Admin extra data load failed");
    }
  };

  const loadAll = async () => {
    await loadUsers();
    await loadExtra();
  };

  useEffect(() => {
    loadAll();
  }, []);

  const filteredUsers = useMemo(() => {
    if (filter === "all") return users;
    if (filter === "pending") return users.filter((u) => !u.isApproved);
    if (filter === "approved") return users.filter((u) => u.isApproved);
    if (filter === "blocked") return users.filter((u) => u.isBlocked);
    return users.filter((u) => u.subscriptionStatus === filter);
  }, [users, filter]);

  const toggleApprove = async (user) => {
    const action = user.isApproved ? "Unapprove" : "Approve";

    const result = await Swal.fire({
      title: `${action} User?`,
      text: `${user.email}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: `Yes, ${action}`,
      cancelButtonText: "Cancel",
      confirmButtonColor: user.isApproved ? "#ffcc66" : "#00ff88",
      cancelButtonColor: "#6b7280",
      background: "#0b111c",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      if (user.isApproved) {
        await unapproveUser(user._id);
        toast("success", "User unapproved");
      } else {
        await approveUser(user._id);
        toast("success", "User approved");
      }

      loadAll();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Action Failed",
        text: err.response?.data?.msg || "Something went wrong",
        background: "#0b111c",
        color: "#fff",
      });
    }
  };

  const removeUser = async (user) => {
    const result = await Swal.fire({
      title: "Delete User?",
      text: `${user.email}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ff4d4d",
      cancelButtonColor: "#6b7280",
      background: "#0b111c",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteUser(user._id);
      toast("success", "User deleted");
      loadAll();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: err.response?.data?.msg || "Something went wrong",
        background: "#0b111c",
        color: "#fff",
      });
    }
  };

  const changeRole = async (user, newRole) => {
    if (!newRole || newRole === user.role) return;

    const result = await Swal.fire({
      title: "Change User Role?",
      html: `
        <b>${user.name}</b><br/>
        ${user.email}<br/><br/>
        Current Role: <b>${user.role}</b><br/>
        New Role: <b>${newRole}</b>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Change Role",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#00ff88",
      cancelButtonColor: "#6b7280",
      background: "#0b111c",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await updateUserRole(user._id, { role: newRole });
      toast("success", "User role updated");
      loadAll();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Role Update Failed",
        text: err.response?.data?.msg || "Something went wrong",
        background: "#0b111c",
        color: "#fff",
      });
    }
  };

  const sendMailNow = async () => {
    if (!mail.subject || !mail.message) return toast("error", "Subject/message required");

    try {
      const res = await sendBulkMail(mail);
      toast("success", res.data.msg || "Mail sent");
      setMail({ target: "all", subject: "", message: "" });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Mail Failed",
        text: err.response?.data?.msg || "Something went wrong",
        background: "#0b111c",
        color: "#fff",
      });
    }
  };

  return (
    <main className="page">
      <div className="adminHead">
        <div>
          <p className="tag">ADMIN ACCESS PANEL</p>
          <h1>Users Management</h1>
        </div>
        <Link className="backBtn" to="/dashboard">
          ← Back to Dashboard
        </Link>
      </div>

      <section className="adminStats">
        <div className="adminCard">
          <p>Total Users</p>
          <h2>{stats.totalUsers || users.length || 0}</h2>
        </div>
        <div className="adminCard">
          <p>Active</p>
          <h2>{stats.activeUsers || 0}</h2>
        </div>
        <div className="adminCard">
          <p>Trial</p>
          <h2>{stats.trialUsers || 0}</h2>
        </div>
        <div className="adminCard">
          <p>Expired</p>
          <h2>{stats.expiredUsers || 0}</h2>
        </div>
        <div className="adminCard">
          <p>Blocked</p>
          <h2>{stats.blockedUsers || 0}</h2>
        </div>
        <div className="adminCard">
          <p>Revenue</p>
          <h2>₹{stats.totalRevenue || 0}</h2>
        </div>
      </section>

      <div className="adminTabs">
        <button className={tab === "users" ? "active" : ""} onClick={() => setTab("users")}>
          Users
        </button>
        <button className={tab === "payments" ? "active" : ""} onClick={() => setTab("payments")}>
          Payments
        </button>
        <button className={tab === "mail" ? "active" : ""} onClick={() => setTab("mail")}>
          Bulk Mail
        </button>
      </div>

      {tab === "users" && (
        <>
          <div className="adminFilter">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Users</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="trial">Trial</option>
              <option value="active">Active</option>
              <option value="expired">Expired</option>
              <option value="cancelled">Cancelled</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>

          <section className="tableBox">
            <div className="tableScroll">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Plan</th>
                    <th>Trial End</th>
                    <th>Sub End</th>
                    <th>Pay</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="9" className="empty">
                        Loading users...
                      </td>
                    </tr>
                  ) : filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="empty">
                        No users found
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((u) => (
                      <tr key={u._id}>
                        <td className="symbol">{u.name}</td>
                        <td>{u.email}</td>
                        <td>
                          <select className="roleSelect" value={u.role || "student"} onChange={(e) => changeRole(u, e.target.value)}>
                            <option value="student">student</option>
                            <option value="vip">vip</option>
                            <option value="admin">admin</option>
                          </select>
                        </td>
                        <td>
                          <span className={`statusBadge ${u.isApproved ? "approved" : "pending"}`}>{u.isBlocked ? "Blocked" : u.isApproved ? "Approved" : "Pending"}</span>
                        </td>
                        <td>{u.planName || "-"}</td>
                        <td>{fmtDate(u.trialEndDate)}</td>
                        <td>{fmtDate(u.subscriptionEndDate)}</td>
                        <td>
                          ₹{u.planPrice || 0} / {u.totalPayments || 0}
                        </td>
                        <td>
                          <div className="adminActions">
                            <button className={u.isApproved ? "unapproveBtn" : "approveBtn"} onClick={() => toggleApprove(u)}>
                              {u.isApproved ? "Unapprove" : "Approve"}
                            </button>
                            <button className="deleteBtn" onClick={() => removeUser(u)}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      {tab === "payments" && (
        <section className="tableBox">
          <div className="tableScroll">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Order ID</th>
                  <th>Txn ID</th>
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="empty">
                      No payments found
                    </td>
                  </tr>
                ) : (
                  payments.map((p) => (
                    <tr key={p._id}>
                      <td>{p.userName || "-"}</td>
                      <td>{p.userEmail || "-"}</td>
                      <td>{p.orderId || "-"}</td>
                      <td>{p.transactionId || "-"}</td>
                      <td>{p.planName || "-"}</td>
                      <td>₹{p.amount || 0}</td>
                      <td>
                        <span className={`statusBadge ${p.status === "success" ? "approved" : "pending"}`}>{p.status || "-"}</span>
                      </td>
                      <td>{fmtDate(p.paymentDate || p.createdAt)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {tab === "mail" && (
        <section className="bulkMailBox">
          <h2>Bulk Mail Center</h2>

          <select value={mail.target} onChange={(e) => setMail({ ...mail, target: e.target.value })}>
            <option value="all">All Users</option>
            <option value="trial">Trial Users</option>
            <option value="active">Active Users</option>
            <option value="expired">Expired Users</option>
            <option value="pending">Pending Users</option>
          </select>

          <input value={mail.subject} placeholder="Email subject" onChange={(e) => setMail({ ...mail, subject: e.target.value })} />
          <textarea value={mail.message} placeholder="Email message" onChange={(e) => setMail({ ...mail, message: e.target.value })} />
          <button onClick={sendMailNow}>Send Bulk Mail</button>
        </section>
      )}

      <style>{`
        .roleSelect{
          background:#07111d;
          color:#fff;
          border:1px solid #1f3b31;
          border-radius:10px;
          padding:10px 12px;
          font-weight:800;
          outline:none;
          cursor:pointer;
        }
      `}</style>
    </main>
  );
}
