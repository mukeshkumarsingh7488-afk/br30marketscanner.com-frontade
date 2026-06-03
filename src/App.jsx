import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TopGainers from "./pages/TopGainers";
import TopLosers from "./pages/TopLosers";
import OISpurts from "./pages/OISpurts";
import VolumeBreakout from "./pages/VolumeBreakout";
import Heatmap from "./pages/Heatmap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import SubscriptionGuard from "./components/SubscriptionGuard";
import Navbar from "./components/Navbar";
import AdminUsers from "./pages/AdminUsers";
import Subscription from "./pages/Subscription";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/subscription" element={<Subscription />} />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <SubscriptionGuard>
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard type="all" />} />
                <Route path="/top-gainers" element={<TopGainers />} />
                <Route path="/top-losers" element={<TopLosers />} />
                <Route path="/oi-spurts" element={<OISpurts />} />
                <Route path="/volume-breakout" element={<VolumeBreakout />} />
                <Route path="/heatmap" element={<Heatmap />} />
                <Route path="/admin-users" element={<AdminUsers />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </SubscriptionGuard>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
