"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Check, Menu, X, Globe } from "lucide-react";
import { useI18n } from "./i18n/I18nProvider";
import { useRouter, usePathname } from "next/navigation";

function Brand({ light = false, priority = false }) {
  return <a className={`brand ${light ? "brand--light" : ""}`} href="#top" aria-label="Biat Al Ebdaa home"><Image className="brand__logo" src="/assets/logo.png" alt="Biat Al Ebdaa - Luxury Interior Design and Joinery Logo" width={2170} height={725} priority={priority} /></a>;
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
  const { lang, dict } = useI18n();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    router.push(`/${newLang}`);
  };

  return <>
    <header className={`site-header ${scrolled || menuOpen ? "site-header--solid" : ""}`}>
      <Brand light={!menuOpen} priority />
      <nav className="header-links" aria-label="Primary navigation">
        <a href="#projects">{dict.nav.projects} <ArrowUpRight size={14} /></a>
        <a href="#services">{dict.nav.services} <ArrowUpRight size={14} /></a>
        <button type="button" onClick={toggleLanguage} className="lang-switcher" style={{display: 'flex', alignItems: 'center', gap: '6px', background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit'}}>
          <Globe size={14} /> {lang === "en" ? "العربية" : "English"}
        </button>
      </nav>
      <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-menu"><span>{menuOpen ? dict.nav.close : dict.nav.menu}</span>{menuOpen ? <X size={24} /> : <Menu size={25} />}</button>
      <div className="header-actions">
        <a className="outline-button header-cta" href="https://wa.me/971501234567?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20turnkey%20fit-out%20and%20architectural%20joinery%20services." target="_blank" rel="noopener noreferrer">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {dict.nav.startProject} <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
    <div id="site-menu" className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
      <div className="menu-overlay__main">
        {["Home", "Studio", "Services", "Projects", "Process", "Contact"].map((item, i) => (
          <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{dict.menuItems[i]}</a>
        ))}
      </div>
      <div className="menu-overlay__aside">
        <div>
          <p className="menu-overlay__heading">Contact Info</p>
          <div className="menu-overlay__info-list">
            <span style={{whiteSpace: "pre-wrap"}}>{dict.nav.studioLocation}</span>
            <a href="tel:+97143964121">UAE | +971 4 396 4121</a>
            <a href="mailto:info@arcandgrain.ae">info@arcandgrain.ae</a>
          </div>
        </div>
        <div>
          <p className="menu-overlay__heading">Social Media</p>
          <div className="menu-overlay__social">
            <a href="#top" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#top" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg></a>
            <a href="#top" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#top" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  </>;
}

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

function Footer() {
  const { dict } = useI18n();
  const f = dict.footer;
  const [email, setEmail] = useState("");
  return <footer>
    <div className="shell footer-top">
      <div className="footer-newsletter">
        <p className="footer-label">{f.newsletter}</p>
        <h2 className="footer-headline" style={{whiteSpace: 'pre-wrap'}}>{f.headline}</h2>
        <label className="footer-email-label">{f.emailLabel}
          <div className="footer-email-row">
            <input type="email" placeholder={f.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className="footer-email-input" />
            <button type="button" className="footer-subscribe">{f.subscribe} <ArrowUpRight size={15} /></button>
          </div>
        </label>
      </div>
      <div className="footer-links-col">
        <p className="footer-col-title">{f.explore}</p>
        {f.exploreLinks.map((link, i) => <a key={i} href="#top">{link}</a>)}
      </div>
      <div className="footer-links-col">
        <p className="footer-col-title">{f.importantLinks}</p>
        {f.importantLinksItems.map((link, i) => <a key={i} href="#top">{link}</a>)}
      </div>
      <div className="footer-links-col">
        <p className="footer-col-title">{f.contactInfo}</p>
        <span className="footer-loc">{f.loc}</span>
        <a href="mailto:info@arcandgrain.ae">info@arcandgrain.ae</a>
        <a href="tel:+97143964121">T: +971 4 396 4121</a>
      </div>
    </div>
    <div className="shell footer-mid">
      <Image className="footer-logo" src="/assets/footer logo.png" alt="Biat Al Ebdaa" width={1540} height={400} />
      <a href="#top" className="footer-back-top" aria-label="Back to top"><ArrowUp size={20} /><span>{f.backToTop}</span></a>
    </div>
    <div className="shell footer-bottom">
      <div className="footer-bottom-left">
        <a href="#top">{f.privacy}</a>
        <span className="footer-divider">|</span>
        <a href="#top">Terms &amp; Conditions</a>
      </div>
      <div className="footer-social">
        <a href="#top" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
        <a href="#top" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg></a>
        <a href="#top" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a href="#top" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
      </div>
      <span className="footer-copy">{f.copy}</span>
    </div>
  </footer>;
}

export default function App() { 
  const [menuOpen, setMenuOpen] = useState(false); 
  return <>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main><Hero /><Services /><Studio /><Sectors /><Projects /><Capabilities /><Process /><Contact /></main>
    <Footer />
  </>; 
}
