import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://kaRa4065.github.io/karthickbio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karthick Ravi | Full Stack Developer | React, Next.js, MERN",
    template: "%s | Karthick Ravi",
  },
  description:
    "Karthick Ravi is a Full Stack Developer based in Chennai, India. Experience with React, Next.js, TypeScript, Node.js, and MERN stack. Portfolio, work history, and education.",
  keywords: [
    "Karthick Ravi",
    "Full Stack Developer",
    "React developer",
    "Next.js",
    "MERN stack",
    "TypeScript",
    "Chennai",
    "frontend developer",
    "web developer",
  ],
  authors: [{ name: "Karthick Ravi" }],
  creator: "Karthick Ravi",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Karthick Ravi - Full Stack Developer",
    title: "Karthick Ravi | Full Stack Developer",
    description:
      "Full Stack Developer (MERN/Next.js). React, TypeScript, Node.js. Based in Chennai, India.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthick Ravi | Full Stack Developer",
    description: "Full Stack Developer. React, Next.js, TypeScript, MERN.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karthick Ravi",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer with experience in MERN stack, React, Next.js, and TypeScript. Based in Chennai, India.",
  url: siteUrl,
  sameAs: [
    "http://www.linkedin.com/company/quadkast-technologies",
    "http://www.twitter.com/quadkast",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Redux",
    "Tailwind CSS",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/images/karthick.png" />
        <link rel="shortcut icon" href="/images/karthick.png" />
        <link rel="apple-touch-icon" href="/images/karthick.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#fafafa] relative">
        <div className="fixed inset-0 bg-black/85 pointer-events-none z-0"></div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
