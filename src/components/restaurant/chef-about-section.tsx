"use client"

import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { Award, Clock, ChefHat } from 'lucide-react'

interface StatCounterProps {
  end: number
  label: string
  icon: React.ReactNode
  suffix?: string
}

function StatCounter({ end, label, icon, suffix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null
      const duration = 2000

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(end * easeOutQuart))

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [isInView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="flex items-center justify-center mb-3">
        <div className="text-accent">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-pure-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  specialty: string
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-card">
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          
          {/* Overlay that appears on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
          />
          
          {/* Content that slides up on hover */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: isHovered ? '0%' : '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-x-0 bottom-0 p-6"
          >
            <div className="text-accent text-sm font-medium mb-2 uppercase tracking-wider">
              {member.specialty}
            </div>
            <p className="text-foreground text-sm leading-relaxed">
              {member.bio}
            </p>
          </motion.div>
        </div>
        
        {/* Default visible content */}
        <div className="p-6">
          <h4 className="text-xl font-display font-semibold text-pure-white mb-1">
            {member.name}
          </h4>
          <p className="text-muted text-sm uppercase tracking-wider">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ChefAboutSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Isabella Martinez",
      role: "Sous Chef",
      image: "/api/placeholder/300/400",
      bio: "Specializing in contemporary French cuisine with Mediterranean influences, Isabella brings 8 years of experience from Michelin-starred kitchens.",
      specialty: "Contemporary French"
    },
    {
      name: "Marcus Thompson",
      role: "Executive Pastry Chef",
      image: "/api/placeholder/300/400",
      bio: "Award-winning pastry chef known for innovative desserts that blend classical techniques with modern artistry and seasonal ingredients.",
      specialty: "Modern Patisserie"
    },
    {
      name: "Elena Rossi",
      role: "Chef de Partie",
      image: "/api/placeholder/300/400",
      bio: "Expert in traditional Italian cooking methods with a passion for locally-sourced ingredients and authentic flavor combinations.",
      specialty: "Traditional Italian"
    },
    {
      name: "David Kim",
      role: "Sommelier",
      image: "/api/placeholder/300/400",
      bio: "Master sommelier with expertise in wine pairing and an extensive knowledge of both Old World and New World vintages.",
      specialty: "Wine Pairing"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Main Chef Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Chef Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg blur-lg" />
              <div className="relative bg-card rounded-lg p-4 shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    src="/api/placeholder/600/800"
                    alt="Chef Antoine Laurent"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chef Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl font-display font-bold text-pure-white mb-8">
              Meet Chef Antoine Laurent
            </h2>
            
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                With over fifteen years of culinary excellence, Chef Antoine Laurent has dedicated his career to crafting extraordinary dining experiences that celebrate the intersection of traditional French techniques and contemporary innovation.
              </p>
              
              <p>
                Born in Lyon, the gastronomic capital of France, Antoine's passion for cooking was ignited in his grandmother's kitchen, where he learned that food is not merely sustenance, but a language of love, culture, and artistry. His philosophy centers on the belief that every dish should tell a story—one that honors the ingredients, respects the traditions, and surprises the palate.
              </p>
              
              <p>
                After training under Michelin-starred chefs in Paris and London, Antoine brings a unique perspective that bridges classical French cuisine with global influences, creating signature dishes that have earned international acclaim and numerous culinary awards.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <StatCounter
                end={15}
                label="Years Experience"
                icon={<Clock className="w-8 h-8" />}
                suffix="+"
              />
              <StatCounter
                end={200}
                label="Signature Dishes"
                icon={<ChefHat className="w-8 h-8" />}
                suffix="+"
              />
              <StatCounter
                end={50}
                label="Awards Won"
                icon={<Award className="w-8 h-8" />}
                suffix="+"
              />
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-pure-white mb-4">
              Our Culinary Team
            </h3>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Meet the talented chefs and culinary professionals who work alongside Chef Antoine to create unforgettable dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}