import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

// Resources
import Documentation from "./pages/Documentation";
import Changelog from "./pages/Changelog";
import Roadmap from "./pages/Roadmap";
import ReleaseNotes from "./pages/ReleaseNotes";
import ApiAccess from "./pages/ApiAccess";

// Legal
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Subscription from "./pages/Subscription";

// Protected Pages
import Dashboard from "./pages/Dashboard";
import TopGainers from "./pages/TopGainers";
import TopLosers from "./pages/TopLosers";
import OISpurts from "./pages/OISpurts";
import VolumeBreakout from "./pages/VolumeBreakout";
import Heatmap from "./pages/Heatmap";
import AdminUsers from "./pages/AdminUsers";
import AdminDashboard from "./pages/AdminDashboard";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SubscriptionGuard from "./components/SubscriptionGuard";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* ========================= */}
        {/* Public Pages */}
        {/* ========================= */}

        <Route path="/" element={<LandingPage />} />

        {/* Resources */}
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/release-notes" element={<ReleaseNotes />} />
        <Route path="/api-access" element={<ApiAccess />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}
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
                  <Route path="/dashboard" element={<Dashboard type="all" />} />
                  <Route path="/top-gainers" element={<TopGainers />} />
                  <Route path="/top-losers" element={<TopLosers />} />
                  <Route path="/oi-spurts" element={<OISpurts />} />
                  <Route path="/volume-breakout" element={<VolumeBreakout />} />
                  <Route path="/heatmap" element={<Heatmap />} />

                  <Route path="/admin-users" element={<AdminUsers />} />
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />

                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </SubscriptionGuard>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
