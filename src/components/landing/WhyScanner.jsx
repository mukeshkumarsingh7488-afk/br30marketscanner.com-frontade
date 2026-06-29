import { Brain, Clock3, Eye, Layers3, LockKeyhole, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Built for Speed",
    text: "Reduce manual market scanning and move faster from opportunity discovery to chart validation.",
  },
  {
    icon: Brain,
    title: "Intelligent Market Filtering",
    text: "Focus on meaningful price movement, open interest activity, volume expansion, and momentum shifts.",
  },
  {
    icon: Eye,
    title: "Cleaner Market Visibility",
    text: "View active symbols, signal categories, and market behavior in a structured, trader-friendly interface.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-Focused SaaS Access",
    text: "Designed with authentication, subscription access, trial flow, and premium user control from day one.",
  },
];

export default function WhyScanner() {
  return (
    <>
      <section className="scanner-why-section">
        <div className="scanner-landing-container scanner-why-grid">
          <div className="scanner-why-left">
            <span className="scanner-section-tag">
              <Sparkles size={15} />
              Why BR30 Scanner
            </span>

            <h2>Designed to Help Traders Cut Through Market Noise.</h2>

            <p>BR30 Market Scanner brings multiple scanning workflows into one intelligent platform, helping traders identify momentum, volume, OI activity, and market strength without switching between multiple tools.</p>

            <div className="scanner-why-proof">
              <div>
                <Rocket size={20} />
                <strong>Faster Decisions</strong>
                <span>Less manual scanning. More focused analysis.</span>
              </div>

              <div>
                <LockKeyhole size={20} />
                <strong>Premium Access</strong>
                <span>Built for subscriptions, trials, and protected users.</span>
              </div>
            </div>
          </div>

          <div className="scanner-why-right">
            <div className="scanner-why-command">
              <div className="why-command-top">
                <span />
                <span />
                <span />
                <strong>SCANNER INTELLIGENCE</strong>
              </div>

              <div className="why-command-center">
                <div className="why-core">
                  <Layers3 size={34} />
                  <strong>BR30</strong>
                  <span>Signal Stack</span>
                </div>

                <div className="why-ring ring-one" />
                <div className="why-ring ring-two" />
                <div className="why-ring ring-three" />

                <div className="why-bubble bubble-one">Momentum</div>
                <div className="why-bubble bubble-two">Volume</div>
                <div className="why-bubble bubble-three">OI Spurts</div>
                <div className="why-bubble bubble-four">Heatmap</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scanner-landing-container scanner-reasons-grid">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div className="scanner-reason-card" key={item.title}>
                <div className="scanner-reason-icon">
                  <Icon size={22} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .scanner-why-section{position:relative;padding:95px 0;background:linear-gradient(180deg,#020806 0%,#03130d 50%,#020806 100%);color:#fff;overflow:hidden;}
        .scanner-why-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 16% 24%,rgba(0,255,136,.14),transparent 36%),radial-gradient(circle at 84% 36%,rgba(34,211,238,.12),transparent 34%);pointer-events:none;}
        .scanner-why-grid{position:relative;z-index:2;display:grid;grid-template-columns:1fr .95fr;gap:34px;align-items:center;}
        .scanner-why-left h2{font-size:clamp(34px,4.8vw,60px);line-height:1.08;letter-spacing:-1.8px;margin:18px 0;color:#fff;font-weight:950;}
        .scanner-why-left p{color:#a8b8b0;font-size:17px;line-height:1.8;margin:0;max-width:680px;}
        .scanner-why-proof{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:30px;}
        .scanner-why-proof div{padding:20px;border-radius:22px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);}
        .scanner-why-proof svg{color:#00ff88;margin-bottom:13px;}
        .scanner-why-proof strong{display:block;color:#fff;font-size:16px;margin-bottom:6px;}
        .scanner-why-proof span{display:block;color:#91a99c;font-size:13px;line-height:1.55;}
        .scanner-why-command{position:relative;min-height:470px;padding:24px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.09);box-shadow:0 30px 95px rgba(0,0,0,.32);backdrop-filter:blur(20px);overflow:hidden;}
        .scanner-why-command:before{content:"";position:absolute;width:360px;height:360px;border-radius:50%;right:-120px;top:-130px;background:rgba(0,255,136,.17);filter:blur(70px);}
        .why-command-top{position:relative;z-index:2;display:flex;align-items:center;gap:8px;}
        .why-command-top span{width:11px;height:11px;border-radius:50%;background:#00ff88;}
        .why-command-top span:nth-child(2){background:#22d3ee;}
        .why-command-top span:nth-child(3){background:#ff4d6d;}
        .why-command-top strong{margin-left:auto;font-size:12px;letter-spacing:1.1px;color:#d9fff0;}
        .why-command-center{position:relative;height:390px;margin-top:20px;border-radius:26px;background:rgba(0,0,0,.24);border:1px solid rgba(255,255,255,.07);overflow:hidden;}
        .why-core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:4;width:150px;height:150px;border-radius:34px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(0,255,136,.24),rgba(34,211,238,.12));border:1px solid rgba(0,255,136,.28);box-shadow:0 0 70px rgba(0,255,136,.18);}
        .why-core svg{color:#00ff88;margin-bottom:10px;}
        .why-core strong{font-size:25px;color:#fff;}
        .why-core span{color:#bdfbe3;font-size:12px;font-weight:850;margin-top:3px;}
        .why-ring{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;border:1px solid rgba(0,255,136,.16);}
        .ring-one{width:210px;height:210px;}
        .ring-two{width:300px;height:300px;border-color:rgba(34,211,238,.14);}
        .ring-three{width:390px;height:390px;border-color:rgba(255,255,255,.08);}
        .why-bubble{position:absolute;z-index:5;padding:12px 15px;border-radius:999px;background:rgba(2,8,6,.78);border:1px solid rgba(0,255,136,.22);color:#d9fff0;font-size:12px;font-weight:950;box-shadow:0 18px 48px rgba(0,0,0,.28);backdrop-filter:blur(16px);}
        .bubble-one{left:34px;top:88px;}
        .bubble-two{right:42px;top:116px;}
        .bubble-three{left:54px;bottom:92px;}
        .bubble-four{right:58px;bottom:76px;}
        .scanner-reasons-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:28px;}
        .scanner-reason-card{padding:26px;border-radius:26px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 75px rgba(0,0,0,.24);backdrop-filter:blur(18px);transition:.35s;}
        .scanner-reason-card:hover{transform:translateY(-7px);border-color:rgba(0,255,136,.34);}
        .scanner-reason-icon{width:56px;height:56px;border-radius:18px;display:flex;align-items:center;justify-content:center;color:#00ff88;background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.18);margin-bottom:20px;}
        .scanner-reason-card h3{margin:0 0 10px;color:#fff;font-size:20px;line-height:1.25;}
        .scanner-reason-card p{margin:0;color:#91a99c;font-size:14px;line-height:1.7;}
        @media(max-width:1050px){.scanner-why-grid{grid-template-columns:1fr;}.scanner-reasons-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:760px){.scanner-why-section{padding:68px 0;}.scanner-why-left p{font-size:15px;}.scanner-why-proof{grid-template-columns:1fr;}.scanner-reasons-grid{grid-template-columns:1fr;gap:15px;}.scanner-why-command{min-height:auto;padding:18px;border-radius:26px;}.why-command-center{height:350px;}.why-command-top strong{font-size:10px;}.scanner-reason-card{padding:23px;border-radius:23px;}}
        @media(max-width:430px){.scanner-why-left h2{font-size:33px;}.why-command-center{height:310px;}.why-core{width:126px;height:126px;border-radius:28px;}.ring-one{width:170px;height:170px;}.ring-two{width:238px;height:238px;}.ring-three{width:305px;height:305px;}.why-bubble{font-size:10px;padding:9px 11px;}.bubble-one{left:16px;top:72px;}.bubble-two{right:16px;top:96px;}.bubble-three{left:20px;bottom:72px;}.bubble-four{right:20px;bottom:58px;}}
      `}</style>
    </>
  );
}
