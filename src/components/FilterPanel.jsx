export default function FilterPanel({ filters, setFilters, market = "future-stock" }) {
  const update = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

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

  const STOCK_MOVE_MARKETS = ["metal-stocks", "us-stocks", "us-etfs"];

  const isMultiAsset = GLOBAL_MARKETS.includes(market);
  const isStockMove = STOCK_MOVE_MARKETS.includes(market);

  const isComingSoon = ["global-index", "crypto-futures", "crypto-options"].includes(market);

  const desc = isComingSoon ? "This scanner is currently under development." : isStockMove ? "Filter stocks using price movement, volume and BUY/SELL signals." : isMultiAsset ? "Filter global markets using price movement and volume." : "Filter stocks using price movement, OI change and volume ratio.";

  return (
    <section className="filters">
      <div className="filterHead">
        <h3>{marketTitle[market] || "Scanner"} Filters</h3>
        <p>{desc}</p>
      </div>

      <label>
        Minimum Move %
        <input type="number" step="0.1" min="0" value={filters.move ?? 2} onChange={(e) => update("move", e.target.value)} disabled={isComingSoon} />
      </label>

      {!isMultiAsset && !isComingSoon && (
        <label>
          Minimum OI Change %
          <input type="number" step="0.1" min="0" value={filters.oi ?? 7} onChange={(e) => update("oi", e.target.value)} />
        </label>
      )}

      {!isComingSoon && (
        <label>
          Minimum Volume Ratio
          <input type="number" step="0.1" min="0" value={filters.volume ?? 0} onChange={(e) => update("volume", e.target.value)} />
        </label>
      )}

      <label>
        Trade Side
        <select value={filters.side || "allstocks"} onChange={(e) => update("side", e.target.value)} disabled={isComingSoon}>
          <option value="allstocks">All Symbols</option>
          <option value="gainers">Top Gainers</option>
          <option value="losers">Top Losers</option>
          <option value="buy">BUY Signals</option>
          <option value="sell">SELL Signals</option>
          <option value="wait">WAIT Signals</option>

          {isMultiAsset && !isComingSoon && (
            <>
              <option value="all">Minimum Move Filter</option>
              <option value="long">Bullish Momentum</option>
              <option value="short">Bearish Momentum</option>
              <option value="stronglong">Strong Bullish (Volume)</option>
              <option value="strongshort">Strong Bearish (Volume)</option>
            </>
          )}

          {!isMultiAsset && !isComingSoon && (
            <>
              <option value="all">Move + OI + Volume Filter</option>
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
