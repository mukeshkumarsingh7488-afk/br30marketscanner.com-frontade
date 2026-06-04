import { useMemo, useState } from "react";

const MULTI_ASSET_MARKETS = ["crypto-futures", "forex-majors", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"];

const marketTitle = {
  "equity-stock": "Equity Stocks",
  "equity-stock-option": "Equity Stock Options",
  "future-stock": "Future Stocks",
  "future-stock-option": "Future Stock Options",
  "index-future": "Index Futures",
  "index-option": "Index Options",
  "crypto-futures": "Crypto Futures",
  "forex-majors": "Forex Majors",
  "forex-cross": "Forex Cross Pairs",
  metals: "Metals",
  commodities: "Commodities",
  "global-index": "Global Index",
  "us-stocks": "US Stocks",
  "us-etfs": "US ETFs",
};

const formatVolume = (value) => {
  const n = Number(value || 0);
  if (n >= 10000000) return (n / 10000000).toFixed(2) + "Cr";
  if (n >= 100000) return (n / 100000).toFixed(2) + "L";
  if (n >= 1000) return (n / 1000).toFixed(2) + "K";
  return n.toString();
};

const formatLtp = (value, market) => {
  const n = Number(value || 0);
  if (["crypto-futures", "metals", "commodities", "global-index", "us-stocks", "us-etfs"].includes(market)) return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (market === "forex-majors" || market === "forex-cross") return n.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
  return `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const formatExpiry = (expiry) => {
  if (!expiry) return "";
  const d = new Date(expiry);
  if (Number.isNaN(d.getTime())) return String(expiry);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const getSignalClass = (signal = "") => {
  const s = String(signal || "").toLowerCase();

  if (s.includes("long build-up") || s.includes("short covering") || s.includes("strong long")) return "buySignal";
  if (s.includes("short build-up") || s.includes("long unwinding") || s.includes("strong short")) return "sellSignal";
  if (s.includes("top gainer") || s.includes("top loser")) return "neutralSignal";

  return "waitSignal";
};

const getTradeCall = (row = {}) => {
  const signal = String(row.signal || "").toLowerCase();
  const move = Number(row.changePercent || 0);
  const oi = Number(row.oiChangePercent || 0);
  const volumeRatio = Number(row.volumeRatio || 0);

  if (signal.includes("strong buy") || signal.includes("strong long")) return "STRONG BUY";
  if (signal.includes("strong sell") || signal.includes("strong short")) return "STRONG SELL";
  if (signal.includes("long build") || signal.includes("short covering")) return "BUY";
  if (signal.includes("short build") || signal.includes("long unwinding")) return "SELL";
  if (move >= 2 && oi >= 7 && volumeRatio >= 2) return "STRONG BUY";
  if (move <= -2 && oi >= 7 && volumeRatio >= 2) return "STRONG SELL";
  if (move >= 2 && oi >= 7) return "BUY";
  if (move <= -2 && oi >= 7) return "SELL";
  return "WAIT";
};

const getCallClass = (call = "") => {
  const c = String(call || "").toLowerCase();
  if (c.includes("strong buy")) return "strongBuy";
  if (c === "buy") return "buyCall";
  if (c.includes("strong sell")) return "strongSell";
  if (c === "sell") return "sellCall";
  return "waitCall";
};

const getExitClass = (exit = "") => {
  const e = String(exit || "WAIT").toLowerCase();
  if (e.includes("exit buy")) return "exit-buy";
  if (e.includes("exit sell")) return "exit-sell";
  if (e.includes("hold buy")) return "hold-buy";
  if (e.includes("hold sell")) return "hold-sell";
  return "waitCall";
};

const canOpenChart = (row = {}, market = "") => {
  if (row.tradingViewSearchUrl || row.tradingViewUrl || row.tvSymbol) return true;
  return !["equity-stock-option", "future-stock-option", "index-option"].includes(market);
};

export default function ScannerTable({ rows = [], market = "future-stock", lastUpdated = "" }) {
  const [search, setSearch] = useState("");
  const isMultiAsset = MULTI_ASSET_MARKETS.includes(market);

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;

    return rows.filter((s) => {
      const symbol = String(s.symbol || "").toLowerCase();
      const tradingSymbol = String(s.tradingSymbol || "").toLowerCase();
      const underlying = String(s.underlyingSymbol || "").toLowerCase();
      const signal = String(s.signal || "").toLowerCase();
      const optionType = String(s.optionType || "").toLowerCase();
      const tvSymbol = String(s.tvSymbol || "").toLowerCase();
      const exitSignal = String(s.exitSignal || "").toLowerCase();
      return symbol.includes(q) || tradingSymbol.includes(q) || underlying.includes(q) || signal.includes(q) || optionType.includes(q) || tvSymbol.includes(q) || exitSignal.includes(q);
    });
  }, [rows, search]);

  const openChart = (row) => {
    const url = row.tradingViewSearchUrl || row.tradingViewUrl;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="tableBox">
      <div className="tableHead tableHeadPro">
        <div>
          <h3>{marketTitle[market] || "Scanner"}</h3>
          <p>Live scanner data with signal, trade call, exit signal and TradingView chart link.</p>
        </div>

        <div className="tableSearchBox">
          <span className="tableLastUpdated">⏱ Last Updated: {lastUpdated || "--"}</span>
          <input type="text" value={search} placeholder="Search symbol..." onChange={(e) => setSearch(e.target.value)} />
          {search && (
            <button type="button" onClick={() => setSearch("")}>
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="tableScroll">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Symbol</th>
              <th>LTP</th>
              <th>Move %</th>
              {!isMultiAsset && <th>OI %</th>}
              <th>Volume</th>
              <th>Score</th>
              <th>Signal</th>
              <th>Trade Call</th>
              <th>Exit Signal</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={isMultiAsset ? 9 : 10} className="empty">
                  {search ? "No matching symbol found" : "No data found"}
                </td>
              </tr>
            ) : (
              filteredRows.map((s, i) => {
                const call = getTradeCall(s);
                const exitSignal = s.exitSignal || "WAIT";

                return (
                  <tr key={s.instrumentKey || s.tradingSymbol || s.symbol || i}>
                    <td>#{i + 1}</td>

                    <td className="symbol">
                      {canOpenChart(s, market) ? (
                        <button type="button" className="symbolChartBtn" title={s.tvSymbol || "Open TradingView"} onClick={() => openChart(s)}>
                          {s.symbol || "-"} ↗
                        </button>
                      ) : (
                        <div>{s.symbol || "-"}</div>
                      )}

                      {s.tvSymbol && <small className="expiryText">TV: {s.tvSymbol}</small>}
                      {s.expiry && <small className="expiryText">Exp: {formatExpiry(s.expiry)}</small>}
                    </td>

                    <td>{formatLtp(s.ltp, market)}</td>
                    <td className={Number(s.changePercent || 0) >= 0 ? "green" : "red"}>{Number(s.changePercent || 0).toFixed(2)}%</td>
                    {!isMultiAsset && <td className={Number(s.oiChangePercent || 0) >= 0 ? "green" : "red"}>{Number(s.oiChangePercent || 0).toFixed(2)}%</td>}
                    <td>{formatVolume(s.volume)}</td>
                    <td>{Number(s.score || 0).toFixed(2)}</td>

                    <td>
                      <span className={`badge ${getSignalClass(s.signal)}`}>{s.signal || "WAIT Watchlist"}</span>
                    </td>

                    <td>
                      <span className={`badge ${getCallClass(call)}`}>{call}</span>
                    </td>

                    <td>
                      <span className={`badge ${getExitClass(exitSignal)}`}>{exitSignal}</span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
