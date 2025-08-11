"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const ImageContactLayout = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-[var(--font-display)] text-foreground">Contact Us</h1>
          <p className="text-lg text-muted font-[var(--font-body)]">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello. 
            Our team is here to make your dining experience exceptional.
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-7xl gap-4 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Elegant restaurant interior"
            className="h-full rounded-lg object-cover"
          />
          <div className="flex flex-col gap-2 rounded-lg bg-card p-2">
            {/* Address & Map */}
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-card-foreground p-6 border border-border">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary w-6 h-6" />
                <p className="text-2xl font-[var(--font-display)] text-background">Location</p>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-background font-[var(--font-body)] mb-2">123 Culinary Boulevard</p>
                  <p className="text-background font-[var(--font-body)] mb-4">Gourmet District, NY 10001</p>
                  <a 
                    href="https://maps.google.com/?q=123+Culinary+Boulevard,+NY+10001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-[var(--font-body)]"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-card-foreground p-6 border border-border">
              <div className="flex items-center gap-3">
                <Phone className="text-primary w-6 h-6" />
                <p className="text-2xl font-[var(--font-display)] text-background">Phone</p>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm text-muted mb-1 font-[var(--font-body)]">Reservations</p>
                  <a 
                    href="tel:+12125551234"
                    className="text-primary hover:text-secondary transition-colors font-[var(--font-body)]"
                  >
                    (212) 555-1234
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1 font-[var(--font-body)]">General Inquiries</p>
                  <a 
                    href="tel:+12125555678"
                    className="text-primary hover:text-secondary transition-colors font-[var(--font-body)]"
                  >
                    (212) 555-5678
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-card-foreground p-6 border border-border">
              <div className="flex items-center gap-3">
                <Mail className="text-primary w-6 h-6" />
                <p className="text-2xl font-[var(--font-display)] text-background">Email</p>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm text-muted mb-1 font-[var(--font-body)]">Reservations</p>
                  <a 
                    href="mailto:reservations@restaurant.com"
                    className="text-primary hover:text-secondary transition-colors font-[var(--font-body)]"
                  >
                    reservations@restaurant.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1 font-[var(--font-body)]">General</p>
                  <a 
                    href="mailto:info@restaurant.com"
                    className="text-primary hover:text-secondary transition-colors font-[var(--font-body)]"
                  >
                    info@restaurant.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-card-foreground p-6 border border-border">
              <div className="flex items-center gap-3">
                <Clock className="text-primary w-6 h-6" />
                <p className="text-2xl font-[var(--font-display)] text-background">Hours</p>
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="text-background font-[var(--font-body)]">Monday - Thursday</span>
                  <span className="text-primary font-[var(--font-body)]">5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-background font-[var(--font-body)]">Friday - Saturday</span>
                  <span className="text-primary font-[var(--font-body)]">5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-background font-[var(--font-body)]">Sunday</span>
                  <span className="text-primary font-[var(--font-body)]">4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-card-foreground p-6 border border-border">
              <p className="text-2xl font-[var(--font-display)] text-background">Follow Us</p>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com/restaurant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/restaurant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/restaurant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ImageContactLayout };