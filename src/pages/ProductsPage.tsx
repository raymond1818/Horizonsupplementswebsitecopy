import React, { useState } from 'react';
import { products } from '../data/products';
import { Product } from '../types/product';
import { ProductCard } from '../components/ProductCard';
import { ComparisonDialog } from '../components/ComparisonDialog';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';
import { GitCompare } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'stim' | 'non-stim'>('all');
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    if (filter === 'stim') return product.caffeineContent > 0;
    if (filter === 'non-stim') return product.caffeineContent === 0;
    return true;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleViewDetails = (product: typeof products[0]) => {
    onNavigate('product', product.id);
  };

  const toggleProductSelection = (product: Product) => {
    setSelectedProducts(prev => {
      const isSelected = prev.find(p => p.id === product.id);
      if (isSelected) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleCompare = () => {
    if (selectedProducts.length >= 2) {
      setIsComparisonOpen(true);
    } else {
      toast.error('Please select at least 2 products to compare');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl mb-6 tracking-tight">POISE COLLECTION</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium supplements designed for peak performance and wellness
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex-1" />
            <div className="flex items-center gap-8">
              <button
                onClick={() => setFilter('all')}
                className={`text-sm tracking-wide transition-all pb-1 ${
                  filter === 'all'
                    ? 'border-b-2'
                    : 'text-gray-500 hover:text-black'
                }`}
                style={filter === 'all' ? { borderColor: 'var(--miami-purple)' } : {}}
              >
                ALL
              </button>
              <button
                onClick={() => setFilter('stim')}
                className={`text-sm tracking-wide transition-all pb-1 ${
                  filter === 'stim'
                    ? 'border-b-2'
                    : 'text-gray-500 hover:text-black'
                }`}
                style={filter === 'stim' ? { borderColor: 'var(--miami-coral)' } : {}}
              >
                STIMULANT
              </button>
              <button
                onClick={() => setFilter('non-stim')}
                className={`text-sm tracking-wide transition-all pb-1 ${
                  filter === 'non-stim'
                    ? 'border-b-2'
                    : 'text-gray-500 hover:text-black'
                }`}
                style={filter === 'non-stim' ? { borderColor: 'var(--miami-cyan)' } : {}}
              >
                NON-STIMULANT
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              {selectedProducts.length > 0 && (
                <button
                  onClick={handleCompare}
                  className="flex items-center gap-2 px-4 py-2 border border-black text-sm tracking-wide transition-all"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--miami-purple)';
                    e.currentTarget.style.borderColor = 'var(--miami-purple)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'black';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  <GitCompare className="w-4 h-4" />
                  COMPARE ({selectedProducts.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => {
              const isSelected = selectedProducts.find(p => p.id === product.id);
              return (
                <div key={product.id} className="relative">
                  {/* Comparison Checkbox */}
                  <div className="absolute top-2 left-2 z-10">
                    <label className="flex items-center gap-2 bg-white px-2 py-1 shadow-sm cursor-pointer border border-gray-200">
                      <input
                        type="checkbox"
                        checked={!!isSelected}
                        onChange={() => toggleProductSelection(product)}
                        className="w-4 h-4"
                      />
                      <span className="text-xs tracking-wide">COMPARE</span>
                    </label>
                  </div>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                    showAddToCart={true}
                  />
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No products match your filter</p>
            </div>
          )}
        </div>
      </section>

      <ComparisonDialog
        products={selectedProducts}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};
