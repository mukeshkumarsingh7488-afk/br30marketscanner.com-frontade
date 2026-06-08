import { useMemo, useState } from "react";

const MULTI_ASSET_MARKETS = ["crypto-futures", "crypto-options", "forex-majors", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"];

const OPTION_MARKETS = ["equity-stock-option", "future-stock-option", "index-option", "crypto-options"];

const marketTitle = {
  "equity-stock": "Equity Stocks",
  "equity-stock-option": "Equity Stock Options",
  "future-stock": "Future Stocks",
  "future-stock-option": "Future Stock Options",
  "index-future": "Index Futures",
  "index-option": "Index Options",
  "crypto-futures": "Crypto Futures",
  "crypto-options": "Crypto Options",
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

  if (["crypto-futures", "crypto-options", "metals", "commodities", "global-index", "us-stocks", "us-etfs"].includes(market)) {
    return `$${n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  if (market === "forex-majors" || market === "forex-cross") {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 5,
    });
  }

  return `₹${n.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const formatExpiry = (expiry) => {
  if (!expiry) return "";
  const d = new Date(expiry);
  if (Number.isNaN(d.getTime())) return String(expiry);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const cleanText = (value = "") =>
  String(value || "")
    .replaceAll("_", " ")
    .replace(/\s+/g, " ")
    .trim();

const normalizeMarket = (market = "") =>
  String(market || "")
    .toLowerCase()
    .trim();

const isOptionMarket = (market = "") => OPTION_MARKETS.includes(normalizeMarket(market));

const isMultiAssetMarket = (market = "") => MULTI_ASSET_MARKETS.includes(normalizeMarket(market));

const canOpenChart = (market = "") => !isOptionMarket(market);

const getSignalClass = (signal = "") => {
  const s = String(signal || "").toLowerCase();

  if (s === "buy" || s.includes("long build") || s.includes("short covering") || s.includes("strong buy") || s.includes("strong long") || s.includes("watch buy") || s.includes("top gainer")) {
    return "buyCall";
  }

  if (s === "sell" || s.includes("short build") || s.includes("long unwinding") || s.includes("strong sell") || s.includes("strong short") || s.includes("watch sell") || s.includes("top loser")) {
    return "sellCall";
  }

  return "waitCall";
};

const getDisplaySignal = (signal = "") => {
  const s = String(signal || "").toLowerCase();

  if (s.includes("top gainer")) return "Top Gainer";
  if (s.includes("top loser")) return "Top Loser";

  return signal || "WAIT";
};

const getTradeCall = (row = {}) => {
  const signal = String(row.tradeCall || row.signal || "").toLowerCase();
  const move = Number(row.changePercent || 0);
  const volume = Number(row.volume || 0);
  const oi = Number(row.oiChangePercent || 0);

  if (signal.includes("top gainer") || signal.includes("top loser") || signal.includes("watchlist")) return "WAIT";

  if (signal.includes("long build") || signal.includes("short covering") || signal.includes("strong buy")) return "BUY";
  if (signal.includes("short build") || signal.includes("long unwinding") || signal.includes("strong sell")) return "SELL";

  if (signal === "buy" && move >= 2 && volume >= 2000000) return "BUY";
  if (signal === "sell" && move <= -2 && volume >= 2000000) return "SELL";

  if (oi >= 7 && move >= 2) return "BUY";
  if (oi >= 7 && move <= -2) return "SELL";

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

const getDisplaySymbol = (row = {}) => {
  const tv = String(row.tvSymbol || "");
  if (tv.includes(":")) return tv.split(":").pop();
  return row.symbol || row.tradingSymbol || "-";
};

export default function ScannerTable({ rows = [], market = "future-stock", lastUpdated = "" }) {
  const [search, setSearch] = useState("");
  const normalizedMarket = normalizeMarket(market);
  const isMultiAsset = isMultiAssetMarket(normalizedMarket);
  const isCryptoOptions = normalizedMarket === "crypto-options";

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;

    return rows.filter((s) => {
      const symbol = String(s.symbol || "").toLowerCase();
      const name = String(s.name || "").toLowerCase();
      const sector = String(s.sector || "").toLowerCase();
      const tradingSymbol = String(s.tradingSymbol || "").toLowerCase();
      const underlying = String(s.underlyingSymbol || "").toLowerCase();
      const signal = String(s.signal || "").toLowerCase();
      const optionType = String(s.optionType || "").toLowerCase();
      const tvSymbol = String(s.tvSymbol || "").toLowerCase();
      const baseCoin = String(s.baseCoin || "").toLowerCase();

      return symbol.includes(q) || name.includes(q) || sector.includes(q) || tradingSymbol.includes(q) || underlying.includes(q) || signal.includes(q) || optionType.includes(q) || tvSymbol.includes(q) || baseCoin.includes(q);
    });
  }, [rows, search]);

  const openChart = (row) => {
    if (isOptionMarket(normalizedMarket) || isOptionMarket(row.market)) return;

    const url = row.tradingViewUrl || (row.tvSymbol ? `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(row.tvSymbol)}` : "");

    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="tableBox">
      <div className="tableHead tableHeadPro">
        <div>
          <h3>{marketTitle[normalizedMarket] || "Scanner"}</h3>
          <p>Live scanner data with signal, trade call and chart access where available.</p>
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
              {isCryptoOptions && <th>Type</th>}
              {isCryptoOptions && <th>Strike</th>}
              <th>Volume</th>
              <th>Score</th>
              <th>Signal</th>
              <th>Trade Call</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={isCryptoOptions ? 10 : isMultiAsset ? 8 : 9} className="empty">
                  {search ? "No matching symbol found" : "No data found"}
                </td>
              </tr>
            ) : (
              filteredRows.map((s, i) => {
                const call = getTradeCall(s);
                const displaySymbol = getDisplaySymbol(s);
                const displayName = cleanText(s.name);
                const displaySector = cleanText(s.sector);
                const optionText = isOptionMarket(normalizedMarket) && s.strike && s.optionType ? `${s.strike} ${s.optionType}` : "";

                return (
                  <tr key={s.instrumentKey || s.tradingSymbol || s.symbol || i}>
                    <td>#{i + 1}</td>

                    <td className="symbol">
                      {canOpenChart(normalizedMarket) ? (
                        <button type="button" className="symbolChartBtn" title={s.tvSymbol || "Open TradingView"} onClick={() => openChart(s)}>
                          {displaySymbol} ↗
                        </button>
                      ) : (
                        <div>{displaySymbol}</div>
                      )}

                      {displayName && <small className="expiryText">{displayName}</small>}

                      {s.baseCoin && <small className="expiryText">Base: {s.baseCoin}</small>}

                      {optionText && <small className="expiryText">Option: {optionText}</small>}

                      {displaySector && <small className="expiryText">Sector: {displaySector}</small>}

                      {s.tvSymbol && <small className="expiryText">TV: {s.tvSymbol}</small>}

                      {s.expiry && <small className="expiryText">Exp: {formatExpiry(s.expiry)}</small>}
                    </td>

                    <td>{formatLtp(s.ltp, normalizedMarket)}</td>

                    <td className={Number(s.changePercent || 0) >= 0 ? "green" : "red"}>{Number(s.changePercent || 0).toFixed(2)}%</td>

                    {!isMultiAsset && <td className={Number(s.oiChangePercent || 0) >= 0 ? "green" : "red"}>{Number(s.oiChangePercent || 0).toFixed(2)}%</td>}

                    {isCryptoOptions && <td>{String(s.optionType || "-").toUpperCase()}</td>}

                    {isCryptoOptions && <td>{Number(s.strike || 0)}</td>}

                    <td>{formatVolume(s.volume)}</td>
                    <td>{Number(s.score || 0).toFixed(2)}</td>

                    <td>
                      <span className={`badge ${getSignalClass(s.signal)}`}>{getDisplaySignal(s.signal)}</span>
                    </td>

                    <td>
                      <span className={`badge ${getCallClass(call)}`}>{call}</span>
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
