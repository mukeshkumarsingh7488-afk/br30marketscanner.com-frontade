import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { blockUser, getAdminStats, getAllPayments, getAllUsers, sendBulkMail, unblockUser, updateUserSubscription } from "../api/authApi";

const fmtDate = (d) => (d ? new Date(d).toLocaleDateString("en-IN") : "-");
const inputDate = (d) => (d ? new Date(d).toISOString().split("T")[0] : "");

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("subscriptions");
  const [filter, setFilter] = useState("all");
  const [mail, setMail] = useState({ target: "all", subject: "", message: "" });

  const toast = (icon, title) => Swal.fire({ toast: true, position: "top-end", icon, title, showConfirmButton: false, timer: 1600, background: "#0b111c", color: "#fff" });

  const loadData = async () => {
    try {
      setLoading(true);
      const [uRes, sRes, pRes] = await Promise.all([getAllUsers(), getAdminStats(), getAllPayments()]);
      setUsers(uRes.data.users || []);
      setStats(sRes.data.stats || {});
      setPayments(pRes.data.payments || []);
    } catch (err) {
      toast("error", err.response?.data?.msg || "Admin dashboard load failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredUsers = useMemo(() => {
    if (filter === "all") return users;
    if (filter === "blocked") return users.filter((u) => u.isBlocked);
    if (filter === "pending") return users.filter((u) => !u.isApproved);
    if (filter === "no-payment") return users.filter((u) => Number(u.totalPayments || 0) === 0 && u.subscriptionStatus !== "active");
    return users.filter((u) => u.subscriptionStatus === filter);
  }, [users, filter]);

  const toggleBlock = async (u) => {
    const action = u.isBlocked ? "Unblock" : "Block";

    const confirm = await Swal.fire({
      title: `${action} This User?`,
      html: `<b>${u.name}</b><br/>${u.email}`,
      icon: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: `Yes, ${action}`,
      cancelButtonText: "Cancel",
      confirmButtonColor: u.isBlocked ? "#00ff88" : "#ffcc66",
      cancelButtonColor: "#6b7280",
      background: "#0b111c",
      color: "#fff",
    });

    if (!confirm.isConfirmed) return;

    try {
      u.isBlocked ? await unblockUser(u._id) : await blockUser(u._id);
      toast("success", u.isBlocked ? "User unblocked" : "User blocked");
      loadData();
    } catch (err) {
      toast("error", err.response?.data?.msg || "Action failed");
    }
  };

  const editSubscription = async (u) => {
    const { value } = await Swal.fire({
      title: "Edit Subscription",
      html: `
        <input id="planName" class="swal2-input" placeholder="Plan Name" value="${u.planName || ""}">
        <input id="planPrice" class="swal2-input" placeholder="Plan Price" value="${u.planPrice || 0}">
        <select id="subscriptionStatus" class="swal2-input">
          <option value="trial" ${u.subscriptionStatus === "trial" ? "selected" : ""}>trial</option>
          <option value="active" ${u.subscriptionStatus === "active" ? "selected" : ""}>active</option>
          <option value="expired" ${u.subscriptionStatus === "expired" ? "selected" : ""}>expired</option>
          <option value="cancelled" ${u.subscriptionStatus === "cancelled" ? "selected" : ""}>cancelled</option>
        </select>
        <input id="subscriptionEndDate" type="date" class="swal2-input" value="${inputDate(u.subscriptionEndDate)}">
      `,
      background: "#0b111c",
      color: "#fff",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#00ff88",
      cancelButtonColor: "#ff4d4d",
      preConfirm: () => {
        const status = document.getElementById("subscriptionStatus").value;
        return {
          planName: document.getElementById("planName").value,
          planPrice: Number(document.getElementById("planPrice").value || 0),
          subscriptionStatus: status,
          subscriptionEndDate: document.getElementById("subscriptionEndDate").value || u.subscriptionEndDate,
          isSubscriptionActive: status === "active",
        };
      },
    });

    if (!value) return;

    const confirm = await Swal.fire({
      title: "Confirm Update?",
      html: `<b>${u.name}</b><br/>${u.email}<br/><br/>Plan: ${value.planName}<br/>Status: ${value.subscriptionStatus}`,
      icon: "question",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "Yes, Update",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#00ff88",
      cancelButtonColor: "#6b7280",
      background: "#0b111c",
      color: "#fff",
    });

    if (!confirm.isConfirmed) return;

    try {
      await updateUserSubscription(u._id, value);
      toast("success", "Subscription updated");
      loadData();
    } catch (err) {
      toast("error", err.response?.data?.msg || "Update failed");
    }
  };

  const sendMailNow = async () => {
    if (!mail.subject || !mail.message) return toast("error", "Subject/message required");

    const confirm = await Swal.fire({
      title: "Send Bulk Mail?",
      html: `Target: <b>${mail.target}</b><br/>Subject: <b>${mail.subject}</b><br/><br/>Are you sure?`,
      icon: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "Yes, Send Mail",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#00ff88",
      cancelButtonColor: "#6b7280",
      background: "#0b111c",
      color: "#fff",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await sendBulkMail(mail);
      toast("success", res.data.msg || "Mail sent");
      setMail({ target: "all", subject: "", message: "" });
    } catch (err) {
      toast("error", err.response?.data?.msg || "Mail failed");
    }
  };

  return (
    <main className="page">
      <div className="adminHead">
        <div>
          <p className="tag">BR30 SUPER ADMIN DASHBOARD</p>
          <h1>Admin Dashboard</h1>
        </div>
        <Link className="backBtn" to="/">
          ← Back to Scanner
        </Link>
      </div>

      <section className="adminStats">
        <div className="adminCard">
          <p>Total Users</p>
          <h2>{stats.totalUsers || 0}</h2>
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
        <button className={tab === "subscriptions" ? "active" : ""} onClick={() => setTab("subscriptions")}>
          Subscriptions
        </button>
        <button className={tab === "payments" ? "active" : ""} onClick={() => setTab("payments")}>
          Payments
        </button>
        <button className={tab === "mail" ? "active" : ""} onClick={() => setTab("mail")}>
          Bulk Mail
        </button>
      </div>

      {tab === "subscriptions" && (
        <>
          <div className="adminFilter">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Users</option>
              <option value="trial">Trial Users</option>
              <option value="active">Active Users</option>
              <option value="expired">Expired Users</option>
              <option value="cancelled">Cancelled Users</option>
              <option value="pending">Pending Approval</option>
              <option value="blocked">Blocked Users</option>
              <option value="no-payment">Trial / No Payment</option>
            </select>
          </div>

          <section className="tableBox">
            <div className="tableScroll">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sub Status</th>
                    <th>Plan</th>
                    <th>Trial End</th>
                    <th>Sub End</th>
                    <th>AutoPay</th>
                    <th>Payments</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="9" className="empty">
                        Loading...
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
                          <span className={`statusBadge ${u.subscriptionStatus === "active" ? "approved" : "pending"}`}>{u.subscriptionStatus || "-"}</span>
                        </td>
                        <td>{u.planName || "-"}</td>
                        <td>{fmtDate(u.trialEndDate)}</td>
                        <td>{fmtDate(u.subscriptionEndDate)}</td>
                        <td>{u.autoPayEnabled ? "ON" : "OFF"}</td>
                        <td>
                          ₹{u.planPrice || 0} / {u.totalPayments || 0}
                        </td>
                        <td>
                          <div className="adminActions">
                            <button className="approveBtn" onClick={() => editSubscription(u)}>
                              Edit
                            </button>
                            <button className="unapproveBtn" onClick={() => toggleBlock(u)}>
                              {u.isBlocked ? "Unblock" : "Block"}
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
                  <th>Mode</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {payments.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="empty">
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
                      <td>{p.paymentMode || "-"}</td>
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
          <select
            value={mail.target}
            onChange={(e) => setMail({ ...mail, target: e.target.value })}
            style={{
              width: "400px",
              maxWidth: "100%",
              margin: "0 auto 20px",
              display: "block",
            }}
          >
            <option value="all">All Users (Sabhi Registered Users)</option>

            <option value="trial">Trial Users (Free Trial Active)</option>

            <option value="active">Active Subscribers (Paid Users)</option>

            <option value="active30">Active 30+ Days (Paid Since 30+ Days)</option>

            <option value="active90">Active 90+ Days (Long-Term Premium Users)</option>

            <option value="expired">Expired Users (Subscription End Ho Chuka)</option>

            <option value="pending">Pending Approval Users (Verified But Not Approved)</option>

            <option value="founding">Founding Members (₹999 Founding Plan Users)</option>

            <option value="autopay">AutoPay Users (Recurring Payment Enabled)</option>

            <option value="blocked">Blocked Users (Access Restricted)</option>

            <option value="top-paying">Top Paying Users (3+ Successful Payments)</option>

            <option value="no-payment">No Payment Users (Never Purchased Subscription)</option>
          </select>

          <input value={mail.subject} placeholder="Email subject" onChange={(e) => setMail({ ...mail, subject: e.target.value })} />
          <textarea value={mail.message} placeholder="Email message" onChange={(e) => setMail({ ...mail, message: e.target.value })} />
          <button onClick={sendMailNow}>Send Bulk Mail</button>
        </section>
      )}
    </main>
  );
}
