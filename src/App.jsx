"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Check, Menu, X } from "lucide-react";

const heroSlides = [
  { image: "/assets/hero-penthouse.png", eyebrow: "Dubai · Abu Dhabi", title: "Interiors, made exceptional.", body: "From first sketch to final handover, we design, approve and manufacture singular spaces for modern Gulf living." },
  { image: "/assets/project-office.png", eyebrow: "Workplace", title: "Offices with quiet authority.", body: "High-performing workplaces shaped around your people, brand and commercial priorities." },
  { image: "/assets/project-villa.png", eyebrow: "Private residences", title: "Villas, resolved to the last detail.", body: "Architecture, bespoke joinery and intelligent furnishing brought together by one accountable team." },
];

const services = [
  { number: "01", title: "Design & 3D visualization", body: "Photorealistic CAD renders let you approve materials, lighting and spatial decisions before site work begins.", image: "/assets/cad-render.png" },
  { number: "02", title: "Fit-out & approvals", body: "Detailed coordination, authority submissions, Dubai Municipality approvals and NOCs managed end to end.", image: "/assets/project-office.png" },
  { number: "03", title: "Bespoke manufacturing", body: "Custom kitchens, wardrobes, wall systems and furniture produced in our own 15,000 sq ft facility.", image: "/assets/joinery-factory.png" },
];

const sectors = [
  { label: "Luxury villas", image: "/assets/project-villa.png", body: "Private homes composed around natural materials, generous proportions and the rituals of everyday life." },
  { label: "Executive offices", image: "/assets/project-office.png", body: "Assured workplaces where acoustic comfort, brand presence and operational flow work as one." },
  { label: "Smart living", image: "/assets/somfy-curtains.png", body: "Discreet Somfy motorized curtains and integrated controls designed into the architecture from day one." },
];

const projects = [
  { title: "Canal House", place: "Dubai Water Canal", type: "Private residence", image: "/assets/hero-penthouse.png" },
  { title: "The Foundry Office", place: "DIFC, Dubai", type: "Workplace", image: "/assets/project-office.png" },
  { title: "Courtyard Villa", place: "Saadiyat, Abu Dhabi", type: "Private residence", image: "/assets/project-villa.png" },
  { title: "Atelier Suite", place: "Downtown Dubai", type: "Design concept", image: "/assets/cad-render.png" },
];

function Brand({ light = false, priority = false }) {
  return <a className={`brand ${light ? "brand--light" : ""}`} href="#top" aria-label="Arc and Grain home"><Image className="brand__logo" src="/assets/logo.png" alt="" width={2170} height={725} priority={priority} /></a>;
}

