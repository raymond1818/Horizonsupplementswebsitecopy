import React from 'react';
import { X, Check, Minus } from 'lucide-react';
import { Product } from '../types/product';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface ComparisonDialogProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ComparisonDialog: React.FC<ComparisonDialogProps> = ({
  products,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (products.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl tracking-tight">Compare Products</DialogTitle>
          <DialogDescription>
            Compare features, pricing, and specifications across products to find the perfect fit.
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 pr-4 text-sm tracking-wide">FEATURE</th>
                {products.map((product) => (
                  <th key={product.id} className="py-4 px-4 min-w-[200px]">
                    <div className="text-left">
                      <div className="mb-2">{product.name}</div>
                      <div className="text-sm text-gray-600">{product.type}</div>
                      {product.comingSoon && (
                        <div className="inline-block mt-2 px-2 py-1 text-white text-xs tracking-wide" style={{ backgroundColor: 'var(--miami-purple)' }}>
                          COMING SOON
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Price */}
              <tr className="border-b border-gray-200">
                <td className="py-4 pr-4 text-sm">Price</td>
                {products.map((product) => (
                  <td key={product.id} className="py-4 px-4 text-xl">
                    ${product.price}
                  </td>
                ))}
              </tr>

              {/* Caffeine */}
              <tr className="border-b border-gray-200">
                <td className="py-4 pr-4 text-sm">Caffeine Content</td>
                {products.map((product) => (
                  <td key={product.id} className="py-4 px-4">
                    {product.caffeineContent > 0 ? (
                      <div className="flex items-center gap-2">
                        <span>{product.caffeineContent}mg</span>
                        <div className="text-white text-xs px-2 py-0.5" style={{ backgroundColor: 'var(--miami-coral)' }}>
                          STIM
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>0mg</span>
                        <div className="text-white text-xs px-2 py-0.5" style={{ backgroundColor: 'var(--miami-cyan)' }}>
                          NON-STIM
                        </div>
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Rating */}
              <tr className="border-b border-gray-200">
                <td className="py-4 pr-4 text-sm">Customer Rating</td>
                {products.map((product) => (
                  <td key={product.id} className="py-4 px-4">
                    {product.averageRating ? (
                      <div className="flex items-center gap-2">
                        <span>{product.averageRating}</span>
                        <span className="text-gray-400">★★★★★</span>
                        {product.reviews && (
                          <span className="text-xs text-gray-500">({product.reviews.length})</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">No reviews yet</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Best For */}
              <tr className="border-b border-gray-200">
                <td className="py-4 pr-4 text-sm">Best For</td>
                {products.map((product) => (
                  <td key={product.id} className="py-4 px-4 text-sm text-gray-700">
                    {product.id === '1' && 'Morning/afternoon workouts, energy & focus'}
                    {product.id === '2' && 'Evening workouts, caffeine-sensitive individuals'}
                    {product.id === '3' && 'Daily wellness & nutritional support'}
                  </td>
                ))}
              </tr>

              {/* Key Ingredients */}
              <tr className="border-b border-gray-200">
                <td className="py-4 pr-4 text-sm align-top">Key Ingredients</td>
                {products.map((product) => (
                  <td key={product.id} className="py-4 px-4 align-top">
                    <ul className="space-y-1 text-sm text-gray-700">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--miami-cyan)' }} />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Actions */}
              <tr>
                <td className="py-4 pr-4"></td>
                {products.map((product) => (
                  <td key={product.id} className="py-4 px-4">
                    {product.comingSoon ? (
                      <button
                        disabled
                        className="w-full bg-gray-300 text-gray-500 px-4 py-2 text-sm tracking-wide cursor-not-allowed"
                      >
                        COMING SOON
                      </button>
                    ) : (
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-black text-white px-4 py-2 text-sm tracking-wide transition-all"
                        style={{ backgroundColor: 'black' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--miami-coral)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}
                      >
                        ADD TO CART
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
