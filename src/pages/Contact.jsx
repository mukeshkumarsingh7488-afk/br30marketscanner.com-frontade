import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Headphones, Mail, MapPin, MessageCircle, ShieldCheck, Sparkles, Globe, Send } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const contacts = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support.br30trader@gmail.com",
    text: "Contact us for account support, subscriptions, billing, technical assistance, and general platform inquiries.",
  },
  {
    icon: Headphones,
    title: "Platform Support",
    value: "BR30 Support Team",
    text: "Our support team assists users with platform access, scanner features, dashboard issues, and account-related questions.",
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

              <p>Have questions about BR30 Market Scanner? Need help with your account, subscription, scanner access, billing, or technical support? Reach out to the BR30 Team anytime.</p>
            </div>
          </section>

          <section className="legal-content-section">
            <div className="landing-container legal-layout">
              <aside className="legal-sidebar">
                <h3>Quick Navigation</h3>

                <a href="#support">Support</a>
                <a href="#email">Email</a>
                <a href="#response">Response Time</a>
                <a href="#office">Platform</a>
                <a href="#contact">Contact</a>
              </aside>

              <div className="legal-content-card">
                <div className="legal-notice">
                  <MessageCircle size={26} />

                  <div>
                    <h2>We're Happy To Assist</h2>

                    <p>Our goal is to provide fast, professional, and reliable assistance for every BR30 Market Scanner user. Whether you need technical help, subscription support, or have questions about platform features, we're ready to help.</p>
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

                          <strong className="contact-value">{item.value}</strong>

                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="legal-rights" id="email">
                  <h2>Official Support Email</h2>

                  <p>For all official communication related to BR30 Market Scanner, please use our support email. Include your registered email address and a detailed description of your issue so we can assist you more efficiently.</p>

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

                <div className="legal-block" id="office">
                  <div className="legal-block-icon">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3>Platform Information</h3>

                    <p>BR30 Market Scanner is an online digital platform. Support is primarily provided through email to ensure every request is tracked, reviewed, and resolved properly.</p>
                  </div>
                </div>

                <div className="legal-contact" id="contact">
                  <Mail size={30} />

                  <div>
                    <h2>Send Us An Email</h2>

                    <p>For faster assistance, include your registered email, account details, and a clear explanation of your issue when contacting our support team.</p>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20Market%20Scanner%20Support" target="_blank" rel="noopener noreferrer">
                      support.br30trader@gmail.com
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
.legal-block h3,.legal-rights h2,.legal-contact h2{margin:0 0 10px;color:#fff;}
.legal-block p,.legal-notice p,.legal-rights p,.legal-contact p{margin:0;color:#b8d8c8;line-height:1.8;}
.legal-rights{padding:28px;margin:18px 0;}
.rights-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:20px;}
.rights-grid div{display:flex;align-items:center;gap:10px;padding:14px;border-radius:16px;background:rgba(255,255,255,.05);}
.rights-grid svg{color:#00ff88;}
.legal-contact{display:flex;gap:18px;padding:28px;margin-top:18px;}
.legal-contact a{display:inline-block;margin-top:14px;color:#00ff88;font-weight:900;text-decoration:none;}
.legal-contact a:hover{color:#22d3ee;}
.legal-final-card{padding:60px;border-radius:34px;text-align:center;background:linear-gradient(135deg,#00ff88,#22d3ee,#03130d);}
.legal-final-card svg{color:#02110a;}
.legal-final-card h2{margin:18px 0 12px;color:#02110a;font-size:clamp(34px,4vw,54px);}
.legal-final-card p{max-width:700px;margin:0 auto 28px;color:#062017;font-weight:700;line-height:1.8;}
.legal-final-card .btn-primary{background:#02110a;color:#00ff88;}
@media(max-width:1050px){.legal-layout{grid-template-columns:1fr;}.legal-sidebar{position:static;}}
@media(max-width:760px){.legal-page{padding-top:72px;}.legal-content-card{padding:20px;border-radius:24px;}.legal-block{grid-template-columns:1fr;}.legal-notice,.legal-contact{flex-direction:column;}.rights-grid{grid-template-columns:1fr;}.legal-final-card{padding:36px 24px;border-radius:24px;}}
      `}</style>
    </>
  );
}
