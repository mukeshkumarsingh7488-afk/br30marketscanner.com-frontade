import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const plannedEndpoints = [
  {
    method: "GET",
    path: "/api/scanner/summary",
    title: "Market Summary",
    text: "Returns scanner-level market overview, active sections, and broad market movement data.",
  },
  {
    method: "GET",
    path: "/api/scanner/top-gainers",
    title: "Top Gainers",
    text: "Provides top moving instruments based on configured scanner filters and market data availability.",
  },
  {
    method: "GET",
    path: "/api/scanner/top-losers",
    title: "Top Losers",
    text: "Provides downside movers with clean percentage movement and symbol-level scanner data.",
  },
  {
    method: "GET",
    path: "/api/scanner/oi-spurts",
    title: "OI Spurts",
    text: "Returns option and futures activity where open interest expansion is detected.",
  },
  {
    method: "GET",
    path: "/api/scanner/volume-breakout",
    title: "Volume Breakout",
    text: "Provides symbols with unusual volume activity compared with normal market participation.",
  },
];

const authSteps = ["API access will require an approved BR30 Market Scanner account.", "Each approved integration will receive a secure API key.", "Requests must include authorization headers for protected scanner data.", "Access can be limited, paused, or revoked for misuse, abuse, or policy violations."];

const limits = [
  {
    title: "Controlled Access",
    text: "API usage will be offered only to approved users, partners, or internal BR30 ecosystem tools.",
  },
  {
    title: "Rate Protection",
    text: "Request limits will be applied to protect platform performance and market data stability.",
  },
  {
    title: "No Reselling",
    text: "Scanner data cannot be resold, repackaged, redistributed, or exposed publicly without written permission.",
  },
];

