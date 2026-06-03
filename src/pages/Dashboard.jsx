import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getScannerData } from "../api/scannerApi";
import MarketSummary from "../components/MarketSummary";
import FilterPanel from "../components/FilterPanel";
import ScannerTable from "../components/ScannerTable";
import Loader from "../components/Loader";

const marketConfig = {
  "equity-stock": { title: "Equity Stock Scanner", tag: "LIVE EQUITY STOCK SCANNER", sub: "Live equity stocks with price action, volume and BUY/SELL signals" },
  "equity-stock-option": { title: "Equity Stock Option Scanner", tag: "LIVE EQUITY OPTION SCANNER", sub: "Stock options scanner with OI, volume and premium behavior" },
  "future-stock": { title: "Future Stock Scanner", tag: "LIVE FUTURES SCANNER", sub: "Move + OI + Volume based stock futures scanner" },
  "future-stock-option": { title: "Future Stock Option Scanner", tag: "LIVE FUTURE OPTION SCANNER", sub: "Future stock options with OI build-up and signal detection" },
  "index-future": { title: "Index Future Scanner", tag: "LIVE INDEX FUTURE SCANNER", sub: "NIFTY, BANKNIFTY and index futures scanner" },
  "index-option": { title: "Index Option Scanner", tag: "LIVE INDEX OPTION SCANNER", sub: "Index options scanner for NIFTY, BANKNIFTY and premium movement" },
  "crypto-futures": { title: "Crypto Futures Scanner", tag: "LIVE CRYPTO FUTURES SCANNER", sub: "BTC, ETH, SOL and top crypto futures scanner with momentum signals" },
  forex: { title: "Forex Majors Scanner", tag: "LIVE FOREX MAJORS SCANNER", sub: "EURUSD, GBPUSD, USDJPY and major forex pairs with BUY/SELL signals" },
  "forex-cross": { title: "Forex Cross Pairs Scanner", tag: "LIVE FOREX CROSS SCANNER", sub: "EURJPY, GBPJPY, EURGBP and active cross pairs with momentum signals" },
  metals: { title: "Metals Scanner", tag: "LIVE METALS SCANNER", sub: "Gold, Silver, Platinum and Palladium with live movement signals" },
  commodities: { title: "Commodities Scanner", tag: "LIVE COMMODITIES SCANNER", sub: "Crude Oil, Natural Gas, Copper, Wheat, Coffee and global commodity futures" },
  "global-index": { title: "Global Index Scanner", tag: "LIVE GLOBAL INDEX SCANNER", sub: "US30, NAS100, SPX500, DAX40, FTSE100 and major global indices" },
  "us-stocks": { title: "US Stocks Scanner", tag: "LIVE US STOCKS SCANNER", sub: "Apple, Nvidia, Tesla, Microsoft, Amazon and top active US stocks" },
  "us-etfs": { title: "US ETFs Scanner", tag: "LIVE US ETF SCANNER", sub: "SPY, QQQ, VOO, DIA, IWM, GLD, SLV and top traded US ETFs" },
};

