'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Leaf, Droplets, Sun, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/kashmir/1920/1080"
            alt="Kashmir Valley"
            fill
            className="object-cover brightness-[0.5]"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold">Our Story</h1>
            <p className="text-xl text-white/90 font-light">
              From the pristine valleys of Pampore to your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading text-4xl font-bold text-primary">The Legacy of Pampore</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For centuries, the town of Pampore in Kashmir has been known as the saffron capital of India. The unique soil, climate, and traditional farming methods make Kashmiri saffron the finest in the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At KesarHarvesters, we work directly with multi-generational farming families. We bypass middlemen to ensure that the farmers get fair compensation and you get 100% pure, unadulterated saffron.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://picsum.photos/seed/farmer/800/800"
                alt="Saffron Farmer"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Sun, title: "Perfect Climate", desc: "Crisp autumn air of Kashmir" },
              { icon: Droplets, title: "Pristine Water", desc: "Nourished by Himalayan streams" },
              { icon: Leaf, title: "Hand Picked", desc: "Delicate stigmas harvested by hand" },
              { icon: Heart, title: "Made with Love", desc: "Generations of farming expertise" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-secondary/30 rounded-2xl flex flex-col items-center gap-4"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
