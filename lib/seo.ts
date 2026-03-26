import type { Metadata } from "next";

const BASE_URL = "https://aeternumtalentsolutions.com";

export const defaultMetadata: Metadata = {
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

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    ...defaultMetadata,
    title,
    description,
    keywords: [...(defaultMetadata.keywords as string[]), ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      url,
      title,
      description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}

// Organization Structured Data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aeternum Talent Solutions",
  url: BASE_URL,
  logo: `${BASE_URL}/images/ATS-lgoo-2.png`,
  description:
    "Aeternum Talent Solutions helps growing online businesses build stable, high-performing remote teams with pre-trained Filipino professionals.",
  email: "aeternumtalentsolutions@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manila",
    addressCountry: "PH",
  },
  sameAs: [],
};

// LocalBusiness Structured Data
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aeternum Talent Solutions",
  url: BASE_URL,
  logo: `${BASE_URL}/images/ATS-lgoo-2.png`,
  description:
    "Premium remote staffing and talent solutions for growing online businesses.",
  email: "aeternumtalentsolutions@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manila",
    addressCountry: "PH",
  },
  areaServed: {
    "@type": "Country",
    name: "Global",
  },
  serviceType: [
    "Remote Staffing",
    "Talent Acquisition",
    "Virtual Assistant Services",
    "Customer Support Outsourcing",
    "Executive Assistant Services",
  ],
};

// Breadcrumb Structured Data Generator
export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "" ? BASE_URL : `${BASE_URL}${item.path}`,
    })),
  };
}

// Service Structured Data Generator
export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Aeternum Talent Solutions",
      url: BASE_URL,
    },
    url: `${BASE_URL}${url}`,
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
  };
}

// FAQ Structured Data Generator
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
