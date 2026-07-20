import { PageHero, PageShell } from "../components";
import { offers, profile, sceneImages } from "../site-data";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company profile"
        title="We are a team of problem solvers for the transport industry all around Zimbabwe."
        text={profile.overview}
        image={sceneImages.team}
      />

      <section className="about-split">
        <article>
          <h2>Our vision</h2>
          <p>{profile.vision}</p>
        </article>
        <article>
          <h2>Our mission</h2>
          <p>{profile.mission}</p>
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
