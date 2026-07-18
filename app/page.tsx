import { PageShell } from "./components";
import { brands, offers, parts, sceneImages } from "./site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Heavy-duty spares supplier</p>
          <h1>Reliable truck parts for Zimbabwe and Southern Africa.</h1>
          <p>
            Truck Gear Auto Parts supplies genuine and quality Shacman, Weichai,
            Cummins and Asian truck spares for transporters and operators.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="/spare-parts">Explore spares</a>
            <a className="secondary-btn" href="/contact">Talk to sales</a>
          </div>
        </div>
        <div className="truck-stage" aria-label="Moving Shacman truck and spare parts">
          <img className="stage-part" src="/spares/engine-assembly.jpg" alt="Truck engine spare" />
          <div className="moving-truck" aria-hidden="true">
            <span className="truck-body" />
            <span className="truck-cab" />
            <span className="truck-window" />
            <span className="truck-wheel wheel-a" />
            <span className="truck-wheel wheel-b" />
          </div>
          <img className="stage-logo" src="/brand/shacman-mark.jpeg" alt="Shacman parts and accessories" />
        </div>
      </section>

      <section className="brand-section">
        <p className="eyebrow">Our brands</p>
        <div className="brand-grid">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
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
