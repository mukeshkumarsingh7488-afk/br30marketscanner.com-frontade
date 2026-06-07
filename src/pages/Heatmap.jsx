import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getHeatmapData } from "../api/scannerApi";
import Loader from "../components/Loader";

const markets = [
  { label: "Future Stock", value: "future-stock" },
  { label: "Equity Stock", value: "equity-stock" },
  { label: "Index Future", value: "index-future" },
  { label: "Crypto Futures", value: "crypto-futures" },
  { label: "Crypto Options", value: "crypto-options" },
  { label: "Forex Majors", value: "forex-majors" },
  { label: "Forex Cross", value: "forex-cross" },
  { label: "Metals", value: "metals" },
  { label: "Commodities", value: "commodities" },
  { label: "Global Index Coming Soon", value: "global-index" },
  { label: "US Stocks", value: "us-stocks" },
  { label: "US ETFs", value: "us-etfs" },
];

const GLOBAL_MARKETS = ["crypto-futures", "crypto-options", "forex-majors", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"];

const normalizeMarket = (market = "future-stock") => {
  const key = String(market || "future-stock")
    .trim()
    .toLowerCase();
  const aliases = {
    forex: "forex-majors",
    "forex-major": "forex-majors",
    crypto: "crypto-futures",
    "crypto-option": "crypto-options",
    options: "crypto-options",
  };
  return aliases[key] || key;
};

const heatClass = (move) => {
  const n = Number(move || 0);
  if (n >= 3) return "heatStrongGreen";
  if (n >= 1) return "heatGreen";
  if (n > 0) return "heatLightGreen";
  if (n <= -3) return "heatStrongRed";
  if (n <= -1) return "heatRed";
  if (n < 0) return "heatLightRed";
  return "heatNeutral";
};

const formatLtp = (value, market) => {
  const n = Number(value || 0);

  if (["crypto-futures", "crypto-options", "metals", "commodities", "global-index", "us-stocks", "us-etfs"].includes(market)) {
    return `$${n.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  }

  if (market === "forex-majors" || market === "forex-cross") {
    return n.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 5 });
  }

  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
};

export default function Heatmap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const market = normalizeMarket(searchParams.get("market") || "future-stock");

  const [rows, setRows] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      setErr("");

      const res = await getHeatmapData(market);
      setRows(Array.isArray(res?.data) ? res.data : []);
      setMeta(res?.meta || null);
    } catch (e) {
      setRows([]);
      setMeta(null);
      setErr(e.response?.data?.msg || "Heatmap data load nahi ho raha.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRows([]);
    setMeta(null);
    setErr("");

    load(false);

    const id = setInterval(() => {
      load(true);
    }, 3000);

    return () => clearInterval(id);
  }, [market]);

  const sortedRows = useMemo(() => {
    return [...rows].sort((a, b) => Math.abs(Number(b.changePercent || 0)) - Math.abs(Number(a.changePercent || 0))).slice(0, 120);
  }, [rows]);

  return (
    <main className="page">
      <div className="heatHero">
        <div>
          <p className="tag">BR30 LIVE MARKET HEATMAP</p>
          <h1>Market Heatmap</h1>
          <p className="sub">{GLOBAL_MARKETS.includes(market) ? "Global heatmap backend cache se 3 sec me update hota hai." : "Green boxes bullish move dikhate hain, red boxes bearish move dikhate hain."}</p>

          {meta && (
            <p className="sub" style={{ marginTop: "8px", fontSize: "12px", opacity: 0.85 }}>
              Source: {meta.source || "cache"} | Status: {meta.status || "ok"} | Rows: {meta.count ?? rows.length}
              {meta.updatedAt ? ` | Cache: ${new Date(meta.updatedAt).toLocaleTimeString("en-IN")}` : ""}
            </p>
          )}
        </div>

        <select value={market} onChange={(e) => setSearchParams({ market: e.target.value })}>
          {markets.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      {market === "global-index" && <div className="error">Global Index Coming Soon 🚀</div>}
      {market === "crypto-options" && rows.length === 0 && <div className="error">Crypto Options abhi empty hai. Available hote hi heatmap me data aa jayega.</div>}
      {err && <div className="error">{err}</div>}

      {loading ? (
        <Loader />
      ) : (
        <section className="heatGrid">
          {sortedRows.length === 0 ? (
            <div className="empty">No heatmap data found</div>
          ) : (
            sortedRows.map((s, i) => (
              <div className={`heatCard ${heatClass(s.changePercent)}`} key={s.instrumentKey || s.symbol || i}>
                <strong>{s.symbol || "-"}</strong>
                <h3>{Number(s.changePercent || 0).toFixed(2)}%</h3>
                <p>{s.signal || "Watchlist"}</p>
                <small>{formatLtp(s.ltp, market)}</small>
              </div>
            ))
          )}
        </section>
      )}
    </main>
  );
}
