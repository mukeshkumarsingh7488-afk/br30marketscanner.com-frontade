import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, BarChart3, CheckCircle2, FileWarning, Globe, LockKeyhole, Mail, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const sections = [
  {
    icon: AlertTriangle,
    title: "1. Informational Purpose Only",
    text: "BR30 Market Scanner is designed to provide market scanning tools, market summaries, technical observations, and structured trading information. All information available on this platform is provided solely for educational and informational purposes.",
  },
  {
    icon: TrendingUp,
    title: "2. No Investment Advice",
    text: "Nothing provided through BR30 Market Scanner should be interpreted as investment advice, financial advice, portfolio management, trading recommendations, or guaranteed market opportunities. Users remain fully responsible for their own trading and investment decisions.",
  },
  {
    icon: BarChart3,
    title: "3. Market Data Accuracy",
    text: "Market information displayed by the platform may depend on third-party market data providers, APIs, exchanges, broker infrastructure, and technical services. Delays, interruptions, missing data, or temporary inaccuracies may occur from time to time.",
  },
  {
    icon: Globe,
    title: "4. Third-Party Services",
    text: "BR30 Market Scanner may integrate with external market data providers, authentication services, payment gateways, hosting providers, analytics platforms, or related infrastructure. BR30 is not responsible for interruptions or failures originating from third-party services.",
  },
  {
    icon: ShieldCheck,
    title: "5. Platform Availability",
    text: "Although we continuously improve reliability and uptime, BR30 Market Scanner cannot guarantee uninterrupted availability. Maintenance, upgrades, server issues, market holidays, internet connectivity, or technical failures may temporarily affect platform access.",
  },
  {
    icon: LockKeyhole,
    title: "6. User Responsibility",
    text: "Every user is responsible for verifying market information independently before placing trades. Proper risk management, capital allocation, stop-loss planning, and independent research remain the sole responsibility of the user.",
  },
  {
    icon: FileWarning,
    title: "7. Limitation Of Liability",
    text: "BR30 Market Scanner shall not be responsible for trading losses, financial damages, missed opportunities, delayed execution, market volatility, technical interruptions, data delays, or any direct or indirect consequences arising from the use of this platform.",
  },
];

