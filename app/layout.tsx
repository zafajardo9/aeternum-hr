import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://aeternumtalentsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aeternum Talent Solutions | Where Talent Meets Excellence",
    template: "%s | Aeternum Talent Solutions",
  },
  description:
    "Aeternum Talent Solutions helps growing online businesses build stable, high-performing remote teams with pre-trained Filipino professionals ready to contribute from day one.",
  keywords: [
    "remote staffing",
    "Filipino virtual assistants",
    "offshore recruitment",
    "talent solutions",
    "remote teams",
    "business outsourcing",
  ],
  authors: [{ name: "Aeternum Talent Solutions", url: BASE_URL }],
  creator: "Aeternum Talent Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Aeternum Talent Solutions",
    title: "Aeternum Talent Solutions | Where Talent Meets Excellence",
    description:
      "Aeternum Talent Solutions helps growing online businesses build stable, high-performing remote teams with pre-trained Filipino professionals ready to contribute from day one.",
    images: [
      {
        url: "/images/ATS-lgoo-2.png",
        width: 1200,
        height: 630,
        alt: "Aeternum Talent Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeternum Talent Solutions | Where Talent Meets Excellence",
    description:
      "Aeternum Talent Solutions helps growing online businesses build stable, high-performing remote teams with pre-trained Filipino professionals ready to contribute from day one.",
    images: ["/images/ATS-lgoo-2.png"],
  },
  icons: {
    icon: "/images/ATS-lgoo-2.png",
    shortcut: "/images/ATS-lgoo-2.png",
    apple: "/images/ATS-lgoo-2.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="animate-fade-in flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
