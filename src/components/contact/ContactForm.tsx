"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import type { ContactFormData } from "@/types";
import { TerminalButton } from "@/components/ui/TerminalButton";

const initialState: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialState);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm(initialState);
  };

  const inputClass =
    "w-full bg-terminal-bg border border-terminal-border rounded px-3 py-2 font-mono text-sm text-terminal-text placeholder:text-terminal-muted/60 focus:outline-none focus:border-terminal-green transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-mono text-xs text-terminal-muted mb-1">
          name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-mono text-xs text-terminal-muted mb-1">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-xs text-terminal-muted mb-1">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Tell me about your project..."
        />
      </div>
      <TerminalButton type="submit" variant="primary" className="w-full sm:w-auto">
        $ send_message
      </TerminalButton>
      {status === "sent" && (
        <p className="font-mono text-xs text-terminal-green" role="status">
          Opening your mail client…
        </p>
      )}
    </form>
  );
}
