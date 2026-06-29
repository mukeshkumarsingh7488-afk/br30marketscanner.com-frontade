import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2, CreditCard, FileText, LockKeyhole, Mail, Scale, ShieldCheck, Sparkles, UserCheck, Activity } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const sections = [
  {
    icon: UserCheck,
    title: "1. User Eligibility",
    text: "BR30 Market Scanner is intended for users who are legally permitted to access market-related tools, trading information, and subscription-based digital services in their jurisdiction. By using the platform, you confirm that you are responsible for complying with all applicable laws and regulations.",
  },
  {
    icon: ShieldCheck,
    title: "2. Account Responsibility",
    text: "Users are responsible for maintaining the confidentiality of their login details, account access, and device security. Any activity performed through your account may be treated as your responsibility. You must notify BR30 support if you believe your account has been accessed without permission.",
  },
  {
    icon: Activity,
    title: "3. Scanner Usage",
    text: "BR30 Market Scanner provides market scanning tools, dashboards, filters, signal summaries, volume insights, open interest activity, and related market intelligence features. The platform is designed for informational and analytical use only.",
  },
  {
    icon: AlertTriangle,
    title: "4. No Financial Advice",
    text: "BR30 Market Scanner does not provide investment advice, trading recommendations, portfolio management, guaranteed signals, or profit assurance. Users must make independent trading decisions and apply their own risk management.",
  },
  {
    icon: CreditCard,
    title: "5. Subscription & Access",
    text: "Access to premium scanner features may require trial eligibility, admin approval, active subscription, valid payment, or approved lifetime access. BR30 may restrict, suspend, or terminate access if subscription requirements are not met or platform rules are violated.",
  },
  {
    icon: LockKeyhole,
    title: "6. Security & Misuse",
    text: "Users must not attempt to bypass authentication, scrape protected data, overload servers, reverse engineer platform logic, share paid access, abuse APIs, or misuse scanner data. Any suspicious or abusive activity may result in restricted access.",
  },
  {
    icon: Scale,
    title: "7. Platform Changes",
    text: "BR30 Market Scanner may update, modify, pause, remove, or improve features at any time based on technical requirements, data availability, security needs, compliance considerations, user feedback, or business decisions.",
  },
];

