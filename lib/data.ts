import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: 'saffron-1g',
    name: 'Premium Kashmiri Saffron - 1 Gram',
    price: 499,
    originalPrice: 599,
    weight: '1g',
    image: 'https://picsum.photos/seed/saffron1/800/800',
    description: "100% pure, hand-harvested Kashmiri saffron. Perfect for personal use, gifting, or trying out the world's finest spice. Our 1g pack contains long, deep red stigmas with intense aroma and flavor.",
    origin: 'Pampore, Kashmir',
    stock: 50,
  },
  {
    id: 'saffron-2g',
    name: 'Premium Kashmiri Saffron - 2 Grams',
    price: 949,
    originalPrice: 1199,
    weight: '2g',
    image: 'https://picsum.photos/seed/saffron2/800/800',
    description: 'Double the luxury. Our 2g premium pack is ideal for regular culinary use, health supplements, and beauty regimens. Sourced directly from the fields of Pampore.',
    origin: 'Pampore, Kashmir',
    stock: 30,
  },
  {
    id: 'saffron-5g',
    name: 'Premium Kashmiri Saffron - 5 Grams',
    price: 2299,
    originalPrice: 2999,
    weight: '5g',
    image: 'https://picsum.photos/seed/saffron5/800/800',
    description: 'The ultimate luxury pack. 5 grams of the finest Grade A Kashmiri saffron. Perfect for weddings, large gatherings, or long-term health benefits. Comes in a premium glass jar.',
    origin: 'Pampore, Kashmir',
    stock: 15,
  },
];
