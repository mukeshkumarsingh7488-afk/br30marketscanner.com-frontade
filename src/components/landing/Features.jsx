import { Activity, BarChart3, CandlestickChart, Flame, LineChart, MousePointerClick, Radio, Target } from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Real-Time Market Scanner",
    text: "Gain instant visibility into real-time market activity, momentum shifts, and high-probability trading opportunities through a powerful, trader-focused dashboard.",
  },
  {
    icon: Flame,
    title: "Top Gainers & Losers",
    text: "Automatically discover the market's top-performing and weakest-performing instruments, helping you focus on high-impact trading opportunities.",
  },
  {
    icon: BarChart3,
    title: "OI Spurts Analysis",
    text: "Track long build-up, short build-up, short covering, and long unwinding activity to identify institutional participation and evolving market sentiment.",
  },
  {
    icon: Activity,
    title: "Volume Breakout Detection",
    text: "Detect unusual volume expansion and institutional participation in real time, enabling you to identify high-conviction trading opportunities with greater confidence.",
  },
  {
    icon: CandlestickChart,
    title: "Options & Futures Tracking",
    text: "Track index options, stock options, futures, and premium price movements with real-time market intelligence for faster, data-driven trading decisions.",
  },
  {
    icon: MousePointerClick,
    title: "TradingView Integration",
    text: "Seamlessly launch any symbol in TradingView with a single click, enabling faster technical analysis, strategy validation, and confident trade execution.",
  },
];

export default function Features() {
  return (
    <>
      <section className="scanner-features-section" id="features">
        <div className="scanner-landing-container">
          <div className="scanner-features-heading">
            <span className="scanner-section-tag">
              <Target size={15} />
              Scanner Features
            </span>

            <h2>Everything a Trader Needs to Spot Action Faster.</h2>

            <p>BR30 Market Scanner is built for speed, clarity and decision support — so you can focus on high-quality market opportunities instead of manually checking multiple screens.</p>
          </div>

          <div className="scanner-features-grid">
            <div className="scanner-feature-main">
              <div className="scanner-feature-main-icon">
                <LineChart size={30} />
              </div>

              <h3>Built for Active Market Decisions</h3>

              <p>Built for modern traders, BR30 Market Scanner streamlines the entire analysis process—from identifying market opportunities and validating signals to opening TradingView charts and executing high-confidence trading decisions.</p>

              <div className="scanner-feature-terminal">
                <div>
                  <span>Momentum Engine</span>
                  <strong>Scanning</strong>
                </div>
                <div>
                  <span>OI Activity</span>
                  <strong>Detected</strong>
                </div>
                <div>
                  <span>Volume Breakout</span>
                  <strong>Active</strong>
                </div>
              </div>
            </div>

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div className="scanner-feature-card" key={item.title}>
                  <div className="scanner-feature-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .scanner-features-section{position:relative;padding:95px 0;background:radial-gradient(circle at 12% 20%,rgba(0,255,136,.12),transparent 34%),radial-gradient(circle at 88% 70%,rgba(34,211,238,.1),transparent 35%),#020806;color:#fff;overflow:hidden;}
        .scanner-features-section:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent);pointer-events:none;}
        .scanner-features-heading{position:relative;z-index:2;text-align:center;max-width:840px;margin:0 auto 48px;}
        .scanner-features-heading h2{font-size:clamp(34px,4.8vw,60px);line-height:1.08;letter-spacing:-1.8px;margin:18px 0;color:#fff;font-weight:950;}
        .scanner-features-heading p{color:#a8b8b0;font-size:17px;line-height:1.8;margin:0;}
        .scanner-features-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.15fr repeat(2,1fr);gap:18px;}
        .scanner-feature-main,.scanner-feature-card{background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);box-shadow:0 24px 80px rgba(0,0,0,.26);}
        .scanner-feature-main{grid-row:span 2;border-radius:32px;padding:34px;min-height:430px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;position:relative;}
        .scanner-feature-main:before{content:"";position:absolute;width:310px;height:310px;border-radius:50%;right:-110px;top:-110px;background:rgba(0,255,136,.18);filter:blur(55px);}
        .scanner-feature-main-icon{position:relative;z-index:2;width:68px;height:68px;border-radius:22px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 20px 52px rgba(0,255,136,.28);}
        .scanner-feature-main h3{position:relative;z-index:2;margin:26px 0 14px;font-size:clamp(28px,3vw,42px);line-height:1.08;letter-spacing:-1.2px;color:#fff;}
        .scanner-feature-main p{position:relative;z-index:2;color:#a8b8b0;font-size:16px;line-height:1.78;margin:0;}
        .scanner-feature-terminal{position:relative;z-index:2;display:grid;gap:12px;margin-top:30px;}
        .scanner-feature-terminal div{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px;border-radius:18px;background:rgba(0,0,0,.26);border:1px solid rgba(255,255,255,.08);}
        .scanner-feature-terminal span{color:#8fa69a;font-size:13px;font-weight:850;}
        .scanner-feature-terminal strong{color:#00ff88;font-size:13px;}
        .scanner-feature-card{border-radius:26px;padding:28px;transition:.35s;}
        .scanner-feature-card:hover{transform:translateY(-7px);border-color:rgba(0,255,136,.34);}
        .scanner-feature-icon{width:58px;height:58px;border-radius:19px;display:flex;align-items:center;justify-content:center;color:#00ff88;background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.18);margin-bottom:22px;}
        .scanner-feature-card h3{font-size:21px;line-height:1.22;margin:0 0 12px;color:#fff;}
        .scanner-feature-card p{margin:0;color:#91a99c;font-size:14px;line-height:1.72;}
        @media(max-width:1050px){.scanner-features-grid{grid-template-columns:repeat(2,1fr);}.scanner-feature-main{grid-column:1/-1;grid-row:auto;min-height:auto;}}
        @media(max-width:760px){.scanner-features-section{padding:68px 0;}.scanner-features-grid{grid-template-columns:1fr;gap:15px;}.scanner-features-heading p{font-size:15px;}.scanner-feature-main{padding:26px;border-radius:26px;}.scanner-feature-card{padding:24px;border-radius:23px;}.scanner-feature-main h3{font-size:30px;}}
      `}</style>
    </>
  );
}
