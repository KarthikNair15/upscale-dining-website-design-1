"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChefHat, Utensils, Wine, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuCategories = [
  { id: "appetizers", name: "Appetizers", icon: ChefHat },
  { id: "mains", name: "Mains", icon: Utensils },
  { id: "desserts", name: "Desserts", icon: Cookie },
  { id: "wine", name: "Wine", icon: Wine },
]

const menuItems = {
  appetizers: [
    {
      id: 1,
      name: "Seared Scallops",
      description: "Pan-seared diver scallops with cauliflower purée and crispy pancetta",
      price: "$24",
      image: "/api/placeholder/300/200",
      ingredients: "Fresh diver scallops, organic cauliflower, artisanal pancetta",
      chefNote: "Chef's signature dish featuring sustainably sourced scallops"
    },
    {
      id: 2,
      name: "Burrata Caprese",
      description: "Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic",
      price: "$18",
      image: "/api/placeholder/300/200",
      ingredients: "Italian burrata, heirloom tomatoes, fresh basil, 12-year balsamic",
      chefNote: "Made daily with locally sourced organic tomatoes"
    },
    {
      id: 3,
      name: "Duck Confit Crostini",
      description: "Slow-cooked duck leg with fig compote on toasted brioche",
      price: "$22",
      image: "/api/placeholder/300/200",
      ingredients: "Duck leg confit, fresh figs, brioche, microgreens",
      chefNote: "Duck aged 48 hours for optimal tenderness"
    },
  ],
  mains: [
    {
      id: 4,
      name: "Wagyu Ribeye",
      description: "16oz dry-aged Wagyu ribeye with truffle butter and roasted vegetables",
      price: "$85",
      image: "/api/placeholder/300/200",
      ingredients: "A5 Wagyu beef, black truffle, seasonal vegetables",
      chefNote: "Dry-aged for 28 days, cooked to perfection"
    },
    {
      id: 5,
      name: "Wild Salmon",
      description: "Atlantic salmon with lemon herb crust and quinoa pilaf",
      price: "$34",
      image: "/api/placeholder/300/200",
      ingredients: "Wild Atlantic salmon, fresh herbs, organic quinoa",
      chefNote: "Sustainably caught, never farmed"
    },
    {
      id: 6,
      name: "Osso Buco",
      description: "Braised veal shanks with saffron risotto and gremolata",
      price: "$42",
      image: "/api/placeholder/300/200",
      ingredients: "Veal shanks, Arborio rice, saffron, fresh herbs",
      chefNote: "Slow-braised for 6 hours until fork-tender"
    },
  ],
  desserts: [
    {
      id: 7,
      name: "Chocolate Soufflé",
      description: "Dark chocolate soufflé with vanilla bean ice cream",
      price: "$16",
      image: "/api/placeholder/300/200",
      ingredients: "Belgian dark chocolate, Madagascar vanilla, fresh eggs",
      chefNote: "Made to order, please allow 20 minutes"
    },
    {
      id: 8,
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard with caramelized sugar",
      price: "$14",
      image: "/api/placeholder/300/200",
      ingredients: "Heavy cream, vanilla beans, farm-fresh eggs",
      chefNote: "Torched tableside for the perfect crack"
    },
    {
      id: 9,
      name: "Tiramisu",
      description: "Traditional Italian tiramisu with espresso and mascarpone",
      price: "$15",
      image: "/api/placeholder/300/200",
      ingredients: "Mascarpone, ladyfingers, espresso, cocoa",
      chefNote: "Family recipe from our Italian chef"
    },
  ],
  wine: [
    {
      id: 10,
      name: "Dom Pérignon 2012",
      description: "Vintage champagne with notes of white fruit and brioche",
      price: "$280",
      image: "/api/placeholder/300/200",
      ingredients: "Chardonnay and Pinot Noir grapes from Champagne, France",
      chefNote: "Perfect for special celebrations"
    },
    {
      id: 11,
      name: "Caymus Cabernet",
      description: "Rich Napa Valley Cabernet with dark fruit and oak",
      price: "$85",
      image: "/api/placeholder/300/200",
      ingredients: "Cabernet Sauvignon grapes from Napa Valley",
      chefNote: "Pairs beautifully with our Wagyu ribeye"
    },
    {
      id: 12,
      name: "Sancerre Loire Valley",
      description: "Crisp Sauvignon Blanc with mineral notes and citrus",
      price: "$65",
      image: "/api/placeholder/300/200",
      ingredients: "Sauvignon Blanc grapes from Loire Valley, France",
      chefNote: "Excellent with seafood dishes"
    },
  ],
}

export default function InteractiveMenuShowcase() {
  const [activeCategory, setActiveCategory] = useState("appetizers")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-foreground mb-4">
            Signature Menu
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of culinary masterpieces, 
            crafted with the finest ingredients and passion for excellence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-full p-2 inline-flex">
            {menuCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-secondary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 font-medium text-sm">
                    {category.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
              <motion.div
                key={item.id}
                className="bg-card rounded-lg overflow-hidden group cursor-pointer"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-mono font-bold">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Additional Details on Hover */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 border-t border-border pt-4"
                      >
                        <div>
                          <h4 className="text-highlight-subtle text-xs font-semibold uppercase tracking-wide mb-1">
                            Ingredients
                          </h4>
                          <p className="text-muted text-xs">
                            {item.ingredients}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-highlight-subtle text-xs font-semibold uppercase tracking-wide mb-1">
                            Chef's Note
                          </h4>
                          <p className="text-muted text-xs italic">
                            {item.chefNote}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}