export default function TermsAndConditions() {
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
                <Sparkles size={14} /> Terms & Conditions
              </span>

              <h1>
                Terms For Using <span>BR30 Market Scanner.</span>
              </h1>

              <p>These Terms and Conditions explain the rules, responsibilities, access limits, subscription terms, and acceptable use requirements for BR30 Market Scanner.</p>

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
                <h3>Terms Overview</h3>

                <a href="#intro">Introduction</a>
                <a href="#account">Account Rules</a>
                <a href="#scanner">Scanner Usage</a>
                <a href="#subscription">Subscription</a>
                <a href="#liability">Liability</a>
                <a href="#contact">Contact</a>
              </aside>

              <div className="legal-content-card">
                <div className="legal-notice" id="intro">
                  <FileText size={26} />

                  <div>
                    <h2>Introduction</h2>
                    <p>By accessing or using BR30 Market Scanner, you agree to follow these Terms and Conditions. If you do not agree with these terms, you should stop using the platform. These terms apply to the website, dashboard, scanner tools, subscription access, resources, alerts, and related services.</p>
                  </div>
                </div>

                <div className="legal-section" id="account">
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

                <div className="legal-section" id="scanner">
                  {sections.slice(2, 4).map((item) => {
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
                <div className="legal-section" id="subscription">
                  {sections.slice(4, 7).map((item) => {
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
                  <h2>Limitation Of Liability</h2>

                  <p>BR30 Market Scanner is provided as an informational and analytical platform. Market conditions, data availability, exchange rules, third-party APIs, internet connectivity, and technical systems may affect platform performance. BR30 is not responsible for trading losses, missed opportunities, delayed data, wrong decisions, broker issues, or financial outcomes.</p>

                  <div className="rights-grid">
                    <div>
                      <CheckCircle2 size={20} />
                      <span>Use your own risk management</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Verify data before trading</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>No guaranteed profit claim</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>No investment advisory service</span>
                    </div>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h3>8. Intellectual Property</h3>
                    <p>All platform design, branding, scanner structure, interface elements, written content, logos, layouts, and product concepts are owned by or licensed to BR30. Users may not copy, clone, resell, redistribute, or commercially exploit platform content without written permission.</p>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <AlertTriangle size={24} />
                  </div>

                  <div>
                    <h3>9. Account Suspension</h3>
                    <p>BR30 may suspend or terminate access if a user violates these terms, misuses the platform, shares paid access, attempts unauthorized access, performs abusive activity, or creates risk for platform security, users, data providers, or business operations.</p>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <Scale size={24} />
                  </div>

                  <div>
                    <h3>10. Changes To These Terms</h3>
                    <p>We may update these Terms and Conditions from time to time to reflect product changes, business operations, legal requirements, market data rules, security needs, or platform improvements. Updated terms will be posted on this page with a revised last updated date.</p>
                  </div>
                </div>

                <div className="legal-contact" id="contact">
                  <Mail size={28} />

                  <div>
                    <h2>Contact Us</h2>

                    <p>For questions about these Terms and Conditions, account access, or platform usage, contact BR30 Team at:</p>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=Terms%20And%20Conditions%20Query&body=Hello%20BR30%20Market%20Scanner%20Team,%0A%0AI%20have%20a%20question%20about%20the%20Terms%20and%20Conditions.%0A%0AThanks" target="_blank" rel="noopener noreferrer">
                      support.br30trader@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-final-section">
            <div className="landing-container legal-final-card">
              <LockKeyhole size={40} />

              <h2>Use BR30 Market Scanner Responsibly</h2>

              <p>The platform is built to support market awareness, but every user remains responsible for their own decisions, risk, and trading discipline.</p>

              <Link to="/" className="btn-primary">
                Back To Home <ArrowRight size={18} />
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
.legal-sidebar{position:sticky;top:110px;padding:22px;border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.035));border:1px solid rgba(0,255,136,.12);backdrop-filter:blur(18px);box-shadow:0 28px 80px rgba(0,0,0,.24);}
.legal-sidebar h3{margin:0 0 16px;color:#fff;font-size:19px;}
.legal-sidebar a{display:block;text-decoration:none!important;color:#b8d8c8;font-weight:850;padding:12px 13px;border-radius:14px;transition:.3s;}
.legal-sidebar a:hover{background:rgba(0,255,136,.09);color:#00ff88;}
.legal-content-card{padding:34px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.035));border:1px solid rgba(0,255,136,.12);backdrop-filter:blur(18px);box-shadow:0 28px 80px rgba(0,0,0,.26);}
.legal-notice,.legal-block,.legal-contact,.legal-rights{border-radius:26px;background:rgba(0,0,0,.22);border:1px solid rgba(0,255,136,.12);}
.legal-notice{display:flex;gap:18px;padding:26px;margin-bottom:22px;background:linear-gradient(135deg,rgba(0,255,136,.2),rgba(34,211,238,.1));}
.legal-notice svg,.legal-contact svg{color:#00ff88;flex-shrink:0;}
.legal-notice h2,.legal-rights h2,.legal-contact h2{margin:0 0 12px;color:#fff;font-size:28px;letter-spacing:-.5px;}
.legal-notice p,.legal-block p,.legal-rights p,.legal-contact p{margin:0;color:#b8d8c8;line-height:1.85;font-size:16px;}
.legal-section{display:grid;gap:18px;margin-bottom:18px;}
.legal-block{display:grid;grid-template-columns:58px 1fr;gap:18px;padding:24px;margin-bottom:18px;}
.legal-block-icon{width:58px;height:58px;border-radius:18px;display:flex;align-items:center;justify-content:center;color:#02110a;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 18px 45px rgba(0,255,136,.24);}
.legal-block h3{margin:0 0 10px;color:#fff;font-size:21px;}
.legal-rights{padding:28px;margin:18px 0;}
.rights-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:22px;}
.rights-grid div{display:flex;align-items:center;gap:10px;padding:14px;border-radius:16px;background:rgba(255,255,255,.045);border:1px solid rgba(0,255,136,.1);color:#dfffee;font-weight:850;}
.rights-grid svg{color:#00ff88;flex-shrink:0;}
.legal-contact{display:flex;gap:18px;padding:28px;margin-top:18px;}
.legal-contact a{display:inline-block;margin-top:14px;color:#00ff88;font-weight:950;text-decoration:none!important;word-break:break-word;}
.legal-contact a:hover{color:#22d3ee;}
.legal-final-card{border-radius:34px;padding:62px;text-align:center;background:linear-gradient(135deg,#00ff88,#22d3ee,#03130d);border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 90px rgba(0,255,136,.26);}
.legal-final-card svg{color:#02110a;margin-bottom:18px;}
.legal-final-card h2{margin:0;font-size:clamp(34px,4vw,54px);letter-spacing:-1.5px;color:#02110a;}
.legal-final-card p{max-width:680px;margin:18px auto 30px;color:#062017;line-height:1.8;font-weight:750;}
.legal-final-card .btn-primary{background:#02110a;color:#00ff88;box-shadow:none;}
@media(max-width:1050px){.legal-layout{grid-template-columns:1fr;}.legal-sidebar{position:static;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}.legal-sidebar h3{grid-column:1/-1;}}
@media(max-width:760px){.legal-page{padding-top:72px;}.legal-hero{padding:32px 0 55px;}.legal-hero h1{font-size:clamp(38px,11vw,56px);letter-spacing:-1.4px;}.legal-hero p{font-size:15px;}.legal-content-section,.legal-final-section{padding:55px 0;}.legal-content-card{padding:20px;border-radius:24px;}.legal-sidebar{grid-template-columns:1fr;border-radius:22px;padding:18px;}.legal-notice,.legal-contact{flex-direction:column;}.legal-notice,.legal-block,.legal-rights,.legal-contact{border-radius:20px;padding:20px;}.legal-block{grid-template-columns:1fr;}.legal-block-icon{width:54px;height:54px;}.rights-grid{grid-template-columns:1fr;}.legal-final-card{padding:34px 24px;border-radius:24px;}.legal-final-card h2{font-size:clamp(30px,9vw,42px);}}
@media(max-width:430px){.legal-hero h1{font-size:40px;}.legal-meta{gap:12px;}.legal-meta div{width:100%;}.legal-notice h2,.legal-rights h2,.legal-contact h2{font-size:24px;}}
      `}</style>
    </>
  );
}
