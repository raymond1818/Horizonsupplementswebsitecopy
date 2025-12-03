import React from 'react';
import { Product } from '../types/product';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
  showAddToCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
  showAddToCart = false,
}) => {
  // Choose image based on product type
  const getProductImage = () => {
    if (product.name.includes('Multivitamin')) {
      return 'https://images.unsplash.com/photo-1614643458308-656e13a14a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWlucyUyMHBpbGxzJTIwaGVhbHRofGVufDF8fHx8MTc2MTYwNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080';
    }
    return 'https://images.unsplash.com/photo-1611073061590-ee32fe3768b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbGVtZW50JTIwamFyJTIwY29udGFpbmVyfGVufDF8fHx8MTc2MTYwNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080';
  };

  return (
    <div className="bg-white group">
      {/* Product Image */}
      <div className="aspect-square bg-gray-100 mb-4 relative overflow-hidden">
        <ImageWithFallback 
          src={getProductImage()}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        {product.comingSoon ? (
          <div className="absolute top-4 right-4 text-white text-xs px-3 py-1 tracking-wide" style={{ backgroundColor: 'var(--miami-purple)' }}>
            COMING SOON
          </div>
        ) : (
          <>
            {product.isNew && (
              <div className="absolute top-4 left-4 text-white text-xs px-3 py-1 tracking-wide" style={{ backgroundColor: 'var(--miami-purple)' }}>
                NEW
              </div>
            )}
            {product.caffeineContent === 0 && (
              <div className="absolute top-4 right-4 text-white text-xs px-3 py-1 tracking-wide" style={{ backgroundColor: 'var(--miami-cyan)' }}>
                NON-STIM
              </div>
            )}
            {product.caffeineContent > 0 && (
              <div className="absolute top-4 right-4 text-white text-xs px-3 py-1 tracking-wide" style={{ backgroundColor: 'var(--miami-coral)' }}>
                {product.caffeineContent}MG
              </div>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div>
        <div className="mb-2">
          <h3 className="tracking-tight mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.type}</p>
        </div>
        
        <div className="mb-4">
          <span className="text-xl">${product.price}</span>
        </div>

        {/* Color dots (like Ghost has) */}
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-gray-300" />
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {product.comingSoon ? (
            <button
              disabled
              className="flex-1 bg-gray-300 text-gray-500 px-4 py-2 text-sm tracking-wide cursor-not-allowed"
            >
              NOTIFY ME
            </button>
          ) : (
            <>
              {onViewDetails && (
                <button
                  onClick={() => onViewDetails(product)}
                  className="text-sm tracking-wide transition-all"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                >
                  VIEW
                </button>
              )}
              {showAddToCart && onAddToCart && (
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-black text-white px-4 py-2 text-sm tracking-wide transition-all"
                  style={{ backgroundColor: 'black' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--miami-coral)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}
                >
                  ADD TO CART
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
