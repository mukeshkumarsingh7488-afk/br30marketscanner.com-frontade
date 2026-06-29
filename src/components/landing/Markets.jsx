import { BadgeIndianRupee, Bitcoin, Building2, CandlestickChart, CircleDollarSign, Gem, Globe2, Landmark, Layers3, PieChart } from "lucide-react";

const markets = [
  {
    icon: Building2,
    title: "Equity Stocks",
    text: "Top gainers, losers, volume breakouts and momentum tracking.",
    status: "Live",
  },
  {
    icon: PieChart,
    title: "Equity Stock Options",
    text: "CE / PE premium movement, OI activity and option signals.",
    status: "Live",
  },
  {
    icon: CandlestickChart,
    title: "Stock Futures",
    text: "Futures price tracking, long build-up and short build-up detection.",
    status: "Live",
  },
  {
    icon: Layers3,
    title: "Future Stock Options",
    text: "Future option activity, OI analysis and trend monitoring.",
    status: "Live",
  },
  {
    icon: Landmark,
    title: "Index Futures",
    text: "NIFTY, BANKNIFTY, FINNIFTY, SENSEX and more index futures.",
    status: "Live",
  },
  {
    icon: BadgeIndianRupee,
    title: "Index Options",
    text: "NIFTY, BANKNIFTY, FINNIFTY, MIDCPNIFTY, SENSEX CE/PE tracking.",
    status: "Live",
  },
  {
    icon: CircleDollarSign,
    title: "Forex Majors & Cross",
    text: "Major and cross currency pair momentum scanning.",
    status: "Ready",
  },
  {
    icon: Gem,
    title: "Metals & Commodities",
    text: "Gold, metals and commodity movement tracking for market view.",
    status: "Ready",
  },
  {
    icon: Bitcoin,
    title: "Crypto Markets",
    text: "Crypto futures/options momentum and long-short activity tracking.",
    status: "Planned",
  },
];