const getRefreshTime = (market) => {
  if (market === "crypto-futures") return 5000;
  if (["forex", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"].includes(market)) return 60000;
  return 3000;
};

const formatTime = () => new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

const getTradeCall = (s = {}) => {
  const signal = String(s.signal || "").toLowerCase();
  const move = Number(s.changePercent || 0);
  const oi = Number(s.oiChangePercent || 0);
  const volume = Number(s.volumeRatio || 0);

  if (signal.includes("strong long")) return "STRONG BUY";
  if (signal.includes("long build")) return "BUY";
  if (signal.includes("short covering")) return "BUY";
  if (signal.includes("strong short")) return "STRONG SELL";
  if (signal.includes("short build")) return "SELL";
  if (signal.includes("long unwinding")) return "SELL";
  if (signal.includes("buy")) return "BUY";
  if (signal.includes("sell")) return "SELL";
  if (signal.includes("top gainer")) return "BUY";
  if (signal.includes("top loser")) return "SELL";
  if (move >= 2 && oi >= 7 && volume >= 2) return "STRONG BUY";
  if (move >= 2 && oi >= 7) return "BUY";
  if (move <= -2 && oi >= 7 && volume >= 2) return "STRONG SELL";
  if (move <= -2 && oi >= 7) return "SELL";
  if (move >= 1) return "BUY";
  if (move <= -1) return "SELL";
  return "WAIT";
};

const makeSummary = (data = []) => {
  const call = (r) => String(r.signal || "").toLowerCase();
  return {
    totalStocks: data.length,
    gainers: data.filter((r) => Number(r.changePercent || 0) > 0).length,
    losers: data.filter((r) => Number(r.changePercent || 0) < 0).length,
    oiSignals: data.filter((r) => Math.abs(Number(r.oiChangePercent || 0)) >= 7).length,
    buySignals: data.filter((r) => call(r).includes("buy") || call(r).includes("long") || call(r).includes("top gainer")).length,
    sellSignals: data.filter((r) => call(r).includes("sell") || call(r).includes("short") || call(r).includes("top loser")).length,
  };
};

const makeAlerts = (data = [], market = "") => {
  return data
    .map((s) => ({ ...s, tradeCall: getTradeCall(s) }))
    .filter((s) => ["STRONG BUY", "STRONG SELL", "BUY", "SELL"].includes(s.tradeCall))
    .sort((a, b) => Number(b.score || 0) - Number(a.score || 0))
    .map((s) => ({
      symbol: s.symbol || "-",
      market,
      call: s.tradeCall,
      move: Number(s.changePercent || 0).toFixed(2),
      score: Number(s.score || 0).toFixed(2),
      time: formatTime(),
    }));
};

export default function Dashboard({ type = "all" }) {
  const [searchParams] = useSearchParams();
  const market = searchParams.get("market") || "future-stock";
  const config = marketConfig[market] || marketConfig["future-stock"];

  const [rows, setRows] = useState([]);
  const [summary, setSummary] = useState(null);
  const [filters, setFilters] = useState({ move: 2, oi: 7, volume: 0, side: "allstocks" });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [err, setErr] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  const loadData = async (silent = false) => {
    try {
      if (silent) setRefreshing(true);
      else setLoading(true);
      setErr("");

      const scanRes = await getScannerData(type, market);
      const data = scanRes?.data || [];
      const alerts = makeAlerts(data, market);

      setRows(data);
      setSummary(makeSummary(data));
      setLastUpdated(formatTime());

      localStorage.setItem("br30ScannerAlerts", JSON.stringify(alerts));
      window.dispatchEvent(new CustomEvent("br30ScannerAlertsUpdated", { detail: alerts }));
    } catch (e) {
      setErr(e.response?.data?.msg || e.response?.data?.message || "Backend connect nahi ho raha. Pehle backend server start karo.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData(false);
    const id = setInterval(() => loadData(true), getRefreshTime(market));
    return () => clearInterval(id);
  }, [type, market]);

  const filtered = useMemo(() => {
    return rows.filter((s) => {
      const move = Number(s.changePercent || 0);
      const oi = Number(s.oiChangePercent || 0);
      const volume = Number(s.volumeRatio || 0);
      const call = getTradeCall(s);

      if (filters.side === "allstocks") return true;
      if (filters.side === "gainers") return move > 0;
      if (filters.side === "losers") return move < 0;
      if (filters.side === "long") return move >= Number(filters.move) && (oi >= Number(filters.oi) || oi === 0);
      if (filters.side === "short") return move <= -Number(filters.move) && (oi >= Number(filters.oi) || oi === 0);
      if (filters.side === "shortcover") return move >= Number(filters.move) && oi <= -Number(filters.oi);
      if (filters.side === "longunwind") return move <= -Number(filters.move) && oi <= -Number(filters.oi);
      if (filters.side === "stronglong") return move >= Number(filters.move) && (oi >= Number(filters.oi) || oi === 0) && volume >= 1;
      if (filters.side === "strongshort") return move <= -Number(filters.move) && (oi >= Number(filters.oi) || oi === 0) && volume >= 1;
      if (filters.side === "buy") return call.includes("BUY");
      if (filters.side === "sell") return call.includes("SELL");
      if (filters.side === "wait") return call === "WAIT";
      if (filters.side === "all") return Math.abs(move) >= Number(filters.move) && (Math.abs(oi) >= Number(filters.oi) || oi === 0);
      return true;
    });
  }, [rows, filters]);

  return (
    <main className="page">
      <div className="hero">
        <div>
          <p className="tag">{config.tag}</p>
          <h1>{config.title}</h1>
          <p className="sub">{config.sub}</p>
        </div>
        <button onClick={() => loadData(true)}>{refreshing ? "Updating..." : "Refresh"}</button>
      </div>

      {summary && <MarketSummary summary={summary} market={market} />}
      <FilterPanel filters={filters} setFilters={setFilters} market={market} />
      {err && <div className="error">{err}</div>}
      {loading ? <Loader /> : <ScannerTable rows={filtered} market={market} lastUpdated={lastUpdated} />}
    </main>
  );
}
