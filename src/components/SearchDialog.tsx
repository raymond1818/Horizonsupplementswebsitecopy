import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, productId?: string) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (productId: string) => {
    onNavigate('product', productId);
    onClose();
    setSearchQuery('');
  };

  const popularSearches = ['Pre-Workout', 'Poise 200', 'Poise 0', 'Caffeine Free', 'Multivitamin'];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <VisuallyHidden>
          <DialogTitle>Search Products</DialogTitle>
          <DialogDescription>Search for products by name, type, or description</DialogDescription>
        </VisuallyHidden>
        <div className="py-4">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 text-lg focus:outline-none focus:border-gray-500"
              autoFocus
            />
          </div>

          {/* Results */}
          {searchQuery.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 mb-3 tracking-wide">
                    {filteredProducts.length} RESULT{filteredProducts.length !== 1 ? 'S' : ''}
                  </div>
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-gray-400">[IMG]</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-1">{product.name}</div>
                        <div className="text-sm text-gray-600">{product.type}</div>
                        {product.comingSoon && (
                          <div className="inline-block mt-1 px-2 py-0.5 text-white text-xs" style={{ backgroundColor: 'var(--miami-purple)' }}>
                            COMING SOON
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-lg mb-1">${product.price}</div>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No products found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="text-xs text-gray-500 mb-3 tracking-wide">POPULAR SEARCHES</div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-4 py-2 border border-gray-300 text-sm hover:border-gray-500 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <div className="text-xs text-gray-500 mb-3 tracking-wide">ALL PRODUCTS</div>
                <div className="space-y-2">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <span>{product.name}</span>
                      <span className="text-sm text-gray-600">{product.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
