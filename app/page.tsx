import { PageShell } from "./components";
import { brands, offers, parts, sceneImages, truckImages } from "./site-data";
import type { CSSProperties } from "react";

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Heavy-duty spares supplier</p>
          <h1>Built to keep Zimbabwe’s Shacman fleets moving.</h1>
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
          {truckImages.slice(0, 5).map((truck, index) => (
            <img className="stage-scene" src={truck} alt="Real Shacman truck" key={truck} style={{ "--scene-index": index } as CSSProperties} />
          ))}
          <img className="stage-tga-badge" src="/brand/tga-logo-white.png" alt="TGA truck logo" />
          <div className="truck-carousel" aria-label="Shacman truck models carousel">
            {[...truckImages, ...truckImages].map((truck, index) => (
              <img src={truck} alt="Shacman truck" key={`${truck}-${index}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="truck-gallery-section">
        <div className="section-head">
          <p className="eyebrow">Shacman fleet focus</p>
          <h2>Real trucks. Real roads. Real uptime pressure.</h2>
          <p>
            TGA supports the trucks that carry fuel, cargo and materials across Zimbabwe —
            with parts sourcing that understands the models operators actually run.
          </p>
        </div>
        <div className="truck-gallery">
          {truckImages.slice(1, 7).map((truck, index) => (
            <article key={truck} className={index === 0 ? "feature-truck" : ""}>
              <img src={truck} alt="Shacman truck in operation" />
            </article>
          ))}
        </div>
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
            <p className="eyebrow">Secure storage</p>
            <h2>Warehouse-backed supply.</h2>
            <p>Safe, flexible and cost-effective storage for short-term and long-term spares movement.</p>
          </div>
        </article>
        <article>
          <img src={sceneImages.sales} alt="Sales interaction with client" />
          <div>
            <p className="eyebrow">Client support</p>
            <h2>Sales teams that listen.</h2>
            <p>Bring a model, sample, photo or part number. TGA helps identify the right replacement.</p>
          </div>
        </article>
      </section>

      <section className="offer-strip">
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
