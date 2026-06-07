export default function MarketSummary({ summary = {}, market = "future-stock" }) {
  const isMultiAsset = ["crypto-futures", "crypto-options", "forex-majors", "forex", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"].includes(market);

  const items = [
    { label: "Total Symbols", value: summary.totalStocks || 0, icon: "📊" },
    { label: "Top Gainers", value: summary.gainers || 0, icon: "🟢" },
    { label: "Top Losers", value: summary.losers || 0, icon: "🔴" },
    {
      label: isMultiAsset ? "Momentum Signals" : "OI Signals",
      value: isMultiAsset ? (summary.buySignals || 0) + (summary.sellSignals || 0) : summary.oiSignals || 0,
      icon: "⚡",
    },
    { label: "BUY Signals", value: summary.buySignals || 0, icon: "🚀" },
    { label: "SELL Signals", value: summary.sellSignals || 0, icon: "📉" },
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
    commodities: "Commodities Scanner",
    "global-index": "Global Index Coming Soon",
    "us-stocks": "US Stocks Scanner",
    "us-etfs": "US ETFs Scanner",
  };

  return (
    <section className="summaryWrapper">
      <div className="summaryHeader">
        <h2>{marketTitle[market] || "Scanner"}</h2>
        <p>{market === "global-index" ? "Global Index abhi Coming Soon hai" : "Live Market Overview & Trading Signals"}</p>
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
