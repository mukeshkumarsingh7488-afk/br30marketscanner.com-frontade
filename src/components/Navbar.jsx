import { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

const OPTION_MARKETS = ["equity-stock-option", "future-stock-option", "index-option", "crypto-options"];

const scannerGroups = [
  {
    title: "🇮🇳 Indian Market",
    groupType: "india",
    items: [
      { label: "Equity Stock", type: "equity-stock" },
      { label: "Equity Stock Option", type: "equity-stock-option" },
      { label: "Future Stock", type: "future-stock" },
      { label: "Future Stock Option", type: "future-stock-option" },
      { label: "Index Future", type: "index-future" },
      { label: "Index Option", type: "index-option" },
    ],
  },
  {
    title: "🌍 Global Market",
    groupType: "global",
    items: [
      { label: "Crypto Futures", type: "crypto-futures" },
      { label: "Crypto Options", type: "crypto-options" },
      { label: "Forex Majors", type: "forex-majors" },
      { label: "Forex Cross Pairs", type: "forex-cross" },
      { label: "Gold / Silver / Platinum", type: "metals" },
      { label: "Commodities", type: "commodities" },
      { label: "Global Index", type: "global-index" },
      { label: "US Stocks", type: "us-stocks" },
      { label: "US ETFs", type: "us-etfs" },
    ],
  },
];

const normalizeMarket = (type = "future-stock") => {
  const key = String(type || "future-stock")
    .trim()
    .toLowerCase();

  const aliases = {
    forex: "forex-majors",
    "forex-major": "forex-majors",
    crypto: "crypto-futures",
    "crypto-future": "crypto-futures",
    "crypto-option": "crypto-options",
    options: "crypto-options",
  };

  return aliases[key] || key || "future-stock";
};

const isOptionMarket = (market = "") => OPTION_MARKETS.includes(normalizeMarket(market));

const getTimeParts = (timeZone) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const obj = {};
  parts.forEach((p) => {
    obj[p.type] = p.value;
  });

  return {
    day: obj.weekday,
    hour: Number(obj.hour),
    minute: Number(obj.minute),
    total: Number(obj.hour) * 60 + Number(obj.minute),
  };
};

const isWeekday = (day) => !["Sat", "Sun"].includes(day);
const between = (total, start, end) => total >= start && total <= end;

const getMarketStatus = (type) => {
  type = normalizeMarket(type);

  if (type === "crypto-futures" || type === "crypto-options") return true;

  if (["equity-stock", "equity-stock-option", "future-stock", "future-stock-option", "index-future", "index-option"].includes(type)) {
    const t = getTimeParts("Asia/Kolkata");
    return isWeekday(t.day) && between(t.total, 9 * 60 + 15, 15 * 60 + 30);
  }

  if (type === "us-stocks" || type === "us-etfs") {
    const t = getTimeParts("America/New_York");
    return isWeekday(t.day) && between(t.total, 9 * 60 + 30, 16 * 60);
  }

  if (["forex-majors", "forex-cross", "metals", "commodities", "global-index"].includes(type)) {
    const t = getTimeParts("UTC");
    return isWeekday(t.day);
  }

  return false;
};

