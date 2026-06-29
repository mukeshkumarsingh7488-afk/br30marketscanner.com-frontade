import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, Ban, CheckCircle2, CreditCard, FileText, Mail, RefreshCcw, ShieldCheck, Sparkles, TimerReset, WalletCards } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const sections = [
  {
    icon: CreditCard,
    title: "1. Digital Product Access",
    text: "BR30 Market Scanner is a digital subscription-based platform. Once access is activated, users may immediately receive access to scanner tools, dashboard features, market pages, subscription benefits, and related digital resources.",
  },
  {
    icon: TimerReset,
    title: "2. Trial Access",
    text: "If a free trial or limited access period is provided, it is offered only for platform evaluation. Trial access does not guarantee future free access, paid plan approval, feature availability, or refund eligibility after a paid subscription is activated.",
  },
  {
    icon: WalletCards,
    title: "3. Subscription Payments",
    text: "Paid subscriptions may be charged based on the selected plan, billing cycle, offer, or access type. Users are responsible for reviewing plan details, pricing, billing terms, and access duration before completing payment.",
  },
  {
    icon: Ban,
    title: "4. No Refund After Activation",
    text: "Because BR30 Market Scanner provides digital access, subscription activation, and immediate platform usage, payments are generally non-refundable once access has been activated, unless required by applicable law or approved by BR30 after review.",
  },
  {
    icon: RefreshCcw,
    title: "5. Duplicate Or Failed Payments",
    text: "If a duplicate payment, failed transaction debit, or payment gateway issue occurs, users may contact support with payment proof. Valid duplicate or unresolved payment cases may be reviewed and processed according to payment provider records.",
  },
  {
    icon: AlertTriangle,
    title: "6. Market Data Or Feature Limitations",
    text: "Refunds will not be provided only because market data is delayed, third-party data providers are unavailable, scanner results change, market conditions shift, or a user does not get expected trading outcomes from platform insights.",
  },
  {
    icon: ShieldCheck,
    title: "7. Account Misuse",
    text: "Refunds may be denied if the account is suspended or restricted due to misuse, shared access, unauthorized activity, scraping, policy violation, abuse, or attempts to bypass subscription protection.",
  },
];

export default function RefundPolicy() {
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
                <Sparkles size={14} /> Refund Policy
              </span>

              <h1>
                Refund Rules For <span>BR30 Market Scanner.</span>
              </h1>

              <p>This Refund Policy explains how payments, subscriptions, trial access, duplicate transactions, activation, cancellation, and refund requests are handled for BR30 Market Scanner.</p>

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
                <h3>Refund Overview</h3>

                <a href="#intro">Introduction</a>
                <a href="#access">Digital Access</a>
                <a href="#payments">Payments</a>
                <a href="#limitations">Limitations</a>
                <a href="#review">Review Process</a>
                <a href="#contact">Contact</a>
              </aside>

              <div className="legal-content-card">
                <div className="legal-notice" id="intro">
                  <FileText size={26} />

                  <div>
                    <h2>Introduction</h2>
                    <p>BR30 Market Scanner provides digital subscription access to market scanner tools, dashboard pages, filters, resources, and related platform features. By purchasing or activating access, you agree to this Refund Policy.</p>
                  </div>
                </div>
                <div className="legal-section" id="access">
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
                <div className="legal-section" id="payments">
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
                <div className="legal-section" id="limitations">
                  {sections.slice(5, 7).map((item) => {
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
                <div className="legal-rights" id="review">
                  <h2>Refund Review Process</h2>

                  <p>Refund requests, duplicate payment claims, or billing-related issues must be submitted with proper payment proof, registered email address, transaction ID, date of payment, and a clear explanation. Approval is not automatic and depends on platform records, payment gateway confirmation, access status, and policy terms.</p>

                  <div className="rights-grid">
                    <div>
                      <CheckCircle2 size={20} />
                      <span>Share registered email</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Attach payment proof</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Mention transaction ID</span>
                    </div>

                    <div>
                      <CheckCircle2 size={20} />
                      <span>Explain billing issue clearly</span>
                    </div>
                  </div>
                </div>
                <div className="legal-block">
                  <div className="legal-block-icon">
                    <RefreshCcw size={24} />
                  </div>

                  <div>
                    <h3>8. Cancellation</h3>
                    <p>Users may stop using the platform at any time. Cancellation, if available, may stop future access or renewal depending on the selected plan. Cancellation does not automatically create refund eligibility for already activated access or used subscription periods.</p>
                  </div>
                </div>
                <div className="legal-block">
                  <div className="legal-block-icon">
                    <AlertTriangle size={24} />
                  </div>

                  <div>
                    <h3>9. Trading Outcome Disclaimer</h3>
                    <p>Refunds will not be issued based on trading performance, missed trades, losses, emotional dissatisfaction, market volatility, personal strategy results, or user expectations. BR30 Market Scanner is an informational tool and does not guarantee profits, accuracy, or financial results.</p>
                  </div>
                </div>
                <div className="legal-block">
                  <div className="legal-block-icon">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h3>10. Changes To This Refund Policy</h3>
                    <p>We may update this Refund Policy from time to time to reflect business changes, payment gateway rules, subscription updates, legal requirements, operational needs, or platform improvements. Updated versions will be posted on this page with a revised last updated date.</p>
                  </div>
                </div>
                <div className="legal-contact" id="contact">
                  <Mail size={28} />

                  <div>
                    <h2>Contact Us</h2>

                    <p>For refund, duplicate payment, or billing-related questions, contact BR30 Team at:</p>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=Refund%20Policy%20Query&body=Hello%20BR30%20Market%20Scanner%20Team,%0A%0AI%20have%20a%20refund/billing%20related%20question.%0A%0ARegistered%20Email:%0ATransaction%20ID:%0APayment%20Date:%0AIssue:%0A%0AThanks" target="_blank" rel="noopener noreferrer">
                      support.br30trader@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-final-section">
            <div className="landing-container legal-final-card">
              <ShieldCheck size={40} />

              <h2>Transparent Access. Clear Refund Rules.</h2>

              <p>BR30 Market Scanner keeps refund and billing rules clear so users understand subscription access before activating the platform.</p>

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
