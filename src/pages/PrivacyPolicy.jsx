import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cookie, DatabaseZap, Eye, FileText, LockKeyhole, Mail, ShieldCheck, Sparkles, UserCheck, Activity } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const sections = [
  {
    icon: DatabaseZap,
    title: "1. Information We Collect",
    text: "When you use BR30 Market Scanner, we may collect basic account details such as your name, email address, login information, subscription status, trial access status, profile details, and platform activity required to provide scanner access. We may also collect technical information such as browser type, device information, IP address, session activity, and usage logs to improve security and platform performance.",
  },
  {
    icon: UserCheck,
    title: "2. How We Use Your Information",
    text: "We use your information to create and manage your account, provide scanner access, verify subscription eligibility, improve user experience, communicate important updates, maintain security, monitor system usage, prevent misuse, and support product development. We do not sell your personal information.",
  },
  {
    icon: Activity,
    title: "3. Scanner & Market Usage Data",
    text: "BR30 Market Scanner may process scanner activity such as selected market sections, filters, watchlist preferences, symbol views, signal summaries, page activity, and usage logs. This information helps us improve scanner speed, accuracy, stability, and user experience.",
  },
  {
    icon: ShieldCheck,
    title: "4. Market Data & Platform Reliability",
    text: "Market scanner data may depend on third-party data providers, exchange availability, API limits, and technical infrastructure. We may monitor scanner usage, data refresh behavior, and system performance to maintain platform stability and prevent abuse.",
  },
  {
    icon: LockKeyhole,
    title: "5. Account Security",
    text: "We apply reasonable security practices to protect user accounts, subscriptions, and platform access. Users should keep login details private and should not share passwords, OTPs, access tokens, or account credentials with any third party.",
  },
  {
    icon: Cookie,
    title: "6. Cookies & Local Storage",
    text: "We may use cookies, local storage, session storage, or similar technologies to keep users logged in, remember preferences, protect accounts, improve performance, and understand usage behavior. Disabling cookies may affect platform functionality.",
  },
  {
    icon: Eye,
    title: "7. Third-Party Services",
    text: "BR30 Market Scanner may use third-party services for hosting, database, analytics, payments, authentication, email delivery, market data, and security infrastructure. These services may process limited information as required to provide their functionality and are governed by their own privacy policies.",
  },
];

export default function PrivacyPolicy() {
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
                <Sparkles size={14} /> Privacy Policy
              </span>

              <h1>
                Your Privacy Matters At <span>BR30 Market Scanner.</span>
              </h1>

              <p>This Privacy Policy explains how BR30 Market Scanner collects, uses, stores, protects, and handles information when users access our website, dashboard, scanner tools, subscription features, alerts, resources, and related services.</p>

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
                <h3>Policy Overview</h3>

                <a href="#intro">Introduction</a>
                <a href="#collection">Information Collection</a>
                <a href="#scanner">Scanner Data</a>
                <a href="#security">Security</a>
                <a href="#rights">User Rights</a>
                <a href="#contact">Contact</a>
              </aside>

              <div className="legal-content-card">
                <div className="legal-notice" id="intro">
                  <ShieldCheck size={26} />

                  <div>
                    <h2>Introduction</h2>
                    <p>BR30 Market Scanner is built as a market intelligence and scanning platform focused on top gainers, top losers, open interest activity, volume breakouts, dashboard access, subscription control, and structured scanner insights. We respect user privacy and aim to keep data handling clear, secure, and transparent.</p>
                  </div>
                </div>

                <div className="legal-section" id="collection">
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
                <div className="legal-section" id="security">
                  {sections.slice(4).map((item) => {
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

                <div className="legal-rights" id="rights">
                  <h2>Your Rights & Choices</h2>

                  <p>You may contact us to request help related to your account, access, correction, update, deletion, or clarification of your information. Some requests may require identity verification and may be limited by legal, security, fraud-prevention, or operational requirements.</p>

                  <div className="rights-grid">
                    <div>
                      <CheckCircle2 size={20} />
                      <span>Request account support</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Update profile details</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Ask about stored information</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Request deletion where applicable</span>
                    </div>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h3>8. Data Retention</h3>
                    <p>We retain user information only as long as necessary for account access, subscription management, security, legal compliance, operational records, support, and product improvement. Users may request account-related assistance by contacting official BR30 support.</p>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <h3>9. Children's Privacy</h3>
                    <p>BR30 Market Scanner is intended for users who are legally permitted to access market-related tools and subscription-based services in their jurisdiction. We do not knowingly collect personal data from children. If we become aware of such data, we may take steps to remove it.</p>
                  </div>
                </div>

                <div className="legal-block">
                  <div className="legal-block-icon">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h3>10. Changes To This Policy</h3>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our product, technology, business operations, legal requirements, security practices, or market data integrations. Updated versions will be posted on this page with a revised last updated date.</p>
                  </div>
                </div>

                <div className="legal-contact" id="contact">
                  <Mail size={28} />

                  <div>
                    <h2>Contact Us</h2>

                    <p>For privacy-related questions, account support, or data-related requests, contact BR30 Team at:</p>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=Privacy%20Policy%20Query&body=Hello%20BR30%20Market%20Scanner%20Team,%0A%0AI%20have%20a%20privacy/account%20related%20question.%0A%0AThanks" target="_blank" rel="noopener noreferrer">
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

              <h2>Privacy, Security & Scanner Trust Come First</h2>

              <p>BR30 Market Scanner is built for traders who value clarity, discipline, fast market insights, and transparent platform access.</p>

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
.legal-block{display:grid;grid-template-columns:58px 1fr;gap:18px;padding:24px;}
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
