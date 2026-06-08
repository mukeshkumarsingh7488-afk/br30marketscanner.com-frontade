import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSubscriptionOrder, getSubscriptionStatus } from "../api/subscriptionApi";
import { useAuth } from "../context/AuthContext";

export default function Subscription() {
  const navigate = useNavigate();
  const { updateUser, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [buying, setBuying] = useState(false);
  const [status, setStatus] = useState(null);
  const [err, setErr] = useState("");

  const loadStatus = async () => {
    try {
      setLoading(true);
      setErr("");
      const res = await getSubscriptionStatus();
      setStatus(res);
      if (res?.user) updateUser(res.user);
      if (res?.access) navigate("/", { replace: true });
    } catch (e) {
      setErr(e.response?.data?.msg || "Subscription status load failed");
    } finally {
      setLoading(false);
    }
  };

  const handleBuy = async () => {
    try {
      setBuying(true);
      setErr("");

      const res = await createSubscriptionOrder();
      const txnToken = res?.paytm?.body?.txnToken || res?.paytm?.txnToken;
      const orderId = res?.orderId;
      const amount = res?.amount;
      const mid = res?.paytm?.body?.mid || res?.paytm?.mid || import.meta.env.VITE_PAYTM_MID;

      if (!txnToken || !orderId || !mid) throw new Error("Paytm checkout data missing");
      if (!window.Paytm || !window.Paytm.CheckoutJS) throw new Error("Paytm Checkout script not loaded");

      const config = {
        root: "",
        flow: "DEFAULT",
        data: { orderId, token: txnToken, tokenType: "TXN_TOKEN", amount: String(amount) },
        merchant: { mid, name: "BR30 Scanner", redirect: true },
        handler: { transactionStatus: () => {}, notifyMerchant: () => {} },
      };

      window.Paytm.CheckoutJS.init(config)
        .then(() => window.Paytm.CheckoutJS.invoke())
        .catch(() => setErr("Paytm checkout failed. Please try again."));
    } catch (e) {
      setErr(e.response?.data?.msg || e.message || "Subscription failed");
    } finally {
      setBuying(false);
    }
  };

  useEffect(() => {
    loadStatus();
  }, []);

  const pricing = status?.pricing || {};
  const price = pricing.price || 2199;
  const remaining = pricing.remainingFoundingSlots || 0;
  const isFounding = pricing.isFoundingMember;

  return (
    <main className="subPage">
      <section className="subCard">
        <div className="subLogo">BR30 MARKET SCANNER</div>

        <h1>{isFounding ? "Founding Member Offer" : "BR30 Scanner Pro"}</h1>

        <p className="subText">Your free trial has expired. Subscribe now to unlock full access to BR30 Scanner and all premium features.</p>

        <p className="offerText">Join as a Founding Member today and lock in exclusive pricing before it increases.</p>

        <div className="priceBox">
          <span>₹</span>
          <b>{loading ? "..." : price}</b>
          <small>/ month</small>
        </div>

        {isFounding && <p className="founding">🔥 First 150 users offer active — remaining slots: {remaining}</p>}

        <div className="features">
          <p>✅ Live Scanner Access</p>
          <p>✅ Indian Stocks, Futures & Options</p>
          <p>✅ Equity Stock + Equity Stock Option</p>
          <p>✅ Future Stock + Future Stock Option</p>
          <p>✅ Index Future + Index Option</p>
          <p>✅ Forex Majors + Forex Cross Pairs</p>
          <p>✅ Metals: Gold, Silver, Platinum, Palladium</p>
          <p>✅ Metal Stocks: 65+ Global Metal Companies</p>
          <p>✅ Commodities Scanner</p>
          <p>✅ US Stocks: 50 Top Active Stocks</p>
          <p>✅ US ETFs: 40 Top ETFs</p>
          <p>✅ OI, Volume, Gainers, Losers</p>
          <p>✅ Buy / Sell / Watch Signals</p>
          <p>✅ TradingView Chart Access</p>
          <p>✅ Live Alerts Bell</p>
          <p>✅ Crypto Futures Coming Soon</p>
          <p>✅ Crypto Options Coming Soon</p>
          <p>✅ Global Index Coming Soon</p>
          <p>✅ Paytm AutoPay</p>
          <p>✅ Monthly Auto Renewal</p>
        </div>

        {err && <div className="subError">{err}</div>}

        <button onClick={handleBuy} disabled={buying || loading}>
          {buying ? "Opening Paytm..." : `Activate AutoPay ₹${price}/month`}
        </button>

        <button
          className="logoutBtn"
          onClick={() => {
            logout();
            navigate("/login", { replace: true });
            window.location.reload();
          }}
        >
          Logout
        </button>

        <p className="note">Secure monthly billing powered by Paytm AutoPay.</p>
      </section>

      <style>{`
        .subPage{min-height:100vh;background:#05080d;display:flex;align-items:flex-start;justify-content:center;padding:24px 16px;color:#fff;font-family:Inter,system-ui,sans-serif;overflow-y:auto;}
        .subCard{width:100%;max-width:560px;max-height:none;background:linear-gradient(145deg,#07111d,#0b1220);border:1px solid #123047;border-radius:28px;padding:30px;box-shadow:0 30px 90px rgba(0,0,0,.45);text-align:center;margin:0 auto 30px;}
        .subLogo{color:#00ff88;font-weight:900;letter-spacing:3px;font-size:13px;margin-bottom:16px;}
        .subCard h1{font-size:32px;margin:0 0 12px;font-weight:950;}
        .subText{color:#a8b8cf;line-height:1.6;margin:0 0 12px;}
        .offerText{color:#00ff88;font-size:14px;text-align:center;margin:12px 0 18px;font-weight:800;line-height:1.5;}
        .priceBox{display:flex;align-items:flex-end;justify-content:center;gap:6px;margin:16px 0;color:#00ff88;}
        .priceBox span{font-size:32px;font-weight:900;margin-bottom:8px;}
        .priceBox b{font-size:70px;line-height:.9;}
        .priceBox small{font-size:16px;color:#b7c7da;margin-bottom:10px;}
        .founding{background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.35);color:#00ff88;padding:12px;border-radius:14px;font-weight:900;line-height:1.4;}
        .features{margin:22px 0;text-align:left;background:#060d16;border:1px solid #11263a;border-radius:18px;padding:18px;display:grid;gap:10px;}
        .features p{margin:0;color:#dbe7f6;font-weight:800;font-size:14px;line-height:1.45;}
        .subError{background:rgba(255,70,70,.12);color:#ff6b6b;border:1px solid rgba(255,70,70,.3);padding:12px;border-radius:14px;margin-bottom:14px;font-weight:800;}
        .subCard button{width:100%;border:0;border-radius:16px;padding:16px 18px;background:#00ff88;color:#00140b;font-weight:950;font-size:16px;cursor:pointer;margin-top:10px;}
        .subCard button:disabled{opacity:.6;cursor:not-allowed;}
        .logoutBtn{background:#121c2a!important;color:#dce8f6!important;border:1px solid #223449!important;}
        .note{font-size:12px;color:#7f91aa;line-height:1.5;margin-top:18px;}
        @media(max-width:600px){.subCard{padding:24px 18px;border-radius:22px;}.subCard h1{font-size:28px;}.priceBox b{font-size:58px;}.features p{font-size:13px;}}
      `}</style>
    </main>
  );
}
