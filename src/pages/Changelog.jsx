import { Link } from "react-router-dom";
import { Activity, ArrowRight, CheckCircle2, GitBranch, History, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const stats = [
  { value: "V1.0", label: "Current Build" },
  { value: "Live", label: "Scanner System" },
  { value: "2026", label: "Product Timeline" },
  { value: "SaaS", label: "Platform Updates" },
];

const releases = [
  {
    version: "Version 1.0",
    date: "June 2026",
    badge: "Current",
    title: "Initial BR30 Market Scanner Launch",
    text: "The first production-ready version of BR30 Market Scanner with live dashboard access, market scanner modules, authentication, subscription flow, and premium landing experience.",
    points: ["Landing page experience", "Scanner dashboard foundation", "Authentication and protected access", "Subscription-ready SaaS structure"],
  },
  {
    version: "Version 1.1",
    date: "Upcoming",
    badge: "Next",
    title: "Scanner Experience Improvements",
    text: "Focused improvements around scanner clarity, filter behavior, dashboard polish, mobile responsiveness, and better user guidance for active traders.",
    points: ["Improved filter UX", "Better scanner layout", "Mobile dashboard polish", "Cleaner signal visibility"],
  },
  {
    version: "Version 1.2",
    date: "Planned",
    badge: "Planned",
    title: "Alerts and Watchlist Workflow",
    text: "Future update planned for watchlists, saved symbols, alert-ready workflows, and faster monitoring of selected market opportunities.",
    points: ["Custom watchlists", "Saved scanner views", "Alert-ready architecture", "Priority symbol tracking"],
  },
  {
    version: "Version 2.0",
    date: "Future",
    badge: "Future",
    title: "Advanced Intelligence Layer",
    text: "A future intelligence layer planned for deeper market insights, advanced analytics, AI-assisted discovery, and professional-grade decision support.",
    points: ["Advanced analytics", "AI-assisted insights", "Historical scanner intelligence", "Professional market dashboards"],
  },
];

export default function Changelog() {
  return (
    <>
      <div className="scanner-change-page">
        <Navbar />

        <main>
          <section className="scanner-change-hero">
            <div className="scanner-change-orb scanner-change-orb-one" />
            <div className="scanner-change-orb scanner-change-orb-two" />

            <div className="scanner-change-container scanner-change-hero-grid">
              <div className="scanner-change-hero-content">
                <span className="scanner-change-tag">
                  <Sparkles size={14} />
                  Product Changelog
                </span>

                <h1>
                  Track Every Major <span>BR30 Scanner Update.</span>
                </h1>

                <p>Follow the evolution of BR30 Market Scanner across releases, improvements, upcoming features, and future product milestones.</p>

                <div className="scanner-change-actions">
                  <Link to="/roadmap" className="scanner-change-btn-primary">
                    View Roadmap <ArrowRight size={18} />
                  </Link>

                  <Link to="/documentation" className="scanner-change-btn-outline">
                    Documentation
                  </Link>
                </div>
              </div>

              <div className="scanner-change-panel">
                <div className="scanner-change-panel-top">
                  <span />
                  <span />
                  <span />
                  <strong>CHANGELOG</strong>
                </div>

                <div className="scanner-change-panel-card main">
                  <History size={28} />
                  <div>
                    <h3>Release History</h3>
                    <p>Monitor product releases, scanner upgrades, platform changes, and roadmap progress in one place.</p>
                  </div>
                </div>

                <div className="scanner-change-panel-card">
                  <GitBranch size={24} />
                  <div>
                    <h3>Version Tracking</h3>
                    <p>Every major release is organized by version, timeline, status, and product focus.</p>
                  </div>
                </div>

                <div className="scanner-change-panel-card">
                  <Rocket size={24} />
                  <div>
                    <h3>Future Ready</h3>
                    <p>BR30 Market Scanner will continue evolving with alerts, watchlists, analytics, and intelligence features.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="scanner-change-stats-section">
            <div className="scanner-change-container scanner-change-stats-grid">
              {stats.map((item) => (
                <div className="scanner-change-stat-card" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="scanner-change-intro">
            <div className="scanner-change-container scanner-change-intro-grid">
              <div className="scanner-change-intro-left">
                <span className="scanner-change-tag">Release Notes</span>
                <h2>Built Step by Step for Serious Market Scanning.</h2>
              </div>

              <div className="scanner-change-intro-right">
                <p>BR30 Market Scanner is built as a long-term SaaS product. Every update is planned to improve speed, clarity, reliability, market coverage, and the trader workflow.</p>

                <p>The changelog keeps the product journey transparent so users can understand what has shipped, what is improving, and what is planned next.</p>

                <div className="scanner-change-highlight">
                  <CheckCircle2 size={22} />
                  <span>Transparent product updates designed to build trust, clarity, and long-term user confidence.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="scanner-change-timeline-section">
            <div className="scanner-change-container">
              <div className="scanner-change-section-heading">
                <span className="scanner-change-tag">Timeline</span>
                <h2>Product Evolution Timeline</h2>
                <p>Explore key releases, upcoming improvements, and future development direction for BR30 Market Scanner.</p>
              </div>

              <div className="scanner-change-timeline">
                {releases.map((release, index) => (
                  <div className="scanner-change-release-card" key={release.version}>
                    <div className="scanner-change-release-index">{String(index + 1).padStart(2, "0")}</div>

                    <div className="scanner-change-release-content">
                      <div className="scanner-change-release-meta">
                        <span>{release.version}</span>
                        <em>{release.date}</em>
                        <strong>{release.badge}</strong>
                      </div>

                      <h3>{release.title}</h3>
                      <p>{release.text}</p>

                      <div className="scanner-change-release-points">
                        {release.points.map((point) => (
                          <div key={point}>
                            <ShieldCheck size={16} />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="scanner-change-final-cta">
            <div className="scanner-change-container scanner-change-final-card">
              <Zap size={38} />
              <h2>Stay Updated With BR30 Market Scanner.</h2>
              <p>Follow product releases, scanner improvements, and upcoming platform upgrades as BR30 Market Scanner continues to grow into a complete market intelligence SaaS.</p>
              <Link to="/release-notes" className="scanner-change-btn-primary">
                View Release Notes
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style>{`
.scanner-change-page{min-height:100vh;padding-top:82px;overflow-x:hidden;color:#fff;background:radial-gradient(circle at top left,rgba(0,255,136,.18),transparent 35%),radial-gradient(circle at top right,rgba(34,211,238,.14),transparent 32%),linear-gradient(180deg,#020806 0%,#03130d 48%,#020806 100%);}
.scanner-change-container{width:min(1180px,calc(100% - 32px));margin:auto;}
.scanner-change-hero{position:relative;padding:58px 0 28px;overflow:hidden;}
.scanner-change-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
.scanner-change-orb-one{width:420px;height:420px;left:-160px;top:80px;background:rgba(0,255,136,.28);}
.scanner-change-orb-two{width:360px;height:360px;right:-130px;top:150px;background:rgba(34,211,238,.22);}
.scanner-change-hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.08fr .92fr;gap:48px;align-items:center;}
.scanner-change-tag{display:inline-flex;align-items:center;gap:8px;padding:8px 15px;border-radius:999px;font-size:13px;font-weight:850;color:#baffdf;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.28);}
.scanner-change-hero-content h1{margin:24px 0 20px;font-size:clamp(44px,6vw,76px);line-height:1.02;letter-spacing:-2.5px;font-weight:950;color:#fff;}
.scanner-change-hero-content h1 span{background:linear-gradient(135deg,#00ff88,#22d3ee,#fff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}
.scanner-change-hero-content p{max-width:720px;color:#a8b8b0;font-size:18px;line-height:1.8;margin:0;}
.scanner-change-actions{display:flex;gap:15px;flex-wrap:wrap;margin-top:34px;}
.scanner-change-btn-primary,.scanner-change-btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;transition:.35s;font-weight:950;border-radius:999px;min-height:52px;padding:13px 24px;}
.scanner-change-btn-primary{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;box-shadow:0 18px 45px rgba(0,255,136,.28);}
.scanner-change-btn-primary:hover{transform:translateY(-3px);box-shadow:0 26px 70px rgba(0,255,136,.38);}
.scanner-change-btn-outline{border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:#fff;}
.scanner-change-btn-outline:hover{background:rgba(255,255,255,.1);transform:translateY(-3px);}
.scanner-change-panel{position:relative;padding:24px;border-radius:32px;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.1);box-shadow:0 35px 110px rgba(0,0,0,.45);backdrop-filter:blur(22px);overflow:hidden;}
.scanner-change-panel-top{display:flex;align-items:center;gap:8px;margin-bottom:22px;}
.scanner-change-panel-top span{width:11px;height:11px;border-radius:50%;background:#00ff88;}
.scanner-change-panel-top span:nth-child(2){background:#22d3ee;}
.scanner-change-panel-top span:nth-child(3){background:#ff4d6d;}
.scanner-change-panel-top strong{margin-left:auto;font-size:13px;color:#d9fff0;}
.scanner-change-panel-card{display:flex;gap:16px;align-items:flex-start;padding:20px;border-radius:22px;background:rgba(0,0,0,.26);border:1px solid rgba(255,255,255,.08);margin-top:14px;}
.scanner-change-panel-card.main{background:linear-gradient(135deg,rgba(0,255,136,.24),rgba(34,211,238,.12));}
.scanner-change-panel-card svg{color:#00ff88;flex-shrink:0;}
.scanner-change-panel-card h3{margin:0 0 7px;color:#fff;font-size:19px;}
.scanner-change-panel-card p{margin:0;color:#a8b8b0;line-height:1.65;font-size:14px;}
.scanner-change-stats-section{padding:20px 0 70px;}
.scanner-change-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.scanner-change-stat-card{padding:30px;border-radius:26px;text-align:center;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);}
.scanner-change-stat-card h3{margin:0 0 8px;font-size:42px;color:#fff;letter-spacing:-1.2px;}
.scanner-change-stat-card p{margin:0;color:#a8b8b0;font-weight:800;font-size:14px;}
.scanner-change-intro,.scanner-change-timeline-section,.scanner-change-final-cta{padding:80px 0;}
.scanner-change-intro-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:34px;align-items:stretch;}
.scanner-change-intro-left,.scanner-change-intro-right,.scanner-change-release-card,.scanner-change-final-card{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);box-shadow:0 28px 80px rgba(0,0,0,.26);}
.scanner-change-intro-left,.scanner-change-intro-right{border-radius:30px;padding:36px;}
.scanner-change-intro-left h2,.scanner-change-final-card h2{margin:20px 0 0;font-size:clamp(34px,4vw,54px);line-height:1.08;letter-spacing:-1.5px;color:#fff;}
.scanner-change-intro-right p,.scanner-change-final-card p{color:#a8b8b0;font-size:16px;line-height:1.8;}
.scanner-change-highlight{margin-top:24px;padding:18px;border-radius:18px;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.22);display:flex;gap:12px;align-items:center;color:#fff;font-weight:850;}
.scanner-change-highlight svg{color:#00ff88;flex-shrink:0;}
.scanner-change-section-heading{max-width:760px;margin:0 auto 45px;text-align:center;}
.scanner-change-section-heading h2{font-size:clamp(34px,4vw,52px);line-height:1.1;margin:18px 0;letter-spacing:-1.6px;color:#fff;}
.scanner-change-section-heading p{color:#a8b8b0;line-height:1.8;font-size:17px;margin:0;}
.scanner-change-timeline{display:grid;gap:22px;}
.scanner-change-release-card{position:relative;display:grid;grid-template-columns:auto 1fr;gap:22px;border-radius:30px;padding:28px;transition:.35s;overflow:hidden;}
.scanner-change-release-card:hover{transform:translateY(-6px);border-color:rgba(0,255,136,.36);}
.scanner-change-release-index{width:70px;height:70px;border-radius:22px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);font-size:24px;font-weight:950;box-shadow:0 18px 45px rgba(0,255,136,.28);}
.scanner-change-release-meta{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px;}
.scanner-change-release-meta span,.scanner-change-release-meta em,.scanner-change-release-meta strong{font-style:normal;padding:7px 11px;border-radius:999px;font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.7px;}
.scanner-change-release-meta span{color:#00ff88;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.22);}
.scanner-change-release-meta em{color:#22d3ee;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.18);}
.scanner-change-release-meta strong{color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);}
.scanner-change-release-content h3{margin:0 0 12px;color:#fff;font-size:26px;letter-spacing:-.8px;}
.scanner-change-release-content p{margin:0;color:#a8b8b0;font-size:15px;line-height:1.8;}
.scanner-change-release-points{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:22px;}
.scanner-change-release-points div{display:flex;align-items:center;gap:9px;padding:12px;border-radius:15px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.07);color:#d9fff0;font-size:13px;font-weight:850;}
.scanner-change-release-points svg{color:#00ff88;flex-shrink:0;}
.scanner-change-final-card{border-radius:34px;padding:62px;text-align:center;background:linear-gradient(135deg,#006b3b,#00a85a,#22d3ee);}
.scanner-change-final-card svg{color:#fff;margin-bottom:18px;}
.scanner-change-final-card p{max-width:680px;margin:18px auto 30px;color:#edfff7;}
.scanner-change-final-card .scanner-change-btn-primary{background:#fff;color:#006b3b;box-shadow:none;}
*{box-sizing:border-box;}
@media(max-width:1050px){.scanner-change-hero-grid,.scanner-change-intro-grid{grid-template-columns:1fr;}.scanner-change-panel{max-width:760px;margin:auto;width:100%;}.scanner-change-stats-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:760px){.scanner-change-page{padding-top:72px;}.scanner-change-hero{padding:32px 0 55px;}.scanner-change-hero-grid{gap:30px;}.scanner-change-hero-content h1{font-size:clamp(38px,11vw,56px);letter-spacing:-1.4px;}.scanner-change-hero-content p{font-size:15px;}.scanner-change-actions{flex-direction:column;}.scanner-change-actions a{width:100%;}.scanner-change-panel{padding:18px;border-radius:24px;}.scanner-change-panel-card{padding:16px;border-radius:18px;}.scanner-change-stats-section{padding:18px 0 45px;}.scanner-change-intro,.scanner-change-timeline-section,.scanner-change-final-cta{padding:55px 0;}.scanner-change-stats-grid{grid-template-columns:1fr;gap:16px;}.scanner-change-stat-card{padding:24px;border-radius:22px;}.scanner-change-intro-left,.scanner-change-intro-right,.scanner-change-final-card{padding:26px;border-radius:24px;}.scanner-change-intro-left h2,.scanner-change-final-card h2{font-size:clamp(30px,9vw,42px);}.scanner-change-release-card{grid-template-columns:1fr;padding:22px;border-radius:24px;}.scanner-change-release-points{grid-template-columns:1fr;}.scanner-change-final-card{padding:34px 24px;}}
@media(max-width:430px){.scanner-change-hero-content h1{font-size:40px;}.scanner-change-panel-top strong{font-size:11px;}.scanner-change-panel-card h3{font-size:17px;}.scanner-change-stat-card h3{font-size:36px;}.scanner-change-release-content h3{font-size:22px;}.scanner-change-release-index{width:58px;height:58px;border-radius:18px;font-size:20px;}}
      `}</style>
    </>
  );
}
