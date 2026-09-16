#!/usr/bin/env node
// Regenerate src/data/seo-pages.json from the client's SEO map spreadsheet.
// Run: node scripts/generate-seo-data.mjs [path-to-xlsx]
// Re-run this whenever the client sends an updated map; the output is committed to the repo.

import XLSX from "xlsx";
import { writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inputPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(root, "Bait_Al_Ebdaa_Complete_1020_Page_SEO_Map.xlsx");
const outputPath = path.join(root, "src", "data", "seo-pages.json");

if (!existsSync(inputPath)) {
  throw new Error("SEO map not found: " + inputPath);
}

// The 8 emirate-level locations are approved for indexing at launch (real, provable service
// coverage). The 22 neighborhood/community rows stay noindex,follow until local proof/content
// is added for them — see the plan's "Content approach" section.
const CORE_LOCATIONS = new Set([
  "UAE",
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
]);

const URL_RE = /^https:\/\/baitalebdaa\.ae\/(en|ar)\/([^/]+)\/([^/]+)\/$/;

const wb = XLSX.readFile(inputPath);
const ws = wb.Sheets["1000 Page SEO Map"];
const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });

const services = new Map(); // slug -> { slug, en, ar }
const locations = new Map(); // slug -> { slug, en, ar, emirate, tier }
const pages = { en: {}, ar: {} };

for (const row of rows) {
  const lang = row.Language === "Arabic" ? "ar" : "en";
  const match = URL_RE.exec(row.URL);
  if (!match) {
    throw new Error("Unexpected URL shape in row " + row.ID + ": " + row.URL);
  }
  const [, urlLang, serviceSlug, locationSlug] = match;
  if (urlLang !== lang) {
    throw new Error("Language/URL mismatch in row " + row.ID);
  }

  const category = row["Category / Cluster"];
  const location = row.Location;
  const isCore = CORE_LOCATIONS.has(location);

  if (lang === "en") {
    if (!services.has(serviceSlug)) services.set(serviceSlug, { slug: serviceSlug, en: category, ar: "" });
    if (!locations.has(locationSlug)) {
      locations.set(locationSlug, { slug: locationSlug, en: location, ar: "", emirate: row.Emirate, tier: isCore ? "core" : "district" });
    }
  } else {
    // The sheet leaves "Category / Cluster" and "Location" in English for Arabic rows too;
    // the real Arabic display names only exist inside H1, consistently shaped
    // "<service_ar> في <location_ar>" — parse that instead of trusting those two columns.
    const [serviceAr, locationAr] = String(row.H1 || "").split(" في ");
    const svc = services.get(serviceSlug);
    if (svc && serviceAr) svc.ar = serviceAr.trim();
    const loc = locations.get(locationSlug);
    if (loc && locationAr) loc.ar = locationAr.trim();
  }

  const key = `${serviceSlug}/${locationSlug}`;
  pages[lang][key] = {
    id: row.ID,
    serviceSlug,
    locationSlug,
    category,
    location,
    emirate: row.Emirate,
    primaryKeyword: row["Primary Keyword"],
    secondaryKeywords: String(row["Secondary Keywords"] || "").split(";").map((s) => s.trim()).filter(Boolean),
    seoTitle: row["SEO Title"],
    metaDescription: row["Meta Description"],
    h1: row.H1,
    h2Themes: String(row["H2 Keyword Themes"] || "").split(";").map((s) => s.trim()).filter(Boolean),
    canonical: row.Canonical,
    hreflang: row["Hreflang Pair"],
    intent: row.Intent,
    approved: isCore,
  };
}

const data = {
  generatedAt: new Date().toISOString(),
  services: [...services.values()],
  locations: [...locations.values()],
  pages,
};

writeFileSync(outputPath, JSON.stringify(data, null, 2) + "\n", "utf8");

const approvedCount = Object.values(pages.en).filter((p) => p.approved).length + Object.values(pages.ar).filter((p) => p.approved).length;
console.log(`Wrote ${outputPath}`);
console.log(`Services: ${services.size}, Locations: ${locations.size}`);
console.log(`Pages: ${Object.keys(pages.en).length} en + ${Object.keys(pages.ar).length} ar = ${Object.keys(pages.en).length + Object.keys(pages.ar).length}`);
console.log(`Approved (indexable) at launch: ${approvedCount}`);
