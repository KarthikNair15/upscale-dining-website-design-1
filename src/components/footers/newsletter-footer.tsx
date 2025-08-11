import { Facebook, Instagram, Twitter } from "lucide-react";

const navigation = [
  {
    title: "Dining",
    links: [
      { name: "Menu", href: "#" },
      { name: "Reservations", href: "#" },
      { name: "Private Events", href: "#" },
    ],
  },
  {
    title: "About", 
    links: [
      { name: "Our Story", href: "#" },
      { name: "Chef", href: "#" },
      { name: "Team", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Location", href: "#" },
      { name: "Hours", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-card py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b border-muted pb-10 sm:mb-16 sm:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            <h2 className="mb-6 text-4xl font-[var(--font-display)] text-foreground">
              Lumière
            </h2>
            <p className="mb-8 text-base font-[var(--font-body)] text-muted-foreground">
              Experience culinary artistry in an atmosphere of refined elegance. 
              Subscribe for exclusive dining updates and special events.
            </p>

            {/* Newsletter subscription */}
            <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-12 flex-1 rounded-md border border-muted bg-background px-4 py-2 text-base font-[var(--font-body)] text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-sm"
              />
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-2 text-base font-medium font-[var(--font-body)] whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:px-4 sm:text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t border-muted pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-4">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[120px]">
                  <h3 className="mb-4 text-lg font-semibold font-[var(--font-display)] text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 font-[var(--font-body)] text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="rounded-full p-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-sm font-[var(--font-body)] text-muted-foreground sm:text-left md:order-1">
            © {new Date().getFullYear()} Lumière Restaurant. All rights reserved.{" "}
            <a
              href="#"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fine Dining Excellence
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};