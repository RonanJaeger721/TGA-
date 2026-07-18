import { PageHero, PageShell } from "../components";
import { contacts } from "../site-data";

const socials = ["WhatsApp", "Facebook", "LinkedIn", "Instagram"];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact TGA"
        title="Talk to the parts counter."
        text="Send a truck model, part number, sample photo or diagnosis request and the team will help identify the right spare."
        image="/brand/tga-logo.jpeg"
      />

      <section className="contact-grid-page">
        <article className="contact-card large">
          <h2>All contacts</h2>
          <a href="tel:+2638644042072">{contacts.phone1}</a>
          <a href="tel:+263783298888">{contacts.phone2}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <a href={`https://${contacts.website}`}>{contacts.website}</a>
          <p>{contacts.address}</p>
        </article>
        <article className="contact-card large light">
          <h2>Socials</h2>
          {socials.map((social) => (
            <span key={social}>{social}</span>
          ))}
          <p>Add exact social links here once the client confirms the handles.</p>
        </article>
      </section>
    </PageShell>
  );
}
