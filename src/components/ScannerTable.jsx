import { useMemo, useState } from "react";

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
  if (market === "forex" || market === "forex-cross") return n.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
  return `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const getTradingViewSymbol = (s = {}, market = "") => {
  const clean = (v = "") =>
    String(v || "")
      .toUpperCase()
      .replaceAll("&", "")
      .replaceAll("-", "")
      .replaceAll("/", "")
      .replaceAll(" ", "")
      .trim();

  const symbol = clean(s.symbol);
  const tradingSymbol = clean(s.tradingSymbol);
  const underlying = clean(s.underlyingSymbol);
  const rawSymbol = String(s.symbol || "").toUpperCase();
  const rawTrading = String(s.tradingSymbol || "").toUpperCase();

  const forexMap = {
    EURUSD: "FX:EURUSD",
    GBPUSD: "FX:GBPUSD",
    USDJPY: "FX:USDJPY",
    AUDUSD: "FX:AUDUSD",
    NZDUSD: "FX:NZDUSD",
    USDCAD: "FX:USDCAD",
    USDCHF: "FX:USDCHF",
    EURJPY: "FX:EURJPY",
    GBPJPY: "FX:GBPJPY",
    EURGBP: "FX:EURGBP",
    AUDJPY: "FX:AUDJPY",
    CADJPY: "FX:CADJPY",
    CHFJPY: "FX:CHFJPY",
    GBPAUD: "FX:GBPAUD",
    EURAUD: "FX:EURAUD",
    EURCAD: "FX:EURCAD",
    GBPCAD: "FX:GBPCAD",
  };

  const globalMap = {
    "^DJI": "TVC:DJI",
    "^IXIC": "NASDAQ:NDX",
    "^GSPC": "SP:SPX",
    "^RUT": "TVC:RUT",
    "^VIX": "TVC:VIX",
    "^FTSE": "TVC:UKX",
    "^GDAXI": "XETR:DAX",
    "^FCHI": "EURONEXT:PX1",
    "^STOXX50E": "TVC:SX5E",
    "^N225": "TVC:NI225",
    "^HSI": "TVC:HSI",
    "^AXJO": "ASX:XJO",
    US30: "TVC:DJI",
    NAS100: "NASDAQ:NDX",
    SPX500: "SP:SPX",
    RUSSELL2000: "TVC:RUT",
    VIX: "TVC:VIX",
    FTSE100: "TVC:UKX",
    DAX40: "XETR:DAX",
    CAC40: "EURONEXT:PX1",
    EUROSTOXX50: "TVC:SX5E",
    NIKKEI225: "TVC:NI225",
    HANGSENG: "TVC:HSI",
    ASX200: "ASX:XJO",
  };

  const commodityMap = {
    XAUUSD: "OANDA:XAUUSD",
    XAGUSD: "OANDA:XAGUSD",
    XPTUSD: "OANDA:XPTUSD",
    XPDUSD: "OANDA:XPDUSD",
    GOLD: "OANDA:XAUUSD",
    SILVER: "OANDA:XAGUSD",
    WTICRUDE: "TVC:USOIL",
    BRENTCRUDE: "TVC:UKOIL",
    NATURALGAS: "TVC:NATGAS",
    COPPER: "COMEX:HG1!",
    CORN: "CBOT:ZC1!",
    SOYBEAN: "CBOT:ZS1!",
    WHEAT: "CBOT:ZW1!",
    COFFEE: "ICEUS:KC1!",
    COTTON: "ICEUS:CT1!",
    SUGAR: "ICEUS:SB1!",
  };

  const indexMap = {
    NIFTY: "NSE:NIFTY",
    BANKNIFTY: "NSE:BANKNIFTY",
    FINNIFTY: "NSE:CNXFINANCE",
    MIDCPNIFTY: "NSE:MIDCPNIFTY",
    NIFTYNXT50: "NSE:NIFTYNXT50",
    SENSEX: "BSE:SENSEX",
    BANKEX: "BSE:BANK",
  };

  if (market === "forex" || market === "forex-cross") return forexMap[symbol] || `OANDA:${symbol}`;

  if (globalMap[rawSymbol]) return globalMap[rawSymbol];
  if (globalMap[rawTrading]) return globalMap[rawTrading];
  if (globalMap[symbol]) return globalMap[symbol];
  if (globalMap[tradingSymbol]) return globalMap[tradingSymbol];

  if (commodityMap[symbol]) return commodityMap[symbol];
  if (commodityMap[tradingSymbol]) return commodityMap[tradingSymbol];

  if (market === "crypto-futures") return `BINANCE:${tradingSymbol || symbol}`;
  if (market === "us-stocks" || market === "us-etfs") return tradingSymbol || symbol;
  if (market === "index-future") return indexMap[underlying] || indexMap[symbol] || indexMap[tradingSymbol] || "NSE:NIFTY";
  if (market === "future-stock") return `NSE:${underlying || symbol}`;
  if (market === "equity-stock") return `NSE:${tradingSymbol || symbol}`;

  return null;
};

const canOpenChart = (market) => !["equity-stock-option", "future-stock-option", "index-option"].includes(market);

const formatExpiry = (expiry) => {
  if (!expiry) return "";
  const d = new Date(expiry);
  if (Number.isNaN(d.getTime())) return String(expiry);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const getTradeCall = (row = {}) => {
  const signal = String(row.signal || "").toLowerCase();
  const move = Number(row.changePercent || 0);
  const oi = Number(row.oiChangePercent || 0);
  const volumeRatio = Number(row.volumeRatio || 0);
  if (signal.includes("strong long")) return "STRONG BUY";
  if (signal.includes("long build")) return "BUY";
  if (signal.includes("short covering")) return "BUY";
  if (signal.includes("strong short")) return "STRONG SELL";
  if (signal.includes("short build")) return "SELL";
  if (signal.includes("long unwinding")) return "SELL";
  if (signal.includes("strong buy")) return "STRONG BUY";
  if (signal.includes("strong sell")) return "STRONG SELL";
  if (signal.includes("buy")) return "BUY";
  if (signal.includes("sell")) return "SELL";
  if (signal.includes("top gainer")) return "BUY";
  if (signal.includes("top loser")) return "SELL";
  if (move >= 2 && oi >= 7 && volumeRatio >= 2) return "STRONG BUY";
  if (move >= 2 && oi >= 7) return "BUY";
  if (move <= -2 && oi >= 7 && volumeRatio >= 2) return "STRONG SELL";
  if (move <= -2 && oi >= 7) return "SELL";
  return "WAIT";
};

const getCallClass = (call = "") => {
  const c = call.toLowerCase();
  if (c.includes("strong buy")) return "strongBuy";
  if (c === "buy") return "buyCall";
  if (c.includes("strong sell")) return "strongSell";
  if (c === "sell") return "sellCall";
  return "waitCall";
};

const cleanSignalClass = (signal = "") =>
  String(signal || "watchlist")
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "-");

export default function ScannerTable({ rows = [], market = "future-stock", lastUpdated = "" }) {
  const [search, setSearch] = useState("");
  const [chart, setChart] = useState(null);

  const marketTitle = {
    "equity-stock": "Equity Stocks",
    "equity-stock-option": "Equity Stock Options",
    "future-stock": "Future Stocks",
    "future-stock-option": "Future Stock Options",
    "index-future": "Index Futures",
    "index-option": "Index Options",
    "crypto-futures": "Crypto Futures",
    forex: "Forex Majors",
    "forex-cross": "Forex Cross Pairs",
    metals: "Metals",
    commodities: "Commodities",
    "global-index": "Global Index",
    "us-stocks": "US Stocks",
    "us-etfs": "US ETFs",
  };

  const isMultiAsset = ["crypto-futures", "forex", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"].includes(market);

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((s) => {
      const symbol = String(s.symbol || "").toLowerCase();
      const tradingSymbol = String(s.tradingSymbol || "").toLowerCase();
      const underlying = String(s.underlyingSymbol || "").toLowerCase();
      const signal = String(s.signal || "").toLowerCase();
      const optionType = String(s.optionType || "").toLowerCase();
      return symbol.includes(q) || tradingSymbol.includes(q) || underlying.includes(q) || signal.includes(q) || optionType.includes(q);
    });
  }, [rows, search]);

  const openChart = (s) => {
    const tvSymbol = getTradingViewSymbol(s, market);
    if (!tvSymbol) return;

    const iframeOkMarkets = ["crypto-futures", "us-stocks", "us-etfs"];

    if (!iframeOkMarkets.includes(market)) {
      window.open(`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(tvSymbol)}`, "_blank", "noopener,noreferrer");
      return;
    }

    setChart({
      title: s.symbol || s.tradingSymbol || "Chart",
      symbol: tvSymbol,
    });
  };

  return (
    <section className="tableBox">
      <div className="tableHead tableHeadPro">
        <div>
          <h3>{marketTitle[market] || "Scanner"}</h3>
          <p>Live scanner data with signal and trade call.</p>
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
            </tr>
          </thead>

          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={isMultiAsset ? 8 : 9} className="empty">
                  {search ? "No matching symbol found" : "No data found"}
                </td>
              </tr>
            ) : (
              filteredRows.map((s, i) => {
                const call = getTradeCall(s);
                return (
                  <tr key={s.instrumentKey || s.symbol || i}>
                    <td>#{i + 1}</td>

                    <td className="symbol">
                      {canOpenChart(market) ? (
                        <button type="button" className="symbolChartBtn" onClick={() => openChart(s)}>
                          {s.symbol || "-"}
                        </button>
                      ) : (
                        <div>{s.symbol || "-"}</div>
                      )}
                      {s.expiry && <small className="expiryText">Exp: {formatExpiry(s.expiry)}</small>}
                    </td>

                    <td>{formatLtp(s.ltp, market)}</td>
                    <td className={Number(s.changePercent || 0) >= 0 ? "green" : "red"}>{Number(s.changePercent || 0).toFixed(2)}%</td>
                    {!isMultiAsset && <td className={Number(s.oiChangePercent || 0) >= 0 ? "green" : "red"}>{Number(s.oiChangePercent || 0).toFixed(2)}%</td>}
                    <td>{formatVolume(s.volume)}</td>
                    <td>{Number(s.score || 0).toFixed(2)}</td>
                    <td>
                      <span className={`badge ${cleanSignalClass(s.signal)}`}>{s.signal || "Watchlist"}</span>
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

      {chart && (
        <div className="tvOverlay" onClick={() => setChart(null)}>
          <div className="tvModal" onClick={(e) => e.stopPropagation()}>
            <div className="tvHeader">
              <div>
                <h3>{chart.title}</h3>
                <p>{chart.symbol}</p>
              </div>
              <button type="button" onClick={() => setChart(null)}>
                ×
              </button>
            </div>

            <iframe title={chart.symbol} src={`https://www.tradingview.com/widgetembed/?symbol=${encodeURIComponent(chart.symbol)}&interval=5&theme=dark&style=1&timezone=Asia%2FKolkata&withdateranges=1&hide_side_toolbar=0&allow_symbol_change=1&save_image=0&studies=[]`} className="tvFrame" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
}
