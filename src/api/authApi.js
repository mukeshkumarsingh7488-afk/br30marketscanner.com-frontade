import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://br30marketscanner-com-backend.onrender.com",
  timeout: 30000,
});

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("br30ScannerToken")}`,
  },
});

// AUTH
export const registerUser = (data) => API.post("/api/auth/register", data);
export const verifyOtp = (data) => API.post("/api/auth/verify-otp", data);
export const resendOtp = (data) => API.post("/api/auth/resend-otp", data);
export const loginUser = (data) => API.post("/api/auth/login", data);
export const forgotPassword = (data) => API.post("/api/auth/forgot-password", data);
export const resetPassword = (data) => API.post("/api/auth/reset-password", data);

// CURRENT USER
export const getMe = () => API.get("/api/auth/me", authHeader());

// ADMIN PANEL
export const getAllUsers = () => API.get("/api/auth/admin/users", authHeader());
export const getPendingUsers = () => API.get("/api/auth/admin/pending-users", authHeader());
export const approveUser = (id) => API.put(`/api/auth/admin/approve/${id}`, {}, authHeader());
export const unapproveUser = (id) => API.put(`/api/auth/admin/unapprove/${id}`, {}, authHeader());
export const deleteUser = (id) => API.delete(`/api/auth/admin/delete/${id}`, authHeader());

// ADMIN STATS
export const getAdminStats = () => API.get("/api/auth/admin/stats", authHeader());

// BLOCK / UNBLOCK
export const blockUser = (id) => API.put(`/api/auth/admin/block/${id}`, {}, authHeader());
export const unblockUser = (id) => API.put(`/api/auth/admin/unblock/${id}`, {}, authHeader());

// SUBSCRIPTION UPDATE
export const updateUserSubscription = (id, data) => API.put(`/api/auth/admin/subscription/${id}`, data, authHeader());

// INDICATOR ACCESS
export const updateIndicatorAccess = (id, data) => API.put(`/api/auth/admin/indicator-access/${id}`, data, authHeader());

export const sendIndicatorMail = (id, data) => API.post(`/api/auth/admin/indicator-mail/${id}`, data, authHeader());

// BULK MAIL
export const sendBulkMail = (data) => API.post("/api/auth/admin/bulk-mail", data, authHeader());

// PAYMENTS
export const getAllPayments = () => API.get("/api/subscription/admin/payments", authHeader());

export const getUserPayments = (userId) => API.get(`/api/subscription/admin/payments/${userId}`, authHeader());

export const updateUserRole = (id, data) => API.put(`/api/auth/admin/role/${id}`, data, authHeader());

export default API;
