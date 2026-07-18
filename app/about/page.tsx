import { PageHero, PageShell } from "../components";
import { offers, profile } from "../site-data";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company profile"
        title="Built by energetic problem solvers for heavy-duty transport."
        text={profile.overview}
        image="/brand/tga-flyer.jpeg"
      />

      <section className="about-split">
        <article>
          <p className="eyebrow">Our vision</p>
          <h2>{profile.vision}</h2>
        </article>
        <article>
          <p className="eyebrow">Our mission</p>
          <h2>{profile.mission}</h2>
        </article>
      </section>

      <section className="history-section">
        <div>
          <p className="eyebrow">Short history</p>
          <h2>Founded in 2020.</h2>
          <p>{profile.history}</p>
        </div>
        <div className="offer-stack">
          {offers.map((offer) => (
            <span key={offer}>{offer}</span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
