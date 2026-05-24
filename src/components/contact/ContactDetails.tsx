import { siteConfig } from "@/config/site";
import { TerminalPrompt } from "@/components/ui/TerminalPrompt";

export function ContactDetails() {
  return (
    <div className="space-y-6 font-mono text-sm">
      <h3 className="font-bold text-terminal-text">Contact Information</h3>

      <dl className="space-y-4">
        <div>
          <dt className="text-terminal-muted text-xs">email</dt>
          <dd>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-terminal-green hover:underline"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-terminal-muted text-xs">location</dt>
          <dd className="text-terminal-text">{siteConfig.location}</dd>
        </div>
        <div>
          <dt className="text-terminal-muted text-xs">availability</dt>
          <dd className="text-terminal-amber">Open to freelance & full-time</dd>
        </div>
        <div>
          <dt className="text-terminal-muted text-xs mb-2">social</dt>
          <dd className="flex flex-col gap-2">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-green transition-colors"
            >
              → github.com/{siteConfig.shortName.toLowerCase()}
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-green transition-colors"
            >
              → linkedin
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
