import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dark-Green.png";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Home", href: "#hero" },
      { label: "Features", href: "#features" },
      { label: "Markets", href: "#markets" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Release Notes", href: "/release-notes" },
      { label: "API Access", href: "/api-access" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToHash = (hash) => {
    if (!hash) return;

    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }

    window.history.replaceState(null, "", `/${hash}`);

    setTimeout(() => {
      const section = document.querySelector(hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 40);
  };

  return (
    <>
      <footer className="scanner-footer">
        <div className="scanner-landing-container">
          <div className="scanner-footer-top">
            <div className="scanner-footer-brand">
              <Link to="/" className="landing-logo">
                <div className="landing-logo-icon">
                  <img src={logo} alt="BR30 Market Scanner" />
                </div>

                <div className="landing-logo-text">
                  <span>BR30 Market Scanner</span>
                </div>
              </Link>

              <p>A premium market intelligence SaaS platform built to help traders scan momentum, open interest, volume activity, and multi-market opportunities from one powerful dashboard.</p>

              <div className="scanner-footer-contact">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20Market%20Scanner%20Support&body=Hello%20BR30%20Market%20Scanner%20Support%20Team,%0A%0AI%20need%20assistance%20regarding%20BR30%20Market%20Scanner.%0A%0AName:%0AEmail:%0AIssue:%0A" target="_blank" rel="noopener noreferrer">
                  <Mail size={17} />
                  support.br30trader@gmail.com
                </a>

                <a href="https://t.me/+hBAT4kWo63A4ZWY1" target="_blank" rel="noreferrer">
                  <MessageCircle size={17} />
                  BR30 Community
                </a>
              </div>
            </div>

            <div className="scanner-footer-links">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>

                  {group.links.map((item) =>
                    item.href.startsWith("/") ? (
                      <Link to={item.href} key={item.label}>
                        {item.label}
                      </Link>
                    ) : (
                      <button type="button" key={item.label} className="scanner-footer-link-btn" onClick={() => scrollToHash(item.href)}>
                        {item.label}
                      </button>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="scanner-footer-middle">
            <div>
              <span>BR30 Ecosystem</span>
              <strong>Trader · Kart · Algo · Founder · Market Scanner</strong>
            </div>

            <Link to="/register" className="scanner-footer-cta">
              Start Free Trial <ArrowRight size={16} />
            </Link>
          </div>

          <div className="scanner-footer-bottom">
            <p>© 2026 BR30 Market Scanner. All Rights Reserved.</p>

            <div className="scanner-footer-built">
              <span>Built with</span>
              <span className="heart">❤️</span>
              <span>by</span>
              <strong>BR30 Group</strong>
            </div>

            <div className="scanner-footer-socials">
              <a href="https://www.youtube.com/@br30traderofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="https://www.facebook.com/share/1DDJYGYYDf/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="https://www.instagram.com/br30Traderofficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://x.com/MukeshKuma48159" target="_blank" rel="noopener noreferrer" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
.scanner-footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;}.scanner-footer-built{flex:1;display:flex;justify-content:center;align-items:center;gap:8px;font-size:18px;font-weight:500;color:#d7d7d7;}.scanner-footer-built .heart{font-size:22px;animation:heartBeat 1.8s infinite;}.scanner-footer-built strong{font-weight:800;background:linear-gradient(90deg,#ffb347,#ffd86f);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}@keyframes heartBeat{0%,100%{transform:scale(1);}50%{transform:scale(1.18);}}
.landing-logo-icon img{width:100%;height:100%;object-fit:contain;transform:scale(0.95);}
.landing-logo{display:flex;align-items:center;gap:12px;text-decoration:none;color:#fff;min-width:0;}
.landing-logo-icon{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);overflow:hidden;}
.landing-logo-text{display:flex;flex-direction:column;line-height:1.08;min-width:0;}
.landing-logo-text span{font-size:19px;font-weight:950;letter-spacing:-.04em;color:#fff;}
.scanner-footer .scanner-landing-container{width:min(1180px,calc(100% - 32px));margin:0 auto;}
.scanner-footer{position:relative;padding:80px 0 28px;background:linear-gradient(180deg,#020806 0%,#010403 100%);color:#fff;overflow:hidden;border-top:1px solid rgba(255,255,255,.08);}
.scanner-footer:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 10%,rgba(0,255,136,.12),transparent 34%),radial-gradient(circle at 84% 40%,rgba(34,211,238,.08),transparent 32%);pointer-events:none;}
.scanner-footer-top{position:relative;z-index:2;display:grid;grid-template-columns:.95fr 1.05fr;gap:48px;align-items:flex-start;}
.scanner-footer-brand{max-width:520px;}
.scanner-footer-logo{display:inline-flex;align-items:center;gap:12px;text-decoration:none;color:#fff;font-size:20px;font-weight:950;letter-spacing:-.5px;}
.scanner-footer-logo span{width:46px;height:46px;border-radius:15px;display:flex;align-items:center;justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 18px 45px rgba(0,255,136,.24);}
.scanner-footer-logo strong{color:#fff;}
.scanner-footer-brand p{margin:22px 0 0;color:#91a99c;font-size:15px;line-height:1.8;}
.scanner-footer-contact{display:grid;gap:12px;margin-top:24px;}
.scanner-footer-contact a{display:inline-flex;align-items:center;gap:10px;width:max-content;max-width:100%;text-decoration:none;color:#d9fff0;font-size:14px;font-weight:850;padding:11px 14px;border-radius:999px;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.09);transition:.3s;}
.scanner-footer-contact a:hover{color:#00ff88;background:rgba(0,255,136,.08);border-color:rgba(0,255,136,.24);transform:translateY(-2px);}
.scanner-footer-contact svg{color:#00ff88;flex-shrink:0;}
.scanner-footer-links{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.scanner-footer-links div{padding:24px;border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.075);backdrop-filter:blur(18px);}
.scanner-footer-links h3{margin:0 0 16px;color:#fff;font-size:16px;}
.scanner-footer-links a{display:block;text-decoration:none;color:#91a99c;font-size:14px;font-weight:800;padding:8px 0;transition:.25s;}
.scanner-footer-links a:hover{color:#00ff88;transform:translateX(4px);}
.scanner-footer-link-btn{display:block;width:100%;border:0;background:transparent;text-align:left;color:#91a99c;font-size:14px;font-weight:800;font-family:inherit;padding:8px 0;cursor:pointer;transition:.25s;}
.scanner-footer-link-btn:hover{color:#00ff88;transform:translateX(4px);}
.scanner-footer-middle{position:relative;z-index:2;margin-top:34px;padding:24px;border-radius:26px;background:linear-gradient(135deg,rgba(0,255,136,.12),rgba(34,211,238,.06));border:1px solid rgba(0,255,136,.18);display:flex;align-items:center;justify-content:space-between;gap:18px;}
.scanner-footer-middle span{display:block;color:#91a99c;font-size:13px;font-weight:850;margin-bottom:6px;}
.scanner-footer-middle strong{color:#fff;font-size:16px;line-height:1.45;}
.scanner-footer-cta{min-height:48px;padding:12px 20px;border-radius:999px;background:linear-gradient(135deg,#00ff88,#22d3ee);color:#021008;text-decoration:none;font-weight:950;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;transition:.35s;}
.scanner-footer-cta:hover{transform:translateY(-3px);box-shadow:0 22px 58px rgba(0,255,136,.28);}
.scanner-footer-bottom{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:28px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08);}
.scanner-footer-bottom p{margin:0;color:#708579;font-size:13px;font-weight:800;}
.scanner-footer-socials{display:flex;align-items:center;gap:10px;}
.scanner-footer-socials a{width:42px;height:42px;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#d9fff0;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.09);text-decoration:none;transition:.3s;}
.scanner-footer-socials a:hover{color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);transform:translateY(-3px);}
.scanner-footer-socials i{font-size:18px;}
@media(max-width:1050px){.scanner-footer-top{grid-template-columns:1fr;}.scanner-footer-brand{max-width:100%;}.scanner-footer-links{grid-template-columns:repeat(3,1fr);}}
@media(max-width:760px){.scanner-footer{padding:62px 0 24px;}.landing-logo{gap:12px;}.landing-logo-icon{width:46px;height:46px;border-radius:14px;}.landing-logo-icon img{width:100%;height:100%;object-fit:contain;transform:scale(.95);}.landing-logo-text span{font-size:17px;}.scanner-footer-links{grid-template-columns:1fr;gap:14px;}.scanner-footer-links div{padding:20px;border-radius:21px;}.scanner-footer-middle{flex-direction:column;align-items:flex-start;padding:22px;border-radius:22px;}.scanner-footer-cta{width:100%;}.scanner-footer-bottom{flex-direction:column;align-items:flex-start;}.scanner-footer-contact a{width:100%;}}
@media(max-width:430px){.landing-logo{gap:10px;}.landing-logo-icon{width:42px;height:42px;border-radius:13px;}.landing-logo-icon img{width:100%;height:100%;object-fit:contain;transform:scale(.95);}.landing-logo-text span{font-size:16px;}.scanner-footer-middle strong{font-size:14px;}.scanner-footer-socials{width:100%;justify-content:space-between;}.scanner-footer-socials a{width:40px;height:40px;}}
@media(max-width:768px){.scanner-footer-bottom{flex-direction:column;text-align:center;gap:14px;}.scanner-footer-built{order:2;font-size:16px;}.scanner-footer-socials{order:3;}}
      `}</style>
    </>
  );
}
