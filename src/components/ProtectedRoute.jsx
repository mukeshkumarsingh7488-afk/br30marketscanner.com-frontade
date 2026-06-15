import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Admin always allowed

  if (["admin", "vip"].includes(user.role)) {
    return children;
  }

  // Active subscription

  if (user.subscriptionStatus === "active" && user.isSubscriptionActive) {
    return children;
  }

  // Free trial active

  if (user.subscriptionStatus === "trial" && user.trialEndDate && new Date(user.trialEndDate) > new Date()) {
    return children;
  }

  // Expired user

  return <Navigate to="/subscription" replace />;
}