export default function Markets() {
  return (
    <>
      <section className="scanner-markets-section" id="markets">
        <div className="scanner-landing-container">
          <div className="scanner-markets-heading">
            <span className="scanner-section-tag">
              <Globe2 size={15} />
              Supported Markets
            </span>

            <h2>From Indian Markets to Global Watchlists.</h2>

            <p>BR30 Market Scanner is designed as a multi-market platform — helping traders scan equities, options, futures, indices and future-ready global markets from one place.</p>
          </div>

          <div className="scanner-markets-layout">
            <div className="scanner-market-map">
              <div className="market-orbit orbit-one" />
              <div className="market-orbit orbit-two" />
              <div className="market-orbit orbit-three" />

              <div className="market-center">
                <Globe2 size={42} />
                <strong>BR30</strong>
                <span>Market Engine</span>
              </div>

              <div className="market-node node-one">Equity</div>
              <div className="market-node node-two">Options</div>
              <div className="market-node node-three">Futures</div>
              <div className="market-node node-four">Forex</div>
              <div className="market-node node-five">Metals</div>
              <div className="market-node node-six">Crypto</div>
            </div>

            <div className="scanner-markets-grid">
              {markets.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="scanner-market-card" key={item.title}>
                    <div className="scanner-market-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <div className="scanner-market-title-row">
                        <h3>{item.title}</h3>
                        <span className={item.status.toLowerCase()}>{item.status}</span>
                      </div>

                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .scanner-markets-section{position:relative;padding:95px 0;background:linear-gradient(180deg,#020806 0%,#03130d 50%,#020806 100%);color:#fff;overflow:hidden;}
        .scanner-markets-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 40%,rgba(0,255,136,.14),transparent 38%),radial-gradient(circle at 86% 24%,rgba(34,211,238,.12),transparent 34%);pointer-events:none;}
        .scanner-markets-heading{position:relative;z-index:2;text-align:center;max-width:820px;margin:0 auto 52px;}
        .scanner-markets-heading h2{font-size:clamp(34px,4.8vw,60px);line-height:1.08;letter-spacing:-1.8px;margin:18px 0;color:#fff;font-weight:950;}
        .scanner-markets-heading p{color:#a8b8b0;font-size:17px;line-height:1.8;margin:0;}
        .scanner-markets-layout{position:relative;z-index:2;display:grid;grid-template-columns:.9fr 1.1fr;gap:28px;align-items:stretch;}
        .scanner-market-map{position:relative;min-height:610px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);box-shadow:0 28px 90px rgba(0,0,0,.3);backdrop-filter:blur(18px);overflow:hidden;}
        .scanner-market-map:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.026) 1px,transparent 1px);background-size:42px 42px;mask-image:radial-gradient(circle,black,transparent 76%);}
        .market-orbit{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;border:1px solid rgba(0,255,136,.18);}
        .orbit-one{width:210px;height:210px;}
        .orbit-two{width:340px;height:340px;}
        .orbit-three{width:470px;height:470px;border-color:rgba(34,211,238,.15);}
        .market-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:170px;height:170px;border-radius:38px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:linear-gradient(135deg,rgba(0,255,136,.22),rgba(34,211,238,.12));border:1px solid rgba(0,255,136,.28);box-shadow:0 0 80px rgba(0,255,136,.16);}
        .market-center svg{color:#00ff88;margin-bottom:13px;}
        .market-center strong{font-size:26px;color:#fff;letter-spacing:-.8px;}
        .market-center span{font-size:12px;color:#bdfbe3;font-weight:850;margin-top:4px;}
        .market-node{position:absolute;padding:12px 16px;border-radius:999px;background:rgba(2,8,6,.78);border:1px solid rgba(0,255,136,.22);color:#d9fff0;font-size:13px;font-weight:950;box-shadow:0 18px 48px rgba(0,0,0,.28);backdrop-filter:blur(16px);}
        .node-one{left:48px;top:118px;}
        .node-two{right:46px;top:132px;}
        .node-three{left:36px;bottom:170px;}
        .node-four{right:54px;bottom:156px;}
        .node-five{left:50%;top:42px;transform:translateX(-50%);}
        .node-six{left:50%;bottom:48px;transform:translateX(-50%);}
        .scanner-markets-grid{display:grid;grid-template-columns:1fr;gap:14px;}
        .scanner-market-card{display:flex;gap:18px;align-items:flex-start;padding:20px;border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);box-shadow:0 20px 65px rgba(0,0,0,.22);backdrop-filter:blur(18px);transition:.35s;}
        .scanner-market-card:hover{transform:translateX(8px);border-color:rgba(0,255,136,.34);}
        .scanner-market-icon{width:54px;height:54px;border-radius:18px;display:flex;align-items:center;justify-content:center;color:#00ff88;background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.18);flex-shrink:0;}
        .scanner-market-title-row{display:flex;align-items:center;gap:12px;justify-content:space-between;margin-bottom:8px;}
        .scanner-market-title-row h3{margin:0;color:#fff;font-size:19px;line-height:1.25;}
        .scanner-market-title-row span{padding:6px 10px;border-radius:999px;font-size:10px;font-weight:950;text-transform:uppercase;letter-spacing:.6px;}
        .scanner-market-title-row .live{background:rgba(0,255,136,.12);color:#00ff88;border:1px solid rgba(0,255,136,.22);}
        .scanner-market-title-row .ready{background:rgba(34,211,238,.12);color:#22d3ee;border:1px solid rgba(34,211,238,.22);}
        .scanner-market-title-row .planned{background:rgba(255,255,255,.08);color:#cbd5cf;border:1px solid rgba(255,255,255,.12);}
        .scanner-market-card p{margin:0;color:#91a99c;font-size:14px;line-height:1.68;}
        @media(max-width:1050px){.scanner-markets-layout{grid-template-columns:1fr;}.scanner-market-map{min-height:520px;}.scanner-markets-grid{grid-template-columns:repeat(2,1fr);}.scanner-market-card:hover{transform:translateY(-6px);}}
        @media(max-width:760px){.scanner-markets-section{padding:68px 0;}.scanner-markets-heading p{font-size:15px;}.scanner-markets-grid{grid-template-columns:1fr;}.scanner-market-map{min-height:440px;border-radius:26px;}.orbit-one{width:170px;height:170px;}.orbit-two{width:265px;height:265px;}.orbit-three{width:355px;height:355px;}.market-center{width:142px;height:142px;border-radius:30px;}.market-node{font-size:11px;padding:10px 12px;}.node-one{left:18px;top:96px;}.node-two{right:18px;top:110px;}.node-three{left:16px;bottom:128px;}.node-four{right:16px;bottom:124px;}.node-five{top:30px;}.node-six{bottom:30px;}.scanner-market-card{padding:18px;border-radius:22px;}.scanner-market-title-row{align-items:flex-start;}.scanner-market-title-row h3{font-size:17px;}}
        @media(max-width:430px){.scanner-markets-heading h2{font-size:33px;}.scanner-market-map{min-height:390px;}.orbit-three{width:310px;height:310px;}.orbit-two{width:235px;height:235px;}.scanner-market-card{gap:14px;}.scanner-market-icon{width:48px;height:48px;border-radius:16px;}.scanner-market-title-row{gap:8px;}}
      `}</style>
    </>
  );
}
