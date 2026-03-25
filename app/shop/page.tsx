'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { products } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Shop() {
  const [sortBy, setSortBy] = useState('featured');

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="font-heading text-4xl font-bold text-foreground">Shop Premium Saffron</h1>
            <p className="text-muted-foreground mt-2">100% Pure Kashmiri Mongra Saffron</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/product/${product.id}`}>
                <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Badge className="bg-white text-foreground hover:bg-white">{product.weight}</Badge>
                      {product.originalPrice && (
                        <Badge variant="destructive" className="bg-primary text-white">
                          Save ₹{product.originalPrice - product.price}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6 text-center space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    </div>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground line-through text-lg">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <Button className="w-full bg-foreground text-background hover:bg-foreground/90">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
