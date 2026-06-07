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
    commodities: "Commodities",
    "global-index": "Global Index",
    "us-stocks": "US Stocks",
    "us-etfs": "US ETFs",
  };

  const GLOBAL_MARKETS = ["crypto-futures", "crypto-options", "forex-majors", "forex", "forex-cross", "metals", "commodities", "global-index", "us-stocks", "us-etfs"];

  const isMultiAsset = GLOBAL_MARKETS.includes(market);
  const isComingSoon = market === "global-index";
  const isCryptoOptions = market === "crypto-options";

  const desc = isComingSoon ? "Global Index abhi Coming Soon hai. Data enable hote hi yaha live cache se scanner chalega." : isMultiAsset ? "Global markets backend cache se update ho rahe hain. Frontend 3 sec me latest cached data read karega." : "Identify high-momentum stocks with 2%+ price movement and 7%+ OI build-up in real time.";

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

      {!isMultiAsset && (
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

          {isCryptoOptions && (
            <>
              <option value="call">CALL Options</option>
              <option value="put">PUT Options</option>
            </>
          )}
        </select>
      </label>
    </section>
  );
}
