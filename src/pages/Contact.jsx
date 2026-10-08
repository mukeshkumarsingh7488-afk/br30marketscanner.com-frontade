import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Headphones, Mail, MessageCircle, ShieldCheck, Sparkles, Globe, Send, TicketCheck } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const SUPPORT_URL = "https://br30crm-com-f.vercel.app/public/forms/6ac4a4ce8ab8658ebe3748f7/br30-market-scanner-support-request?utm_source=br30-market-scanner-web&utm_medium=website&lead_source=br30-market-scanner-web&form_id=6ac73e6e6780cbc6335f9ba4&source_id=6ac73e9a6780cbc6335f9bad";

const contacts = [
  {
    icon: TicketCheck,
    title: "Customer Support",
    value: "Create Support Request",
    href: SUPPORT_URL,
    text: "For account support, subscriptions, billing, scanner access, technical assistance, and general platform inquiries, submit a support request through our support portal.",
  },
  {
    icon: Headphones,
    title: "Platform Support",
    value: "Open Support Request",
    href: SUPPORT_URL,
    text: "Our support team assists users with platform access, scanner features, dashboard issues, market data concerns, and account-related questions.",
  },
  {
    icon: Globe,
    title: "Platform",
    value: "BR30 Market Scanner",
    text: "A professional market intelligence platform designed for traders who require fast market scanning and structured insights.",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Usually Within 24 Hours",
    text: "Most support requests receive a response within one business day depending on request volume.",
  },
];

