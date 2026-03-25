'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export default function Cart() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'KESAR10') {
      setDiscount(cartTotal * 0.1);
      toast.success('Coupon applied successfully!');
    } else {
      setDiscount(0);
      toast.error('Invalid coupon code');
    }
  };

  const finalTotal = cartTotal - discount;

  const handleCheckout = () => {
    if (!user) {
      toast.error('Please login to continue checkout');
      router.push('/auth');
      return;
    }
    // Mock checkout process
    toast.success('Order placed successfully!');
    clearCart();
    router.push('/dashboard');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
        <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
          <ShoppingBag className="h-12 w-12" />
        </div>
        <h2 className="font-heading text-3xl font-bold">Your cart is empty</h2>
        <p className="text-muted-foreground">Looks like you haven't added any saffron to your cart yet.</p>
        <Link href="/shop">
          <Button size="lg" className="mt-4">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-card rounded-2xl shadow-sm border"
              >
                <div className="relative h-32 w-32 rounded-xl overflow-hidden bg-muted shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Weight: {item.weight}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-end mt-4 sm:mt-0">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="text-xl font-bold text-primary">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-card rounded-2xl shadow-sm border p-8 sticky top-24">
              <h2 className="font-heading text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{cartTotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between items-end mb-8">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-heading text-3xl font-bold text-primary">₹{finalTotal.toFixed(2)}</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Coupon code (Try KESAR10)" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button variant="outline" onClick={handleApplyCoupon}>Apply</Button>
                </div>
              </div>

              <Button size="lg" className="w-full h-14 text-lg" onClick={handleCheckout}>
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
