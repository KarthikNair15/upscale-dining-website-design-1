"use client";

import { motion } from "motion/react";
import { MoveUpRight, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";

const FullScreenBackgroundHero = () => {
  return (
    <section className="relative h-svh max-h-[1400px] w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat py-12 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:bg-black/70 after:content-[''] md:py-20">
      <div className="container relative z-20 h-full w-full max-w-[85rem]">
        <div className="flex h-full w-full flex-col justify-end gap-12">
          <motion.div 
            className="flex max-w-[61.375rem] flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="font-display text-[#faf8f5] text-4xl md:text-5xl lg:text-7xl leading-tight tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Lumière
            </motion.h1>
            <motion.h2 
              className="font-body text-[#faf8f5] text-xl md:text-2xl lg:text-3xl font-light tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Culinary Excellence Redefined
            </motion.h2>
          </motion.div>
          <motion.div 
            className="flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p className="border-[#f4e4bc] text-[#faf8f5] max-w-[32rem] border-l pl-6 text-base font-body leading-relaxed">
              Experience an extraordinary culinary journey where artistry meets flavor. Our master chefs craft each dish with passion and precision, using the finest seasonal ingredients to create unforgettable moments that transcend ordinary dining.
            </p>
            <div className="shrink-0 flex gap-4">
              <Button
                asChild
                className="bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 group flex h-fit w-fit items-center gap-3 rounded-full px-6 py-4 text-sm font-medium uppercase transition-all duration-300"
              >
                <a href="#menu">
                  <p className="group-hover:tracking-wide transition-all duration-300">View Menu</p>
                  <MoveUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                className="bg-[#722f37] text-[#faf8f5] hover:bg-[#722f37]/90 group flex h-fit w-fit items-center gap-3 rounded-full px-6 py-4 text-sm font-medium uppercase transition-all duration-300"
              >
                <a href="#reservations">
                  <p className="group-hover:tracking-wide transition-all duration-300">Reserve Table</p>
                  <Calendar className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { FullScreenBackgroundHero };