import { BarChart3, BellRing, Globe2, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "12+",
    label: "Market Segments",
    text: "Equity, options, futures, forex, metals, US stocks and ETFs tracking.",
  },
  {
    icon: BarChart3,
    value: "Live",
    label: "Market Scanner",
    text: "Real-time momentum, gainers, losers, OI spurts and volume breakouts.",
  },
  {
    icon: BellRing,
    value: "Smart",
    label: "Signal Layer",
    text: "BUY, SELL, WATCH, build-up and breakout type market insights.",
  },
  {
    icon: ShieldCheck,
    value: "SaaS",
    label: "Protected Access",
    text: "Login, subscription, trial and premium access system already ready.",
  },
];

export default function Stats() {
  return (
    <>
      <section className="scanner-stats-section">
        <div className="scanner-landing-container scanner-stats-grid">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div className="scanner-stat-card" key={item.label}>
                <div className="scanner-stat-icon">
                  <Icon size={24} />
                </div>

                <h3>{item.value}</h3>
                <strong>{item.label}</strong>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .scanner-stats-section{position:relative;padding:30px 0 95px;background:#020806;color:#fff;overflow:hidden;}
        .scanner-stats-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at center,rgba(0,255,136,.1),transparent 42%);pointer-events:none;}
        .scanner-stats-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
        .scanner-stat-card{position:relative;padding:28px;border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 75px rgba(0,0,0,.25);backdrop-filter:blur(18px);overflow:hidden;transition:.35s;}
        .scanner-stat-card:before{content:"";position:absolute;inset:auto -20% -45% -20%;height:120px;background:radial-gradient(circle,rgba(0,255,136,.16),transparent 68%);opacity:0;transition:.35s;}
        .scanner-stat-card:hover{transform:translateY(-8px);border-color:rgba(0,255,136,.34);}
        .scanner-stat-card:hover:before{opacity:1;}
        .scanner-stat-icon{width:58px;height:58px;border-radius:19px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 18px 45px rgba(0,255,136,.24);margin-bottom:22px;}
        .scanner-stat-card h3{margin:0 0 6px;font-size:42px;line-height:1;color:#fff;letter-spacing:-1.3px;font-weight:950;}
        .scanner-stat-card strong{display:block;color:#d9fff0;font-size:15px;margin-bottom:12px;}
        .scanner-stat-card p{margin:0;color:#91a99c;font-size:14px;line-height:1.72;}
        @media(max-width:1050px){.scanner-stats-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:760px){.scanner-stats-section{padding:20px 0 65px;}.scanner-stats-grid{grid-template-columns:1fr;gap:15px;}.scanner-stat-card{padding:24px;border-radius:24px;}.scanner-stat-card h3{font-size:36px;}}
      `}</style>
    </>
  );
}
