import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold text-primary">KesarHarvesters</h3>
          <p className="text-muted/80 text-sm leading-relaxed">
            100% pure, lab-tested Kashmiri saffron directly from the fields of Pampore. 
            Experience the true essence of luxury and health.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted/80">
            <li><Link href="/shop" className="hover:text-primary transition-colors">Shop Saffron</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-6">Legal</h4>
          <ul className="space-y-3 text-sm text-muted/80">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
            <li><Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-muted/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Pampore, Pulwama District, Jammu & Kashmir, India 192121</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>support@kesarharvesters.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-muted/20 text-center text-sm text-muted/60">
        <p>&copy; {new Date().getFullYear()} KesarHarvesters. All rights reserved.</p>
      </div>
    </footer>
  );
}
