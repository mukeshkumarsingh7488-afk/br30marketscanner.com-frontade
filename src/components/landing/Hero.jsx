import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, BellRing, CandlestickChart, Gauge, LineChart, Radio, ShieldCheck, Sparkles, TrendingDown, TrendingUp, Zap } from "lucide-react";

const scanRows = [
  { symbol: "BANKNIFTY", type: "Index Option", signal: "BUY Momentum", value: "+2.48%", status: "up" },
  { symbol: "RELIANCE", type: "Equity Stock", signal: "Volume Breakout", value: "+1.82%", status: "up" },
  { symbol: "BTCUSDT", type: "Crypto Futures", signal: "Long Build-Up", value: "+4.12%", status: "up" },
  { symbol: "NIFTY CE", type: "Option Chain", signal: "OI Spurt", value: "+18.7%", status: "neutral" },
  { symbol: "HDFC BANK", type: "Equity Stock", signal: "Weak Momentum", value: "-1.16%", status: "down" },
];

const trustItems = [
  { icon: ShieldCheck, text: "Subscription Protected" },
  { icon: Radio, text: "Live Scanner Dashboard" },
  { icon: BellRing, text: "Alert Ready System" },
];

export default function Hero() {
  return (
    <>
      <section id="hero" className="scanner-hero">
        <div className="scanner-hero-orb scanner-hero-orb-one" />
        <div className="scanner-hero-orb scanner-hero-orb-two" />
        <div className="scanner-hero-grid-bg" />

        <div className="scanner-landing-container scanner-hero-grid">
          <div className="scanner-hero-content">
            <div className="scanner-section-tag">
              <Sparkles size={15} />
              Ultra Premium Market Intelligence SaaS
            </div>

            <h1>
              Scan the Market.
              <span> Catch Moves Earlier.</span>
            </h1>

            <p>BR30 Market Scanner helps traders monitor real-time momentum, top gainers, top losers, OI spurts, volume breakouts, heatmap strength and TradingView charts from one premium dashboard.</p>

            <div className="scanner-hero-actions">
              <Link to="/register" className="scanner-btn-primary">
                Start Free Trial <ArrowRight size={18} />
              </Link>

              <Link to="/login" className="scanner-btn-outline">
                Login Dashboard
              </Link>
            </div>

            <div className="scanner-trust-row">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text}>
                    <Icon size={18} />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="scanner-hero-visual">
            <div className="scanner-terminal-card">
              <div className="scanner-terminal-top">
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <strong>BR30 LIVE SCANNER</strong>
              </div>

              <div className="scanner-terminal-metrics">
                <div>
                  <Gauge size={18} />
                  <span>Market Pulse</span>
                  <strong>78%</strong>
                </div>
                <div>
                  <BarChart3 size={18} />
                  <span>Volume Spikes</span>
                  <strong>38</strong>
                </div>
                <div>
                  <CandlestickChart size={18} />
                  <span>OI Signals</span>
                  <strong>24</strong>
                </div>
              </div>

              <div className="scanner-live-table">
                {scanRows.map((row) => (
                  <div className={`scanner-live-row ${row.status}`} key={row.symbol}>
                    <div>
                      <strong>{row.symbol}</strong>
                      <span>{row.type}</span>
                    </div>

                    <div>
                      <span>{row.signal}</span>
                      <strong>{row.value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scanner-floating-card scanner-floating-card-one">
              <TrendingUp size={18} />
              <span>Long Build-Up</span>
              <strong>Detected</strong>
            </div>

            <div className="scanner-floating-card scanner-floating-card-two">
              <LineChart size={18} />
              <span>TradingView</span>
              <strong>One Click Chart</strong>
            </div>

            <div className="scanner-floating-card scanner-floating-card-three">
              <TrendingDown size={18} />
              <span>Risk Zone</span>
              <strong>Weak Momentum</strong>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .scanner-hero{position:relative;min-height:100vh;padding:132px 0 80px;overflow:hidden;color:#fff;background:radial-gradient(circle at top left,rgba(0,255,136,.22),transparent 34%),radial-gradient(circle at top right,rgba(34,211,238,.16),transparent 32%),linear-gradient(180deg,#020806 0%,#04110c 48%,#020806 100%);}
        .scanner-hero-orb{position:absolute;border-radius:50%;filter:blur(92px);pointer-events:none;}
        .scanner-hero-orb-one{width:440px;height:440px;left:-180px;top:100px;background:rgba(0,255,136,.30);}
        .scanner-hero-orb-two{width:380px;height:380px;right:-130px;top:160px;background:rgba(34,211,238,.24);}
        .scanner-hero-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(to bottom,black,transparent 86%);pointer-events:none;}
        .scanner-landing-container{width:min(1180px,calc(100% - 32px));margin:auto;}
        .scanner-hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.03fr .97fr;gap:54px;align-items:center;}
        .scanner-section-tag{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;font-size:13px;font-weight:900;color:#baffdf;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.28);box-shadow:0 18px 48px rgba(0,255,136,.12);}
        .scanner-hero-content h1{margin:24px 0 20px;font-size:clamp(46px,6.2vw,82px);line-height:.98;letter-spacing:-3px;font-weight:950;color:#fff;}
        .scanner-hero-content h1 span{display:block;background:linear-gradient(135deg,#00ff88,#22d3ee,#fff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}
        .scanner-hero-content p{max-width:730px;color:#a8b8b0;font-size:18px;line-height:1.82;margin:0;}
        .scanner-hero-actions{display:flex;gap:15px;flex-wrap:wrap;margin-top:34px;}
        .scanner-btn-primary,.scanner-btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:9px;text-decoration:none;transition:.35s;font-weight:950;border-radius:999px;min-height:54px;padding:14px 25px;}
        .scanner-btn-primary{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;box-shadow:0 20px 52px rgba(0,255,136,.26);}
        .scanner-btn-primary:hover{transform:translateY(-3px);box-shadow:0 28px 74px rgba(0,255,136,.38);}
        .scanner-btn-outline{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.055);color:#fff;}
        .scanner-btn-outline:hover{background:rgba(255,255,255,.1);transform:translateY(-3px);}
        .scanner-trust-row{display:flex;gap:13px;flex-wrap:wrap;margin-top:31px;}
        .scanner-trust-row div{display:inline-flex;align-items:center;gap:8px;color:#d7fff0;font-size:13px;font-weight:850;padding:10px 13px;border-radius:999px;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.09);}
        .scanner-trust-row svg{color:#00ff88;}
        .scanner-hero-visual{position:relative;min-height:570px;display:flex;align-items:center;justify-content:center;}
        .scanner-terminal-card{width:min(520px,100%);padding:24px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.12);box-shadow:0 35px 110px rgba(0,0,0,.46);backdrop-filter:blur(22px);overflow:hidden;}
        .scanner-terminal-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;}
        .scanner-terminal-top div{display:flex;align-items:center;gap:8px;}
        .scanner-terminal-top span{width:11px;height:11px;border-radius:50%;background:#00ff88;}
        .scanner-terminal-top span:nth-child(2){background:#22d3ee;}
        .scanner-terminal-top span:nth-child(3){background:#ff4d6d;}
        .scanner-terminal-top strong{font-size:12px;letter-spacing:1.2px;color:#d8fff0;}
        .scanner-terminal-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:15px;}
        .scanner-terminal-metrics div{padding:16px;border-radius:20px;background:rgba(0,0,0,.28);border:1px solid rgba(255,255,255,.08);}
        .scanner-terminal-metrics svg{color:#00ff88;margin-bottom:12px;}
        .scanner-terminal-metrics span{display:block;color:#92a79b;font-size:12px;font-weight:800;margin-bottom:6px;}
        .scanner-terminal-metrics strong{font-size:22px;color:#fff;}
        .scanner-live-table{display:grid;gap:12px;}
        .scanner-live-row{display:flex;justify-content:space-between;gap:18px;align-items:center;padding:17px;border-radius:19px;background:rgba(0,0,0,.26);border:1px solid rgba(255,255,255,.08);}
        .scanner-live-row div{display:grid;gap:5px;}
        .scanner-live-row div:last-child{text-align:right;}
        .scanner-live-row strong{color:#fff;font-size:15px;}
        .scanner-live-row span{color:#8fa69a;font-size:12px;font-weight:800;}
        .scanner-live-row.up div:last-child strong{color:#00ff88;}
        .scanner-live-row.down div:last-child strong{color:#ff4d6d;}
        .scanner-live-row.neutral div:last-child strong{color:#22d3ee;}
        .scanner-floating-card{position:absolute;z-index:4;display:grid;gap:6px;min-width:160px;padding:17px 18px;border-radius:22px;background:rgba(3,14,10,.82);border:1px solid rgba(0,255,136,.22);box-shadow:0 24px 65px rgba(0,0,0,.38);backdrop-filter:blur(18px);}
        .scanner-floating-card svg{color:#00ff88;}
        .scanner-floating-card span{font-size:12px;font-weight:850;color:#92a79b;}
        .scanner-floating-card strong{font-size:15px;color:#fff;}
        .scanner-floating-card-one{left:0;top:92px;}
        .scanner-floating-card-two{right:0;top:210px;}
        .scanner-floating-card-three{left:28px;bottom:72px;border-color:rgba(255,77,109,.22);}
        .scanner-floating-card-three svg{color:#ff4d6d;}
        @media(max-width:1050px){.scanner-hero-grid{grid-template-columns:1fr;gap:42px;}.scanner-hero-content{text-align:center;}.scanner-hero-content p{margin:auto;}.scanner-hero-actions,.scanner-trust-row{justify-content:center;}.scanner-hero-visual{min-height:540px;}.scanner-terminal-card{max-width:640px;}}
        @media(max-width:760px){.scanner-hero{padding:112px 0 62px;}.scanner-hero-content h1{font-size:clamp(40px,12vw,58px);letter-spacing:-1.6px;}.scanner-hero-content p{font-size:15.5px;}.scanner-hero-actions{flex-direction:column;}.scanner-btn-primary,.scanner-btn-outline{width:100%;}.scanner-trust-row div{width:100%;justify-content:center;}.scanner-terminal-card{padding:18px;border-radius:26px;}.scanner-terminal-metrics{grid-template-columns:1fr;}.scanner-hero-visual{display:block;min-height:auto;}.scanner-floating-card{position:relative;inset:auto!important;width:100%;margin-top:13px;}.scanner-live-row{align-items:flex-start;}.scanner-live-row strong{font-size:14px;}}
        @media(max-width:430px){.scanner-hero{padding-top:100px;}.scanner-landing-container{width:min(100% - 24px,1180px);}.scanner-hero-content h1{font-size:40px;}.scanner-section-tag{font-size:11.5px;padding:8px 12px;}.scanner-terminal-top strong{font-size:10px;}.scanner-live-row{padding:15px;gap:10px;}.scanner-live-row span{font-size:11px;}}
      `}</style>
    </>
  );
}
