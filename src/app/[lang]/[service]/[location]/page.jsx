import { notFound } from "next/navigation";
import { getPage, getParamsForLang } from "../../../../lib/seo-pages";
import ServiceLocationPage from "../../../../ServiceLocationPage";

// generateStaticParams for a nested dynamic segment receives the already-resolved
// parent params (lang) synchronously — unlike page/generateMetadata params, which are
// promises in this Next version and must be awaited (see below).
export function generateStaticParams({ params }) {
  return getParamsForLang(params.lang);
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { lang, service, location } = await params;
  const row = getPage(lang, service, location);
  if (!row) return {};

  const otherLang = lang === "en" ? "ar" : "en";
  const selfUrl = row.canonical;
  const otherUrl = row.hreflang;

  return {
    // { absolute } bypasses the root layout's "%s | Bait Al Ebdaa" template — the
    // sheet's own seoTitle already ends with "| Bait Al Ebdaa", so the template would
    // otherwise double the brand suffix.
    title: { absolute: row.seoTitle },
    description: row.metaDescription,
    alternates: {
      canonical: selfUrl,
      languages: {
        [lang]: selfUrl,
        [otherLang]: otherUrl,
        "x-default": lang === "en" ? selfUrl : otherUrl,
      },
    },
    openGraph: {
      title: row.seoTitle,
      description: row.metaDescription,
      url: selfUrl,
      locale: lang === "ar" ? "ar_AE" : "en_AE",
      type: "website",
    },
    robots: row.approved
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function Page({ params }) {
  const { lang, service, location } = await params;
  const row = getPage(lang, service, location);
  if (!row) notFound();
  return <ServiceLocationPage lang={lang} row={row} />;
}
