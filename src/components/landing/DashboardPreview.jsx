import { Activity, BarChart3, BellRing, CandlestickChart, ExternalLink, Flame, Layers3, Radar, TrendingUp } from "lucide-react";

const scannerTabs = ["All", "Top Gainers", "OI Spurts", "Volume", "Heatmap"];

const rows = [
  ["NIFTY", "Index Future", "+1.42%", "Bullish Momentum", "BUY"],
  ["BANKNIFTY CE", "Index Option", "+18.7% OI", "OI Spurt", "WATCH"],
  ["TATASTEEL", "Equity", "+3.22%", "Volume Breakout", "BUY"],
  ["RELIANCE", "Equity", "-1.18%", "Weak Momentum", "SELL"],
  ["GOLD", "Metals", "+0.84%", "Trend Building", "WATCH"],
];

const cards = [
  { icon: Radar, label: "Live Momentum", value: "Real-Time" },
  { icon: Flame, label: "Volume Breakouts", value: "Auto Detect" },
  { icon: Layers3, label: "Multi Market", value: "One Dashboard" },
];

export default function DashboardPreview() {
  return (
    <>
      <section className="dashboard-preview-section">
        <div className="scanner-landing-container">
          <div className="preview-heading">
            <span className="scanner-section-tag">
              <Activity size={15} />
              Product Preview
            </span>
            <h2>One Dashboard. Every Market Move.</h2>
            <p>Track live market activity, scan momentum, monitor OI build-up, detect volume spikes and open TradingView charts without jumping between multiple tools.</p>
          </div>

          <div className="preview-shell">
            <div className="preview-glow" />

            <div className="preview-toolbar">
              <div className="preview-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="preview-tabs">
                {scannerTabs.map((tab, index) => (
                  <button className={index === 0 ? "active" : ""} type="button" key={tab}>
                    {tab}
                  </button>
                ))}
              </div>

              <div className="preview-live">
                <span />
                Live
              </div>
            </div>

            <div className="preview-content-grid">
              <div className="preview-left">
                <div className="preview-metrics">
                  {cards.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="preview-metric-card" key={item.label}>
                        <Icon size={20} />
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    );
                  })}
                </div>

                <div className="preview-table">
                  <div className="preview-table-head">
                    <span>Symbol</span>
                    <span>Move</span>
                    <span>Signal</span>
                    <span>Status</span>
                  </div>

                  {rows.map((row) => (
                    <div className="preview-table-row" key={row[0]}>
                      <div>
                        <strong>{row[0]}</strong>
                        <span>{row[1]}</span>
                      </div>
                      <strong className={row[2].includes("-") ? "red" : "green"}>{row[2]}</strong>
                      <span>{row[3]}</span>
                      <em className={row[4].toLowerCase()}>{row[4]}</em>
                    </div>
                  ))}
                </div>
              </div>

              <div className="preview-right">
                <div className="signal-panel">
                  <div className="signal-icon">
                    <BellRing size={22} />
                  </div>
                  <h3>Smart Signal Layer</h3>
                  <p>BR30 Scanner highlights momentum, OI activity, volume expansion and market direction in a clean trader-friendly UI.</p>

                  <div className="signal-list">
                    <div>
                      <TrendingUp size={17} />
                      Long Build-Up Detection
                    </div>
                    <div>
                      <BarChart3 size={17} />
                      Volume Expansion Tracking
                    </div>
                    <div>
                      <CandlestickChart size={17} />
                      One Click TradingView Chart
                    </div>
                  </div>

                  <button type="button">
                    Open Scanner Preview <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .dashboard-preview-section{position:relative;padding:95px 0;background:linear-gradient(180deg,#020806 0%,#03110b 52%,#020806 100%);color:#fff;overflow:hidden;}
        .dashboard-preview-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,255,136,.16),transparent 42%),radial-gradient(circle at 88% 40%,rgba(34,211,238,.12),transparent 34%);pointer-events:none;}
        .preview-heading{position:relative;z-index:2;text-align:center;max-width:790px;margin:0 auto 46px;}
        .preview-heading h2{font-size:clamp(34px,4.6vw,58px);line-height:1.08;letter-spacing:-1.8px;margin:18px 0;color:#fff;font-weight:950;}
        .preview-heading p{color:#a8b8b0;font-size:17px;line-height:1.8;margin:0;}
        .preview-shell{position:relative;z-index:2;padding:18px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.1);box-shadow:0 34px 110px rgba(0,0,0,.42);backdrop-filter:blur(22px);overflow:hidden;}
        .preview-glow{position:absolute;width:460px;height:460px;border-radius:50%;right:-170px;top:-180px;background:rgba(0,255,136,.18);filter:blur(85px);pointer-events:none;}
        .preview-toolbar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 14px 18px;border-bottom:1px solid rgba(255,255,255,.08);}
        .preview-dots{display:flex;gap:8px;}
        .preview-dots span{width:11px;height:11px;border-radius:50%;background:#00ff88;}
        .preview-dots span:nth-child(2){background:#22d3ee;}
        .preview-dots span:nth-child(3){background:#ff4d6d;}
        .preview-tabs{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;}
        .preview-tabs button{border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.045);color:#a8b8b0;border-radius:999px;padding:9px 14px;font-size:12px;font-weight:900;cursor:pointer;}
        .preview-tabs button.active{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;border-color:transparent;}
        .preview-live{display:flex;align-items:center;gap:8px;color:#d9fff0;font-size:13px;font-weight:950;}
        .preview-live span{width:9px;height:9px;border-radius:50%;background:#00ff88;box-shadow:0 0 22px rgba(0,255,136,.8);}
        .preview-content-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.2fr .8fr;gap:18px;padding-top:18px;}
        .preview-left,.preview-right{min-width:0;}
        .preview-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px;}
        .preview-metric-card{padding:20px;border-radius:22px;background:rgba(0,0,0,.26);border:1px solid rgba(255,255,255,.08);}
        .preview-metric-card svg{color:#00ff88;margin-bottom:14px;}
        .preview-metric-card span{display:block;color:#8fa69a;font-size:12px;font-weight:850;margin-bottom:6px;}
        .preview-metric-card strong{font-size:18px;color:#fff;}
        .preview-table{border-radius:24px;background:rgba(0,0,0,.24);border:1px solid rgba(255,255,255,.08);overflow:hidden;}
        .preview-table-head,.preview-table-row{display:grid;grid-template-columns:1.2fr .8fr 1.1fr .7fr;gap:14px;align-items:center;}
        .preview-table-head{padding:15px 18px;color:#7f978b;font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.8px;border-bottom:1px solid rgba(255,255,255,.08);}
        .preview-table-row{padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.06);}
        .preview-table-row:last-child{border-bottom:0;}
        .preview-table-row div{display:grid;gap:5px;}
        .preview-table-row strong{color:#fff;font-size:14px;}
        .preview-table-row div span,.preview-table-row > span{color:#8fa69a;font-size:12px;font-weight:800;}
        .preview-table-row .green{color:#00ff88;}
        .preview-table-row .red{color:#ff4d6d;}
        .preview-table-row em{font-style:normal;text-align:center;padding:7px 10px;border-radius:999px;font-size:11px;font-weight:950;}
        .preview-table-row em.buy{background:rgba(0,255,136,.12);color:#00ff88;border:1px solid rgba(0,255,136,.22);}
        .preview-table-row em.sell{background:rgba(255,77,109,.12);color:#ff4d6d;border:1px solid rgba(255,77,109,.22);}
        .preview-table-row em.watch{background:rgba(34,211,238,.12);color:#22d3ee;border:1px solid rgba(34,211,238,.22);}
        .signal-panel{height:100%;padding:30px;border-radius:26px;background:linear-gradient(180deg,rgba(0,255,136,.12),rgba(255,255,255,.04));border:1px solid rgba(0,255,136,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);}
        .signal-icon{width:58px;height:58px;border-radius:19px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 18px 48px rgba(0,255,136,.28);}
        .signal-panel h3{font-size:29px;line-height:1.12;letter-spacing:-.8px;margin:24px 0 12px;color:#fff;}
        .signal-panel p{color:#a8b8b0;line-height:1.72;margin:0;font-size:15px;}
        .signal-list{display:grid;gap:13px;margin:25px 0;}
        .signal-list div{display:flex;align-items:center;gap:10px;color:#d9fff0;font-size:14px;font-weight:850;padding:13px;border-radius:16px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.07);}
        .signal-list svg{color:#00ff88;}
        .signal-panel button{width:100%;min-height:52px;border:0;border-radius:999px;background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;font-weight:950;display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;transition:.35s;}
        .signal-panel button:hover{transform:translateY(-3px);box-shadow:0 22px 58px rgba(0,255,136,.26);}
        @media(max-width:980px){.preview-content-grid{grid-template-columns:1fr;}.preview-toolbar{flex-wrap:wrap;}.preview-live{width:100%;justify-content:center;}.preview-tabs{order:3;width:100%;}.preview-metrics{grid-template-columns:repeat(3,1fr);}}
        @media(max-width:760px){.dashboard-preview-section{padding:65px 0;}.preview-shell{padding:12px;border-radius:26px;}.preview-toolbar{padding:10px 8px 15px;}.preview-metrics{grid-template-columns:1fr;}.preview-table{overflow-x:auto;}.preview-table-head,.preview-table-row{min-width:680px;}.signal-panel{padding:24px;border-radius:22px;}.signal-panel h3{font-size:25px;}.preview-heading p{font-size:15px;}}
        @media(max-width:430px){.preview-heading h2{font-size:33px;}.preview-tabs button{font-size:11px;padding:8px 11px;}.signal-panel{padding:20px;}.preview-metric-card{padding:18px;}}
      `}</style>
    </>
  );
}
