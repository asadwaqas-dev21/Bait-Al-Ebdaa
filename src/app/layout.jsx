import { DM_Sans, Manrope } from "next/font/google";
import "../styles.css";

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

export const metadata = {
  title: "Arc & Grain Interiors — Dubai",
  description:
    "Arc & Grain creates refined villa and office interiors across Dubai and Abu Dhabi, with in-house joinery, photorealistic 3D visualization, approvals and fit-out.",
  openGraph: {
    title: "Arc & Grain Interiors — Dubai",
    description: "Thoughtful interiors, designed and made in Dubai.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#11110f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
