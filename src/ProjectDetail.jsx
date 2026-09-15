"use client";

import Image from "next/image";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube, ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "./i18n/I18nProvider";
import { Header, Footer, Reveal } from "./components/Shared";

export default function ProjectDetail({ slug }) {
  const { dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const t = dict.projectDetailPage;
  const projectData = t.projects[slug];

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const images = projectData.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const progressPercentage = ((currentImageIndex + 1) / images.length) * 100;

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} useFooterLogo={true} lightTheme={true} />
      
      <main className="project-detail-page">
        {/* Top Bar */}
        <div className="shell projects-top-bar">
          <div className="projects-active-tab">
            <span>{t.projectOverview}</span>
            <div className="tab-underline"></div>
          </div>
          <div className="breadcrumbs">
            <p>{dict.ourProjectsPage.home} &nbsp;&#9656;&nbsp; {t.projectOverview} &nbsp;&#9656;&nbsp; <strong>{projectData.title.length > 30 ? projectData.title.substring(0, 30) + '...' : projectData.title}</strong></p>
          </div>
        </div>

        {/* Title & Social Section */}
        <section className="shell project-detail-title-section">
          <Reveal>
            <h1 className="project-detail-title">{projectData.title}</h1>
          </Reveal>
          <div className="project-social">
            <span className="stay-connected">{t.stayConnected}</span>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
        </section>

        {/* Hero Carousel */}
        <section className="project-hero-carousel">
          {images.length > 0 && (
            <>
              <div className="carousel-image-container">
                <Image 
                  src={images[currentImageIndex]} 
                  alt={`${projectData.title} image ${currentImageIndex + 1}`} 
                  fill 
                  sizes="100vw" 
                  priority 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              
              <div className="carousel-controls shell">
                <div className="carousel-progress">
                  <span className="carousel-counter">{currentImageIndex + 1}/{images.length}</span>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                  </div>
                </div>
                <div className="carousel-arrows">
                  <button onClick={prevImage} aria-label="Previous Image" className="arrow-btn"><ArrowLeft size={24} /></button>
                  <button onClick={nextImage} aria-label="Next Image" className="arrow-btn"><ArrowRight size={24} /></button>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Info Grid */}
        <section className="shell project-info-grid section">
          <Reveal className="project-description">
            {projectData.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>
          
          <Reveal className="project-metadata-grid" delay={200}>
            <div className="metadata-item">
              <span className="metadata-label">{t.labels.location}</span>
              <div className="metadata-line"></div>
              <span className="metadata-value">{projectData.metadata.location}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">{t.labels.sector}</span>
              <div className="metadata-line"></div>
              <span className="metadata-value">{projectData.metadata.sector}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">{t.labels.size}</span>
              <div className="metadata-line"></div>
              <span className="metadata-value">{projectData.metadata.size}</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">{t.labels.year}</span>
              <div className="metadata-line"></div>
              <span className="metadata-value">{projectData.metadata.year}</span>
            </div>
            <div className="metadata-item service-item">
              <span className="metadata-label">{t.labels.service}</span>
              <div className="metadata-line"></div>
              <span className="metadata-value">{projectData.metadata.service}</span>
            </div>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
