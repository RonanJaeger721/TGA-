import { PageHero, PageShell } from "../components";
import { sceneImages, serviceOfferings } from "../site-data";

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Support services"
        title="24/7 standby support for all Shacman trucks in and passing through Zimbabwe."
        text="From fault diagnosis to sourcing, storage and delivery, TGA supports operators with the right parts and the right guidance."
        image="/brand/service-advisor.jpeg"
      />

      <section className="service-command">
        <div className="service-command-image">
          <img src="/brand/service-advisor.jpeg" alt="Technician recording Shacman truck service requirements" />
          <span>Parts desk + workshop support</span>
        </div>
        <div className="service-command-copy">
          <p className="eyebrow">What TGA provides</p>
          <h2>Open the service stack.</h2>
          <p>
            The company profile positions TGA as a heavy-duty spare-parts partner for transport and logistics operators.
            These are the practical services behind that promise.
          </p>
          <div className="service-accordion">
            {serviceOfferings.map((service, index) => (
              <details key={service.title} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {service.title}
                </summary>
                <p>{service.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="service-scenes">
        <article>
          <img src={sceneImages.mechanics} alt="Technicians ready to work in workshop suits" />
          <div>
            <p className="eyebrow">Ready teams</p>
            <h2>Hands-on help for fleets, mechanics and transport operators.</h2>
          </div>
        </article>
        <article>
          <img src="/brand/diagnosis-tablet.jpeg" alt="Shacman EPC tablet diagnosis screen" />
          <div>
            <p className="eyebrow">Diagnosis</p>
            <h2>Shacman EPC references for smarter fault tracing.</h2>
          </div>
        </article>
        <article>
          <img src="/brand/warehouse-shacman.jpeg" alt="Shacman warehouse stock and racking" />
          <div>
            <p className="eyebrow">Warehouse supply</p>
            <h2>Stock movement built around availability and delivery.</h2>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
