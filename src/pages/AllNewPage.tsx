import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AllNewPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export const AllNewPage: React.FC<AllNewPageProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const newProducts = products.filter(p => p.isNew);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleViewDetails = (product: typeof products[0]) => {
    onNavigate('product', product.id);
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 text-white text-xs tracking-widest" style={{ backgroundColor: 'var(--miami-purple)' }}>
              NEW RELEASE
            </div>
            <h1 className="text-5xl sm:text-6xl mb-6 tracking-tight">ALL NEW</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the latest from Horizon - supplements designed with you in mind
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
                showAddToCart={true}
              />
            ))}
          </div>

          {newProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No new products at this time</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-8 tracking-tight">The Horizon Difference</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our Poise Series represents a new approach to sports nutrition - one that's 
                  inclusive, science-backed, and designed for real people with real goals. 
                  Each formula is meticulously crafted to deliver consistent, reliable results.
                </p>
                <p>
                  Whether you choose the stimulant-free Poise 0 or the balanced Poise 200, 
                  you're getting premium ingredients in precise dosages backed by science, 
                  with a brand that welcomes everyone.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1693996045346-d0a9b9470909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcG93ZGVyJTIwc3VwcGxlbWVudHxlbnwxfHx8fDE3NjE1MDc5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium supplements"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
