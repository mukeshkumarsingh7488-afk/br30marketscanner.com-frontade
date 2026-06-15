import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getSubscriptionStatus } from "../api/subscriptionApi";

export default function SubscriptionGuard({ children }) {
  const { user, updateUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        if (!user) {
          setAllowed(false);
          setLoading(false);
          return;
        }

        if (["admin", "vip"].includes(user.role)) {
          setAllowed(true);
          setLoading(false);
          return;
        }

        const res = await getSubscriptionStatus();

        if (res?.user) {
          updateUser(res.user);
        }

        setAllowed(Boolean(res?.access));
      } catch (error) {
        console.log("SUBSCRIPTION CHECK ERROR =>", error);
        setAllowed(false);
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#05080d",
          color: "#00ff88",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "800",
        }}
      >
        Checking Subscription...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (["admin", "vip"].includes(user.role)) {
    return children;
  }

  if (!allowed) {
    return <Navigate to="/subscription" replace />;
  }

  return children;
}
