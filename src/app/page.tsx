import { FloatingNavbar } from "@/components/navbars/floating-navbar"
import { FullScreenBackgroundHero } from "@/components/heros/full-screen-background-hero"
import ChefAboutSection from "@/components/restaurant/chef-about-section"
import InteractiveMenuShowcase from "@/components/restaurant/interactive-menu-showcase"
import ReservationSystem from "@/components/restaurant/reservation-system"
import RestaurantGallery from "@/components/gallery/masonry-testimonial-grid"
import { ImageContactLayout } from "@/components/contact/image-contact-layout"
import { NewsletterFooter } from "@/components/footers/newsletter-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />
      <FullScreenBackgroundHero />
      <ChefAboutSection />
      <InteractiveMenuShowcase />
      <ReservationSystem />
      <RestaurantGallery />
      <ImageContactLayout />
      <NewsletterFooter />
    </main>
  )
}