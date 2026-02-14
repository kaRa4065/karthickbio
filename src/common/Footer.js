import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary-surface border-t border-primary-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col sm:flex-row justify-between gap-8">
          <div className="max-w-md">
            <h2 className="font-heading text-xl font-bold text-white mb-3">
              Karthick<span className="text-primary-accent">.</span>
            </h2>
            <p className="text-primary-muted text-sm leading-relaxed">
              I have 2.5+ years of experience as a Frontend Developer, mainly working with React and Next.js. 
              Eager to expand into backend development and build full-stack applications.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-4">Social Links</div>
            <div className="flex items-center gap-3">
              <Link
                className="w-10 h-10 rounded-full border border-primary-border flex items-center justify-center text-primary-muted hover:text-primary-accent hover:border-primary-accent transition-colors"
                href="http://www.facebook.com/quadkast"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </Link>
              <Link
                className="w-10 h-10 rounded-full border border-primary-border flex items-center justify-center text-primary-muted hover:text-primary-accent hover:border-primary-accent transition-colors"
                href="http://www.linkedin.com/company/quadkast-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </Link>
              <Link
                className="w-10 h-10 rounded-full border border-primary-border flex items-center justify-center text-primary-muted hover:text-primary-accent hover:border-primary-accent transition-colors"
                href="http://www.twitter.com/quadkast"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-4 border-t border-primary-border text-center sm:text-left">
          <p className="text-primary-muted text-sm">
            © {new Date().getFullYear()} Karthick Ravi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
