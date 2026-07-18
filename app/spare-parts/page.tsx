import { PageHero, PageShell } from "../components";
import { brands, models, parts } from "../site-data";

export default function SparePartsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Genuine Shacman spares"
        title="Spare parts for H3000, X3000, X5000, F3000 and M3000."
        text="TGA supplies brand-new and reconditioned heavy-duty spares for Shacman trucks, Weichai engines, Cummins engines and leading Asian truck platforms."
        image="/spares/gearbox.jpg"
      />

      <section className="model-strip">
        {models.map((model) => (
          <span key={model}>Shacman {model}</span>
        ))}
      </section>

      <section className="brand-section compact">
        <p className="eyebrow">Supported brands</p>
        <div className="brand-grid">
          {brands.map((brand) => (
            <span className="brand-logo-card" key={brand.name}>
              {brand.logo ? <img src={brand.logo} alt={`${brand.name} logo`} /> : <strong>{brand.name}</strong>}
            </span>
          ))}
        </div>
      </section>

      <section className="parts-section">
        <div className="section-head">
          <p className="eyebrow">Categories</p>
          <h2>Genuine and quality spare parts.</h2>
          <p>
            Engine spares, gearbox spares, body spares, suspension spares and filtration support for fleets and workshops.
          </p>
        </div>
        <div className="parts-grid">
          {parts.map((part) => (
            <article className="part-card" key={part.title}>
              <img src={part.image} alt={part.title} />
              <div>
                <h3>{part.title}</h3>
                <p>{part.text}</p>
                <a href="/contact">inquiry</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