export default function Contact() {
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
                Contact Us
              </span>

              <h1>
                We're Here To <span>Help You.</span>
              </h1>

              <p>Have questions about BR30 Market Scanner? Need help with your account, subscription, scanner access, billing, or technical support? Submit a support request and our team will assist you.</p>
            </div>
          </section>

          <section className="legal-content-section">
            <div className="landing-container legal-layout">
              <aside className="legal-sidebar">
                <h3>Quick Navigation</h3>

                <a href="#support">Support</a>
                <a href="#request">Support Request</a>
                <a href="#response">Response Time</a>
                <a href="#platform">Platform</a>
                <a href="#contact">Contact</a>
              </aside>

              <div className="legal-content-card">
                <div className="legal-notice">
                  <MessageCircle size={26} />

                  <div>
                    <h2>We're Happy To Assist</h2>

                    <p>Our goal is to provide fast, professional, and reliable assistance for every BR30 Market Scanner user. Whether you need technical help, subscription support, scanner access, or have questions about platform features, we're ready to help.</p>
                  </div>
                </div>

                <div className="legal-section" id="support">
                  {contacts.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="legal-block" key={item.title}>
                        <div className="legal-block-icon">
                          <Icon size={24} />
                        </div>

                        <div>
                          <h3>{item.title}</h3>

                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-value contact-value-link">
                              {item.value}
                            </a>
                          ) : (
                            <strong className="contact-value">{item.value}</strong>
                          )}

                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="legal-rights" id="request">
                  <h2>Official Support Request</h2>

                  <p>For all official BR30 Market Scanner support, please use our support request form. Include your registered email, relevant account details, and a clear description of your issue so our team can assist you efficiently.</p>

                  <div className="rights-grid">
                    <div>
                      <ShieldCheck size={20} />
                      <span>Account Support</span>
                    </div>

                    <div>
                      <ShieldCheck size={20} />
                      <span>Subscription Help</span>
                    </div>

                    <div>
                      <ShieldCheck size={20} />
                      <span>Billing Queries</span>
                    </div>

                    <div>
                      <ShieldCheck size={20} />
                      <span>Technical Assistance</span>
                    </div>
                  </div>

                  <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="support-request-button">
                    <TicketCheck size={18} />
                    Create Support Request
                  </a>
                </div>

                <div className="legal-block" id="response">
                  <div className="legal-block-icon">
                    <Clock3 size={24} />
                  </div>

                  <div>
                    <h3>Support Response Time</h3>

                    <p>We aim to respond to most support requests within one business day. Response times may vary during product launches, maintenance periods, weekends, holidays, or unusually high support volume.</p>
                  </div>
                </div>

                <div className="legal-block" id="platform">
                  <div className="legal-block-icon">
                    <Globe size={24} />
                  </div>

                  <div>
                    <h3>Platform Information</h3>

                    <p>BR30 Market Scanner is an online digital platform. Customer support is handled through our centralized support request system so every request can be tracked, reviewed, and resolved properly.</p>
                  </div>
                </div>

                <div className="legal-contact" id="contact">
                  <TicketCheck size={30} />

                  <div>
                    <h2>Need Support?</h2>

                    <p>For faster assistance, include your registered email, account details, and a clear explanation of your issue when submitting your support request.</p>

                    <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer">
                      Create Support Request
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-final-section">
            <div className="landing-container legal-final-card">
              <Send size={40} />

              <h2>Need Assistance?</h2>

              <p>Whether it's your account, subscription, scanner features, billing, or technical support, the BR30 Team is always ready to help.</p>

              <div className="final-actions">
                <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="btn-support">
                  Create Support Request
                  <TicketCheck size={18} />
                </a>

                <Link to="/" className="btn-primary">
                  Back To Home
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style>{`.legal-page{min-height:100vh;padding-top:82px;overflow-x:hidden;color:#eafff5;background:radial-gradient(circle at top left,rgba(0,255,136,.22),transparent 35%),radial-gradient(circle at top right,rgba(34,211,238,.16),transparent 32%),linear-gradient(180deg,#020806 0%,#03130d 48%,#020806 100%);}
.legal-page .landing-container{width:min(1180px,calc(100% - 32px));margin:auto;}
.legal-page .section-tag{display:inline-flex;align-items:center;gap:8px;padding:8px 15px;border-radius:999px;font-size:13px;font-weight:900;color:#dfffee;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.28);}
.legal-page .btn-primary,.legal-page .btn-support{display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none!important;transition:.35s;font-weight:950;border-radius:999px;min-height:52px;padding:13px 24px;}
.legal-page .btn-primary{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#02110a;box-shadow:0 18px 45px rgba(0,255,136,.28);}
.legal-page .btn-primary:hover{transform:translateY(-3px);box-shadow:0 26px 70px rgba(0,255,136,.38);}
.legal-page .btn-support{background:#02110a;color:#00ff88;border:1px solid rgba(0,255,136,.35);box-shadow:0 15px 40px rgba(0,0,0,.22);}
.legal-page .btn-support:hover{transform:translateY(-3px);color:#22d3ee;border-color:#22d3ee;}
.legal-hero{position:relative;padding:58px 0 82px;overflow:hidden;text-align:center;}
.legal-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
.legal-orb-one{width:420px;height:420px;left:-160px;top:80px;background:rgba(0,255,136,.26);}
.legal-orb-two{width:360px;height:360px;right:-130px;top:150px;background:rgba(34,211,238,.22);}
.legal-hero-inner{position:relative;z-index:2;max-width:960px;}
.legal-hero h1{margin:24px auto 20px;font-size:clamp(44px,6vw,76px);line-height:1.02;letter-spacing:-2.5px;font-weight:950;color:#fff;}
.legal-hero h1 span{background:linear-gradient(135deg,#00ff88,#22d3ee,#ffffff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}
.legal-hero p{max-width:820px;margin:0 auto;color:#b8d8c8;font-size:18px;line-height:1.8;}
.legal-content-section,.legal-final-section{padding:75px 0;}
.legal-layout{display:grid;grid-template-columns:270px 1fr;gap:28px;align-items:start;}
.legal-sidebar{position:sticky;top:110px;padding:22px;border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.035));border:1px solid rgba(0,255,136,.12);}
.legal-sidebar h3{margin:0 0 16px;color:#fff;}
.legal-sidebar a{display:block;padding:12px;border-radius:12px;text-decoration:none;color:#b8d8c8;font-weight:800;}
.legal-sidebar a:hover{background:rgba(0,255,136,.08);color:#00ff88;}
.legal-content-card{padding:34px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.035));border:1px solid rgba(0,255,136,.12);}
.legal-notice,.legal-block,.legal-contact,.legal-rights{border-radius:24px;background:rgba(0,0,0,.22);border:1px solid rgba(0,255,136,.12);}
.legal-notice{display:flex;gap:18px;padding:26px;margin-bottom:22px;background:linear-gradient(135deg,rgba(0,255,136,.2),rgba(34,211,238,.1));}
.legal-notice svg,.legal-contact svg{color:#00ff88;flex-shrink:0;}
.legal-section{display:grid;gap:18px;margin-bottom:18px;}
.legal-block{display:grid;grid-template-columns:58px 1fr;gap:18px;padding:24px;}
.legal-block-icon{width:58px;height:58px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#00ff88,#22d3ee);color:#02110a;}
.contact-value{display:block;margin:8px 0 12px;color:#00ff88;font-size:18px;font-weight:900;}
.contact-value-link{text-decoration:none;}
.contact-value-link:hover{color:#22d3ee;text-decoration:underline;}
.legal-block h3,.legal-rights h2,.legal-contact h2{margin:0 0 10px;color:#fff;}
.legal-block p,.legal-notice p,.legal-rights p,.legal-contact p{margin:0;color:#b8d8c8;line-height:1.8;}
.legal-rights{padding:28px;margin:18px 0;}
.rights-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:20px;}
.rights-grid div{display:flex;align-items:center;gap:10px;padding:14px;border-radius:16px;background:rgba(255,255,255,.05);}
.rights-grid svg{color:#00ff88;}
.support-request-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:22px;padding:12px 20px;border-radius:999px;background:linear-gradient(135deg,#00ff88,#22d3ee);color:#02110a;font-weight:900;text-decoration:none;transition:.3s;}
.support-request-button:hover{transform:translateY(-2px);box-shadow:0 15px 35px rgba(0,255,136,.22);}
.legal-contact{display:flex;gap:18px;padding:28px;margin-top:18px;}
.legal-contact a{display:inline-flex;align-items:center;justify-content:center;margin-top:14px;padding:11px 20px;border-radius:999px;color:#02110a;background:linear-gradient(135deg,#00ff88,#22d3ee);font-weight:900;text-decoration:none;transition:.3s;}
.legal-contact a:hover{transform:translateY(-2px);box-shadow:0 15px 35px rgba(0,255,136,.22);}
.legal-final-card{padding:60px;border-radius:34px;text-align:center;background:linear-gradient(135deg,#00ff88,#22d3ee,#03130d);}
.legal-final-card svg{color:#02110a;}
.legal-final-card h2{margin:18px 0 12px;color:#02110a;font-size:clamp(34px,4vw,54px);}
.legal-final-card p{max-width:700px;margin:0 auto 28px;color:#062017;font-weight:700;line-height:1.8;}
.legal-final-card .btn-primary{background:#02110a;color:#00ff88;}
.final-actions{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;}
@media(max-width:1050px){.legal-layout{grid-template-columns:1fr;}.legal-sidebar{position:static;}}
@media(max-width:760px){.legal-page{padding-top:72px;}.legal-content-card{padding:20px;border-radius:24px;}.legal-block{grid-template-columns:1fr;}.legal-notice,.legal-contact{flex-direction:column;}.rights-grid{grid-template-columns:1fr;}.legal-final-card{padding:36px 24px;border-radius:24px;}.final-actions{flex-direction:column;}.final-actions a{width:100%;}}`}</style>
    </>
  );
}
