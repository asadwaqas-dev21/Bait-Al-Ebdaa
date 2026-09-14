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
  title: "Biat Al Ebdaa — Dubai",
  description:
    "Biat Al Ebdaa creates refined villa and office interiors across Dubai and Abu Dhabi, with in-house joinery, photorealistic 3D visualization, approvals and fit-out.",
  openGraph: {
    title: "Biat Al Ebdaa — Dubai",
    description: "Thoughtful interiors, designed and made in Dubai.",
    type: "website",
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
