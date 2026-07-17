const partCategories = [
  {
    title: "Cylinder heads",
    image: "/spares/cylinder-head.jpg",
    text: "Cylinder heads, valves and upper-engine replacement parts.",
  },
  {
    title: "Engine blocks",
    image: "/spares/engine-block.jpg",
    text: "Engine blocks and core engine spares for heavy-duty repairs.",
  },
  {
    title: "Engine assemblies",
    image: "/spares/engine-assembly.jpg",
    text: "Complete engine assemblies and major service components.",
  },
  {
    title: "Clutch kits",
    image: "/spares/clutch-kit.jpg",
    text: "Clutch plates, pressure plates and release components.",
  },
  {
    title: "Gearboxes",
    image: "/spares/gearbox.jpg",
    text: "Transmission units and related driveline replacement spares.",
  },
];

const modelLines = ["Engine spares", "Cylinder heads", "Clutch kits", "Gearboxes", "Filters", "Accessories"];

const catalogLinks = [
  "Engine parts",
  "Cylinder heads",
  "Clutch systems",
  "Gearboxes",
  "Filters",
  "Bearings and seals",
  "Truck accessories",
];

const stockFamilies = [
  {
    name: "Engine spares",
    label: "Core stock",
    text: "Blocks, heads, assemblies, filters and related service items.",
  },
  {
    name: "Clutch and driveline",
    label: "Wear parts",
    text: "Clutch kits, gearbox units and driveline replacement parts.",
  },
  {
    name: "Cooling and service",
    label: "Maintenance",
    text: "Radiators, filters, belts, bearings, seals and workshop items.",
  },
  {
    name: "Truck accessories",
    label: "Accessories",
    text: "Cab, electrical and general truck accessories for Shacman units.",
  },
];

const stats = [
  ["Shacman", "Major parts line"],
  ["2", "Sales numbers"],
  ["Harare", "Belvedere Road"],
  ["TGA", "Truck Gear Autoparts"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="top-strip">
        <span>Shop 13, 35 Belvedere Road, Harare</span>
        <span>0781 932 267</span>
        <span>0783 398 888</span>
        <span>sales@truckgearauto.co.zw</span>
      </div>

      <header className="nav-wrap" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="TGA Truck Gear Autoparts home">
          <img src="/brand/tga-logo.jpeg" alt="" />
          <span>
            <strong>Truck Gear Autoparts</strong>
            <small>Reliable parts for reliable trucks</small>
          </span>
        </a>
        <nav>
          <a href="#parts">Parts</a>
          <a href="#catalog">Catalogue</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-call" href="https://wa.me/263781932267">Send inquiry</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Truck spare parts supplier in Zimbabwe</p>
          <h1>Shacman spares for repairs, service and uptime.</h1>
          <p>
            Truck Gear Autoparts supplies Shacman engine spares, clutch kits,
            gearboxes, filters and accessories from Harare.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="https://wa.me/263781932267">Send inquiry</a>
            <a className="secondary-btn" href="#catalog">View catalogue</a>
          </div>
        </div>

        <div className="hero-board" aria-label="TGA and Shacman brand cards">
          <img className="board-logo" src="/spares/engine-assembly.jpg" alt="Shacman engine spare" />
          <img className="board-shacman" src="/brand/shacman-mark.jpeg" alt="Shacman parts and accessories" />
          <div className="board-card">
            <span>Major stock</span>
            <strong>Shacman spares</strong>
            <small>Engines, clutch kits, gearboxes, filters and accessories</small>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Supported Shacman models">
        <div>
          {modelLines.concat(modelLines).map((model, index) => (
            <span key={`${model}-${index}`}>{model}</span>
          ))}
        </div>
      </section>

      <section className="intro-section" id="shacman">
        <div>
          <p className="eyebrow">Parts counter</p>
          <h2>Send a photo, part number or sample.</h2>
        </div>
        <div className="intro-copy">
          <p>
            TGA focuses on truck spares, not vehicle sales. The team helps
            match the correct replacement part for Shacman repairs and service.
          </p>
          <a href="mailto:sales@truckgearauto.co.zw">Email inquiry</a>
        </div>
      </section>

      <section className="catalog-section" id="catalog">
        <aside className="catalog-sidebar" aria-label="Product categories">
          <p className="eyebrow">Categories</p>
          {catalogLinks.map((item) => (
            <a href="#parts" key={item}>{item}</a>
          ))}
        </aside>
        <div className="catalog-main">
          <div className="section-head">
            <p className="eyebrow">Spares catalogue</p>
            <h2>What TGA supplies</h2>
          </div>
          <div className="model-grid">
            {stockFamilies.map((model) => (
              <article className="model-card" key={model.name}>
                <span>{model.label}</span>
                <strong>{model.name}</strong>
                <p>{model.text}</p>
                <a href="https://wa.me/263781932267">inquiry</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="parts-section" id="parts">
        <div className="section-head">
          <p className="eyebrow">Spare parts</p>
          <h2>Available parts and accessories</h2>
          <p>
            Real spare-part categories for Shacman repairs, maintenance and
            fleet workshop support.
          </p>
        </div>
        <div className="parts-grid">
          {partCategories.map((part) => (
            <article className="part-card" key={part.title}>
              <img src={part.image} alt={part.title} />
              <div>
                <h3>{part.title}</h3>
                <p>{part.text}</p>
                <a href="https://wa.me/263781932267">inquiry</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="flyer-panel">
          <img src="/brand/tga-flyer.jpeg" alt="TGA Shacman parts and accessories flyer" />
        </div>
        <div>
          <p className="eyebrow">Reliable parts for reliable trucks</p>
          <h2>A spares business built for repairs and uptime.</h2>
          <p>
            TGA Truck Gear Autoparts serves transport operators, fleet owners
            and mechanics who need dependable spares and clear communication.
          </p>
          <div className="stats-grid">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <img src="/brand/shacman-mark.jpeg" alt="Shacman parts and accessories" />
          <p className="eyebrow">Send inquiry</p>
          <h2>Share the truck model, photo or part number.</h2>
        </div>
        <div className="contact-card">
          <a href="tel:+263781932267">0781 932 267</a>
          <a href="tel:+263783398888">0783 398 888</a>
          <a href="mailto:sales@truckgearauto.co.zw">sales@truckgearauto.co.zw</a>
          <a href="https://www.truckgearauto.co.zw">www.truckgearauto.co.zw</a>
          <p>Shop 13, 35 Belvedere Road, Harare, Zimbabwe</p>
        </div>
      </section>
    </main>
  );
}
