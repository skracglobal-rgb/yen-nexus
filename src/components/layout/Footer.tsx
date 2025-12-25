import YENLogo from "../icons/YENLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    explore: [
      { label: "About", href: "#about" },
      { label: "Vision", href: "#vision" },
      { label: "Offerings", href: "#offerings" },
      { label: "Initiatives", href: "#initiatives" },
    ],
    join: [
      { label: "Become a Member", href: "#join" },
      { label: "Become a Mentor", href: "#join" },
      { label: "Contact Us", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-yen-graphite border-t border-border/30">
      <div className="yen-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <YENLogo size={48} />
              <div>
                <span className="font-heading font-bold text-2xl text-foreground block">
                  YEN Kerala
                </span>
                <span className="text-sm text-muted-foreground">
                  Young Entrepreneurs Network
                </span>
              </div>
            </a>
            <p className="yen-body max-w-md mb-6">
              Empowering Kerala's next generation of entrepreneurs through mentorship, 
              networking, and community-driven growth.
            </p>
            <div className="flex gap-4">
              {/* Social links */}
              <a
                href="https://instagram.com/yen.kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@yenkerala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M10 9L15 12L10 15V9Z" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/yenkerala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="3" />
                  <path d="M7 10V17M7 7V7.01M11 17V13C11 11 12.5 10 14 10C15.5 10 17 11 17 13V17" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {links.explore.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="yen-link text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Join</h4>
            <ul className="space-y-3">
              {links.join.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="yen-link text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Young Entrepreneurs Network Kerala. All rights reserved.
          </p>
          <a
            href="https://yenkerala.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            www.yenkerala.org
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
