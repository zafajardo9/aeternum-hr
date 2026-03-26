import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { organizationSchema, localBusinessSchema } from "@/lib/seo";
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
    "virtual assistant Philippines",
    "customer support outsourcing",
    "executive assistant remote",
  ],
  authors: [{ name: "Aeternum Talent Solutions", url: BASE_URL }],
  creator: "Aeternum Talent Solutions",
  publisher: "Aeternum Talent Solutions",
  alternates: {
    canonical: BASE_URL,
  },
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
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "googleabf9c133fd74f699",
  },
  category: "business",
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
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NDT9P9V8');`}
        </Script>
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="schema-org-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDT9P9V8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="animate-fade-in flex-1 flex flex-col">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-DCE8MH7B9C" />
    </html>
  );
}
