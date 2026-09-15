"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useI18n } from "./i18n/I18nProvider";
import { Header, Footer, Reveal, PageHeader } from "./components/Shared";

export default function OurServices() {
  const { lang, dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const t = dict.ourServicesPage;
  const faq = dict.faqSection;
  
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} useFooterLogo={true} lightTheme={true} />
      
      <main className="services-page">
        <PageHeader 
          kicker={t.navTitle}
          breadcrumbs={<>{dict.ourProjectsPage.home} &nbsp;&#9656;&nbsp; <strong>{t.navTitle}</strong></>}
          title={t.pageTitle}
        />

        {/* Hero Section */}
        <section className="services-hero-section">
          <Reveal className="services-hero-wrapper" delay={100}>
            <Image 
              src="/assets/hero-penthouse.png" 
              alt="Services Hero" 
              fill 
              sizes="100vw" 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </Reveal>
        </section>

        {/* Offerings Section */}
        <section className="shell services-offerings-section">
          <Reveal delay={200}>
            <div className="offerings-header-wrapper">
              <div className="offerings-kicker">
                <span>{t.whatWeOffer}</span>
                <div className="kicker-underline"></div>
              </div>
              <h2 className="offerings-title">{t.comprehensiveOfferings}</h2>
              <p className="offerings-subtitle">{t.offeringsSubtitle}</p>
            </div>
          </Reveal>

          <div className="services-list">
            {t.services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal className={`service-block ${isEven ? 'service-block--even' : 'service-block--odd'}`} key={index} delay={100}>
                  
                  {isEven ? (
                    <>
                      {/* Image Left, Text Right */}
                      <div className="service-image-container">
                        <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="service-text-container">
                        <span className="service-num">{service.num}</span>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                        <a href={service.link} className="service-learn-more">
                          {t.learnMore}
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text Left, Image Right */}
                      <div className="service-text-container text-left-container">
                        <span className="service-num">{service.num}</span>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                        <a href={service.link} className="service-learn-more">
                          {t.learnMore}
                        </a>
                      </div>
                      <div className="service-image-container">
                        <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                      </div>
                    </>
                  )}

                </Reveal>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" aria-labelledby="services-faq-title">
          <div className="shell faq-shell">
            <Reveal className="faq-header" delay={100}>
              <div className="offerings-kicker">
                <span>{faq.kicker}</span>
                <div className="kicker-underline"></div>
              </div>
              <h2 id="services-faq-title">{faq.title}</h2>
              <p className="faq-subtitle">{faq.subtitle}</p>
            </Reveal>

            <div className="faq-list">
              {faq.items.map((item, index) => (
                <FaqItem key={item.q} index={index} faq={item} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function FaqItem({ index, faq }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const answerId = `services-faq-answer-${index}`;
  
  return (
    <Reveal className={`faq-item ${isOpen ? 'is-open' : ''}`} delay={100 + (index * 50)}>
      <button
        type="button"
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <div className="faq-question-text">
          <span className="faq-num" aria-hidden="true">{index + 1}</span>
          <h3>{faq.q}</h3>
        </div>
        <span className="faq-icon-wrapper" aria-hidden="true">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      <div id={answerId} className="faq-answer-wrapper" aria-hidden={!isOpen}>
        <div className="faq-answer">
          <p>{faq.a}</p>
        </div>
      </div>
    </Reveal>
  );
}
