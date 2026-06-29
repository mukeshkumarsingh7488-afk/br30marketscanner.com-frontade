import { ArrowRight, ChartNoAxesCombined, Filter, LineChart, MousePointerClick, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Choose Your Scanner",
    text: "Start by selecting a market segment, then instantly discover high-potential opportunities with real-time market intelligence and advanced scanning tools.",
  },
  {
    number: "02",
    icon: Filter,
    title: "Filter Market Action",
    text: "Leverage advanced market filters to analyze price action, open interest, volume, and momentum, helping you focus only on the highest-quality trading setups.",
  },
  {
    number: "03",
    icon: MousePointerClick,
    title: "Open Chart & Take Action",
    text: "Seamlessly open any symbol in TradingView, validate your analysis, and move from market discovery to execution in just one click.",
  },
];

const workflowItems = ["Live data refresh", "Momentum classification", "OI activity detection", "Volume breakout filter", "TradingView chart link"];

export default function HowItWorks() {
  return (
    <>
      <section className="scanner-how-section" id="how-it-works">
        <div className="scanner-landing-container">
          <div className="scanner-how-heading">
            <span className="scanner-section-tag">
              <ChartNoAxesCombined size={15} />
              How It Works
            </span>

            <h2>Simple Workflow. Faster Market Decisions.</h2>

            <p>Monitor real-time market opportunities across equities, options, futures, and multiple asset classes from one intelligent dashboard. BR30 Market Scanner helps you identify high-quality setups faster with powerful market intelligence and actionable insights.</p>
          </div>

          <div className="scanner-how-layout">
            <div className="scanner-steps">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="scanner-step-card" key={step.title}>
                    <div className="scanner-step-number">{step.number}</div>

                    <div className="scanner-step-icon">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="scanner-step-arrow">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="scanner-workflow-panel">
              <div className="workflow-panel-top">
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <strong>BR30 WORKFLOW</strong>
              </div>

              <div className="workflow-chart">
                <div className="workflow-chart-line line-one" />
                <div className="workflow-chart-line line-two" />
                <div className="workflow-chart-line line-three" />
                <LineChart size={64} />
              </div>

              <div className="workflow-list">
                {workflowItems.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                    <ShieldCheck size={17} />
                  </div>
                ))}
              </div>

              <div className="workflow-bottom">
                <p>Result</p>
                <strong>Clean scanner output for faster analysis.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .scanner-how-section{position:relative;padding:95px 0;background:radial-gradient(circle at 18% 18%,rgba(0,255,136,.12),transparent 34%),radial-gradient(circle at 82% 82%,rgba(34,211,238,.1),transparent 35%),#020806;color:#fff;overflow:hidden;}
        .scanner-how-section:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.026) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent);pointer-events:none;}
        .scanner-how-heading{position:relative;z-index:2;text-align:center;max-width:820px;margin:0 auto 52px;}
        .scanner-how-heading h2{font-size:clamp(34px,4.8vw,60px);line-height:1.08;letter-spacing:-1.8px;margin:18px 0;color:#fff;font-weight:950;}
        .scanner-how-heading p{color:#a8b8b0;font-size:17px;line-height:1.8;margin:0;}
        .scanner-how-layout{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:stretch;}
        .scanner-steps{display:grid;gap:18px;}
        .scanner-step-card{position:relative;display:grid;grid-template-columns:auto auto 1fr;gap:18px;align-items:flex-start;padding:28px;border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 75px rgba(0,0,0,.24);backdrop-filter:blur(18px);transition:.35s;overflow:hidden;}
        .scanner-step-card:before{content:"";position:absolute;left:-90px;top:-90px;width:210px;height:210px;border-radius:50%;background:rgba(0,255,136,.1);filter:blur(45px);opacity:0;transition:.35s;}
        .scanner-step-card:hover{transform:translateY(-6px);border-color:rgba(0,255,136,.34);}
        .scanner-step-card:hover:before{opacity:1;}
        .scanner-step-number{position:relative;z-index:2;color:rgba(255,255,255,.18);font-size:30px;font-weight:950;letter-spacing:-1px;line-height:1;}
        .scanner-step-icon{position:relative;z-index:2;width:58px;height:58px;border-radius:19px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 18px 45px rgba(0,255,136,.24);flex-shrink:0;}
        .scanner-step-card h3{position:relative;z-index:2;margin:0 0 10px;color:#fff;font-size:23px;line-height:1.2;}
        .scanner-step-card p{position:relative;z-index:2;margin:0;color:#91a99c;font-size:15px;line-height:1.72;}
        .scanner-step-arrow{position:absolute;right:26px;bottom:22px;width:38px;height:38px;border-radius:999px;display:flex;align-items:center;justify-content:center;color:#00ff88;background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.18);}
        .scanner-workflow-panel{position:relative;min-height:100%;padding:28px;border-radius:34px;background:linear-gradient(180deg,rgba(0,255,136,.11),rgba(255,255,255,.035));border:1px solid rgba(0,255,136,.18);box-shadow:0 30px 95px rgba(0,0,0,.32);backdrop-filter:blur(20px);overflow:hidden;}
        .scanner-workflow-panel:before{content:"";position:absolute;width:330px;height:330px;border-radius:50%;right:-120px;top:-120px;background:rgba(34,211,238,.14);filter:blur(65px);pointer-events:none;}
        .workflow-panel-top{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;margin-bottom:26px;}
        .workflow-panel-top div{display:flex;gap:8px;}
        .workflow-panel-top span{width:11px;height:11px;border-radius:50%;background:#00ff88;}
        .workflow-panel-top span:nth-child(2){background:#22d3ee;}
        .workflow-panel-top span:nth-child(3){background:#ff4d6d;}
        .workflow-panel-top strong{font-size:12px;letter-spacing:1.2px;color:#d9fff0;}
        .workflow-chart{position:relative;z-index:2;height:190px;border-radius:26px;background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:18px;}
        .workflow-chart svg{position:relative;z-index:3;color:#00ff88;filter:drop-shadow(0 0 25px rgba(0,255,136,.35));}
        .workflow-chart-line{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#00ff88,transparent);opacity:.6;}
        .line-one{top:42px;}
        .line-two{top:94px;background:linear-gradient(90deg,transparent,#22d3ee,transparent);}
        .line-three{bottom:44px;}
        .workflow-list{position:relative;z-index:2;display:grid;gap:12px;}
        .workflow-list div{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:14px;border-radius:17px;background:rgba(0,0,0,.23);border:1px solid rgba(255,255,255,.075);}
        .workflow-list span{color:rgba(255,255,255,.22);font-size:14px;font-weight:950;}
        .workflow-list strong{color:#d9fff0;font-size:14px;}
        .workflow-list svg{color:#00ff88;}
        .workflow-bottom{position:relative;z-index:2;margin-top:18px;padding:20px;border-radius:20px;background:linear-gradient(135deg,rgba(0,255,136,.16),rgba(34,211,238,.08));border:1px solid rgba(0,255,136,.2);}
        .workflow-bottom p{margin:0 0 6px;color:#91a99c;font-weight:850;font-size:13px;}
        .workflow-bottom strong{color:#fff;font-size:18px;line-height:1.35;}
        @media(max-width:1050px){.scanner-how-layout{grid-template-columns:1fr;}.scanner-workflow-panel{min-height:auto;}}
        @media(max-width:760px){.scanner-how-section{padding:68px 0;}.scanner-how-heading p{font-size:15px;}.scanner-step-card{grid-template-columns:1fr;padding:24px;border-radius:24px;}.scanner-step-arrow{display:none;}.scanner-workflow-panel{padding:22px;border-radius:26px;}.workflow-chart{height:160px;}.scanner-step-card h3{font-size:21px;}}
        @media(max-width:430px){.scanner-how-heading h2{font-size:33px;}.workflow-panel-top strong{font-size:10px;}.workflow-list strong{font-size:13px;}.workflow-bottom strong{font-size:16px;}}
      `}</style>
    </>
  );
}
