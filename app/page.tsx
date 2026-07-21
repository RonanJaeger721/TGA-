import { PageShell } from "./components";
import { brands, heroCatalogImages, offers, parts, sceneImages } from "./site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Heavy-duty spares supplier</p>
          <h1>We offer a variety of Shacman truck spares all across Zimbabwe.</h1>
          <p>
            Talk to a team that understands the pressure of a grounded truck.
            TGA helps operators find genuine spares, confirm fitment and move parts fast.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="/spare-parts">Explore spares</a>
            <a className="secondary-btn" href="/contact">Talk to sales</a>
          </div>
        </div>
        <div className="truck-stage real-truck-stage" aria-label="Real Shacman truck showcase">
          <video
            className="stage-video"
            src="/brand/shacman-x3000-series.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/brand/shacman-x3000-yard.jpg"
            aria-label="Shacman truck video"
          />
          <div className="truck-carousel" aria-label="Available Shacman truck spares catalogue">
            {[...heroCatalogImages, ...heroCatalogImages].map((item, index) => (
              <img src={item} alt="Available Shacman truck spare or truck" key={`${item}-${index}`} />
            ))}
          </div>
        </div>
        <div className="hero-offer-title" aria-label="Main offering">
          <span>We offer</span>
          <strong>Shacman Spare Parts and Accessories</strong>
        </div>
      </section>

      <section className="truck-gallery-section">
        <div className="section-head">
          <p className="eyebrow">Shacman fleet focus</p>
          <h2>Reliable parts and accessories for Shacman trucks.</h2>
          <p>
            From engine and filtration support to clutches, brake parts and suspension,
            TGA supplies parts for the trucks operators rely on every day.
          </p>
        </div>
        <article className="single-truck-landscape">
          <img src="/brand/shacman-x3000-double-trailer.webp" alt="Shacman X3000 double trailer truck" />
        </article>
      </section>

      <section className="brand-section">
        <p className="eyebrow">Our brands</p>
        <div className="brand-grid">
          {brands.map((brand) => (
            <span className="brand-logo-card" key={brand.name}>
              {brand.logo ? <img src={brand.logo} alt={`${brand.name} logo`} /> : <strong>{brand.name}</strong>}
            </span>
          ))}
        </div>
      </section>

      <section className="scene-grid">
        <article>
          <img src={sceneImages.warehouse} alt="Truck spares warehouse storage" />
          <div>
            <p className="eyebrow">Bulk storage</p>
            <h2>Warehouse-backed supply.</h2>
            <p>Safe, flexible and cost-effective storage for short-term and long-term spares movement.</p>
          </div>
        </article>
        <article>
          <img src={sceneImages.sales} alt="Sales interaction with client" />
          <div>
            <p className="eyebrow">Client support</p>
            <h2>Sales team that listens.</h2>
            <p>Bring a model, sample, photo or part number. TGA helps identify the right replacement.</p>
          </div>
        </article>
      </section>

      <section className="offer-strip" aria-label="TGA support offering">
        {offers.map((offer) => (
          <span key={offer}>{offer}</span>
        ))}
      </section>

      <section className="parts-section">
        <div className="section-head">
          <p className="eyebrow">Popular spares</p>
          <h2>Parts that keep trucks earning.</h2>
        </div>
        <div className="parts-grid">
          {parts.slice(0, 3).map((part) => (
            <article className="part-card" key={part.title}>
              <img src={part.image} alt={part.title} />
              <div>
                <h3>{part.title}</h3>
                <p>{part.text}</p>
                <a href="/spare-parts">view category</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
