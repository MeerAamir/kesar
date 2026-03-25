'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions about our saffron? Want to place a bulk order? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-semibold">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reach out to us directly or visit our farm in Pampore. We love hearing from our customers and sharing the story of our saffron.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-md bg-secondary/20">
                <CardContent className="flex items-start gap-4 p-6">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Farm</h3>
                    <p className="text-muted-foreground">Saffron Fields, Pampore<br />Pulwama District<br />Jammu & Kashmir, India 192121</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md bg-secondary/20">
                <CardContent className="flex items-center gap-4 p-6">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md bg-secondary/20">
                <CardContent className="flex items-center gap-4 p-6">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">support@kesarharvesters.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-14 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-semibold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      required 
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
