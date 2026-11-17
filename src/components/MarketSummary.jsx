const normalizeMarket = (market = "") =>
  String(market || "")
    .toLowerCase()
    .trim();

const STOCK_MOVE_MARKETS = ["metal-stocks", "us-stocks", "us-etfs"];

const getTradeCall = (row = {}, market = "") => {
  market = normalizeMarket(market || row.market);

  const signal = String(row.tradeCall || row.signal || "").toLowerCase();
  const move = Number(row.changePercent || 0);
  const oi = Number(row.oiChangePercent || 0);

  if (signal.includes("top gainer")) {
    return move >= 2 ? "BUY" : "WAIT";
  }

  if (signal.includes("top loser")) {
    return move <= -2 ? "SELL" : "WAIT";
  }

  if (signal.includes("watchlist")) return "WAIT";
  if (signal.includes("watch buy") || signal.includes("watch sell")) return "WAIT";

  if (signal.includes("long build") || signal.includes("short covering") || signal.includes("strong buy")) return "BUY";

  if (signal.includes("short build") || signal.includes("long unwinding") || signal.includes("strong sell")) return "SELL";

  if (signal === "buy") {
    if (STOCK_MOVE_MARKETS.includes(market)) {
      return move >= 2 ? "BUY" : "WAIT";
    }
    return "BUY";
  }

  if (signal === "sell") {
    if (STOCK_MOVE_MARKETS.includes(market)) {
      return move <= -2 ? "SELL" : "WAIT";
    }
    return "SELL";
  }

  if (STOCK_MOVE_MARKETS.includes(market)) {
    if (move >= 2) return "BUY";
    if (move <= -2) return "SELL";
    return "WAIT";
  }

  if (oi >= 7 && move >= 2) return "BUY";
  if (oi >= 7 && move <= -2) return "SELL";

  return "WAIT";
};

export default function MarketSummary({ summary = {}, rows = [], market = "future-stock" }) {
  const normalizedMarket = normalizeMarket(market);

  const isMultiAsset = ["crypto-futures", "crypto-options", "forex-majors", "forex", "forex-cross", "metals", "metal-stocks", "commodities", "global-index", "us-stocks", "us-etfs"].includes(normalizedMarket);

  // Calculate actual BUY / SELL calls from scanner rows
  const buyCount = rows.filter((row) => getTradeCall(row, normalizedMarket) === "BUY").length;

  const sellCount = rows.filter((row) => getTradeCall(row, normalizedMarket) === "SELL").length;

  const items = [
    {
      label: "Total Symbols",
      value: summary.totalStocks ?? rows.length,
      icon: "📊",
    },
    {
      label: "Top Gainers",
      value: summary.gainers ?? 0,
      icon: "🟢",
    },
    {
      label: "Top Losers",
      value: summary.losers ?? 0,
      icon: "🔴",
    },
    {
      label: isMultiAsset ? "Momentum Signals" : "OI Signals",
      value: isMultiAsset ? buyCount + sellCount : (summary.oiSignals ?? 0),
      icon: "⚡",
    },
    {
      label: "BUY Signals",
      value: buyCount,
      icon: "🚀",
    },
    {
      label: "SELL Signals",
      value: sellCount,
      icon: "📉",
    },
  ];

  const marketTitle = {
    "equity-stock": "Equity Stock Scanner",
    "equity-stock-option": "Equity Stock Option Scanner",
    "future-stock": "Future Stock Scanner",
    "future-stock-option": "Future Stock Option Scanner",
    "index-future": "Index Future Scanner",
    "index-option": "Index Option Scanner",
    "crypto-futures": "Crypto Futures Scanner",
    "crypto-options": "Crypto Options Scanner",
    forex: "Forex Majors Scanner",
    "forex-majors": "Forex Majors Scanner",
    "forex-cross": "Forex Cross Pairs Scanner",
    metals: "Metals Scanner",
    "metal-stocks": "Metal Stocks Scanner",
    commodities: "Commodities Scanner",
    "global-index": "Global Index Scanner",
    "us-stocks": "US Stocks Scanner",
    "us-etfs": "US ETFs Scanner",
  };

  return (
    <section className="summaryWrapper">
      <div className="summaryHeader">
        <h2>{marketTitle[normalizedMarket] || "Scanner"}</h2>
        <p>Live Market Overview & Trading Signals</p>
      </div>

      <section className="summary">
        {items.map((item) => (
          <div className="card" key={item.label}>
            <span className="cardIcon">{item.icon}</span>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </div>
        ))}
      </section>
    </section>
  );
}
