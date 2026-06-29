import { ArrowRight, BarChart3, BellRing, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ctaPoints = ["Real-time market scanning", "Momentum, OI and volume insights", "TradingView one-click chart access"];

export default function CTA() {
  return (
    <>
      <section className="scanner-cta-section">
        <div className="scanner-landing-container">
          <div className="scanner-cta-card">
            <div className="scanner-cta-orb scanner-cta-orb-one" />
            <div className="scanner-cta-orb scanner-cta-orb-two" />

            <div className="scanner-cta-content">
              <span className="scanner-section-tag">
                <Sparkles size={15} />
                Start Scanning Smarter
              </span>

              <h2>Turn Market Noise Into Actionable Trading Opportunities.</h2>

              <p>Join BR30 Market Scanner and access a premium market intelligence dashboard built to help traders discover high-potential setups faster, validate signals with confidence, and stay focused on real market action.</p>

              <div className="scanner-cta-points">
                {ctaPoints.map((item) => (
                  <div key={item}>
                    <ShieldCheck size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="scanner-cta-actions">
                <Link to="/register" className="scanner-cta-primary">
                  Start Free Trial <ArrowRight size={18} />
                </Link>

                <Link to="/login" className="scanner-cta-outline">
                  Login Dashboard
                </Link>
              </div>
            </div>

            <div className="scanner-cta-panel">
              <div className="cta-panel-top">
                <span />
                <span />
                <span />
                <strong>LIVE MARKET EDGE</strong>
              </div>

              <div className="cta-panel-grid">
                <div>
                  <BarChart3 size={22} />
                  <span>Volume Breakout</span>
                  <strong>Active</strong>
                </div>

                <div>
                  <BellRing size={22} />
                  <span>Signal Alert</span>
                  <strong>Ready</strong>
                </div>

                <div>
                  <ShieldCheck size={22} />
                  <span>Premium Access</span>
                  <strong>Protected</strong>
                </div>
              </div>

              <div className="cta-scan-line">
                <span />
              </div>

              <div className="cta-terminal-list">
                <div>
                  <span>NIFTY Momentum</span>
                  <strong>Scanning</strong>
                </div>
                <div>
                  <span>OI Activity</span>
                  <strong>Detected</strong>
                </div>
                <div>
                  <span>TradingView Link</span>
                  <strong>Ready</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.scanner-cta-section{position:relative;padding:95px 0;background:#020806;color:#fff;overflow:hidden;}
.scanner-cta-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(0,255,136,.13),transparent 42%),radial-gradient(circle at 85% 20%,rgba(34,211,238,.1),transparent 34%);pointer-events:none;}
.scanner-cta-card{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:34px;align-items:center;padding:54px;border-radius:38px;background:linear-gradient(135deg,rgba(0,255,136,.16),rgba(34,211,238,.08),rgba(255,255,255,.04));border:1px solid rgba(0,255,136,.24);box-shadow:0 36px 120px rgba(0,0,0,.42);backdrop-filter:blur(22px);overflow:hidden;}
.scanner-cta-card:before{content:"";position:absolute;inset:1px;border-radius:37px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,0));pointer-events:none;}
.scanner-cta-orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;}
.scanner-cta-orb-one{width:330px;height:330px;left:-130px;top:-120px;background:rgba(0,255,136,.28);}
.scanner-cta-orb-two{width:360px;height:360px;right:-140px;bottom:-150px;background:rgba(34,211,238,.18);}
.scanner-cta-content{position:relative;z-index:3;}
.scanner-cta-content h2{font-size:clamp(34px,4.8vw,62px);line-height:1.07;letter-spacing:-1.9px;margin:20px 0;color:#fff;font-weight:950;}
.scanner-cta-content p{margin:0;color:#c5ddd1;font-size:17px;line-height:1.82;max-width:720px;}
.scanner-cta-points{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px;}
.scanner-cta-points div{display:flex;align-items:center;gap:8px;padding:10px 13px;border-radius:999px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.09);color:#d9fff0;font-size:13px;font-weight:850;}
.scanner-cta-points svg{color:#00ff88;}
.scanner-cta-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:34px;}
.scanner-cta-primary,.scanner-cta-outline{min-height:54px;padding:14px 24px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:9px;text-decoration:none;font-weight:950;transition:.35s;}
.scanner-cta-primary{background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;box-shadow:0 22px 58px rgba(0,255,136,.28);}
.scanner-cta-primary:hover{transform:translateY(-3px);box-shadow:0 30px 78px rgba(0,255,136,.38);}
.scanner-cta-outline{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.12);color:#fff;}
.scanner-cta-outline:hover{background:rgba(255,255,255,.1);transform:translateY(-3px);}
.scanner-cta-panel{position:relative;z-index:3;padding:24px;border-radius:30px;background:rgba(2,8,6,.58);border:1px solid rgba(255,255,255,.1);box-shadow:0 28px 90px rgba(0,0,0,.35);backdrop-filter:blur(18px);}
.cta-panel-top{display:flex;align-items:center;gap:8px;margin-bottom:18px;}
.cta-panel-top span{width:11px;height:11px;border-radius:50%;background:#00ff88;}
.cta-panel-top span:nth-child(2){background:#22d3ee;}
.cta-panel-top span:nth-child(3){background:#ff4d6d;}
.cta-panel-top strong{margin-left:auto;color:#d9fff0;font-size:11px;letter-spacing:1.1px;}
.cta-panel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
.cta-panel-grid div{padding:17px;border-radius:19px;background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.08);}
.cta-panel-grid svg{color:#00ff88;margin-bottom:12px;}
.cta-panel-grid span{display:block;color:#8fa69a;font-size:11px;font-weight:850;margin-bottom:6px;}
.cta-panel-grid strong{display:block;color:#fff;font-size:15px;}
.cta-scan-line{position:relative;height:90px;margin:18px 0;border-radius:20px;background:linear-gradient(90deg,rgba(0,255,136,.06),rgba(34,211,238,.1),rgba(0,255,136,.06));border:1px solid rgba(255,255,255,.07);overflow:hidden;}
.cta-scan-line:before{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:linear-gradient(90deg,transparent,#00ff88,transparent);}
.cta-scan-line span{position:absolute;left:18%;top:0;width:3px;height:100%;background:#00ff88;box-shadow:0 0 24px rgba(0,255,136,.8);animation:scannerCtaScan 2.6s linear infinite;}
.cta-terminal-list{display:grid;gap:12px;}
.cta-terminal-list div{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px;border-radius:17px;background:rgba(0,0,0,.24);border:1px solid rgba(255,255,255,.075);}
.cta-terminal-list span{color:#91a99c;font-size:13px;font-weight:850;}
.cta-terminal-list strong{color:#00ff88;font-size:13px;}
@keyframes scannerCtaScan{0%{left:0%;opacity:0;}12%{opacity:1;}88%{opacity:1;}100%{left:100%;opacity:0;}}
@media(max-width:1050px){.scanner-cta-card{grid-template-columns:1fr;padding:42px;}.scanner-cta-content{text-align:center;}.scanner-cta-content p{margin:auto;}.scanner-cta-points,.scanner-cta-actions{justify-content:center;}}
@media(max-width:760px){.scanner-cta-section{padding:68px 0;}.scanner-cta-card{padding:28px;border-radius:28px;}.scanner-cta-card:before{border-radius:27px;}.scanner-cta-content p{font-size:15px;}.scanner-cta-actions{flex-direction:column;}.scanner-cta-primary,.scanner-cta-outline{width:100%;}.scanner-cta-points div{width:100%;justify-content:center;}.cta-panel-grid{grid-template-columns:1fr;}.scanner-cta-panel{padding:18px;border-radius:24px;}}
@media(max-width:430px){.scanner-cta-content h2{font-size:33px;}.scanner-cta-card{padding:22px;}.cta-panel-top strong{font-size:9px;}.cta-terminal-list div{align-items:flex-start;flex-direction:column;gap:5px;}}
      `}</style>
    </>
  );
}
