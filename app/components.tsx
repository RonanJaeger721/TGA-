import Link from "next/link";
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
        <a className="nav-call" href="https://wa.me/263781932267">
          Send inquiry
        </a>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <img src="/brand/shacman-mark.jpeg" alt="Shacman parts and accessories" />
        <p>Truck Gear Auto Parts supplies heavy-duty spare parts across Zimbabwe and Southern Africa.</p>
      </div>
      <div>
        <h3>Contact</h3>
        <a href="tel:+263781932267">{contacts.phone1}</a>
        <a href="tel:+263783298888">{contacts.phone2}</a>
        <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        <p>{contacts.address}</p>
      </div>
      <div>
        <h3>Brands</h3>
        <div className="footer-brands">
          {brands.map((brand) => (
            <span className={`brand-mark brand-${brand.toLowerCase().replaceAll(" ", "-")}`} key={brand}>
              {brand}
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
      <SiteHeader />
      {children}
      <SiteFooter />
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
