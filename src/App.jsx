"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useI18n } from "./i18n/I18nProvider";
import { Header, Footer, Reveal } from "./components/Shared";

function Hero() {
  const { dict } = useI18n();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = dict.hero.slides;
  // Fallback images since dictionary only has text
  const heroImages = ["/assets/hero-penthouse.png", "/assets/project-office.png", "/assets/project-villa.png"];

  useEffect(() => { if (paused) return undefined; const timer = window.setInterval(() => setActive((v) => (v + 1) % slides.length), 7000); return () => window.clearInterval(timer); }, [paused, slides.length]);
  const slide = slides[active]; const select = (i) => setActive((i + slides.length) % slides.length);
  return <section className="hero" id="top" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="hero__media" aria-live="polite">{slides.map((item, i) => <Image key={i} className={i === active ? "is-active" : ""} src={heroImages[i]} alt="Luxury residential and commercial interiors in Dubai" fill sizes="100vw" priority={i === 0} />)}<div className="hero__shade" /></div>
    <div className="hero__content shell"><p className="hero__eyebrow" key={`e-${active}`}>{slide.eyebrow}</p><h1 key={`t-${active}`}>{slide.title}</h1><a className="outline-button outline-button--light" href="#projects">{dict.hero.viewWork} <ArrowUpRight size={16} /></a></div>
    <div className="hero__controls shell"><div className="hero__progress" aria-label={`Slide ${active + 1} of ${slides.length}`}><span>0{active + 1}</span><div>{slides.map((_, i) => <button key={i} aria-label={`Go to slide ${i + 1}`} className={i === active ? "is-active" : ""} onClick={() => select(i)} />)}</div><span>0{slides.length}</span></div><div className="hero__summary"><div className="arrow-pair"><button aria-label="Previous hero slide" onClick={() => select(active - 1)}><ArrowLeft /></button><button aria-label="Next hero slide" onClick={() => select(active + 1)}><ArrowRight /></button></div><p key={`b-${active}`}>{slide.body}</p></div></div>
  </section>;
}

function Services() {
  const { dict } = useI18n();
  const images = ["/assets/cad-render.png", "/assets/project-office.png", "/assets/joinery-factory.png"];
  return <section className="section section--light" id="services"><div className="shell"><Reveal className="section-heading section-heading--center"><p className="micro">{dict.servicesSection.micro}</p><h2 style={{whiteSpace: 'pre-wrap'}}>{dict.servicesSection.title}</h2><p className="lede">{dict.servicesSection.lede}</p></Reveal><div className="service-grid">{dict.servicesSection.items.map((s, i) => <Reveal className={`service-card service-card--${i + 1}`} delay={i * 110} key={i}><div className="service-card__image"><Image src={images[i]} alt={s.title} fill sizes="(max-width: 700px) 100vw, (max-width: 980px) 50vw, 33vw" /></div><div className="service-card__copy"><span>{s.number}</span><h3>{s.title}</h3><p>{s.body}</p><a href="#contact">{dict.servicesSection.discuss} <ArrowUpRight size={16} /></a></div></Reveal>)}</div></div></section>;
}

function Studio() {
  const { dict } = useI18n();
  return <section className="studio" id="studio"><div className="shell studio__heading"><Reveal><p className="micro micro--light">{dict.studioSection.micro}</p><h2 style={{whiteSpace: 'pre-wrap'}}>{dict.studioSection.title}</h2></Reveal><Reveal className="studio__intro" delay={120}><p>{dict.studioSection.intro}</p><a href="#process">{dict.studioSection.seeHow} <ArrowUpRight size={16} /></a></Reveal></div><Reveal className="studio__image"><Image src="/assets/joinery-factory.png" alt="Custom joinery manufacturing facility" fill sizes="100vw" /></Reveal><div className="shell studio__facts">{dict.studioSection.facts.map((f, i) => <Reveal key={i} delay={i * 100}><strong>{f.strong}</strong><span>{f.span}</span></Reveal>)}</div></section>;
}