export default function Disclaimer() {
  return (
    <>
      <div className="legal-page">
        <Navbar />

        <main>
          <section className="legal-hero">
            <div className="legal-orb legal-orb-one" />
            <div className="legal-orb legal-orb-two" />

            <div className="landing-container legal-hero-inner">
              <span className="section-tag">
                <Sparkles size={14} />
                Disclaimer
              </span>

              <h1>
                Important Information About <span>BR30 Market Scanner.</span>
              </h1>

              <p>Please read this Disclaimer carefully before using BR30 Market Scanner. By accessing the platform, you acknowledge and agree to the terms described below.</p>

              <div className="legal-meta">
                <div>
                  <strong>Effective From</strong>
                  <span>June 29, 2026</span>
                </div>

                <div>
                  <strong>Last Updated</strong>
                  <span>June 29, 2026</span>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-content-section">
            <div className="landing-container legal-layout">
              <aside className="legal-sidebar">
                <h3>Disclaimer Overview</h3>

                <a href="#intro">Introduction</a>
                <a href="#information">Information Only</a>
                <a href="#market">Market Data</a>
                <a href="#responsibility">Responsibility</a>
                <a href="#liability">Liability</a>
                <a href="#contact">Contact</a>
              </aside>

              <div className="legal-content-card">
                <div className="legal-notice" id="intro">
                  <AlertTriangle size={26} />

                  <div>
                    <h2>Introduction</h2>

                    <p>BR30 Market Scanner provides market intelligence tools, scanner dashboards, volume analysis, open interest insights, and structured market information. The platform is designed to assist users in understanding market conditions but does not replace independent research, professional advice, or personal trading decisions.</p>
                  </div>
                </div>

                <div className="legal-section" id="information">
                  {sections.slice(0, 2).map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="legal-block" key={item.title}>
                        <div className="legal-block-icon">
                          <Icon size={24} />
                        </div>

                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="legal-section" id="market">
                  {sections.slice(2, 5).map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="legal-block" key={item.title}>
                        <div className="legal-block-icon">
                          <Icon size={24} />
                        </div>

                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="legal-section" id="responsibility">
                  {sections.slice(5).map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="legal-block" key={item.title}>
                        <div className="legal-block-icon">
                          <Icon size={24} />
                        </div>

                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="legal-rights" id="liability">
                  <h2>Important Risk Notice</h2>

                  <p>Trading in stocks, futures, options, commodities, forex, cryptocurrencies, and other financial instruments involves significant risk. Past performance does not guarantee future results. Every trader should evaluate personal financial circumstances, trading experience, and risk tolerance before making investment decisions.</p>

                  <div className="rights-grid">
                    <div>
                      <CheckCircle2 size={20} />
                      <span>Always verify market information.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Use proper risk management.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Never trade beyond your capacity.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Consult licensed professionals if required.</span>
                    </div>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <h3>8. Product Updates</h3>

                    <p>BR30 Market Scanner may add, remove, improve, suspend, or modify features, scanner logic, market coverage, integrations, layouts, APIs, and subscription plans at any time without prior notice as part of continuous platform improvement.</p>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <FileWarning size={24} />
                  </div>

                  <div>
                    <h3>9. Changes To This Disclaimer</h3>

                    <p>This Disclaimer may be updated periodically to reflect platform improvements, regulatory changes, market data policies, legal requirements, or operational updates. Continued use of the platform indicates acceptance of the latest published version.</p>
                  </div>
                </div>

                <div className="legal-contact" id="contact">
                  <Mail size={28} />

                  <div>
                    <h2>Contact Us</h2>

                    <p>For questions regarding this Disclaimer or platform usage, please contact the BR30 Team.</p>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=Disclaimer%20Query" target="_blank" rel="noopener noreferrer">
                      support.br30trader@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-final-section">
            <div className="landing-container legal-final-card">
              <AlertTriangle size={40} />

              <h2>Trade Carefully. Decide Independently.</h2>

              <p>BR30 Market Scanner is a market intelligence platform designed to support analysis—not to replace your own judgment, trading discipline, or risk management.</p>

              <Link to="/" className="btn-primary">
                Back To Home
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style>{`
.legal-page{min-height:100vh;padding-top:82px;overflow-x:hidden;color:#eafff5;background:radial-gradient(circle at top left,rgba(0,255,136,.22),transparent 35%),radial-gradient(circle at top right,rgba(34,211,238,.16),transparent 32%),linear-gradient(180deg,#020806 0%,#03130d 48%,#020806 100%);}
.legal-page .landing-container{width:min(1180px,calc(100% - 32px));margin:auto;}
.legal-page .section-tag{display:inline-flex;align-items:center;gap:8px;padding:8px 15px;border-radius:999px;font-size:13px;font-weight:900;color:#dfffee;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.28);}
.legal-page .btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none!important;transition:.35s;font-weight:950;border-radius:999px;min-height:52px;padding:13px 24px;background:linear-gradient(135deg,#00ff88,#22d3ee);color:#02110a;box-shadow:0 18px 45px rgba(0,255,136,.28);}
.legal-page .btn-primary:hover{transform:translateY(-3px);box-shadow:0 26px 70px rgba(0,255,136,.38);}
.legal-hero{position:relative;padding:58px 0 82px;overflow:hidden;text-align:center;}
.legal-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
.legal-orb-one{width:420px;height:420px;left:-160px;top:80px;background:rgba(0,255,136,.26);}
.legal-orb-two{width:360px;height:360px;right:-130px;top:150px;background:rgba(34,211,238,.22);}
.legal-hero-inner{position:relative;z-index:2;max-width:960px;}
.legal-hero h1{margin:24px auto 20px;font-size:clamp(44px,6vw,76px);line-height:1.02;letter-spacing:-2.5px;font-weight:950;color:#fff;}
.legal-hero h1 span{background:linear-gradient(135deg,#00ff88,#22d3ee,#ffffff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}
.legal-hero p{max-width:820px;margin:0 auto;color:#b8d8c8;font-size:18px;line-height:1.8;}
.legal-meta{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:34px;}
.legal-meta div{padding:16px 22px;border-radius:20px;background:rgba(255,255,255,.06);border:1px solid rgba(0,255,136,.12);backdrop-filter:blur(18px);}
.legal-meta strong{display:block;color:#fff;font-size:14px;margin-bottom:6px;}
.legal-meta span{color:#dfffee;font-weight:900;font-size:13px;}
.legal-content-section,.legal-final-section{padding:75px 0;}
.legal-layout{display:grid;grid-template-columns:270px 1fr;gap:28px;align-items:start;}
.legal-sidebar{position:sticky;top:110px;padding:22px;border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.035));border:1px solid rgba(0,255,136,.12);backdrop-filter:blur(18px);}
.legal-sidebar h3{margin:0 0 16px;color:#fff;font-size:19px;}
.legal-sidebar a{display:block;text-decoration:none;color:#b8d8c8;font-weight:800;padding:12px;border-radius:12px;}
.legal-sidebar a:hover{background:rgba(0,255,136,.08);color:#00ff88;}
.legal-content-card{padding:34px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.035));border:1px solid rgba(0,255,136,.12);}
.legal-notice,.legal-block,.legal-contact,.legal-rights{border-radius:24px;background:rgba(0,0,0,.22);border:1px solid rgba(0,255,136,.12);}
.legal-notice{display:flex;gap:18px;padding:26px;margin-bottom:22px;background:linear-gradient(135deg,rgba(0,255,136,.2),rgba(34,211,238,.1));}
.legal-section{display:grid;gap:18px;margin-bottom:18px;}
.legal-block{display:grid;grid-template-columns:58px 1fr;gap:18px;padding:24px;}
.legal-block-icon{width:58px;height:58px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#00ff88,#22d3ee);color:#02110a;}
.legal-block h3{margin:0 0 10px;color:#fff;}
.legal-block p,.legal-notice p,.legal-rights p,.legal-contact p{margin:0;color:#b8d8c8;line-height:1.8;}
.legal-rights{padding:28px;margin:18px 0;}
.rights-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:20px;}
.rights-grid div{display:flex;gap:10px;align-items:center;padding:14px;border-radius:16px;background:rgba(255,255,255,.05);}
.rights-grid svg{color:#00ff88;}
.legal-contact{display:flex;gap:18px;padding:28px;margin-top:18px;}
.legal-contact a{display:inline-block;margin-top:14px;color:#00ff88;font-weight:900;text-decoration:none;}
.legal-final-card{padding:60px;border-radius:34px;text-align:center;background:linear-gradient(135deg,#00ff88,#22d3ee,#03130d);}
.legal-final-card h2{color:#02110a;font-size:clamp(34px,4vw,54px);}
.legal-final-card p{max-width:700px;margin:18px auto 28px;color:#062017;font-weight:700;}
.legal-final-card .btn-primary{background:#02110a;color:#00ff88;}
@media(max-width:1050px){.legal-layout{grid-template-columns:1fr;}.legal-sidebar{position:static;}}
@media(max-width:760px){.legal-page{padding-top:72px;}.legal-content-card{padding:20px;}.legal-block{grid-template-columns:1fr;}.rights-grid{grid-template-columns:1fr;}.legal-contact,.legal-notice{flex-direction:column;}.legal-final-card{padding:36px 24px;}}
      `}</style>
    </>
  );
}
