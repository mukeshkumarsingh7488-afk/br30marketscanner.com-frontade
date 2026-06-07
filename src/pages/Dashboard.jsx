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
  "crypto-futures": { title: "Crypto Futures Scanner", tag: "LIVE CRYPTO FUTURES SCANNER", sub: "BTC, ETH, SOL and top crypto futures scanner with Bybit live cache" },
  "crypto-options": { title: "Crypto Options Scanner", tag: "LIVE CRYPTO OPTIONS SCANNER", sub: "BTC, ETH, SOL crypto options scanner with expiry, strike and premium data" },
  "forex-majors": { title: "Forex Majors Scanner", tag: "LIVE FOREX MAJORS SCANNER", sub: "EURUSD, GBPUSD, USDJPY and major forex pairs with BUY/SELL signals" },
  "forex-cross": { title: "Forex Cross Pairs Scanner", tag: "LIVE FOREX CROSS SCANNER", sub: "EURJPY, GBPJPY, EURGBP and active cross pairs with momentum signals" },
  metals: { title: "Metals Scanner", tag: "LIVE METALS SCANNER", sub: "Gold, Silver, Platinum and Palladium with live movement signals" },
  commodities: { title: "Commodities Scanner", tag: "LIVE COMMODITIES SCANNER", sub: "Crude Oil, Natural Gas, Copper and global commodity futures" },
  "global-index": { title: "Global Index Scanner", tag: "LIVE GLOBAL INDEX SCANNER", sub: "US30, NASDAQ, SPX500, DAX40, FTSE100, NIKKEI225 and major global indices" },
  "us-stocks": { title: "US Stocks Scanner", tag: "LIVE US STOCKS SCANNER", sub: "Apple, Nvidia, Tesla, Microsoft, Amazon and top active US stocks" },
  "us-etfs": { title: "US ETFs Scanner", tag: "LIVE US ETF SCANNER", sub: "SPY, QQQ, VOO, DIA, IWM, GLD, SLV and top traded US ETFs" },
};

const marketAlias = {
  forex: "forex-majors",
  "forex-major": "forex-majors",
  "forex-majors": "forex-majors",
  "crypto-option": "crypto-options",
  "crypto-options": "crypto-options",
  options: "crypto-options",
  crypto: "crypto-futures",
  "crypto-future": "crypto-futures",
  "crypto-futures": "crypto-futures",
};

