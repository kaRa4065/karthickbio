export const siteConfig = {
  name: "Karthick Ravi",
  shortName: "Karthick",
  aliases: ["karthick", "karthi", "Karthick Ravi"],
  title: "Full Stack Developer",
  tagline: "Building web apps & backend systems from the terminal up.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "karthickravi4065@gmail.com",
  location: "Chennai, India",
  timezone: "Asia/Kolkata",
  currentCompany: {
    name: "Radiantze",
    role: "Full Stack Developer",
    period: "Apr 2025 – Present",
  },
  resumePath: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/karthick-ravi",
    github: "https://github.com/kaRa4065",
    twitter: "https://twitter.com/quadkast",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaRa4065.github.io/karthickbio";
