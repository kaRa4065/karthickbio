import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { siteConfig, siteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — Full Stack Developer in ${siteConfig.location}.`,
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Contact"
            subtitle="Send a message or reach out directly"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <TerminalWindow title="Message">
                <ContactForm />
              </TerminalWindow>
            </div>
            <div className="lg:col-span-2">
              <TerminalWindow title="Details">
                <ContactDetails />
              </TerminalWindow>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
