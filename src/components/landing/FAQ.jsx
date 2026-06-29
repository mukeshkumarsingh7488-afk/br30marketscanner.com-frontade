import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is BR30 Market Scanner?",
    answer: "BR30 Market Scanner is a professional market intelligence platform that helps traders identify momentum, volume breakouts, open interest activity, and high-potential trading opportunities across multiple market segments in real time.",
  },
  {
    question: "Which markets are supported?",
    answer: "The platform supports equities, stock options, index options, stock futures, index futures, forex, metals, commodities, and additional market segments that will continue expanding over time.",
  },
  {
    question: "Does BR30 Market Scanner provide trading signals?",
    answer: "The scanner highlights market opportunities using data-driven filters such as momentum, open interest, and volume activity. All trading decisions remain the responsibility of the user.",
  },
  {
    question: "Is TradingView integration available?",
    answer: "Yes. Every supported symbol can be opened directly in TradingView with a single click, allowing you to validate your technical analysis before entering a trade.",
  },
  {
    question: "Can I try the platform before subscribing?",
    answer: "Yes. New users receive a free trial that allows them to explore the platform before upgrading to a premium subscription.",
  },
  {
    question: "Is my account and subscription secure?",
    answer: "Absolutely. BR30 Market Scanner includes secure authentication, protected user accounts, subscription management, and controlled access to premium features.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="scanner-faq-section" id="faq">
        <div className="scanner-landing-container">
          <div className="scanner-faq-heading">
            <span className="scanner-section-tag">
              <HelpCircle size={15} />
              Frequently Asked Questions
            </span>

            <h2>Everything You Need to Know.</h2>

            <p>Find answers to the most common questions about BR30 Market Scanner, subscriptions, supported markets, and platform access.</p>
          </div>

          <div className="scanner-faq-list">
            {faqs.map((item, index) => (
              <div key={item.question} className={`scanner-faq-item ${open === index ? "active" : ""}`}>
                <button type="button" className="scanner-faq-question" onClick={() => setOpen(open === index ? -1 : index)}>
                  <span>{item.question}</span>

                  <ChevronDown size={20} className={open === index ? "rotate" : ""} />
                </button>

                <div
                  className="scanner-faq-answer"
                  style={{
                    maxHeight: open === index ? "220px" : "0px",
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
.scanner-faq-section{position:relative;padding:95px 0;background:linear-gradient(180deg,#020806 0%,#03130d 50%,#020806 100%);color:#fff;overflow:hidden;}
.scanner-faq-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 24%,rgba(0,255,136,.12),transparent 34%),radial-gradient(circle at 82% 70%,rgba(34,211,238,.10),transparent 34%);pointer-events:none;}
.scanner-faq-heading{position:relative;z-index:2;max-width:820px;margin:auto;text-align:center;margin-bottom:52px;}
.scanner-faq-heading h2{font-size:clamp(34px,4.8vw,58px);margin:18px 0;font-weight:950;letter-spacing:-1.7px;}
.scanner-faq-heading p{margin:0;color:#9fb3a8;font-size:17px;line-height:1.8;}
.scanner-faq-list{position:relative;z-index:2;max-width:920px;margin:auto;display:grid;gap:16px;}
.scanner-faq-item{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);border-radius:24px;overflow:hidden;backdrop-filter:blur(18px);transition:.35s;}
.scanner-faq-item.active{border-color:rgba(0,255,136,.3);box-shadow:0 25px 70px rgba(0,255,136,.08);}
.scanner-faq-question{width:100%;background:none;border:none;color:#fff;padding:24px 28px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;text-align:left;font-size:18px;font-weight:850;}
.scanner-faq-question svg{color:#00ff88;transition:.35s;flex-shrink:0;}
.scanner-faq-question svg.rotate{transform:rotate(180deg);}
.scanner-faq-answer{overflow:hidden;transition:max-height .35s ease;}
.scanner-faq-answer p{margin:0;padding:0 28px 26px;color:#95a99d;font-size:15px;line-height:1.8;}
@media(max-width:760px){.scanner-faq-section{padding:68px 0;}.scanner-faq-question{padding:22px;font-size:16px;}.scanner-faq-answer p{padding:0 22px 22px;font-size:14px;}}
`}</style>
    </>
  );
}
