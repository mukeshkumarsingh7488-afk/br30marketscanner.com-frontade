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
    forex: "Forex Majors",
    "forex-cross": "Forex Cross Pairs",
    metals: "Metals",
    commodities: "Commodities",
    "global-index": "Global Index",
    "us-stocks": "US Stocks",
    "us-etfs": "US ETFs",
  };

  const isMultiAsset = ["crypto-futures", "forex", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"].includes(market);

  return (
    <section className="filters">
      <div className="filterHead">
        <h3>{marketTitle[market] || "Scanner"} Filters</h3>
        <p>Identify high-momentum stocks with 2%+ price movement and 7%+ OI build-up in real time.</p>
      </div>

      <label>
        Move %
        <input type="number" value={filters.move} onChange={(e) => update("move", e.target.value)} />
      </label>

      {!isMultiAsset && (
        <label>
          OI Change %
          <input type="number" value={filters.oi} onChange={(e) => update("oi", e.target.value)} />
        </label>
      )}

      <label>
        Volume Ratio
        <input type="number" value={filters.volume} onChange={(e) => update("volume", e.target.value)} />
      </label>

      <label>
        Trade Side
        <select value={filters.side} onChange={(e) => update("side", e.target.value)}>
          <option value="allstocks">All Symbols</option>
          <option value="gainers">Top Gainers</option>
          <option value="losers">Top Losers</option>
          <option value="buy">BUY Signals</option>
          <option value="sell">SELL Signals</option>
          <option value="wait">WAIT Signals</option>

          {!isMultiAsset && (
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
    </section>
  );
}
