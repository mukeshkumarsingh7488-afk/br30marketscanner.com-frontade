import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const releases = [
  {
    version: "v1.0",
    date: "Initial Public Build",
    title: "BR30 Market Scanner Foundation",
    text: "The first production-ready structure for BR30 Market Scanner with public pages, authentication flow, scanner routes, and subscription protection.",
    updates: ["Landing page completed", "Scanner dashboard routes added", "Authentication pages connected", "Subscription guard implemented"],
  },
  {
    version: "v1.1",
    date: "Platform Update",
    title: "Resource & Legal Pages",
    text: "Public resource and legal pages were added to make the platform more transparent, structured, and ready for serious users.",
    updates: ["Documentation page added", "Changelog page added", "Roadmap page added", "Legal pages prepared"],
  },
  {
    version: "v1.2",
    date: "Scanner UI Update",
    title: "Cleaner Trading Interface",
    text: "The scanner interface is being refined for better readability, faster decision-making, and improved professional presentation.",
    updates: ["Improved scanner layout", "Better filter structure", "Cleaner market cards", "Responsive UI improvements"],
  },
  {
    version: "v1.3",
    date: "Planned",
    title: "Alerts & Watchlist Layer",
    text: "Upcoming releases will focus on personalized watchlists, important market activity alerts, and better user-level scanner control.",
    updates: ["Custom watchlists", "Movement alerts", "Volume alerts", "OI activity alerts"],
  },
];

export default function ReleaseNotes() {
  return (
    <>
      <Navbar />

      <main className="release-page">
        <section className="release-hero">
          <div className="release-container">
            <span className="release-kicker">Release Notes</span>
            <h1>Latest BR30 Market Scanner Updates</h1>
            <p>Track major improvements, feature additions, UI refinements, and planned platform upgrades for BR30 Market Scanner.</p>
          </div>
        </section>

        <section className="release-section">
          <div className="release-container">
            <div className="release-grid">
              {releases.map((item) => (
                <article className="release-card" key={item.version}>
                  <div className="release-top">
                    <span>{item.version}</span>
                    <strong>{item.date}</strong>
                  </div>

                  <h2>{item.title}</h2>
                  <p>{item.text}</p>

                  <div className="release-list">
                    {item.updates.map((update) => (
                      <div className="release-item" key={update}>
                        <span></span>
                        <p>{update}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="release-note-section">
          <div className="release-container">
            <div className="release-note">
              <span>Product Note</span>
              <h2>Every update is focused on speed, clarity, and trader usability.</h2>
              <p>BR30 Market Scanner is improved continuously based on platform stability, user feedback, scanner performance, and market data requirements.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .release-page{min-height:100vh;background:radial-gradient(circle at top left,rgba(0,255,136,0.14),transparent 34%),radial-gradient(circle at top right,rgba(34,211,238,0.12),transparent 30%),linear-gradient(180deg,#020806 0%,#03130d 52%,#020806 100%);color:#eafff5;overflow:hidden;}
        .release-container{width:min(1160px,92%);margin:0 auto;}
        .release-hero{padding:118px 0 70px;position:relative;}
        .release-kicker{display:inline-flex;align-items:center;padding:9px 14px;border:1px solid rgba(0,255,136,0.26);border-radius:999px;background:rgba(0,255,136,0.08);color:#00ff88;font-size:13px;font-weight:900;letter-spacing:0.1em;text-transform:uppercase;}
        .release-hero h1{max-width:860px;margin:22px 0 18px;font-size:clamp(38px,6vw,76px);line-height:0.95;letter-spacing:-0.06em;color:#ffffff;}
        .release-hero p{max-width:740px;margin:0;color:#b8d8c8;font-size:18px;line-height:1.75;}
        .release-section{padding:26px 0 86px;}
        .release-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;}
        .release-card{padding:26px;border:1px solid rgba(0,255,136,0.14);border-radius:28px;background:linear-gradient(135deg,rgba(3,19,13,0.94),rgba(2,8,6,0.94));box-shadow:0 24px 70px rgba(0,0,0,0.35);position:relative;overflow:hidden;}
        .release-card:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,255,136,0.08),transparent 46%,rgba(34,211,238,0.08));opacity:0;transition:0.3s ease;}
        .release-card:hover:before{opacity:1;}
        .release-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;position:relative;z-index:1;}
        .release-top span{width:64px;height:64px;border-radius:20px;display:grid;place-items:center;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.28);color:#00ff88;font-size:18px;font-weight:950;}
        .release-top strong{padding:8px 12px;border-radius:999px;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.24);color:#7be9ff;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;text-align:right;}
        .release-card h2{margin:0 0 12px;color:#ffffff;font-size:26px;line-height:1.12;letter-spacing:-0.035em;position:relative;z-index:1;}
        .release-card>p{margin:0 0 20px;color:#a9c8b9;font-size:15px;line-height:1.7;position:relative;z-index:1;}
        .release-list{display:grid;gap:10px;position:relative;z-index:1;}
        .release-item{display:flex;align-items:flex-start;gap:10px;padding:11px 12px;border-radius:16px;background:rgba(255,255,255,0.045);border:1px solid rgba(255,255,255,0.075);}
        .release-item span{width:8px;height:8px;border-radius:999px;background:#00ff88;box-shadow:0 0 16px rgba(0,255,136,0.75);margin-top:7px;flex:0 0 auto;}
        .release-item p{margin:0;color:#dfffee;font-size:14px;line-height:1.45;font-weight:700;}
        .release-note-section{padding:0 0 96px;}
        .release-note{padding:34px;border-radius:30px;background:linear-gradient(135deg,rgba(0,255,136,0.12),rgba(34,211,238,0.09),rgba(2,8,6,0.94));border:1px solid rgba(0,255,136,0.2);box-shadow:0 30px 90px rgba(0,0,0,0.38);}
        .release-note span{display:inline-flex;margin-bottom:14px;color:#00ff88;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .release-note h2{max-width:780px;margin:0 0 12px;color:#ffffff;font-size:clamp(26px,4vw,42px);line-height:1.08;letter-spacing:-0.04em;}
        .release-note p{max-width:820px;margin:0;color:#b8d8c8;font-size:16px;line-height:1.75;}
        @media(max-width:900px){.release-hero{padding:96px 0 56px;}.release-grid{grid-template-columns:1fr;}.release-card h2{font-size:24px;}}
        @media(max-width:560px){.release-container{width:min(100% - 32px,1160px);}.release-hero{padding:86px 0 46px;}.release-hero p{font-size:16px;}.release-section{padding:18px 0 70px;}.release-card{padding:20px;border-radius:24px;}.release-top{align-items:flex-start;flex-direction:column;}.release-note{padding:24px;border-radius:24px;}.release-note-section{padding-bottom:72px;}}
      `}</style>
    </>
  );
}
