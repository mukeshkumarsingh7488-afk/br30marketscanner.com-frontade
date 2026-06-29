import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const roadmapItems = [
  {
    phase: "Phase 01",
    status: "Live Foundation",
    title: "Core Scanner Platform",
    text: "BR30 Market Scanner starts with structured market pages, authentication, subscription access, and fast scanner views for active traders.",
    points: ["Top Gainers", "Top Losers", "OI Spurts", "Volume Breakout", "Protected Dashboard"],
  },
  {
    phase: "Phase 02",
    status: "In Progress",
    title: "Advanced Signal Intelligence",
    text: "The next upgrade focuses on cleaner signal interpretation, better filtering, and stronger multi-market scanning logic.",
    points: ["Signal summary", "Market strength filters", "Trend-side classification", "Better symbol grouping", "Cleaner scanner cards"],
  },
  {
    phase: "Phase 03",
    status: "Planned",
    title: "Alerts & Watchlist System",
    text: "Users will be able to create personalized watchlists and receive important scanner updates based on selected market conditions.",
    points: ["Custom watchlists", "Price movement alerts", "Volume alerts", "OI activity alerts", "User-level preferences"],
  },
  {
    phase: "Phase 04",
    status: "Planned",
    title: "Professional Analytics Layer",
    text: "BR30 Market Scanner will evolve into a deeper analytics platform with reports, historical views, and institutional-style insights.",
    points: ["Historical scanner data", "Market breadth view", "Sector heat insights", "Signal performance reports", "Advanced analytics dashboard"],
  },
  {
    phase: "Phase 05",
    status: "Future Vision",
    title: "API & Ecosystem Expansion",
    text: "The long-term vision is to connect BR30 Market Scanner with the broader BR30 ecosystem through controlled API access and premium integrations.",
    points: ["API access", "Partner integrations", "BR30 ecosystem sync", "Automation-ready data", "Enterprise-grade access control"],
  },
];

