import { DM_Sans, Manrope, Tajawal } from "next/font/google";
import "../../styles.css";
import { I18nProvider } from "../../i18n/I18nProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export const metadata = {
  metadataBase: new URL('https://al-ebdaa.vercel.app'),
  title: {
    default: "Biat Al Ebdaa | Turnkey Interior Design Dubai",
    template: "%s | Biat Al Ebdaa",
  },
  description:
    "Biat Al Ebdaa creates refined villa and office interiors across Dubai and Abu Dhabi, with in-house joinery, photorealistic 3D visualization, approvals and luxury fit-out.",
  keywords: ["Turnkey Interior Design", "Custom Architectural Joinery", "Luxury Fit-out Dubai", "Abu Dhabi Interiors", "Interior Design UAE", "Biat Al Ebdaa"],
  openGraph: {
    title: "Biat Al Ebdaa | Turnkey Interior Design Dubai",
    description: "Refined villa and office interiors across Dubai and Abu Dhabi.",
    url: 'https://al-ebdaa.vercel.app',
    siteName: 'Biat Al Ebdaa',
    locale: 'en_AE',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Biat Al Ebdaa | Turnkey Interior Design Dubai",
    description: "Refined villa and office interiors across Dubai and Abu Dhabi.",
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
};

export const viewport = {
  themeColor: "#11110f",
};

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const isRtl = lang === "ar";
  
  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"} className={`${dmSans.variable} ${manrope.variable} ${tajawal.variable}`}>
      <body>
        <I18nProvider lang={lang}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