export default function Navbar() {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const user = JSON.parse(localStorage.getItem("br30ScannerUser") || "null");

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [, setTick] = useState(0);

  const activeType = normalizeMarket(searchParams.get("market") || "future-stock");

  useEffect(() => {
    const close = () => {
      setMenuOpen(false);
      setProfileOpen(false);
      setAlertOpen(false);
    };

    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick((p) => p + 1), 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const loadAlerts = () => {
      try {
        const data = JSON.parse(localStorage.getItem("br30ScannerAlerts") || "[]");
        setAlerts(Array.isArray(data) ? data : []);
      } catch {
        setAlerts([]);
      }
    };

    loadAlerts();

    const handler = (e) => setAlerts(Array.isArray(e.detail) ? e.detail : []);
    window.addEventListener("br30ScannerAlertsUpdated", handler);

    return () => window.removeEventListener("br30ScannerAlertsUpdated", handler);
  }, []);

  const goScanner = (type) => {
    setMenuOpen(false);
    setProfileOpen(false);
    setAlertOpen(false);
    nav(`/?market=${normalizeMarket(type)}`);
  };

  const openAlertChart = (alert) => {
    if (isOptionMarket(alert?.market)) return;
    if (!alert?.tradingViewUrl) return;
    window.open(alert.tradingViewUrl, "_blank", "noopener,noreferrer");
  };

  const logout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#00ff88",
      cancelButtonColor: "#6b7280",
      background: "#0b111c",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    localStorage.removeItem("br30ScannerToken");
    localStorage.removeItem("br30ScannerUser");

    await Swal.fire({
      icon: "success",
      title: "Logged Out",
      text: "You have been logged out successfully",
      timer: 1200,
      showConfirmButton: false,
      background: "#0b111c",
      color: "#fff",
    });

    nav("/login");
    window.location.reload();
  };

  const initial = user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || "U";

  return (
    <nav className="nav">
      <div className="navLeft">
        <button
          className="menuBtn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
            setProfileOpen(false);
            setAlertOpen(false);
          }}
        >
          ☰
        </button>

        <div className="brand" onClick={() => nav("/")}>
          BR30<span>MARKET SCANNER</span>
        </div>

        {menuOpen && (
          <div className="scannerMenu" onClick={(e) => e.stopPropagation()}>
            {scannerGroups.map((group) => {
              const isIndianGroup = group.groupType === "india";
              const isGlobalGroup = group.groupType === "global";
              const indianOpen = isIndianGroup ? getMarketStatus("equity-stock") : false;

              return (
                <div className="menuGroup" key={group.title}>
                  <div className="menuGroupTitle">
                    <span>{group.title}</span>

                    {isGlobalGroup && (
                      <span
                        style={{
                          marginLeft: "8px",
                          background: "linear-gradient(135deg,#00ff88,#00ccff)",
                          color: "#001b12",
                          fontSize: "8px",
                          fontWeight: "900",
                          padding: "3px 7px",
                          borderRadius: "999px",
                          letterSpacing: "0.4px",
                          whiteSpace: "nowrap",
                          lineHeight: "1",
                        }}
                      >
                        LIVE CACHE
                      </span>
                    )}

                    {isIndianGroup && <span className={`marketStatus ${indianOpen ? "open" : "closed"}`}>{indianOpen ? "OPEN" : "CLOSED"}</span>}
                  </div>

                  {group.items.map((item) => {
                    const open = getMarketStatus(item.type);
                    const itemType = normalizeMarket(item.type);

                    return (
                      <button key={item.type} className={activeType === itemType ? "activeScanner" : ""} onClick={() => goScanner(item.type)}>
                        <span>{item.label}</span>
                        {isGlobalGroup && <span className={`marketStatus ${open ? "open" : "closed"}`}>{open ? "OPEN" : "CLOSED"}</span>}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/top-gainers">Gainers</NavLink>
        <NavLink to="/top-losers">Losers</NavLink>
        <NavLink to="/oi-spurts">OI Spurts</NavLink>
        <NavLink to="/volume-breakout">Volume</NavLink>
        <NavLink to="/heatmap">Heatmap</NavLink>

        {user?.role === "admin" && (
          <>
            <NavLink to="/admin-users">Admin Panel</NavLink>
            <NavLink to="/admin-dashboard">Admin Dashboard</NavLink>
          </>
        )}
      </div>

      <div className="navRight">
        <div className="alertBox">
          <button
            className="alertBell"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setAlertOpen(!alertOpen);
              setProfileOpen(false);
              setMenuOpen(false);
            }}
          >
            🔔
            {alerts.length > 0 && <span className="alertCount">{alerts.length}</span>}
          </button>

          {alertOpen && (
            <div className="alertDropdown" onClick={(e) => e.stopPropagation()}>
              <div className="alertHeader">
                <h4>Scanner Alerts</h4>
                <span>{alerts.length} Signals</span>
              </div>

              {alerts.length === 0 ? (
                <div className="alertEmpty">No Alerts</div>
              ) : (
                alerts.map((a, i) => {
                  const optionAlert = isOptionMarket(a.market);

                  return (
                    <button type="button" className={`alertItem ${optionAlert ? "optionAlert" : ""}`} key={`${a.symbol || "alert"}-${i}`} onClick={() => openAlertChart(a)} title={optionAlert ? "Option chart disabled" : "Open TradingView"}>
                      <div className="alertTop">
                        <strong>{a.symbol}</strong>
                        <span className={String(a.call).includes("BUY") ? "buyAlert" : "sellAlert"}>{a.call}</span>
                      </div>

                      <div className="alertBottom">
                        <span>{a.move}% Move</span>
                        <span className="dotSep">•</span>
                        <span>{a.time}</span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          )}
        </div>

        {user ? (
          <div className="profileBox">
            <button
              className="avatarBtn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setProfileOpen(!profileOpen);
                setMenuOpen(false);
                setAlertOpen(false);
              }}
            >
              {initial}
            </button>

            {profileOpen && (
              <div className="profileDropdown" onClick={(e) => e.stopPropagation()}>
                <div className="profileAvatar">{initial}</div>
                <h4>{user.name || "BR30 User"}</h4>
                <p>{user.email}</p>
                <span>{user.role || "user"}</span>
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="logoutBtn" onClick={() => nav("/login")}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
