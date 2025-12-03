import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigate,
}) => {
  const product = products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState<string>(product?.flavors?.[0] || '');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Product not found</p>
          <button
            onClick={() => onNavigate('products')}
            className="text-sm tracking-wide hover:opacity-60"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} × ${product.name} added to cart!`);
  };

  const getProductImage = () => {
    if (product.name.includes('Multivitamin')) {
      return 'https://images.unsplash.com/photo-1614643458308-656e13a14a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWlucyUyMHBpbGxzJTIwaGVhbHRofGVufDF8fHx8MTc2MTYwNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080';
    }
    return 'https://images.unsplash.com/photo-1611073061590-ee32fe3768b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbGVtZW50JTIwamFyJTIwY29udGFpbmVyfGVufDF8fHx8MTc2MTYwNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080';
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Back Button */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center gap-2 text-sm tracking-wide transition-all"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PRODUCTS
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Image */}
            <div>
              <div className="aspect-square bg-gray-100 mb-4 overflow-hidden sticky top-24">
                <ImageWithFallback 
                  src={getProductImage()}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl mb-3 tracking-tight">{product.name}</h1>
                <p className="text-gray-600">{product.type}</p>
                {product.comingSoon ? (
                  <div className="inline-block mt-2 px-3 py-1 text-white text-xs tracking-wide" style={{ backgroundColor: 'var(--miami-purple)' }}>
                    COMING SOON
                  </div>
                ) : product.isNew && (
                  <div className="inline-block mt-2 px-3 py-1 text-white text-xs tracking-wide" style={{ backgroundColor: 'var(--miami-purple)' }}>
                    NEW
                  </div>
                )}
              </div>

              <div className="mb-8">
                <span className="text-3xl">${product.price}</span>
                <p className="text-sm text-gray-600 mt-1">30 servings per box</p>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Flavor Selection */}
              {product.flavors && product.flavors.length > 0 && (
                <div className="mb-8">
                  <div className="text-sm mb-3 tracking-wide">SELECT FLAVOR</div>
                  <div className="flex flex-wrap gap-2">
                    {product.flavors.map((flavor) => (
                      <button
                        key={flavor}
                        onClick={() => setSelectedFlavor(flavor)}
                        className={`px-4 py-2 border text-sm tracking-wide transition-all ${
                          selectedFlavor === flavor
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 hover:border-gray-500'
                        }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Info */}
              <div className="mb-8 p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-gray-500 mb-1 tracking-wide">CAFFEINE</div>
                    <div className="text-sm">
                      {product.caffeineContent > 0
                        ? `${product.caffeineContent}mg`
                        : 'Caffeine Free'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 tracking-wide">SERVINGS</div>
                    <div className="text-sm">30 per box</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 tracking-wide">TYPE</div>
                    <div className="text-sm">
                      {product.caffeineContent > 0 ? 'Stimulant' : 'Non-Stimulant'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 tracking-wide">FORM</div>
                    <div className="text-sm">Powder</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg mb-4 tracking-tight">KEY FEATURES</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="border-t border-gray-200 pt-8">
                {product.comingSoon ? (
                  <div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      This product is currently in development. Sign up to be notified when it becomes available.
                    </p>
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 py-4 text-sm tracking-wide cursor-not-allowed"
                    >
                      NOTIFY ME WHEN AVAILABLE
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-6 mb-6">
                      <label className="text-sm tracking-wide">QUANTITY:</label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="text-xl transition-all hover:scale-110"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-cyan)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          −
                        </button>
                        <span className="text-xl w-12 text-center" style={{ color: 'var(--miami-purple)' }}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="text-xl transition-all hover:scale-110"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-black text-white py-4 text-sm tracking-wide transition-all"
                      style={{ backgroundColor: 'black' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--miami-coral)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}
                    >
                      ADD TO CART - ${(product.price * quantity).toFixed(2)}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formula Section - Only show if product has formula */}
      {product.formula && product.formula.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl mb-8 tracking-tight">FULL FORMULA</h2>
              <div className="bg-white p-8 border border-gray-200">
                <p className="text-sm text-gray-600 mb-6">
                  Target scoop size: {product.name.includes('200') ? '16-18g' : '17-19g'}
                </p>
                <div className="space-y-4">
                  {product.formula.map((item, index) => (
                    <div key={index} className="flex justify-between items-start pb-4 border-b border-gray-200 last:border-0">
                      <span className="text-sm pr-4">{item.ingredient}</span>
                      <span className="text-sm text-gray-600 text-right whitespace-nowrap">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl mb-6 tracking-tight">HOW TO USE</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Mix one scoop with 8-12 oz of cold water 20-30 minutes before your workout.
                </p>
                <p>
                  For best results, consume on an empty stomach or 2-3 hours after a meal.
                </p>
                <p>
                  Do not exceed recommended dosage. Assess tolerance by starting with half a scoop.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl mb-6 tracking-tight">STORAGE</h2>
              <p className="text-gray-700 leading-relaxed">
                Store in a cool, dry place. Keep pouch sealed when not in use to maintain freshness. 
                Keep out of reach of children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Moved to bottom */}
      {product.reviews && product.reviews.length > 0 && !product.comingSoon && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl mb-2 tracking-tight">CUSTOMER REVIEWS</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{product.averageRating}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.round(product.averageRating || 0)
                              ? 'fill-current'
                              : ''
                          }`}
                          style={{ color: 'var(--miami-coral)' }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">
                    Based on {product.reviews.length} review{product.reviews.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm">{review.author}</span>
                          {review.verified && (
                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating ? 'fill-current' : ''
                              }`}
                              style={{ color: 'var(--miami-coral)' }}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h4 className="mb-2">{review.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
