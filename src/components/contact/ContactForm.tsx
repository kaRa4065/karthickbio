"use client";

import { useState, type FormEvent } from "react";
import type { ContactFormData } from "@/types";
import { TerminalButton } from "@/components/ui/TerminalButton";

const initialState: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("sent");
      setResponseMessage(
        data.message || "I got your message. I’ll contact you soon.",
      );
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setResponseMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const inputClass =
    "w-full bg-terminal-bg border border-terminal-border rounded px-3 py-2 font-mono text-sm text-terminal-text placeholder:text-terminal-muted/60 focus:outline-none focus:border-terminal-green transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-xs text-terminal-muted mb-1"
        >
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
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-xs text-terminal-muted mb-1"
        >
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
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs text-terminal-muted mb-1"
        >
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
          disabled={status === "loading"}
        />
      </div>

      <TerminalButton
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "$ sending..." : "$ send_message"}
      </TerminalButton>

      {status === "sent" && (
        <p className="font-mono text-xs text-terminal-green" role="status">
          {responseMessage}
        </p>
      )}

      {status === "error" && (
        <p className="font-mono text-xs text-red-400" role="status">
          {responseMessage}
        </p>
      )}
    </form>
  );
}
