import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const CartSheet: React.FC<CartSheetProps> = ({ isOpen, onClose, onNavigate }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    onNavigate('checkout');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg tracking-tight">CART</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-8 text-sm">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex gap-4 pb-6 border-b border-gray-200">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-gray-400">[IMG]</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm mb-1">{item.product.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{item.product.type}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="text-sm transition-all hover:scale-110"
                        style={{ color: 'inherit' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-cyan)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                      >
                        −
                      </button>
                      <span className="text-xs w-8 text-center" style={{ color: 'var(--miami-purple)' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="text-sm transition-all hover:scale-110"
                        style={{ color: 'inherit' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto transition-all"
                        style={{ color: 'inherit' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm tracking-wide">TOTAL</span>
              <span className="text-xl">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 text-sm tracking-wide transition-all"
              style={{ backgroundColor: 'black' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--miami-coral)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}
            >
              CHECKOUT
            </button>
            <button
              onClick={clearCart}
              className="w-full border border-gray-300 py-3 text-sm tracking-wide hover:bg-gray-50 transition-colors"
            >
              CLEAR CART
            </button>
          </div>
        )}
      </div>
    </>
  );
};
