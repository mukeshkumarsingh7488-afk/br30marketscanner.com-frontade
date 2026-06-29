import { CheckCircle2, Crown, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free Trial",
    price: "₹0",
    badge: "Start",
    icon: Rocket,
    description: "Explore BR30 Market Scanner with basic access before upgrading.",
    features: ["Limited scanner access", "Market dashboard preview", "Basic momentum view", "Trial account access", "Secure login system"],
    button: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₹2199",
    badge: "Popular",
    icon: Crown,
    description: "Full scanner access for active traders who need real-time market intelligence.",
    features: ["Full market scanner access", "Top gainers and losers", "OI spurts scanner", "Volume breakout scanner", "Market heatmap", "TradingView integration", "Subscription protected access"],
    button: "Upgrade to Premium",
    highlighted: true,
  },
  {
    name: "Pro Access",
    price: "Custom",
    badge: "Future",
    icon: ShieldCheck,
    description: "Advanced access for power users, teams, and future BR30 ecosystem integrations.",
    features: ["Everything in Premium", "Advanced scanner modules", "Priority feature access", "Future alert integrations", "BR30 ecosystem benefits"],
    button: "Contact BR30",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <>
      <section className="scanner-pricing-section" id="pricing">
        <div className="scanner-landing-container">
          <div className="scanner-pricing-heading">
            <span className="scanner-section-tag">
              <Sparkles size={15} />
              Pricing
            </span>

            <h2>Simple Pricing for Serious Market Scanning.</h2>

            <p>Start with a free trial and upgrade when you are ready to unlock full market intelligence, premium scanner modules, and protected SaaS access.</p>
          </div>

          <div className="scanner-pricing-grid">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div className={`scanner-price-card ${plan.highlighted ? "highlighted" : ""}`} key={plan.name}>
                  <div className="scanner-price-badge">{plan.badge}</div>

                  <div className="scanner-price-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{plan.name}</h3>

                  <div className="scanner-price">
                    <strong>{plan.price}</strong>
                    {plan.price !== "Custom" && <span>/ month</span>}
                  </div>

                  <p>{plan.description}</p>

                  <div className="scanner-price-features">
                    {plan.features.map((feature) => (
                      <div key={feature}>
                        <CheckCircle2 size={17} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={plan.name === "Pro Access" ? "/login" : "/register"} className={plan.highlighted ? "scanner-price-primary" : "scanner-price-outline"}>
                    {plan.button}
                    <Zap size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .scanner-pricing-section{position:relative;padding:95px 0;background:radial-gradient(circle at 50% 18%,rgba(0,255,136,.14),transparent 36%),radial-gradient(circle at 88% 70%,rgba(34,211,238,.1),transparent 34%),#020806;color:#fff;overflow:hidden;}
        .scanner-pricing-section:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.026) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent);pointer-events:none;}
        .scanner-pricing-heading{position:relative;z-index:2;text-align:center;max-width:820px;margin:0 auto 52px;}
        .scanner-pricing-heading h2{font-size:clamp(34px,4.8vw,60px);line-height:1.08;letter-spacing:-1.8px;margin:18px 0;color:#fff;font-weight:950;}
        .scanner-pricing-heading p{color:#a8b8b0;font-size:17px;line-height:1.8;margin:0;}
        .scanner-pricing-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:stretch;}
        .scanner-price-card{position:relative;padding:30px;border-radius:32px;background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);box-shadow:0 28px 85px rgba(0,0,0,.28);backdrop-filter:blur(18px);overflow:hidden;transition:.35s;}
        .scanner-price-card:before{content:"";position:absolute;width:260px;height:260px;border-radius:50%;right:-110px;top:-120px;background:rgba(0,255,136,.12);filter:blur(55px);opacity:0;transition:.35s;}
        .scanner-price-card:hover{transform:translateY(-8px);border-color:rgba(0,255,136,.34);}
        .scanner-price-card:hover:before{opacity:1;}
        .scanner-price-card.highlighted{border-color:rgba(0,255,136,.38);background:linear-gradient(180deg,rgba(0,255,136,.16),rgba(255,255,255,.045));box-shadow:0 34px 110px rgba(0,255,136,.13),0 28px 85px rgba(0,0,0,.32);}
        .scanner-price-badge{position:absolute;right:22px;top:22px;padding:7px 12px;border-radius:999px;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.22);color:#00ff88;font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.7px;}
        .scanner-price-card.highlighted .scanner-price-badge{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;border-color:transparent;}
        .scanner-price-icon{position:relative;z-index:2;width:62px;height:62px;border-radius:20px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 18px 45px rgba(0,255,136,.24);margin-bottom:24px;}
        .scanner-price-card h3{position:relative;z-index:2;margin:0 0 16px;color:#fff;font-size:26px;line-height:1.2;}
        .scanner-price{position:relative;z-index:2;display:flex;align-items:flex-end;gap:8px;margin-bottom:16px;}
        .scanner-price strong{font-size:44px;line-height:1;letter-spacing:-1.5px;color:#fff;}
        .scanner-price span{color:#91a99c;font-size:14px;font-weight:850;margin-bottom:6px;}
        .scanner-price-card p{position:relative;z-index:2;margin:0;color:#a8b8b0;font-size:14px;line-height:1.72;min-height:72px;}
        .scanner-price-features{position:relative;z-index:2;display:grid;gap:13px;margin:26px 0;}
        .scanner-price-features div{display:flex;align-items:flex-start;gap:10px;color:#d9fff0;font-size:14px;font-weight:800;line-height:1.45;}
        .scanner-price-features svg{color:#00ff88;flex-shrink:0;margin-top:1px;}
        .scanner-price-primary,.scanner-price-outline{position:relative;z-index:2;min-height:52px;width:100%;border-radius:999px;display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;font-weight:950;transition:.35s;}
        .scanner-price-primary{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;box-shadow:0 20px 52px rgba(0,255,136,.24);}
        .scanner-price-primary:hover{transform:translateY(-3px);box-shadow:0 28px 70px rgba(0,255,136,.34);}
        .scanner-price-outline{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.11);color:#fff;}
        .scanner-price-outline:hover{background:rgba(255,255,255,.1);transform:translateY(-3px);}
        @media(max-width:1050px){.scanner-pricing-grid{grid-template-columns:1fr;max-width:720px;margin:auto;}.scanner-price-card p{min-height:auto;}}
        @media(max-width:760px){.scanner-pricing-section{padding:68px 0;}.scanner-pricing-heading p{font-size:15px;}.scanner-price-card{padding:25px;border-radius:26px;}.scanner-price strong{font-size:38px;}}
        @media(max-width:430px){.scanner-pricing-heading h2{font-size:33px;}.scanner-price-card{padding:22px;}.scanner-price-badge{right:18px;top:18px;}.scanner-price-card h3{font-size:23px;}}
      `}</style>
    </>
  );
}