export default function ApiAccess() {
  return (
    <>
      <Navbar />

      <main className="api-page">
        <section className="api-hero">
          <div className="api-container">
            <span className="api-kicker">API Access</span>
            <h1>BR30 Market Scanner API for Future Integrations</h1>
            <p>BR30 Market Scanner API access is planned for controlled integrations, advanced analytics, internal automation, and selected partner use cases.</p>

            <div className="api-hero-actions">
              <a href="#api-status">View Status</a>
              <a href="#planned-endpoints">Planned Endpoints</a>
            </div>
          </div>
        </section>

        <section className="api-overview" id="api-status">
          <div className="api-container">
            <div className="api-status-card">
              <div>
                <span>Current Status</span>
                <h2>API access is not publicly available yet.</h2>
                <p>BR30 Market Scanner is currently focused on stable user-facing scanner tools. Public or partner API access will be released only after security, usage limits, documentation, and data policies are finalized.</p>
              </div>

              <div className="api-status-badge">
                <strong>Coming Soon</strong>
                <small>Controlled rollout planned</small>
              </div>
            </div>

            <div className="api-overview-grid">
              <article>
                <span>01</span>
                <h3>Built for controlled usage</h3>
                <p>API access will be designed for structured use cases such as dashboards, internal tools, research workflows, and BR30 ecosystem products.</p>
              </article>

              <article>
                <span>02</span>
                <h3>Security-first access</h3>
                <p>Every integration will require approval, authentication, and usage monitoring to protect users, infrastructure, and scanner data.</p>
              </article>

              <article>
                <span>03</span>
                <h3>Market data stability</h3>
                <p>API availability will depend on live data quality, provider limits, exchange rules, and platform performance requirements.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="api-endpoints" id="planned-endpoints">
          <div className="api-container">
            <div className="api-section-heading">
              <span>Planned Endpoints</span>
              <h2>Scanner data endpoints planned for future access</h2>
              <p>Endpoint structure may change before release. The examples below represent the intended direction for controlled API availability.</p>
            </div>

            <div className="endpoint-list">
              {plannedEndpoints.map((endpoint) => (
                <article className="endpoint-card" key={endpoint.path}>
                  <div className="endpoint-method">{endpoint.method}</div>

                  <div className="endpoint-content">
                    <code>{endpoint.path}</code>
                    <h3>{endpoint.title}</h3>
                    <p>{endpoint.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="api-auth">
          <div className="api-container">
            <div className="api-auth-grid">
              <div className="api-auth-content">
                <span>Authentication</span>
                <h2>Access will require secure approval and API credentials.</h2>
                <p>BR30 Market Scanner API access will not be open by default. Approved API users will receive credentials and must follow platform usage policies.</p>

                <div className="auth-steps">
                  {authSteps.map((step, index) => (
                    <div className="auth-step" key={step}>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="api-code-card">
                <div className="code-window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <pre>{`fetch("https://api.br30.com/api/scanner/summary", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data));`}</pre>
              </div>
            </div>
          </div>
        </section>
        <section className="api-limits">
          <div className="api-container">
            <div className="api-section-heading">
              <span>Usage Rules</span>
              <h2>API access will be limited, protected, and monitored</h2>
              <p>BR30 Market Scanner API access will follow strict platform rules to maintain data quality, uptime, security, and fair usage.</p>
            </div>

            <div className="limit-grid">
              {limits.map((item) => (
                <article className="limit-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="api-response">
          <div className="api-container">
            <div className="response-grid">
              <div className="response-content">
                <span>Response Format</span>
                <h2>Clean JSON responses for structured integrations</h2>
                <p>The API will be designed to return predictable JSON responses so approved users can connect scanner data with dashboards, internal systems, and analytics tools.</p>
              </div>

              <div className="response-code">
                <div className="code-window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <pre>{`{
  "success": true,
  "source": "BR30 Market Scanner",
  "data": {
    "symbol": "NIFTY",
    "movement": "Bullish",
    "volumeStatus": "High",
    "openInterestStatus": "Active",
    "updatedAt": "2026-06-29T00:00:00.000Z"
  }
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="api-cta-section">
          <div className="api-container">
            <div className="api-cta">
              <span>Developer Access</span>
              <h2>Interested in future API access?</h2>
              <p>API access will be available only for selected use cases after review. Until public access is launched, users can follow the product roadmap and release notes for updates.</p>

              <div className="api-cta-actions">
                <a href="/roadmap">View Roadmap</a>
                <a href="/release-notes">Release Notes</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .api-page{min-height:100vh;background:radial-gradient(circle at top left,rgba(0,255,136,0.14),transparent 34%),radial-gradient(circle at top right,rgba(34,211,238,0.12),transparent 30%),linear-gradient(180deg,#020806 0%,#03130d 52%,#020806 100%);color:#eafff5;overflow:hidden;}
        .api-container{width:min(1160px,92%);margin:0 auto;}
        .api-hero{padding:118px 0 72px;position:relative;}
        .api-hero:before{content:"";position:absolute;inset:18px auto auto 50%;width:560px;height:560px;background:rgba(0,255,136,0.08);filter:blur(95px);transform:translateX(-50%);pointer-events:none;}
        .api-kicker{display:inline-flex;align-items:center;padding:9px 14px;border:1px solid rgba(0,255,136,0.26);border-radius:999px;background:rgba(0,255,136,0.08);color:#00ff88;font-size:13px;font-weight:900;letter-spacing:0.1em;text-transform:uppercase;position:relative;z-index:1;}
        .api-hero h1{max-width:900px;margin:22px 0 18px;font-size:clamp(38px,6vw,76px);line-height:0.95;letter-spacing:-0.06em;color:#ffffff;position:relative;z-index:1;}
        .api-hero p{max-width:760px;margin:0;color:#b8d8c8;font-size:18px;line-height:1.75;position:relative;z-index:1;}
        .api-hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px;position:relative;z-index:1;}
        .api-hero-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 20px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:900;}
        .api-hero-actions a:first-child{background:#00ff88;color:#02110a;box-shadow:0 0 34px rgba(0,255,136,0.28);}
        .api-hero-actions a:last-child{background:rgba(255,255,255,0.055);color:#dfffee;border:1px solid rgba(255,255,255,0.12);}
        .api-overview{padding:24px 0 86px;}
        .api-status-card{display:grid;grid-template-columns:1fr 260px;gap:26px;align-items:center;padding:30px;border:1px solid rgba(0,255,136,0.18);border-radius:30px;background:linear-gradient(135deg,rgba(3,19,13,0.96),rgba(2,8,6,0.94));box-shadow:0 28px 90px rgba(0,0,0,0.38);margin-bottom:24px;}
        .api-status-card span{display:inline-flex;margin-bottom:12px;color:#22d3ee;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .api-status-card h2{margin:0 0 12px;color:#ffffff;font-size:clamp(28px,4vw,44px);line-height:1.06;letter-spacing:-0.04em;}
        .api-status-card p{margin:0;color:#a9c8b9;font-size:16px;line-height:1.75;}
        .api-status-badge{min-height:180px;border-radius:26px;border:1px solid rgba(0,255,136,0.24);background:radial-gradient(circle at top,rgba(0,255,136,0.16),rgba(34,211,238,0.08),rgba(255,255,255,0.035));display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:22px;}
        .api-status-badge strong{color:#00ff88;font-size:28px;line-height:1.05;font-weight:950;letter-spacing:-0.04em;}
        .api-status-badge small{margin-top:10px;color:#b8d8c8;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;}
        .api-overview-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
        .api-overview-grid article{padding:24px;border:1px solid rgba(255,255,255,0.08);border-radius:24px;background:rgba(255,255,255,0.04);}
        .api-overview-grid span{display:grid;place-items:center;width:46px;height:46px;border-radius:16px;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.22);color:#00ff88;font-weight:950;margin-bottom:16px;}
        .api-overview-grid h3{margin:0 0 10px;color:#ffffff;font-size:20px;letter-spacing:-0.03em;}
        .api-overview-grid p{margin:0;color:#a9c8b9;font-size:14px;line-height:1.65;}
        .api-endpoints{padding:0 0 90px;}
        .api-section-heading{max-width:780px;margin-bottom:34px;}
        .api-section-heading span{color:#22d3ee;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .api-section-heading h2{margin:12px 0 12px;color:#ffffff;font-size:clamp(30px,4vw,48px);line-height:1.05;letter-spacing:-0.04em;}
        .api-section-heading p{margin:0;color:#a9c8b9;font-size:16px;line-height:1.75;}
        .endpoint-list{display:grid;gap:16px;}
        .endpoint-card{display:grid;grid-template-columns:90px 1fr;gap:20px;align-items:flex-start;padding:22px;border-radius:24px;border:1px solid rgba(0,255,136,0.13);background:linear-gradient(135deg,rgba(3,19,13,0.94),rgba(2,8,6,0.94));box-shadow:0 20px 60px rgba(0,0,0,0.28);}
        .endpoint-method{display:grid;place-items:center;min-height:48px;border-radius:16px;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.24);color:#00ff88;font-size:14px;font-weight:950;}
        .endpoint-content code{display:inline-flex;margin-bottom:10px;color:#7be9ff;font-size:14px;font-weight:800;background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.18);border-radius:999px;padding:7px 11px;}
        .endpoint-content h3{margin:0 0 8px;color:#ffffff;font-size:22px;line-height:1.15;letter-spacing:-0.03em;}
                .endpoint-content p{margin:0;color:#a9c8b9;font-size:15px;line-height:1.65;}
        .api-auth{padding:0 0 90px;}
        .api-auth-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center;}
        .api-auth-content{padding:30px;border-radius:30px;border:1px solid rgba(0,255,136,0.14);background:rgba(255,255,255,0.04);}
        .api-auth-content>span{color:#22d3ee;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .api-auth-content h2{margin:12px 0;color:#ffffff;font-size:clamp(28px,4vw,44px);line-height:1.07;letter-spacing:-0.04em;}
        .api-auth-content>p{margin:0 0 22px;color:#a9c8b9;font-size:16px;line-height:1.75;}
        .auth-steps{display:grid;gap:12px;}
        .auth-step{display:flex;gap:12px;align-items:flex-start;padding:13px;border-radius:18px;background:rgba(2,8,6,0.58);border:1px solid rgba(255,255,255,0.08);}
        .auth-step strong{color:#00ff88;font-size:13px;font-weight:950;}
        .auth-step p{margin:0;color:#dfffee;font-size:14px;line-height:1.55;font-weight:650;}
        .api-code-card,.response-code{border-radius:28px;border:1px solid rgba(34,211,238,0.18);background:#020806;box-shadow:0 24px 80px rgba(0,0,0,0.42);overflow:hidden;}
        .code-window-top{display:flex;gap:8px;padding:16px;border-bottom:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.035);}
        .code-window-top span{width:11px;height:11px;border-radius:999px;background:rgba(255,255,255,0.22);}
        .api-code-card pre,.response-code pre{margin:0;padding:24px;color:#dfffee;font-size:14px;line-height:1.75;white-space:pre-wrap;word-break:break-word;}
        .api-limits{padding:0 0 90px;}
        .limit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
        .limit-card{padding:26px;border-radius:26px;border:1px solid rgba(0,255,136,0.13);background:linear-gradient(135deg,rgba(3,19,13,0.94),rgba(2,8,6,0.94));box-shadow:0 20px 60px rgba(0,0,0,0.28);}
        .limit-card h3{margin:0 0 10px;color:#ffffff;font-size:22px;line-height:1.15;letter-spacing:-0.03em;}
        .limit-card p{margin:0;color:#a9c8b9;font-size:15px;line-height:1.7;}
        .api-response{padding:0 0 90px;}
        .response-grid{display:grid;grid-template-columns:0.9fr 1.1fr;gap:24px;align-items:center;}
        .response-content{padding:30px;border-radius:30px;border:1px solid rgba(0,255,136,0.14);background:rgba(255,255,255,0.04);}
        .response-content span{color:#22d3ee;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .response-content h2{margin:12px 0;color:#ffffff;font-size:clamp(28px,4vw,44px);line-height:1.07;letter-spacing:-0.04em;}
        .response-content p{margin:0;color:#a9c8b9;font-size:16px;line-height:1.75;}
        .api-cta-section{padding:0 0 100px;}
        .api-cta{padding:38px;border-radius:32px;background:linear-gradient(135deg,rgba(0,255,136,0.13),rgba(34,211,238,0.1),rgba(2,8,6,0.96));border:1px solid rgba(0,255,136,0.22);box-shadow:0 30px 90px rgba(0,0,0,0.4);text-align:center;}
        .api-cta span{display:inline-flex;margin-bottom:14px;color:#00ff88;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.12em;}
        .api-cta h2{max-width:760px;margin:0 auto 12px;color:#ffffff;font-size:clamp(30px,4vw,48px);line-height:1.05;letter-spacing:-0.04em;}
        .api-cta p{max-width:760px;margin:0 auto;color:#b8d8c8;font-size:16px;line-height:1.75;}
        .api-cta-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:14px;margin-top:28px;}
        .api-cta-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 20px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:900;}
        .api-cta-actions a:first-child{background:#00ff88;color:#02110a;box-shadow:0 0 34px rgba(0,255,136,0.28);}
        .api-cta-actions a:last-child{background:rgba(255,255,255,0.055);color:#dfffee;border:1px solid rgba(255,255,255,0.12);}
        @media(max-width:980px){.api-status-card{grid-template-columns:1fr;}.api-overview-grid{grid-template-columns:1fr;}.api-auth-grid{grid-template-columns:1fr;}.limit-grid{grid-template-columns:1fr;}.response-grid{grid-template-columns:1fr;}}
        @media(max-width:720px){.api-hero{padding:96px 0 56px;}.endpoint-card{grid-template-columns:1fr;}.endpoint-method{width:86px;}.api-status-badge{min-height:150px;}}
        @media(max-width:560px){.api-container{width:min(100% - 32px,1160px);}.api-hero{padding:86px 0 46px;}.api-hero p{font-size:16px;}.api-overview{padding:18px 0 70px;}.api-endpoints,.api-auth,.api-limits,.api-response{padding-bottom:70px;}.api-status-card,.api-auth-content,.response-content,.api-cta{padding:22px;border-radius:24px;}.endpoint-card,.limit-card{padding:20px;border-radius:22px;}.api-code-card pre,.response-code pre{padding:18px;font-size:12px;}.api-cta-section{padding-bottom:76px;}.api-hero-actions a,.api-cta-actions a{width:100%;}}
      `}</style>
    </>
  );
}