function Sectors() {
  const { dict } = useI18n();
  const [active, setActive] = useState(0);
  const images = ["/assets/project-villa.png", "/assets/project-office.png", "/assets/somfy-curtains.png"];
  return <section className="section sector-section"><div className="shell sectors"><Reveal className="sectors__copy"><p className="micro">{dict.sectorsSection.micro}</p><h2 style={{whiteSpace: 'pre-wrap'}}>{dict.sectorsSection.title}</h2><div className="sector-tabs" role="tablist" aria-label="Project sectors">{dict.sectorsSection.items.map((s, i) => <button key={i} role="tab" aria-selected={i === active} onClick={() => setActive(i)}><span>0{i + 1}</span>{s.label}</button>)}</div><div className="sector-description"><p>{dict.sectorsSection.items[active].body}</p><a href="#contact">{dict.sectorsSection.explore} <ArrowUpRight size={16} /></a></div></Reveal><Reveal className="sectors__image" delay={120}>{dict.sectorsSection.items.map((s, i) => <Image key={i} className={i === active ? "is-active" : ""} src={images[i]} alt={s.label} fill sizes="(max-width: 700px) 100vw, 60vw" />)}</Reveal></div></section>;
}

function Projects() {
  const { dict } = useI18n();
  const rail = useRef(null); const move = (d) => rail.current?.scrollBy({ left: d * Math.min(window.innerWidth * .72, 760), behavior: "smooth" });
  const images = ["/assets/hero-penthouse.png", "/assets/project-office.png", "/assets/project-villa.png", "/assets/cad-render.png"];
  return <section className="section projects" id="projects"><div className="shell projects__heading"><Reveal><p className="micro">{dict.projectsSection.micro}</p><h2 style={{whiteSpace: 'pre-wrap'}}>{dict.projectsSection.title}</h2></Reveal><Reveal className="projects__tools" delay={100}><p>{dict.projectsSection.tools}</p><div className="arrow-pair arrow-pair--dark"><button aria-label="Scroll projects left" onClick={() => move(-1)}><ArrowLeft /></button><button aria-label="Scroll projects right" onClick={() => move(1)}><ArrowRight /></button></div></Reveal></div><div className="project-rail" ref={rail}>{dict.projectsSection.items.map((p, i) => <article className="project-card" key={i}><div className="project-card__image"><Image src={images[i]} alt={`${p.title}, ${p.place}`} fill sizes="(max-width: 700px) 88vw, 66vw" /></div><div className="project-card__meta"><span className="project-num">0{i + 1}</span><div><p>{p.type}</p><h3>{p.title}</h3><span>{p.place}</span></div></div></article>)}</div></section>;
}

function Capabilities() {
  const { dict } = useI18n();
  return <section className="capabilities"><div className="shell capabilities__top"><Reveal><p className="micro micro--light">{dict.capabilitiesSection.micro}</p><h2 style={{whiteSpace: 'pre-wrap'}}>{dict.capabilitiesSection.title}</h2></Reveal><Reveal className="capabilities__image" delay={100}><Image src="/assets/cad-render.png" alt="Interior concept transitioning from CAD to photorealistic render" fill sizes="(max-width: 700px) 100vw, 58vw" /></Reveal></div><div className="shell capability-list">{dict.capabilitiesSection.items.map(([title, body], i) => <Reveal className="capability-row" key={i} delay={i * 80}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p><Check size={20} /></Reveal>)}</div></section>;
}

