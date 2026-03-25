'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/data';
import { ShieldCheck, Leaf, Award, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/saffronfield/1920/1080"
            alt="Saffron Fields in Pampore"
            fill
            className="object-cover brightness-[0.6]"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm mb-4">
              100% Pure Kashmiri Saffron
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              The Red Gold of <span className="text-accent">Kashmir</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
              Directly from the fields of Pampore. Experience the world's finest, most aromatic, and potent saffron.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/shop">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90">
                  Shop Premium Saffron
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-foreground">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "Lab Tested", desc: "ISO 3632 Grade 1" },
              { icon: Leaf, title: "100% Organic", desc: "No additives or colors" },
              { icon: Award, title: "GI Tagged", desc: "Authentic Kashmiri" },
              { icon: CheckCircle2, title: "Direct Sourcing", desc: "From Pampore farmers" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Premium Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carefully handpicked and packed to preserve the intense aroma, deep color, and rich flavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/product/${product.id}`}>
                  <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80 overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white text-foreground hover:bg-white">{product.weight}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 text-center space-y-4">
                      <h3 className="font-heading text-xl font-semibold">{product.name}</h3>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground line-through text-lg">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <Button className="w-full" variant="outline">View Details</Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold">The Miracle Spice</h2>
              <div className="space-y-6">
                {[
                  { title: "Radiant Skin", desc: "Rich in antioxidants, saffron helps clear blemishes and gives a natural glow." },
                  { title: "Mood Enhancer", desc: "Known as the 'sunshine spice', it helps elevate mood and reduce stress." },
                  { title: "Immunity Booster", desc: "Packed with vitamins and minerals that strengthen the immune system." },
                  { title: "Culinary Magic", desc: "Just a few strands transform any dish with its golden hue and exotic aroma." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{benefit.title}</h4>
                      <p className="text-muted/80">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://picsum.photos/seed/saffrontea/800/1000"
                alt="Saffron Tea"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Priya S.", text: "The aroma is incredible. I've tried many brands, but this is truly authentic Kashmiri saffron. The color it gives to my biryani is unmatched." },
              { name: "Rahul M.", text: "Bought the 5g pack for my mother. The quality is exceptional, and the packaging feels very premium. Highly recommended." },
              { name: "Sarah J.", text: "Using it for my daily skincare routine. I can already see a difference in my skin's glow. Will definitely order again!" }
            ].map((review, idx) => (
              <Card key={idx} className="bg-background border-none shadow-md p-8 text-left">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <p className="font-semibold font-heading">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