export default function Roadmap() {
  return (
    <>
      <Navbar />

      <main className="roadmap-page">
        <section className="roadmap-hero">
          <div className="roadmap-container">
            <span className="roadmap-kicker">Product Roadmap</span>
            <h1>Building the Future of BR30 Market Scanner</h1>
            <p>Explore the planned evolution of BR30 Market Scanner, from core scanner tools to advanced market intelligence, alerts, analytics, and ecosystem-level integrations.</p>
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-container">
            <div className="roadmap-heading">
              <span>Execution Timeline</span>
              <h2>Scanner upgrades planned step by step</h2>
              <p>This roadmap highlights the product direction. Features may evolve based on platform stability, trader requirements, compliance needs, and technical feasibility.</p>
            </div>

            <div className="roadmap-list">
              {roadmapItems.map((item, index) => (
                <article className="roadmap-card" key={item.title}>
                  <div className="roadmap-index">{String(index + 1).padStart(2, "0")}</div>

                  <div className="roadmap-card-content">
                    <div className="roadmap-meta">
                      <span>{item.phase}</span>
                      <strong>{item.status}</strong>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <div className="roadmap-points">
                      {item.points.map((point) => (
                        <span key={point}>{point}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap-note-section">
          <div className="roadmap-container">
            <div className="roadmap-note">
              <span>Important Note</span>
              <h2>Roadmap items are directional, not guaranteed release commitments.</h2>
              <p>BR30 Market Scanner is continuously improved based on real platform usage, market data stability, security requirements, and user feedback. Final release timing and feature scope may change.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .roadmap-page{min-height:100vh;background:radial-gradient(circle at top left,rgba(0,255,136,0.14),transparent 34%),radial-gradient(circle at top right,rgba(34,211,238,0.12),transparent 30%),linear-gradient(180deg,#020806 0%,#03130d 52%,#020806 100%);color:#eafff5;overflow:hidden;}
        .roadmap-container{width:min(1160px,92%);margin:0 auto;}
        .roadmap-hero{padding:118px 0 70px;position:relative;}
        .roadmap-hero:before{content:"";position:absolute;inset:24px auto auto 50%;width:520px;height:520px;background:rgba(0,255,136,0.08);filter:blur(90px);transform:translateX(-50%);pointer-events:none;}
        .roadmap-kicker{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border:1px solid rgba(0,255,136,0.26);border-radius:999px;background:rgba(0,255,136,0.08);color:#00ff88;font-size:13px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;position:relative;z-index:1;}
        .roadmap-hero h1{max-width:860px;margin:22px 0 18px;font-size:clamp(38px,6vw,78px);line-height:0.95;letter-spacing:-0.06em;color:#ffffff;position:relative;z-index:1;}
        .roadmap-hero p{max-width:760px;margin:0;color:#b8d8c8;font-size:18px;line-height:1.75;position:relative;z-index:1;}
        .roadmap-section{padding:28px 0 90px;}
        .roadmap-heading{max-width:760px;margin-bottom:38px;}
        .roadmap-heading span{color:#22d3ee;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .roadmap-heading h2{margin:12px 0 12px;color:#ffffff;font-size:clamp(30px,4vw,48px);line-height:1.05;letter-spacing:-0.04em;}
        .roadmap-heading p{margin:0;color:#a9c8b9;font-size:16px;line-height:1.75;}
        .roadmap-list{display:grid;gap:22px;position:relative;}
        .roadmap-card{display:grid;grid-template-columns:92px 1fr;gap:22px;padding:24px;border:1px solid rgba(0,255,136,0.14);border-radius:28px;background:linear-gradient(135deg,rgba(3,19,13,0.94),rgba(2,8,6,0.94));box-shadow:0 24px 70px rgba(0,0,0,0.35);position:relative;overflow:hidden;}
        .roadmap-card:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,255,136,0.08),transparent 42%,rgba(34,211,238,0.07));opacity:0;transition:0.3s ease;}
        .roadmap-card:hover:before{opacity:1;}
        .roadmap-index{width:72px;height:72px;border-radius:22px;display:grid;place-items:center;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.26);color:#00ff88;font-size:24px;font-weight:950;position:relative;z-index:1;}
        .roadmap-card-content{position:relative;z-index:1;}
        .roadmap-meta{display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px;}
        .roadmap-meta span{padding:7px 11px;border-radius:999px;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.24);color:#7be9ff;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;}
        .roadmap-meta strong{padding:7px 11px;border-radius:999px;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.24);color:#00ff88;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;}
        .roadmap-card h3{margin:0 0 10px;color:#ffffff;font-size:26px;line-height:1.15;letter-spacing:-0.03em;}
        .roadmap-card p{margin:0 0 18px;color:#a9c8b9;font-size:15px;line-height:1.7;}
        .roadmap-points{display:flex;flex-wrap:wrap;gap:10px;}
        .roadmap-points span{padding:9px 12px;border-radius:999px;background:rgba(255,255,255,0.045);border:1px solid rgba(255,255,255,0.08);color:#dfffee;font-size:13px;font-weight:700;}
        .roadmap-note-section{padding:0 0 96px;}
        .roadmap-note{padding:34px;border-radius:30px;background:linear-gradient(135deg,rgba(0,255,136,0.12),rgba(34,211,238,0.09),rgba(2,8,6,0.94));border:1px solid rgba(0,255,136,0.2);box-shadow:0 30px 90px rgba(0,0,0,0.38);}
        .roadmap-note span{display:inline-flex;margin-bottom:14px;color:#00ff88;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .roadmap-note h2{max-width:780px;margin:0 0 12px;color:#ffffff;font-size:clamp(26px,4vw,42px);line-height:1.08;letter-spacing:-0.04em;}
        .roadmap-note p{max-width:820px;margin:0;color:#b8d8c8;font-size:16px;line-height:1.75;}
        @media(max-width:900px){.roadmap-hero{padding:96px 0 56px;}.roadmap-card{grid-template-columns:1fr;gap:18px;}.roadmap-index{width:64px;height:64px;font-size:21px;}.roadmap-card h3{font-size:23px;}}
        @media(max-width:560px){.roadmap-container{width:min(100% - 32px,1160px);}.roadmap-hero{padding:86px 0 46px;}.roadmap-hero p{font-size:16px;}.roadmap-section{padding:18px 0 70px;}.roadmap-card{padding:20px;border-radius:24px;}.roadmap-meta{align-items:flex-start;}.roadmap-points span{font-size:12px;}.roadmap-note{padding:24px;border-radius:24px;}.roadmap-note-section{padding-bottom:72px;}}
      `}</style>
    </>
  );
}
