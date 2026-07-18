import { PageHero, PageShell } from "../components";
import { sceneImages } from "../site-data";

const services = [
  "Support services for all Shacman trucks",
  "Weichai and Cummins engine support",
  "Vehicle diagnosis and fault tracing",
  "Parts sourcing and importation",
  "Distribution and delivery",
  "Workshop support for fleet operators",
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Support services"
        title="Technical support for Shacman trucks, Weichai and Cummins engines."
        text="TGA helps workshops and operators identify issues, source the right spares and keep trucks available for transport work."
        image={sceneImages.workshop}
      />

      <section className="service-scenes">
        <article>
          <img src={sceneImages.workshop} alt="Mechanic working on truck in workshop" />
          <div>
            <p className="eyebrow">Workshop support</p>
            <h2>Mechanics working where uptime matters.</h2>
          </div>
        </article>
        <article>
          <img src={sceneImages.mechanics} alt="Technicians ready to work in workshop suits" />
          <div>
            <p className="eyebrow">Ready teams</p>
            <h2>People prepared for practical truck support.</h2>
          </div>
        </article>
        <article>
          <img src={sceneImages.diagnostics} alt="Vehicle diagnosis in progress" />
          <div>
            <p className="eyebrow">Diagnosis</p>
            <h2>Vehicle diagnosis in progress.</h2>
          </div>
        </article>
      </section>

      <section className="model-grid service-list">
        {services.map((service) => (
          <article className="model-card" key={service}>
            <span>Service</span>
            <strong>{service}</strong>
            <p>Professional support tied to reliable spare-parts supply and clear communication.</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
