"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n/I18nProvider";
import { Header, Footer, Reveal } from "./components/Shared";

export default function OurProjects() {
  const { dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const t = dict.ourProjectsPage;
  const projects = dict.projectsSection.items;
  const projectImages = [
    "/assets/hero-penthouse.png",
    "/assets/project-office.png",
    "/assets/project-villa.png",
    "/assets/cad-render.png"
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects.map((p, i) => ({ ...p, image: projectImages[i] }))
    : projects.map((p, i) => ({ ...p, image: projectImages[i] })).filter(p => p.category === activeFilter);

  const filterOptions = [
    { id: "all", label: t.filters.all },
    { id: "hospitality", label: t.filters.hospitality },
    { id: "fnb", label: t.filters.fnb },
    { id: "commercial", label: t.filters.commercial },
    { id: "residential", label: t.filters.residential }
  ];

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} alwaysSolid={true} useFooterLogo={true} />
      <main className="our-projects-page">
        {/* Top Bar: Active Tab and Breadcrumbs */}
        <div className="shell pt-32 pb-4 projects-top-bar">
          <div className="projects-active-tab">
            <span>{t.ourProjects}</span>
            <div className="tab-underline"></div>
          </div>
          <div className="breadcrumbs">
            <p>{t.home} &nbsp;&#9656;&nbsp; <strong>{t.ourProjects}</strong></p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="shell">
          <Reveal>
            <h1 className="our-projects-title">{t.explorePortfolio}</h1>
          </Reveal>
        </section>
        
        <div className="our-projects-hero-image">
          <Image src="/assets/project-office.png" alt="Projects Hero" fill sizes="100vw" priority style={{ objectFit: 'cover' }} />
        </div>

        {/* Intro Section */}
        <section className="shell our-projects-intro section">
          <Reveal className="intro-content">
            <div className="intro-left">
              <p className="micro">{t.projectsPortfolio}</p>
              <h2 className="redefining-heading">{t.redefiningHeading}</h2>
            </div>
            <div className="intro-right">
              <p className="redefining-body">{t.redefiningBody}</p>
            </div>
          </Reveal>
        </section>

        {/* Filters */}
        <section className="shell projects-filters-section">
          <div className="projects-filter-container">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                className={`filter-btn ${activeFilter === f.id ? "is-active" : ""}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        <section className="shell projects-grid-section section">
          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((p, i) => (
                <Reveal className="project-grid-card" key={i} delay={i * 100}>
                  <a href="#contact" className="project-card-link">
                    <div className="project-image-wrapper">
                      <Image src={p.image} alt={p.title} fill sizes="(max-width: 700px) 100vw, (max-width: 980px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="project-grid-meta">
                      <h3>{p.title}, {p.place} <ArrowUpRight size={18} /></h3>
                    </div>
                  </a>
                </Reveal>
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0' }}>No projects found for this category.</p>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
