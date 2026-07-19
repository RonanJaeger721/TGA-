import Link from "next/link";
import { ScrollMotion } from "./scroll-motion";
import { brands, contacts } from "./site-data";

const navItems = [
  ["Home", "/"],
  ["Spare Parts", "/spare-parts"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <>
      <div className="top-strip">
        <span>{contacts.address}</span>
        <span>{contacts.phone1}</span>
        <span>{contacts.phone2}</span>
        <span>{contacts.email}</span>
      </div>
      <header className="nav-wrap" aria-label="Main navigation">
        <Link className="brand-lockup" href="/" aria-label="TGA home">
          <img src="/brand/tga-logo.jpeg" alt="" />
          <span>
            <strong>Truck Gear Autoparts</strong>
            <small>Reliable parts for reliable trucks</small>
          </span>
        </Link>
        <nav>
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="nav-call" href="https://wa.me/2638644042072">
          Send inquiry
        </a>
      </header>
    </>
  );
}

export function SiteFooter() {
  const footerContacts = [
    { icon: "☎", label: contacts.phone1, href: "tel:+2638644042072" },
    { icon: "☎", label: contacts.phone2, href: "tel:+263783298888" },
    { icon: "✉", label: contacts.email, href: `mailto:${contacts.email}` },
  ];

  return (
    <footer className="site-footer">
      <div>
        <img className="footer-main-logo" src="/brand/tga-logo.jpeg" alt="TGA truck logo" />
        <p>Truck Gear Auto Parts supplies heavy-duty spare parts across Zimbabwe and Southern Africa.</p>
      </div>
      <div>
        <h3>Contact</h3>
        {footerContacts.map((item) => (
          <a className="footer-link" href={item.href} key={item.href}>
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </a>
        ))}
        <p className="footer-location"><span aria-hidden="true">⌖</span>{contacts.address}</p>
      </div>
      <div>
        <h3>Brands</h3>
        <div className="footer-brands">
          {brands.map((brand) => (
            <span className="brand-logo-card" key={brand.name}>
              {brand.logo ? <img src={brand.logo} alt={`${brand.name} logo`} /> : <strong>{brand.name}</strong>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site-shell">
      <ScrollMotion />
      <SiteHeader />
      {children}
      <SiteFooter />
      <a
        className="whatsapp-float"
        href="https://wa.me/2638644042072?text=Hello%20TGA%2C%20I%20need%20help%20with%20truck%20spares."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with TGA on WhatsApp"
      >
        <span>WhatsApp</span>
        <strong>Chat now</strong>
      </a>
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="sub-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {image ? <img src={image} alt="" /> : null}
    </section>
  );
}