function Process() {
  const { dict } = useI18n();
  return <section className="section process" id="process"><div className="shell"><Reveal className="process__heading"><p className="micro">{dict.processSection.micro}</p><h2 style={{whiteSpace: 'pre-wrap'}}>{dict.processSection.title}</h2></Reveal><div className="process-grid">{dict.processSection.items.map(([title, body], i) => <Reveal className="process-step" key={i} delay={i * 80}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div></div></section>;
}

function Contact() {
  const { dict } = useI18n();
  const t = dict.contactSection;
  const [sent, setSent] = useState(false); const [type, setType] = useState(t.types[1]); // Default Procurement Form
  
  // Track selected type index to conditionally map
  const typeIndex = t.types.indexOf(type) !== -1 ? t.types.indexOf(type) : 1;

  const submit = (event) => { event.preventDefault(); if (!event.currentTarget.reportValidity()) return; setSent(true); event.currentTarget.reset(); window.setTimeout(() => setSent(false), 5000); };
  return <section className="contact" id="contact"><div className="shell contact__centered"><Reveal as="form" className="project-form" delay={100} onSubmit={submit}>
    <h1 className="form-main-heading">{t.mainHeading}</h1>
    <h2 className="form-heading">{t.heading}</h2>
    <div className="project-types" dir="ltr">
      {/* We keep the tabs LTR internally just so the visual ordering doesn't break the rounded corners mapping */}
      {t.types.map((item, i) => <button type="button" key={i} className={type === item ? "is-active" : ""} onClick={() => setType(item)}>{item}</button>)}
    </div>
    
    {typeIndex === 2 && (
      <>
        <div className="form-row">
          <input name="name" autoComplete="name" placeholder={t.placeholders.fullName} required />
          <input type="email" name="email" autoComplete="email" placeholder={t.placeholders.email} required />
        </div>
        <div className="form-row">
          <input name="phone" inputMode="tel" autoComplete="tel" placeholder={t.placeholders.mobile} required />
          <select name="country" defaultValue="" required>
            <option value="" disabled hidden>{t.placeholders.selectCountry}</option>
            {t.countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="form-row">
          <input name="applyingFor" placeholder={t.placeholders.applyingFor} required />
          <input name="linkedin" type="url" placeholder={t.placeholders.linkedin} />
        </div>
        <textarea name="message" rows="3" placeholder={t.placeholders.message} required />
        <div className="file-upload-wrapper">
          <label className="file-upload-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            {t.uploadCV}
            <input type="file" name="cv" accept=".pdf,.doc,.docx" required />
          </label>
        </div>
      </>
    )}

    {typeIndex === 1 && (
      <>
        <div className="form-section-header">{t.contactPerson}</div>
        <div className="form-row">
          <input name="name" placeholder={t.placeholders.fullName} required />
          <input name="jobTitle" placeholder={t.placeholders.jobTitle} required />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder={t.placeholders.email} required />
          <input type="tel" name="phone" placeholder={t.placeholders.phone} required />
        </div>
        <div className="form-row">
          <select name="country" defaultValue="" required>
            <option value="" disabled hidden>{t.placeholders.selectCountry}</option>
            {t.countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        
        <div className="form-section-header">{t.companyDetails}</div>
        <div className="form-row form-row--three">
          <input name="companyName" placeholder={t.placeholders.companyName} required />
          <input name="companyDomain" placeholder={t.placeholders.companyDomain} />
          <input name="companyPhone" placeholder={t.placeholders.companyPhone} />
        </div>
        <div className="form-row">
          <input type="email" name="companyEmail" placeholder={t.placeholders.companyEmail} required />
          <input type="url" name="companyLinkedin" placeholder={t.placeholders.companyLinkedin} />
        </div>
        <div className="form-row form-row--three">
          <input name="companyAddress" placeholder={t.placeholders.companyAddress} />
          <input name="companyCity" placeholder={t.placeholders.city} />
          <input name="companyRegion" placeholder={t.placeholders.region} />
        </div>
        <input name="description" className="full-width-input" placeholder={t.placeholders.description} required />
      </>
    )}

    {typeIndex === 0 && (
      <>
        <div className="form-row">
          <input name="name" placeholder={t.placeholders.fullName} required />
          <input type="email" name="email" placeholder={t.placeholders.emailAddress} required />
        </div>
        <div className="form-row">
          <input name="phone" placeholder={t.placeholders.phoneNumber} required />
          <select name="location" defaultValue={t.locations[0]}>
            {t.locations.map(l => <option key={l}>{l}</option>)}
          </select>
        </div>
        <textarea name="message" rows="3" placeholder={t.placeholders.whatToCreate} required />
      </>
    )}

    <input type="hidden" name="formType" value={type} />
    <div className="form-submit-wrapper">
      <button className="submit-button submit-button--outline" type="submit">{t.sendRequest} <ArrowUpRight size={14} /></button>
    </div>
    <p className={`form-success ${sent ? "is-visible" : ""}`} role="status"><Check size={18} /> {t.success}</p>
  </Reveal></div></section>;
}

export default function App() { 
  const [menuOpen, setMenuOpen] = useState(false); 
  return <>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main><Hero /><Services /><Studio /><Sectors /><Projects /><Capabilities /><Process /><Contact /></main>
    <Footer />
  </>; 
}