const GLOBAL_MARKETS = ["crypto-futures", "crypto-options", "forex-majors", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"];
const OPTION_MARKETS = ["equity-stock-option", "future-stock-option", "index-option", "crypto-options"];

const normalizeMarket = (market = "future-stock") => {
  const key = String(market || "future-stock")
    .trim()
    .toLowerCase();
  return marketAlias[key] || key;
};

const getRefreshTime = () => 3000;

const formatTime = () =>
  new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

const isGlobalMarket = (market) => GLOBAL_MARKETS.includes(market);

const isOptionMarket = (market = "") =>
  OPTION_MARKETS.includes(
    String(market || "")
      .toLowerCase()
      .trim(),
  );

const getTradeCall = (s = {}, market = "") => {
  const sig = String(s.tradeCall || s.signal || "").toLowerCase();
  const move = Number(s.changePercent || 0);
  const oi = Number(s.oiChangePercent || 0);
  const volume = Number(s.volumeRatio || 0);
  const global = isGlobalMarket(market);

  if (sig.includes("strong buy")) return "STRONG BUY";
  if (sig.includes("strong sell")) return "STRONG SELL";
  if (sig === "buy" || sig.includes("long build") || sig.includes("short covering")) return "BUY";
  if (sig === "sell" || sig.includes("short build") || sig.includes("long unwinding")) return "SELL";
  if (sig.includes("top gainer") || sig.includes("top loser")) return "WAIT";

  if (!global) {
    if (move >= 2 && oi >= 7 && volume >= 2) return "STRONG BUY";
    if (move <= -2 && oi >= 7 && volume >= 2) return "STRONG SELL";
    if (move >= 2 && oi >= 7) return "BUY";
    if (move <= -2 && oi >= 7) return "SELL";
    return "WAIT";
  }

  if (move >= 2 && volume >= 1) return "STRONG BUY";
  if (move <= -2 && volume >= 1) return "STRONG SELL";
  if (move >= 1) return "BUY";
  if (move <= -1) return "SELL";
  return "WAIT";
};

const makeSummary = (data = [], market = "") => {
  const getCall = (r) => getTradeCall(r, market);

  return {
    totalStocks: data.length,
    gainers: data.filter((r) => Number(r.changePercent || 0) > 0).length,
    losers: data.filter((r) => Number(r.changePercent || 0) < 0).length,
    oiSignals: data.filter((r) => Math.abs(Number(r.oiChangePercent || 0)) >= 7).length,
    buySignals: data.filter((r) => getCall(r).includes("BUY")).length,
    sellSignals: data.filter((r) => getCall(r).includes("SELL")).length,
  };
};

const makeAlerts = (data = [], market = "") => {
  return data
    .map((s) => ({ ...s, tradeCall: getTradeCall(s, market) }))
    .filter((s) => ["STRONG BUY", "STRONG SELL", "BUY", "SELL"].includes(s.tradeCall))
    .sort((a, b) => Number(b.score || 0) - Number(a.score || 0))
    .slice(0, 30)
    .map((s) => ({
      symbol: s.symbol || "-",
      market,
      call: s.tradeCall,
      move: Number(s.changePercent || 0).toFixed(2),
      score: Number(s.score || 0).toFixed(2),
      tradingViewUrl: isOptionMarket(market) ? "" : s.tradingViewUrl || "",
      tvSymbol: isOptionMarket(market) ? "" : s.tvSymbol || "",
      time: formatTime(),
    }));
};

export default function Dashboard({ type = "all" }) {
  const [searchParams] = useSearchParams();
  const rawMarket = searchParams.get("market") || "future-stock";
  const market = normalizeMarket(rawMarket);
  const config = marketConfig[market] || marketConfig["future-stock"];

  const [rows, setRows] = useState([]);
  const [summary, setSummary] = useState(null);
  const [filters, setFilters] = useState({ move: 2, oi: 7, volume: 0, side: "allstocks" });
  const [loading, setLoading] = useState(true);
  const [, setRefreshing] = useState(false);
  const [err, setErr] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [meta, setMeta] = useState(null);

  const loadData = async (silent = false) => {
    try {
      if (silent) setRefreshing(true);
      else setLoading(true);

      setErr("");

      const scanRes = await getScannerData(type, market);
      const data = Array.isArray(scanRes?.data) ? scanRes.data : [];
      const alerts = makeAlerts(data, market);

      setRows(data);
      setSummary(makeSummary(data, market));
      setMeta(scanRes?.meta || null);
      setLastUpdated(formatTime());

      localStorage.setItem("br30ScannerAlerts", JSON.stringify(alerts));
      window.dispatchEvent(new CustomEvent("br30ScannerAlertsUpdated", { detail: alerts }));
    } catch (e) {
      setRows([]);
      setSummary(makeSummary([], market));
      setMeta(null);
      setErr(e.response?.data?.msg || e.response?.data?.message || e.message || "Backend connect nahi ho raha.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    setRows([]);
    setSummary(null);
    setMeta(null);
    setErr("");
    setLastUpdated("");

    loadData(false);

    const id = setInterval(() => {
      loadData(true);
    }, getRefreshTime(market));

    return () => clearInterval(id);
  }, [type, market]);

  const filtered = useMemo(() => {
    const global = isGlobalMarket(market);

    return rows.filter((s) => {
      const move = Number(s.changePercent || 0);
      const oi = Number(s.oiChangePercent || 0);
      const volume = Number(s.volumeRatio || 0);
      const call = getTradeCall(s, market);

      if (filters.side === "allstocks") return true;
      if (filters.side === "gainers") return move > 0;
      if (filters.side === "losers") return move < 0;
      if (filters.side === "buy") return call.includes("BUY");
      if (filters.side === "sell") return call.includes("SELL");
      if (filters.side === "wait") return call === "WAIT";

      if (global) {
        if (filters.side === "long") return move >= Number(filters.move);
        if (filters.side === "short") return move <= -Number(filters.move);
        if (filters.side === "stronglong") return move >= Number(filters.move) && volume >= 1;
        if (filters.side === "strongshort") return move <= -Number(filters.move) && volume >= 1;
        if (filters.side === "all") return Math.abs(move) >= Number(filters.move);
        return true;
      }

      if (filters.side === "long") return move >= Number(filters.move) && oi >= Number(filters.oi);
      if (filters.side === "short") return move <= -Number(filters.move) && oi >= Number(filters.oi);
      if (filters.side === "shortcover") return move >= Number(filters.move) && oi <= -Number(filters.oi);
      if (filters.side === "longunwind") return move <= -Number(filters.move) && oi <= -Number(filters.oi);
      if (filters.side === "stronglong") return move >= Number(filters.move) && oi >= Number(filters.oi) && volume >= 1;
      if (filters.side === "strongshort") return move <= -Number(filters.move) && oi >= Number(filters.oi) && volume >= 1;
      if (filters.side === "all") return Math.abs(move) >= Number(filters.move) && Math.abs(oi) >= Number(filters.oi);

      return true;
    });
  }, [rows, filters, market]);

  return (
    <main className="page">
      <div className="hero">
        <div>
          <p className="tag">{config.tag}</p>
          <h1>{config.title}</h1>
          <p className="sub">{config.sub}</p>

          {meta && (
            <p className="sub" style={{ marginTop: "8px", fontSize: "12px", opacity: 0.85 }}>
              Source: {meta.source || "cache"} | Status: {meta.status || "ok"} | Rows: {meta.count ?? rows.length}
              {meta.updatedAt ? ` | Cache: ${new Date(meta.updatedAt).toLocaleTimeString("en-IN")}` : ""}
            </p>
          )}
        </div>
      </div>

      {market === "crypto-options" && !rows.length && <div className="error">Crypto Options abhi empty hai. Daily expiry available hote hi yaha data aa jayega.</div>}

      {summary && <MarketSummary summary={summary} market={market} />}
      <FilterPanel filters={filters} setFilters={setFilters} market={market} />
      {err && <div className="error">{err}</div>}
      {loading ? <Loader /> : <ScannerTable rows={filtered} market={market} lastUpdated={lastUpdated} />}
    </main>
  );
}
