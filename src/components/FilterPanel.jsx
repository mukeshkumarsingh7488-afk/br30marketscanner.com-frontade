export default function FilterPanel({ filters, setFilters, market = "future-stock" }) {
  const update = (key, value) => setFilters((p) => ({ ...p, [key]: value }));

  const marketTitle = {
    "equity-stock": "Equity Stock",
    "equity-stock-option": "Equity Stock Option",
    "future-stock": "Future Stock",
    "future-stock-option": "Future Stock Option",
    "index-future": "Index Future",
    "index-option": "Index Option",

    "crypto-futures": "Crypto Futures",
    "crypto-options": "Crypto Options",

    "forex-majors": "Forex Majors",
    forex: "Forex Majors",
    "forex-cross": "Forex Cross Pairs",

    metals: "Metals",
    "metal-stocks": "Metal Stocks",

    commodities: "Commodities",

    "global-index": "Global Index",

    "us-stocks": "US Stocks",
    "us-etfs": "US ETFs",
  };

  const GLOBAL_MARKETS = ["forex-majors", "forex", "forex-cross", "metals", "metal-stocks", "commodities", "us-stocks", "us-etfs"];

  const isMultiAsset = GLOBAL_MARKETS.includes(market);

  const isComingSoon = market === "global-index" || market === "crypto-futures" || market === "crypto-options";

  const desc = market === "global-index" ? "Global Index Scanner Coming Soon." : market === "crypto-futures" ? "Crypto Futures Scanner Coming Soon." : market === "crypto-options" ? "Crypto Options Scanner Coming Soon." : market === "metal-stocks" ? "Global metal stocks with BUY / SELL signals based on price movement." : isMultiAsset ? "Global markets backend cache se update ho rahe hain. Frontend live cached data read karega." : "Identify high-momentum stocks with 2%+ price movement and 7%+ OI build-up in real time.";

  return (
    <section className="filters">
      <div className="filterHead">
        <h3>{marketTitle[market] || "Scanner"} Filters</h3>
        <p>{desc}</p>
      </div>

      <label>
        Move %
        <input type="number" value={filters.move} onChange={(e) => update("move", e.target.value)} disabled={isComingSoon} />
      </label>

      {!isMultiAsset && !isComingSoon && (
        <label>
          OI Change %
          <input type="number" value={filters.oi} onChange={(e) => update("oi", e.target.value)} />
        </label>
      )}

      {!isComingSoon && (
        <label>
          Volume Ratio
          <input type="number" value={filters.volume} onChange={(e) => update("volume", e.target.value)} />
        </label>
      )}

      <label>
        Trade Side
        <select value={filters.side} onChange={(e) => update("side", e.target.value)} disabled={isComingSoon}>
          <option value="allstocks">All Symbols</option>

          <option value="gainers">Top Gainers</option>
          <option value="losers">Top Losers</option>

          <option value="buy">BUY Signals</option>
          <option value="sell">SELL Signals</option>

          <option value="wait">WAIT Signals</option>

          {isMultiAsset && !isComingSoon && (
            <>
              <option value="all">Move Filter</option>
              <option value="long">Bullish Momentum</option>
              <option value="short">Bearish Momentum</option>
              <option value="stronglong">Strong Bullish</option>
              <option value="strongshort">Strong Bearish</option>
            </>
          )}

          {!isMultiAsset && !isComingSoon && (
            <>
              <option value="all">Move + OI Filter</option>
              <option value="long">Long Build-Up</option>
              <option value="short">Short Build-Up</option>
              <option value="shortcover">Short Covering</option>
              <option value="longunwind">Long Unwinding</option>
              <option value="stronglong">Strong Long Build-Up</option>
              <option value="strongshort">Strong Short Build-Up</option>
            </>
          )}
        </select>
      </label>

      {isComingSoon && (
        <div
          style={{
            marginTop: "12px",
            padding: "12px",
            borderRadius: "10px",
            background: "#111",
            border: "1px solid #333",
            color: "#ffb347",
            fontWeight: 600,
          }}
        >
          🚧 This Scanner is Coming Soon
        </div>
      )}
    </section>
  );
}