function Reveal({ as: Tag = "div", className = "", children, delay = 0, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add("is-visible"); observer.unobserve(element); }
    }, { threshold: 0.14 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` }} {...props}>{children}</Tag>;
}

function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  return <>
    <header className={`site-header ${scrolled || menuOpen ? "site-header--solid" : ""}`}>
      <Brand light={!menuOpen} priority />
      <nav className="header-links" aria-label="Primary navigation"><a href="#projects">Projects <ArrowUpRight size={14} /></a><a href="#services">Services <ArrowUpRight size={14} /></a></nav>
      <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-menu"><span>{menuOpen ? "Close" : "Menu"}</span>{menuOpen ? <X size={24} /> : <Menu size={25} />}</button>
      <a className="outline-button header-cta" href="#contact">Start a project <ArrowUpRight size={15} /></a>
    </header>
    <div id="site-menu" className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
      <div className="menu-overlay__main"><p className="micro">Navigate</p>{["Home", "Studio", "Services", "Projects", "Process", "Contact"].map((item, i) => <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{item}</a>)}</div>
      <div className="menu-overlay__aside"><div><p className="micro">Studio</p><p>Dubai, United Arab Emirates<br />Serving Dubai &amp; Abu Dhabi</p></div><div><p className="micro">New enquiries</p><a href="mailto:studio@arcandgrain.ae">studio@arcandgrain.ae</a><a href="tel:+97140000000">+971 4 000 0000</a></div><p className="menu-note">Design · Approvals · Fit-out · Joinery</p></div>
    </div>
  </>;
}

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => { if (paused) return undefined; const timer = window.setInterval(() => setActive((v) => (v + 1) % heroSlides.length), 7000); return () => window.clearInterval(timer); }, [paused]);
  const slide = heroSlides[active]; const select = (i) => setActive((i + heroSlides.length) % heroSlides.length);
  return <section className="hero" id="top" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="hero__media" aria-live="polite">{heroSlides.map((item, i) => <Image key={item.title} className={i === active ? "is-active" : ""} src={item.image} alt="" fill sizes="100vw" priority={i === 0} />)}<div className="hero__shade" /></div>
    <div className="hero__content shell"><p className="hero__eyebrow" key={`e-${active}`}>{slide.eyebrow}</p><h1 key={`t-${active}`}>{slide.title}</h1><a className="outline-button outline-button--light" href="#projects">View selected work <ArrowUpRight size={16} /></a></div>
    <div className="hero__controls shell"><div className="hero__progress" aria-label={`Slide ${active + 1} of ${heroSlides.length}`}><span>0{active + 1}</span><div>{heroSlides.map((_, i) => <button key={i} aria-label={`Go to slide ${i + 1}`} className={i === active ? "is-active" : ""} onClick={() => select(i)} />)}</div><span>0{heroSlides.length}</span></div><div className="hero__summary"><div className="arrow-pair"><button aria-label="Previous hero slide" onClick={() => select(active - 1)}><ArrowLeft /></button><button aria-label="Next hero slide" onClick={() => select(active + 1)}><ArrowRight /></button></div><p key={`b-${active}`}>{slide.body}</p></div></div>
  </section>;
}

function Services() { return <section className="section section--light" id="services"><div className="shell"><Reveal className="section-heading section-heading--center"><p className="micro">One team, end to end</p><h2>From imagination<br />to installation.</h2><p className="lede">A single, exacting team owns every decision—from the first photorealistic render to the final aligned drawer.</p></Reveal><div className="service-grid">{services.map((s, i) => <Reveal className={`service-card service-card--${i + 1}`} delay={i * 110} key={s.title}><div className="service-card__image"><Image src={s.image} alt={s.title} fill sizes="(max-width: 700px) 100vw, (max-width: 980px) 50vw, 33vw" /></div><div className="service-card__copy"><span>{s.number}</span><h3>{s.title}</h3><p>{s.body}</p><a href="#contact">Discuss your project <ArrowUpRight size={16} /></a></div></Reveal>)}</div></div></section>; }

function Studio() { return <section className="studio" id="studio"><div className="shell studio__heading"><Reveal><p className="micro micro--light">Our studio</p><h2>Built here.<br /><em>Fitted beautifully.</em></h2></Reveal><Reveal className="studio__intro" delay={120}><p>Our 15,000 sq ft manufacturing facility gives designers and makers the freedom to resolve custom details in-house—without compromising the concept on site.</p><a href="#process">See how we work <ArrowUpRight size={16} /></a></Reveal></div><Reveal className="studio__image"><Image src="/assets/joinery-factory.png" alt="Custom joinery manufacturing facility" fill sizes="100vw" /></Reveal><div className="shell studio__facts"><Reveal><strong>15,000</strong><span>sq ft manufacturing facility</span></Reveal><Reveal delay={100}><strong>1:1</strong><span>design-to-production control</span></Reveal><Reveal delay={200}><strong>UAE</strong><span>Dubai &amp; Abu Dhabi delivery</span></Reveal></div></section>; }

function Sectors() {
  const [active, setActive] = useState(0);
  return <section className="section sector-section"><div className="shell sectors"><Reveal className="sectors__copy"><p className="micro">Spaces we shape</p><h2>Designed around<br />how life unfolds.</h2><div className="sector-tabs" role="tablist" aria-label="Project sectors">{sectors.map((s, i) => <button key={s.label} role="tab" aria-selected={i === active} onClick={() => setActive(i)}><span>0{i + 1}</span>{s.label}</button>)}</div><div className="sector-description"><p>{sectors[active].body}</p><a href="#contact">Explore this sector <ArrowUpRight size={16} /></a></div></Reveal><Reveal className="sectors__image" delay={120}>{sectors.map((s, i) => <Image key={s.label} className={i === active ? "is-active" : ""} src={s.image} alt={s.label} fill sizes="(max-width: 700px) 100vw, 60vw" />)}</Reveal></div></section>;
}

function Projects() {
  const rail = useRef(null); const move = (d) => rail.current?.scrollBy({ left: d * Math.min(window.innerWidth * .72, 760), behavior: "smooth" });
  return <section className="section projects" id="projects"><div className="shell projects__heading"><Reveal><p className="micro">Selected work</p><h2>Spaces with<br />a point of view.</h2></Reveal><Reveal className="projects__tools" delay={100}><p>Private residences and workplaces designed for the way our clients actually live and work.</p><div className="arrow-pair arrow-pair--dark"><button aria-label="Scroll projects left" onClick={() => move(-1)}><ArrowLeft /></button><button aria-label="Scroll projects right" onClick={() => move(1)}><ArrowRight /></button></div></Reveal></div><div className="project-rail" ref={rail}>{projects.map((p, i) => <article className="project-card" key={p.title}><div className="project-card__image"><Image src={p.image} alt={`${p.title}, ${p.place}`} fill sizes="(max-width: 700px) 88vw, 66vw" /></div><div className="project-card__meta"><div><p>{p.type}</p><h3>{p.title}</h3><span>{p.place}</span></div><span>0{i + 1}</span></div></article>)}</div></section>;
}

function Capabilities() {
  const items = [["Photorealistic 3D CAD", "Decisions made clearly, before construction."], ["DM & NOC approvals", "Authority submissions handled without loose ends."], ["Somfy automation", "Motorized curtains integrated, concealed and commissioned."], ["Custom joinery", "One-off pieces crafted and finished under our roof."]];
  return <section className="capabilities"><div className="shell capabilities__top"><Reveal><p className="micro micro--light">The advantage is in the detail</p><h2>Complexity,<br /><em>quietly managed.</em></h2></Reveal><Reveal className="capabilities__image" delay={100}><Image src="/assets/cad-render.png" alt="Interior concept transitioning from CAD to photorealistic render" fill sizes="(max-width: 700px) 100vw, 58vw" /></Reveal></div><div className="shell capability-list">{items.map(([title, body], i) => <Reveal className="capability-row" key={title} delay={i * 80}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p><Check size={20} /></Reveal>)}</div></section>;
}

function Process() {
  const steps = [["Discover", "Site review, brief, priorities and investment alignment."], ["Visualize", "Plans, materials and photorealistic 3D CAD renders."], ["Approve", "Technical packages, Dubai Municipality and NOC coordination."], ["Make", "Joinery production, fit-out, installation and considered handover."]];
  return <section className="section process" id="process"><div className="shell"><Reveal className="process__heading"><p className="micro">A controlled journey</p><h2>Four stages.<br />One accountable team.</h2></Reveal><div className="process-grid">{steps.map(([title, body], i) => <Reveal className="process-step" key={title} delay={i * 80}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div></div></section>;
}

function Contact() {
  const [sent, setSent] = useState(false); const [type, setType] = useState("Villa");
  const submit = (event) => { event.preventDefault(); if (!event.currentTarget.reportValidity()) return; setSent(true); event.currentTarget.reset(); window.setTimeout(() => setSent(false), 5000); };
  return <section className="contact" id="contact"><div className="shell contact__grid"><Reveal className="contact__copy"><p className="micro">Start a conversation</p><h2>Tell us about<br />your space.</h2><p>Share a few details and our studio will get back to you within one business day.</p><div className="contact__details"><span>Dubai, UAE</span><a href="mailto:studio@arcandgrain.ae">studio@arcandgrain.ae</a><a href="tel:+97140000000">+971 4 000 0000</a></div></Reveal><Reveal as="form" className="project-form" delay={100} onSubmit={submit}><fieldset><legend>I'm planning a</legend><div className="project-types">{["Villa", "Office", "Other"].map((item) => <button type="button" key={item} className={type === item ? "is-active" : ""} onClick={() => setType(item)}>{item}</button>)}</div></fieldset><div className="form-row"><label>Full name<input name="name" autoComplete="name" required /></label><label>Email address<input type="email" name="email" autoComplete="email" required /></label></div><div className="form-row"><label>Phone number<input name="phone" inputMode="tel" autoComplete="tel" required /></label><label>Location<select name="location" defaultValue="Dubai"><option>Dubai</option><option>Abu Dhabi</option><option>Other UAE</option></select></label></div><label>What would you like to create?<textarea name="message" rows="3" required /></label><input type="hidden" name="projectType" value={type} /><button className="submit-button" type="submit">Send enquiry <ArrowUpRight size={18} /></button><p className={`form-success ${sent ? "is-visible" : ""}`} role="status"><Check size={18} /> Thank you—your project brief is ready for review.</p></Reveal></div></section>;
}

function Footer() { return <footer><div className="shell footer-top"><Brand light /><p>Thoughtful interiors.<br />Made in Dubai.</p><div><p className="micro micro--light">Explore</p><a href="#studio">Studio</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div><div><p className="micro micro--light">Follow</p><a href="#top">Instagram</a><a href="#top">LinkedIn</a><a href="#top">Pinterest</a></div></div><div className="shell footer-bottom"><span>© 2026 Arc &amp; Grain Interiors</span><span>Dubai · Abu Dhabi</span><a href="#top" aria-label="Back to top">Back to top <ArrowUp size={16} /></a></div></footer>; }

export function App() { const [menuOpen, setMenuOpen] = useState(false); return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero /><Services /><Studio /><Sectors /><Projects /><Capabilities /><Process /><Contact /></main><Footer /></>; }
