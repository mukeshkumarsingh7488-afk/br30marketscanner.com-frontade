import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getHeatmapData } from "../api/scannerApi";
import Loader from "../components/Loader";

const markets = [
  { label: "Future Stock", value: "future-stock" },
  { label: "Equity Stock", value: "equity-stock" },
  { label: "Index Future", value: "index-future" },
  { label: "Crypto Futures", value: "crypto-futures" },
  { label: "Forex Majors", value: "forex" },
  { label: "Forex Cross", value: "forex-cross" },
  { label: "Metals", value: "metals" },
  { label: "Commodities", value: "commodities" },
  { label: "Global Index", value: "global-index" },
  { label: "US Stocks", value: "us-stocks" },
  { label: "US ETFs", value: "us-etfs" },
];

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

export default function Heatmap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const market = searchParams.get("market") || "future-stock";

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      setErr("");
      const res = await getHeatmapData(market);
      setRows(res?.data || []);
    } catch (e) {
      setErr(e.response?.data?.msg || "Heatmap data load nahi ho raha.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const id = setInterval(load, market === "crypto-futures" ? 5000 : 30000);
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
          <p className="sub">Green boxes bullish move dikhate hain, red boxes bearish move dikhate hain.</p>
        </div>

        <select value={market} onChange={(e) => setSearchParams({ market: e.target.value })}>
          {markets.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      {err && <div className="error">{err}</div>}

      {loading ? (
        <Loader />
      ) : (
        <section className="heatGrid">
          {sortedRows.map((s, i) => (
            <div className={`heatCard ${heatClass(s.changePercent)}`} key={s.instrumentKey || s.symbol || i}>
              <strong>{s.symbol || "-"}</strong>
              <h3>{Number(s.changePercent || 0).toFixed(2)}%</h3>
              <p>{s.signal || "Watchlist"}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
