<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VATRIX — Brand README</title>
  <meta name="description" content="VATRIX is a forward‑thinking clothing brand blending modern design with timeless style. This README covers brand story, tone, assets, and usage." />

  <!-- Open Graph -->
  <meta property="og:title" content="VATRIX — Brand README" />
  <meta property="og:description" content="Overview of the VATRIX clothing brand: story, values, identity, and contact." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="" /><!-- Add your social preview image URL -->

  <style>
    :root{
      --bg:#0f1115;
      --elev:#171a21;
      --card:#11141a;
      --text:#e7ecf3;
      --muted:#98a3b3;
      --brand:#6cf0d6;
      --accent:#a882ff;
      --danger:#ff7a7a;
      --radius:20px;
      --shadow:0 10px 30px rgba(0,0,0,.35);
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      --sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
    }
    html,body{height:100%;}
    body{
      margin:0; background:radial-gradient(1200px 600px at 10% -10%, rgba(108,240,214,.15), transparent 60%),
                 radial-gradient(800px 400px at 110% 10%, rgba(168,130,255,.12), transparent 60%), var(--bg);
      color:var(--text); font-family:var(--sans); line-height:1.65; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
    }
    a{color:var(--brand); text-decoration:none}
    a:hover{text-decoration:underline}

    .wrap{max-width:1100px; margin-inline:auto; padding:24px;}
    header{position:sticky; top:0; backdrop-filter:saturate(140%) blur(8px); background:color-mix(in hsl, var(--bg), transparent 15%); border-bottom:1px solid rgba(255,255,255,.06); z-index:40}
    .nav{display:flex; align-items:center; gap:18px; justify-content:space-between}
    .logo{display:flex; align-items:center; gap:12px; font-weight:800; letter-spacing:.12em}
    .logo-badge{width:36px; height:36px; border-radius:12px; background:linear-gradient(135deg, var(--brand), var(--accent)); display:grid; place-items:center; box-shadow:var(--shadow)}
    .logo svg{width:22px; height:22px;}
    .links{display:flex; gap:18px; flex-wrap:wrap}

    .hero{padding:64px 0 28px}
    .hero h1{font-size:clamp(28px,5vw,48px); line-height:1.1; margin:12px 0}
    .tag{display:inline-block; font:600 12px/1 var(--sans); letter-spacing:.12em; text-transform:uppercase; color:var(--bg); background:var(--brand); padding:8px 12px; border-radius:999px}
    .lede{max-width:60ch; color:var(--muted)}

    .toc{margin:22px 0 6px; padding:18px; border-radius:var(--radius); background:var(--elev); box-shadow:var(--shadow)}
    .toc h2{margin:0 0 10px}
    .toc ul{list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:10px}
    .toc a{display:block; padding:10px 12px; border-radius:12px; background:var(--card)}

    section{margin:28px 0; padding:22px; border-radius:var(--radius); background:var(--elev); box-shadow:var(--shadow)}
    section h2{margin-top:0}

    .grid{display:grid; grid-template-columns:repeat(auto-fit, minmax(260px,1fr)); gap:18px}
    .card{background:var(--card); padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,.06)}

    .swatch{display:flex; align-items:center; gap:12px}
    .swatch .chip{inline-size:36px; block-size:24px; border-radius:6px; border:1px solid rgba(255,255,255,.2)}
    code, pre{font-family:var(--mono); font-size:.95em;}
    pre{background:#0b0d11; padding:14px; border-radius:12px; overflow:auto}

    .badge{display:inline-flex; align-items:center; gap:8px; padding:6px 10px; border:1px solid rgba(255,255,255,.12); border-radius:999px; background:var(--card)}
    .btn{display:inline-block; padding:12px 16px; border-radius:12px; background:linear-gradient(135deg, var(--brand), var(--accent)); color:#0b0d11; font-weight:700}
    .btn:hover{filter:brightness(1.05)}

    footer{margin:40px 0 20px; color:var(--muted); text-align:center}
  </style>
</head>
<body>
  <header>
    <div class="wrap nav" role="navigation" aria-label="Primary">
      <div class="logo" aria-label="VATRIX logo">
        <div class="logo-badge" aria-hidden="true">
          <!-- Inline monogram (stylized V) -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 4h4l5 11 5-11h4l-7.5 16h-3L3 4Z" fill="currentColor"/>
          </svg>
        </div>
        <span>VATRIX</span>
      </div>
      <nav class="links">
        <a href="#about">About</a>
        <a href="#values">Values</a>
        <a href="#collection">Collection</a>
        <a href="#identity">Identity</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main class="wrap">
    <div class="hero">
      <span class="tag" aria-label="Document type">Brand README</span>
      <h1>VATRIX — Modern design, timeless confidence.</h1>
      <p class="lede">This single‑file README introduces the VATRIX clothing brand: story, voice, product pillars, sustainability stance, and visual identity. Copy it into your site repo or share as an onboarding resource.</p>
    </div>

    <aside class="toc" aria-labelledby="toc-title">
      <h2 id="toc-title">Contents</h2>
      <ul>
        <li><a href="#about">1. About VATRIX</a></li>
        <li><a href="#voice">2. Voice & Tone</a></li>
        <li><a href="#values">3. Mission & Values</a></li>
        <li><a href="#collection">4. Product Lines</a></li>
        <li><a href="#sustainability">5. Materials & Sustainability</a></li>
        <li><a href="#size-care">6. Sizing & Care</a></li>
        <li><a href="#identity">7. Visual Identity</a></li>
        <li><a href="#usage">8. Brand Usage</a></li>
        <li><a href="#contact">9. Contact & Social</a></li>
        <li><a href="#changelog">10. Changelog</a></li>
      </ul>
    </aside>

    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">1. About VATRIX</h2>
      <p><strong>VATRIX</strong> is a forward‑thinking clothing company blending modern design with timeless style. Built on the belief that fashion should empower individuality, VATRIX delivers apparel that merges premium materials, innovative cuts, and versatile aesthetics. From streetwear essentials to elevated statement pieces, every item is crafted with meticulous attention to detail for comfort, durability, and a confident fit.</p>
    </section>

    <section id="voice" aria-labelledby="voice-title">
      <h2 id="voice-title">2. Voice & Tone</h2>
      <div class="grid">
        <div class="card">
          <h3>Voice</h3>
          <ul>
            <li>Confident, welcoming, and concise.</li>
            <li>Design‑led but practical.</li>
            <li>Inclusive and people‑first.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Do</h3>
          <ul>
            <li>Highlight quality and fit.</li>
            <li>Use active verbs and clear benefits.</li>
            <li>Respect accessibility and size inclusivity.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Don't</h3>
          <ul>
            <li>Over‑promise or use empty buzzwords.</li>
            <li>Exclude customers with narrow style assumptions.</li>
            <li>Ignore sustainability or care details.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="values" aria-labelledby="values-title">
      <h2 id="values-title">3. Mission & Values</h2>
      <div class="grid">
        <div class="card">
          <h3>Mission</h3>
          <p>Design everyday pieces that elevate daily life—well‑made, responsibly produced, and ready for anything.</p>
        </div>
        <div class="card">
          <h3>Core Values</h3>
          <ul>
            <li><strong>Craft:</strong> Premium construction, enduring comfort.</li>
            <li><strong>Versatility:</strong> From weekday to weekend with ease.</li>
            <li><strong>Responsibility:</strong> Materials and partners we trust.</li>
            <li><strong>Inclusivity:</strong> Styles and sizes for more bodies.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Promise</h3>
          <p>Look sharp, feel great, and own your style—backed by thoughtful design and fair policies.</p>
        </div>
      </div>
    </section>

    <section id="collection" aria-labelledby="collection-title">
      <h2 id="collection-title">4. Product Lines</h2>
      <div class="grid">
        <div class="card">
          <h3>Essentials</h3>
          <p>Everyday staples: tees, hoodies, denim, and outerwear refined for fit, fabric, and longevity.</p>
        </div>
        <div class="card">
          <h3>Signature</h3>
          <p>Standout silhouettes and limited colorways featuring elevated details and technical finishes.</p>
        </div>
        <div class="card">
          <h3>Drops</h3>
          <p>Seasonal collaborations and artist‑led capsules in small runs. First come, first served.</p>
        </div>
      </div>
    </section>

    <section id="sustainability" aria-labelledby="sustainability-title">
      <h2 id="sustainability-title">5. Materials & Sustainability</h2>
      <ul>
        <li>Preferred fibers: organic cotton, recycled polyester, TENCEL™ lyocell, RWS wool.</li>
        <li>Supplier standards: social compliance audits and restricted substances list (RSL).</li>
        <li>Packaging: recycled paper mailers, minimal plastics, clear recycling guidance.</li>
        <li>Care to wear longer: see care chart below to extend garment life.</li>
      </ul>
      <div class="card">
        <h4>Care quick‑guide</h4>
        <pre><code>Tees & Hoodies  → Cold wash, inside out, tumble low
Denim           → Wash rarely, air between wears, cold cycle
Outerwear       → Spot clean first, follow label for specialist care
Wool            → Hand wash cool or dry clean, lay flat to dry</code></pre>
      </div>
    </section>

    <section id="size-care" aria-labelledby="size-title">
      <h2 id="size-title">6. Sizing & Care</h2>
      <p>We design for a comfortable, confident fit. When in doubt, choose your usual size; for an oversized look, size up one. Detailed measurements are listed on each product page.</p>
      <div class="grid">
        <div class="card">
          <h3>Fit Notes</h3>
          <ul>
            <li>Unisex cuts with graded sizing.</li>
            <li>Pre‑shrunk fabrics where possible.</li>
            <li>Clear guides in CM and IN.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Returns</h3>
          <p>30‑day returns on unworn items with tags. Easy exchanges on size or color.</p>
        </div>
      </div>
    </section>

    <section id="identity" aria-labelledby="identity-title">
      <h2 id="identity-title">7. Visual Identity</h2>
      <div class="grid">
        <div class="card">
          <h3>Logo</h3>
          <p>Use the primary wordmark on dark or light backgrounds with ample clear space.</p>
          <div class="badge" aria-label="Inline wordmark sample">
            <strong>VATRIX</strong>
          </div>
        </div>
        <div class="card">
          <h3>Color</h3>
          <div class="swatch"><span class="chip" style="background:var(--brand)"></span> Brand — <code>#6CF0D6</code></div>
          <div class="swatch"><span class="chip" style="background:var(--accent)"></span> Accent — <code>#A882FF</code></div>
          <div class="swatch"><span class="chip" style="background:#0F1115"></span> Ink — <code>#0F1115</code></div>
          <div class="swatch"><span class="chip" style="background:#E7ECF3"></span> Paper — <code>#E7ECF3</code></div>
        </div>
        <div class="card">
          <h3>Typography</h3>
          <p>System Sans (SF/Segoe/Roboto). Headlines bold; body regular; mono for code.</p>
        </div>
      </div>
    </section>

    <section id="usage" aria-labelledby="usage-title">
      <h2 id="usage-title">8. Brand Usage</h2>
      <ul>
        <li>Always write the brand in caps: <strong>VATRIX</strong>.</li>
        <li>Keep imagery clean, confident, and people‑first.</li>
        <li>Mention materials, construction, and care benefits clearly.</li>
        <li>Use alt text on images and maintain color contrast for accessibility.</li>
      </ul>
      <p><a class="btn" href="#" aria-label="Download assets (replace link)">Download brand assets</a></p>
    </section>

    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">9. Contact & Social</h2>
      <div class="grid">
        <div class="card">
          <h3>Press & Partnerships</h3>
          <p>Email: <a href="mailto:press@vatrix.co">press@vatrix.co</a></p>
        </div>
        <div class="card">
          <h3>Customer Care</h3>
          <p>Email: <a href="mailto:support@vatrix.co">support@vatrix.co</a></p>
        </div>
        <div class="card">
          <h3>Social</h3>
          <p>
            <a href="#" aria-label="Instagram">Instagram</a> ·
            <a href="#" aria-label="TikTok">TikTok</a> ·
            <a href="#" aria-label="Twitter / X">X</a>
          </p>
        </div>
      </div>
    </section>

    <section id="changelog" aria-labelledby="changelog-title">
      <h2 id="changelog-title">10. Changelog</h2>
      <ul>
        <li><strong>v1.0.0</strong> — Initial README page created. (Customize this section as the brand evolves.)</li>
      </ul>
    </section>

    <section class="card" aria-labelledby="dev-notes">
      <h2 id="dev-notes">Developer Notes</h2>
      <p>This README is a single HTML file with no external dependencies. You can:</p>
      <ul>
        <li>Drop it into any static host (GitHub Pages, Netlify, Vercel).</li>
        <li>Edit copy and colors by changing the <code>:root</code> CSS variables.</li>
        <li>Add your logo, images, and asset links where indicated.</li>
      </ul>
      <pre><code>&lt;!-- Quick edits --&gt;
:root{
  --brand:#6CF0D6; /* primary */
  --accent:#A882FF; /* secondary */
}
      </code></pre>
    </section>

    <footer>
      © <span id="year"></span> VATRIX — All rights reserved.
    </footer>
  </main>

  <script>
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
