"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n/I18nProvider";
import { Header, Footer, Reveal } from "./components/Shared";

export default function OurServices() {
  const { lang, dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const t = dict.ourServicesPage;
  
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} useFooterLogo={true} lightTheme={true} />
      
      <main className="services-page">
        {/* Top Bar */}
        <div className="shell projects-top-bar">
          <div className="projects-active-tab">
            <span>{t.navTitle}</span>
            <div className="tab-underline"></div>
          </div>
          <div className="breadcrumbs">
            <p>{dict.ourProjectsPage.home} &nbsp;&#9656;&nbsp; <strong>{t.navTitle}</strong></p>
          </div>
        </div>

        {/* Title */}
        <section className="shell services-title-section">
          <Reveal>
            <h1 className="services-page-title">{t.pageTitle}</h1>
          </Reveal>
        </section>

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

      </main>
      <Footer />
    </>
  );
}
