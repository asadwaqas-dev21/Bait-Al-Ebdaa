"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Star, X } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

export function QuoteModal({ open, onClose }) {
  const { dict } = useI18n();
  const t = dict.quoteModal;

  const [size, setSize] = useState(3500);
  const [service, setService] = useState(0);
  const [sent, setSent] = useState(false);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSent(true);
    event.currentTarget.reset();
    setDesc("");
    window.setTimeout(() => { setSent(false); onClose(); }, 2500);
  };

  return (
    <div className={`quote-modal-overlay ${open ? "is-open" : ""}`} aria-hidden={!open} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="quote-modal-panel" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
        <div className="quote-modal-header">
          <div>
            <h2 id="quote-modal-title">{t.title}</h2>
            <p className="quote-modal-subtitle">{t.subtitle}</p>
          </div>
          <button type="button" className="quote-modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        </div>

        <div className="quote-modal-rating">
          <div className="quote-modal-rating-copy">
            <span className="quote-modal-rating-label">{t.ratingLabel}</span>
            <span className="quote-modal-rating-value">{t.reviewsText}</span>
          </div>
          <div className="quote-modal-stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
        </div>

        <form className="quote-modal-form" onSubmit={submit}>
          <label className="quote-modal-field">
            <span>{t.fullName} *</span>
            <input name="name" required placeholder={t.fullNamePlaceholder} />
          </label>

          <label className="quote-modal-field">
            <span>{t.email} *</span>
            <input type="email" name="email" required placeholder={t.emailPlaceholder} />
          </label>

          <label className="quote-modal-field">
            <span>{t.phone} *</span>
            <input type="tel" name="phone" required defaultValue="+971" />
          </label>

          <div className="quote-modal-field">
            <div className="estimator-label-row">
              <span>{t.propertySize}</span>
              <div className="estimator-value-badge">{size.toLocaleString()} sqft</div>
            </div>
            <input
              type="range"
              min="500"
              max="15000"
              step="100"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="estimator-slider"
            />
            <div className="estimator-slider-ticks">
              <span>500 sqft</span>
              <span>15,000 sqft</span>
            </div>
          </div>

          <div className="quote-modal-field">
            <span>{t.serviceType} *</span>
            <div className="quote-modal-service-grid">
              {t.serviceOptions.map((opt, i) => (
                <label key={i} className={`quote-modal-service-card ${service === i ? "is-active" : ""}`}>
                  <input type="radio" name="serviceType" checked={service === i} onChange={() => setService(i)} required />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <label className="quote-modal-field">
            <span>{t.locationLabel} *</span>
            <select name="location" defaultValue={t.locationOptions[0]} required>
              {t.locationOptions.map((loc) => <option key={loc}>{loc}</option>)}
            </select>
          </label>

          <label className="quote-modal-field">
            <span>{t.descriptionLabel}</span>
            <textarea
              name="description"
              rows="3"
              maxLength={300}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder={t.descriptionPlaceholder}
            />
            <span className="quote-modal-char-count">{desc.length}/300</span>
          </label>

          <button type="submit" className="submit-button quote-modal-submit">{t.submit}</button>
          <a
            href="https://wa.me/971524621919"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button quote-modal-whatsapp"
          >
            {t.whatsappCta} <ArrowUpRight size={15} />
          </a>

          <p className={`form-success ${sent ? "is-visible" : ""}`}>{t.success}</p>
        </form>
      </div>
    </div>
  );
}
