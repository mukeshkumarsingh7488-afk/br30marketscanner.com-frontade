import { Link } from "react-router-dom";
import { Activity, ArrowRight, BarChart3, BookOpen, CandlestickChart, CheckCircle2, Filter, Globe2, Layers3, MousePointerClick, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const docStats = [
  { value: "01", label: "Getting Started" },
  { value: "06+", label: "Core Modules" },
  { value: "Live", label: "Market Scanning" },
  { value: "SaaS", label: "Protected Access" },
];

const guideSections = [
  {
    icon: Activity,
    title: "Getting Started",
    text: "Create your account, verify access, and open the BR30 Market Scanner dashboard to begin scanning live market opportunities.",
  },
  {
    icon: Layers3,
    title: "Dashboard Overview",
    text: "Understand how the main dashboard organizes scanner modules, market segments, symbol data, signals, and quick navigation.",
  },
  {
    icon: Filter,
    title: "Using Filters",
    text: "Use price movement, volume activity, open interest, and momentum filters to focus on high-quality trading opportunities.",
  },
  {
    icon: Globe2,
    title: "Supported Markets",
    text: "Explore equities, stock options, index options, futures, forex, metals, commodities, and future-ready market segments.",
  },
  {
    icon: MousePointerClick,
    title: "TradingView Integration",
    text: "Open any supported symbol directly in TradingView with one click to validate price action and technical structure.",
  },
  {
    icon: ShieldCheck,
    title: "Subscription Access",
    text: "BR30 Market Scanner uses protected access, free trial flow, and subscription control to manage premium features.",
  },
];

const workflow = ["Register or log in to your BR30 Market Scanner account.", "Choose your preferred scanner module from the dashboard.", "Apply filters for price movement, volume, open interest, and momentum.", "Review active symbols, signal categories, and scanner output.", "Open TradingView with one click for deeper technical validation.", "Use your trading plan and risk management before making any decision."];

export default function Documentation() {
  return (
    <>
      <div className="scanner-doc-page">
        <Navbar />

        <main>
          <section className="scanner-doc-hero">
            <div className="scanner-doc-orb scanner-doc-orb-one" />
            <div className="scanner-doc-orb scanner-doc-orb-two" />

            <div className="scanner-doc-container scanner-doc-hero-grid">
              <div className="scanner-doc-hero-content">
                <span className="scanner-doc-tag">
                  <Sparkles size={14} />
                  BR30 Resources
                </span>

                <h1>
                  Documentation for <span>BR30 Market Scanner.</span>
                </h1>

                <p>Learn how to use BR30 Market Scanner professionally — from account setup and dashboard navigation to scanner filters, market modules, TradingView integration, and subscription access.</p>

                <div className="scanner-doc-actions">
                  <Link to="/register" className="scanner-doc-btn-primary">
                    Start Free Trial <ArrowRight size={18} />
                  </Link>

                  <Link to="/" className="scanner-doc-btn-outline">
                    Back to Home
                  </Link>
                </div>
              </div>

              <div className="scanner-doc-panel">
                <div className="scanner-doc-panel-top">
                  <span />
                  <span />
                  <span />
                  <strong>DOCUMENTATION</strong>
                </div>

                <div className="scanner-doc-panel-card main">
                  <BookOpen size={28} />
                  <div>
                    <h3>Product Guide</h3>
                    <p>Step-by-step documentation for using scanner modules, market filters, dashboard tools, and account access.</p>
                  </div>
                </div>

                <div className="scanner-doc-panel-card">
                  <BarChart3 size={24} />
                  <div>
                    <h3>Market Intelligence</h3>
                    <p>Understand momentum, volume, OI activity, and trading opportunity discovery.</p>
                  </div>
                </div>

                <div className="scanner-doc-panel-card">
                  <CandlestickChart size={24} />
                  <div>
                    <h3>TradingView Workflow</h3>
                    <p>Move from scanner discovery to chart validation with a faster analysis workflow.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="scanner-doc-stats-section">
            <div className="scanner-doc-container scanner-doc-stats-grid">
              {docStats.map((item) => (
                <div className="scanner-doc-stat-card" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="scanner-doc-overview">
            <div className="scanner-doc-container scanner-doc-overview-grid">
              <div className="scanner-doc-overview-left">
                <span className="scanner-doc-tag">Overview</span>
                <h2>Everything You Need to Understand the Scanner Workflow.</h2>
              </div>

              <div className="scanner-doc-overview-right">
                <p>BR30 Market Scanner is designed to simplify market discovery by organizing live market activity into clear scanner modules. Instead of manually checking multiple tools, traders can monitor price movement, open interest, volume expansion, heatmap strength, and signal categories from one dashboard.</p>

                <p>This documentation explains the core platform flow, how each module supports trading analysis, and how users can move from scanner output to chart validation using TradingView integration.</p>

                <div className="scanner-doc-highlight">
                  <CheckCircle2 size={22} />
                  <span>Designed for traders who want speed, clarity, and structured market analysis.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="scanner-doc-guides">
            <div className="scanner-doc-container">
              <div className="scanner-doc-section-heading">
                <span className="scanner-doc-tag">Documentation Sections</span>
                <h2>Explore the Core Platform Areas</h2>
                <p>Use these sections to understand how BR30 Market Scanner works and how to get the most out of the platform.</p>
              </div>

              <div className="scanner-doc-guides-grid">
                {guideSections.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="scanner-doc-guide-card" key={item.title}>
                      <div className="scanner-doc-guide-icon">
                        <Icon size={25} />
                      </div>

                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="scanner-doc-workflow">
            <div className="scanner-doc-container scanner-doc-workflow-grid">
              <div className="scanner-doc-workflow-content">
                <span className="scanner-doc-tag">Recommended Workflow</span>
                <h2>From Market Discovery to Trading Decision.</h2>
                <p>The scanner is built to support a clean decision-making process. Use the platform to find active symbols, validate charts, and apply your personal trading plan with proper risk management.</p>
              </div>

              <div className="scanner-doc-workflow-list">
                {workflow.map((item, index) => (
                  <div className="scanner-doc-workflow-item" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="scanner-doc-final-cta">
            <div className="scanner-doc-container scanner-doc-final-card">
              <BookOpen size={38} />
              <h2>Ready to Explore BR30 Market Scanner?</h2>
              <p>Start with the dashboard, understand the scanner modules, and use the documentation to build a faster market analysis workflow.</p>
              <Link to="/register" className="scanner-doc-btn-primary">
                Create Account
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style>{`
.scanner-doc-page{min-height:100vh;padding-top:82px;overflow-x:hidden;color:#fff;background:radial-gradient(circle at top left,rgba(0,255,136,.18),transparent 35%),radial-gradient(circle at top right,rgba(34,211,238,.14),transparent 32%),linear-gradient(180deg,#020806 0%,#03130d 48%,#020806 100%);}
.scanner-doc-container{width:min(1180px,calc(100% - 32px));margin:auto;}
.scanner-doc-hero{position:relative;padding:58px 0 28px;overflow:hidden;}
.scanner-doc-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
.scanner-doc-orb-one{width:420px;height:420px;left:-160px;top:80px;background:rgba(0,255,136,.28);}
.scanner-doc-orb-two{width:360px;height:360px;right:-130px;top:150px;background:rgba(34,211,238,.22);}
.scanner-doc-hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.08fr .92fr;gap:48px;align-items:center;}
.scanner-doc-tag{display:inline-flex;align-items:center;gap:8px;padding:8px 15px;border-radius:999px;font-size:13px;font-weight:850;color:#baffdf;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.28);}
.scanner-doc-hero-content h1{margin:24px 0 20px;font-size:clamp(44px,6vw,76px);line-height:1.02;letter-spacing:-2.5px;font-weight:950;color:#fff;}
.scanner-doc-hero-content h1 span{background:linear-gradient(135deg,#00ff88,#22d3ee,#fff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}
.scanner-doc-hero-content p{max-width:720px;color:#a8b8b0;font-size:18px;line-height:1.8;margin:0;}
.scanner-doc-actions{display:flex;gap:15px;flex-wrap:wrap;margin-top:34px;}
.scanner-doc-btn-primary,.scanner-doc-btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;transition:.35s;font-weight:950;border-radius:999px;min-height:52px;padding:13px 24px;}
.scanner-doc-btn-primary{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;box-shadow:0 18px 45px rgba(0,255,136,.28);}
.scanner-doc-btn-primary:hover{transform:translateY(-3px);box-shadow:0 26px 70px rgba(0,255,136,.38);}
.scanner-doc-btn-outline{border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:#fff;}
.scanner-doc-btn-outline:hover{background:rgba(255,255,255,.1);transform:translateY(-3px);}
.scanner-doc-panel{position:relative;padding:24px;border-radius:32px;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.1);box-shadow:0 35px 110px rgba(0,0,0,.45);backdrop-filter:blur(22px);overflow:hidden;}
.scanner-doc-panel-top{display:flex;align-items:center;gap:8px;margin-bottom:22px;}
.scanner-doc-panel-top span{width:11px;height:11px;border-radius:50%;background:#00ff88;}
.scanner-doc-panel-top span:nth-child(2){background:#22d3ee;}
.scanner-doc-panel-top span:nth-child(3){background:#ff4d6d;}
.scanner-doc-panel-top strong{margin-left:auto;font-size:13px;color:#d9fff0;}
.scanner-doc-panel-card{display:flex;gap:16px;align-items:flex-start;padding:20px;border-radius:22px;background:rgba(0,0,0,.26);border:1px solid rgba(255,255,255,.08);margin-top:14px;}
.scanner-doc-panel-card.main{background:linear-gradient(135deg,rgba(0,255,136,.24),rgba(34,211,238,.12));}
.scanner-doc-panel-card svg{color:#00ff88;flex-shrink:0;}
.scanner-doc-panel-card h3{margin:0 0 7px;color:#fff;font-size:19px;}
.scanner-doc-panel-card p{margin:0;color:#a8b8b0;line-height:1.65;font-size:14px;}
.scanner-doc-stats-section{padding:20px 0 70px;}
.scanner-doc-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.scanner-doc-stat-card{padding:30px;border-radius:26px;text-align:center;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);}
.scanner-doc-stat-card h3{margin:0 0 8px;font-size:42px;color:#fff;letter-spacing:-1.2px;}
.scanner-doc-stat-card p{margin:0;color:#a8b8b0;font-weight:800;font-size:14px;}
.scanner-doc-overview,.scanner-doc-guides,.scanner-doc-workflow,.scanner-doc-final-cta{padding:80px 0;}
.scanner-doc-overview-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:34px;align-items:stretch;}
.scanner-doc-overview-left,.scanner-doc-overview-right,.scanner-doc-guide-card,.scanner-doc-workflow-content,.scanner-doc-workflow-list,.scanner-doc-final-card{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);box-shadow:0 28px 80px rgba(0,0,0,.26);}
.scanner-doc-overview-left,.scanner-doc-overview-right{border-radius:30px;padding:36px;}
.scanner-doc-overview-left h2,.scanner-doc-workflow-content h2,.scanner-doc-final-card h2{margin:20px 0 0;font-size:clamp(34px,4vw,54px);line-height:1.08;letter-spacing:-1.5px;color:#fff;}
.scanner-doc-overview-right p,.scanner-doc-workflow-content p,.scanner-doc-final-card p,.scanner-doc-guide-card p{color:#a8b8b0;font-size:16px;line-height:1.8;}
.scanner-doc-highlight{margin-top:24px;padding:18px;border-radius:18px;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.22);display:flex;gap:12px;align-items:center;color:#fff;font-weight:850;}
.scanner-doc-highlight svg{color:#00ff88;flex-shrink:0;}
.scanner-doc-section-heading{max-width:760px;margin:0 auto 45px;text-align:center;}
.scanner-doc-section-heading h2{font-size:clamp(34px,4vw,52px);line-height:1.1;margin:18px 0;letter-spacing:-1.6px;color:#fff;}
.scanner-doc-section-heading p{color:#a8b8b0;line-height:1.8;font-size:17px;margin:0;}
.scanner-doc-guides-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.scanner-doc-guide-card{border-radius:26px;padding:28px;transition:.35s;}
.scanner-doc-guide-card:hover{transform:translateY(-8px);border-color:rgba(0,255,136,.36);}
.scanner-doc-guide-icon{width:60px;height:60px;border-radius:18px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 18px 45px rgba(0,255,136,.28);}
.scanner-doc-guide-card h3{margin:22px 0 12px;color:#fff;font-size:21px;}
.scanner-doc-workflow-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:34px;align-items:stretch;}
.scanner-doc-workflow-content,.scanner-doc-workflow-list{border-radius:34px;padding:38px;}
.scanner-doc-workflow-list{display:grid;gap:14px;}
.scanner-doc-workflow-item{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:flex-start;padding:18px;border-radius:18px;background:rgba(0,0,0,.24);border:1px solid rgba(255,255,255,.08);}
.scanner-doc-workflow-item span{color:rgba(255,255,255,.24);font-size:24px;font-weight:950;line-height:1;}
.scanner-doc-workflow-item p{margin:0;color:#d9fff0;font-size:14px;line-height:1.7;font-weight:750;}
.scanner-doc-final-card{border-radius:34px;padding:62px;text-align:center;background:linear-gradient(135deg,#006b3b,#00a85a,#22d3ee);}
.scanner-doc-final-card svg{color:#fff;margin-bottom:18px;}
.scanner-doc-final-card p{max-width:680px;margin:18px auto 30px;color:#edfff7;}
.scanner-doc-final-card .scanner-doc-btn-primary{background:#fff;color:#006b3b;box-shadow:none;}
*{box-sizing:border-box;}
@media(max-width:1050px){.scanner-doc-hero-grid,.scanner-doc-overview-grid,.scanner-doc-workflow-grid{grid-template-columns:1fr;}.scanner-doc-panel{max-width:760px;margin:auto;width:100%;}.scanner-doc-stats-grid{grid-template-columns:repeat(2,1fr);}.scanner-doc-guides-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:760px){.scanner-doc-page{padding-top:72px;}.scanner-doc-hero{padding:32px 0 55px;}.scanner-doc-hero-grid{gap:30px;}.scanner-doc-hero-content h1{font-size:clamp(38px,11vw,56px);letter-spacing:-1.4px;}.scanner-doc-hero-content p{font-size:15px;}.scanner-doc-actions{flex-direction:column;}.scanner-doc-actions a{width:100%;}.scanner-doc-panel{padding:18px;border-radius:24px;}.scanner-doc-panel-card{padding:16px;border-radius:18px;}.scanner-doc-stats-section{padding:18px 0 45px;}.scanner-doc-overview,.scanner-doc-guides,.scanner-doc-workflow,.scanner-doc-final-cta{padding:55px 0;}.scanner-doc-stats-grid,.scanner-doc-guides-grid{grid-template-columns:1fr;gap:16px;}.scanner-doc-stat-card{padding:24px;border-radius:22px;}.scanner-doc-overview-left,.scanner-doc-overview-right,.scanner-doc-workflow-content,.scanner-doc-workflow-list,.scanner-doc-final-card{padding:26px;border-radius:24px;}.scanner-doc-overview-left h2,.scanner-doc-workflow-content h2,.scanner-doc-final-card h2{font-size:clamp(30px,9vw,42px);}.scanner-doc-guide-card{border-radius:22px;padding:22px;}.scanner-doc-final-card{padding:34px 24px;}}
@media(max-width:430px){.scanner-doc-hero-content h1{font-size:40px;}.scanner-doc-panel-top strong{font-size:11px;}.scanner-doc-panel-card h3{font-size:17px;}.scanner-doc-stat-card h3{font-size:36px;}.scanner-doc-workflow-item{grid-template-columns:1fr;}}
      `}</style>
    </>
  );
}
