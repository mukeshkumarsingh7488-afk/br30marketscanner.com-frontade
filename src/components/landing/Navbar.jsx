import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo-dark-Green.png";

const navLinks = [
  { label: "Home", hash: "#hero" },
  { label: "Features", hash: "#features" },
  { label: "Markets", hash: "#markets" },
  { label: "How It Works", hash: "#how-it-works" },
  { label: "Pricing", hash: "#pricing" },
  { label: "FAQ", hash: "#faq" },
];

const resourceLinks = [
  { label: "Documentation", href: "/documentation" },
  { label: "Changelog", href: "/changelog" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Release Notes", href: "/release-notes" },
  { label: "API Access", href: "/api-access" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  const scrollToHash = (hash) => {
    closeMenu();

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

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const section = document.querySelector(location.hash);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 120);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const renderNavButton = (item) => (
    <button key={item.label} type="button" className="scanner-nav-link-btn" onClick={() => scrollToHash(item.hash)}>
      {item.label}
    </button>
  );

  return (
    <>
      <header className="scanner-nav">
        <div className="scanner-nav-container">
          <Link to="/" className="landing-logo" onClick={closeMenu}>
            <div className="landing-logo-icon">
              <img src={logo} alt="BR30 Market Scanner" />
            </div>

            <div className="landing-logo-text">
              <span>BR30 Market Scanner</span>
            </div>
          </Link>

          <nav className="scanner-nav-links">
            {navLinks.map(renderNavButton)}

            <div className="scanner-more-wrap" ref={moreRef}>
              <button className="scanner-more-btn" type="button" onClick={() => setMoreOpen((prev) => !prev)}>
                More <ChevronDown size={15} className={moreOpen ? "scanner-more-rotate" : ""} />
              </button>

              {moreOpen && (
                <div className="scanner-more-dropdown">
                  {resourceLinks.map((item) => (
                    <Link to={item.href} key={item.label} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="scanner-nav-actions">
            <Link to="/login" className="scanner-login-btn">
              Login
            </Link>

            <Link to="/register" className="scanner-start-btn">
              Start Free <ArrowRight size={16} />
            </Link>
          </div>

          <button className="scanner-menu-btn" type="button" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="scanner-mobile-menu">
            {navLinks.map(renderNavButton)}

            <div className="scanner-mobile-more">
              <strong>Resources</strong>

              {resourceLinks.map((item) => (
                <Link to={item.href} key={item.label} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="scanner-mobile-actions">
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>

              <Link to="/register" onClick={closeMenu}>
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </header>

      <style>{`
.landing-logo-icon img{width:100%;height:100%;object-fit:contain;transform:scale(.95);}
.landing-logo{display:flex;align-items:center;gap:12px;text-decoration:none;color:#fff;min-width:0;}
.landing-logo-icon{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);overflow:hidden;flex-shrink:0;}
.landing-logo-text{display:flex;flex-direction:column;line-height:1.08;min-width:0;}
.landing-logo-text span{font-size:19px;font-weight:950;letter-spacing:-.04em;color:#fff;white-space:nowrap;}
.scanner-nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:16px 0;background:rgba(2,8,6,.68);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid rgba(255,255,255,.08);}
.scanner-nav-container{width:min(1180px,calc(100% - 32px));margin:auto;display:flex;align-items:center;justify-content:space-between;gap:20px;}
.scanner-nav-links{display:flex;align-items:center;gap:24px;}
.scanner-nav-link-btn,.scanner-more-btn{position:relative;border:0;background:transparent;cursor:pointer;padding:0;font-family:inherit;color:#a8b8b0;text-decoration:none;font-size:14px;font-weight:800;transition:.25s;white-space:nowrap;}
.scanner-nav-link-btn:hover,.scanner-more-btn:hover{color:#00ff88;}
.scanner-more-wrap{position:relative;display:flex;align-items:center;}
.scanner-more-btn{display:inline-flex;align-items:center;gap:5px;}
.scanner-more-btn svg{transition:.25s;}
.scanner-more-rotate{transform:rotate(180deg);}
.scanner-more-dropdown{position:absolute;top:34px;right:0;width:220px;padding:10px;border-radius:18px;background:rgba(3,14,10,.98);border:1px solid rgba(255,255,255,.1);box-shadow:0 24px 70px rgba(0,0,0,.45);backdrop-filter:blur(20px);}
.scanner-more-dropdown a{display:block;text-decoration:none;color:#d6fff0;font-size:14px;font-weight:850;padding:12px 14px;border-radius:12px;transition:.25s;}
.scanner-more-dropdown a:hover{background:rgba(0,255,136,.09);color:#00ff88;}
.scanner-nav-actions{display:flex;align-items:center;gap:12px;}
.scanner-login-btn,.scanner-start-btn{min-height:42px;padding:10px 17px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:7px;text-decoration:none;font-size:14px;font-weight:900;transition:.3s;white-space:nowrap;}
.scanner-login-btn{color:#fff;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);}
.scanner-login-btn:hover{background:rgba(255,255,255,.1);transform:translateY(-2px);}
.scanner-start-btn{color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);box-shadow:0 16px 42px rgba(0,255,136,.22);}
.scanner-start-btn:hover{transform:translateY(-2px);box-shadow:0 22px 55px rgba(0,255,136,.32);}
.scanner-menu-btn{display:none;width:44px;height:44px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#fff;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}
.scanner-mobile-menu{display:none;width:min(1180px,calc(100% - 32px));margin:14px auto 0;padding:16px;border-radius:22px;background:rgba(3,14,10,.96);border:1px solid rgba(255,255,255,.1);box-shadow:0 28px 70px rgba(0,0,0,.45);}
.scanner-mobile-menu .scanner-nav-link-btn{display:flex;width:100%;text-align:left;text-decoration:none;color:#d6fff0;font-weight:850;padding:13px 12px;border-radius:14px;font-size:15px;}
.scanner-mobile-menu .scanner-nav-link-btn:hover{background:rgba(0,255,136,.09);color:#00ff88;}
.scanner-mobile-more{display:grid;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.08);}
.scanner-mobile-more strong{color:#00ff88;font-size:13px;font-weight:950;text-transform:uppercase;letter-spacing:.08em;padding:0 12px;}
.scanner-mobile-more a{display:flex;text-decoration:none;color:#d6fff0;font-weight:850;padding:12px;border-radius:14px;background:rgba(255,255,255,.035);}
.scanner-mobile-more a:hover{background:rgba(0,255,136,.09);color:#00ff88;}
.scanner-mobile-actions{display:grid;gap:10px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.08);}
.scanner-mobile-actions a{display:flex;text-decoration:none;color:#d6fff0;font-weight:850;padding:13px 12px;border-radius:14px;}
.scanner-mobile-actions a:hover{background:rgba(0,255,136,.09);color:#00ff88;}
.scanner-mobile-actions a:last-child{justify-content:center;color:#021008;background:linear-gradient(135deg,#00ff88,#22d3ee);}
@media(max-width:1120px){.scanner-nav-links{gap:16px;}.scanner-nav-link-btn,.scanner-more-btn{font-size:13px;}.landing-logo-text span{font-size:18px;}}
@media(max-width:960px){.scanner-nav-links,.scanner-nav-actions{display:none;}.scanner-menu-btn{display:flex;}.scanner-mobile-menu{display:block;}}
@media(max-width:760px){.scanner-nav{padding:13px 0;}.landing-logo-icon{width:46px;height:46px;border-radius:14px;}.landing-logo-icon img{width:100%;height:100%;object-fit:contain;transform:scale(.95);}.landing-logo-text span{font-size:17px;}.scanner-nav-container{width:min(100% - 28px,1180px);}.scanner-mobile-menu{width:min(100% - 28px,1180px);}}
@media(max-width:430px){.scanner-nav{padding:12px 0;}.landing-logo{gap:10px;}.landing-logo-icon{width:42px;height:42px;border-radius:13px;}.landing-logo-icon img{width:100%;height:100%;object-fit:contain;transform:scale(.95);}.landing-logo-text span{font-size:15px;}.scanner-nav-container{width:min(100% - 22px,1180px);}.scanner-mobile-menu{width:min(100% - 22px,1180px);padding:14px;border-radius:20px;}}
@media(max-width:360px){.landing-logo-text span{font-size:14px;}.landing-logo-icon{width:40px;height:40px;}}
      `}</style>
    </>
  );
}
