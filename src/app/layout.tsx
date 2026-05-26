import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, siteUrl } from "@/config/site";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title} | Karthick | Karthi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} (Karthick, Karthi) — ${siteConfig.title} in ${siteConfig.location}. React, Next.js, TypeScript, Node.js. Portfolio, experience, and contact.`,
  keywords: [
    "Karthick Ravi",
    "Karthick",
    "Karthi",
    "karthick developer",
    "karthi developer",
    "Full Stack Developer Chennai",
    "React developer",
    "Next.js developer",
    "MERN stack",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
    images: [
      {
        url: `${siteUrl}/images/og.svg`,
        alt: `${siteConfig.name} — Portfolio`,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
    images: [`${siteUrl}/images/og.svg`],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.aliases,
  jobTitle: siteConfig.title,
  description: siteConfig.tagline,
  url: siteUrl,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.currentCompany.name,
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Web Development",
  ],
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} Portfolio`,
  url: siteUrl,
  description: siteConfig.tagline,
  author: { "@type": "Person", name: siteConfig.name },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-50 text-slate-950`}
      >
        <AnimatedBackground />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
