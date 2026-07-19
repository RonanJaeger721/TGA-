import { PageHero, PageShell } from "../components";
import { contacts } from "../site-data";

const socials = [
  { label: "WhatsApp", href: "https://wa.me/263781932267?text=Hello%20TGA%2C%20I%20need%20help%20with%20truck%20spares." },
  { label: "Facebook" },
  { label: "LinkedIn" },
  { label: "Instagram" },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact TGA"
        title="Talk to the team that keeps trucks earning."
        text="Share what is happening with the truck — a part photo, model, fault, sound or sample — and the TGA team will help trace the right solution."
        image="/brand/tga-logo-white.png"
      />

      <section className="contact-grid-page">
        <article className="contact-card large">
          <h2>All contacts</h2>
          <a href="tel:+263781932267">{contacts.phone1}</a>
          <a href="tel:+263783298888">{contacts.phone2}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <p>{contacts.address}</p>
        </article>
        <article className="contact-card large light">
          <h2>Socials</h2>
          {socials.map((social) => (
            social.href ? (
              <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                {social.label}
              </a>
            ) : (
              <span key={social.label}>{social.label}</span>
            )
          ))}
        </article>
      </section>
    </PageShell>
  );
}
