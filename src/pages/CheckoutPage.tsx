import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft, Package, Truck } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

const shippingOptions = [
  {
    id: 'canada-post-standard',
    name: 'Canada Post - Standard',
    courier: 'Canada Post',
    estimatedDays: '5-7 business days',
    price: 9.99,
  },
  {
    id: 'canada-post-expedited',
    name: 'Canada Post - Expedited',
    courier: 'Canada Post',
    estimatedDays: '2-3 business days',
    price: 14.99,
  },
  {
    id: 'canada-post-xpress',
    name: 'Canada Post - Xpresspost',
    courier: 'Canada Post',
    estimatedDays: '1-2 business days',
    price: 19.99,
  },
  {
    id: 'ups-ground',
    name: 'UPS Ground',
    courier: 'UPS',
    estimatedDays: '3-5 business days',
    price: 12.99,
  },
  {
    id: 'ups-express',
    name: 'UPS Express',
    courier: 'UPS',
    estimatedDays: '1-2 business days',
    price: 24.99,
  },
  {
    id: 'purolator-ground',
    name: 'Purolator Ground',
    courier: 'Purolator',
    estimatedDays: '3-5 business days',
    price: 11.99,
  },
  {
    id: 'purolator-express',
    name: 'Purolator Express',
    courier: 'Purolator',
    estimatedDays: '1-2 business days',
    price: 22.99,
  },
];

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const { cartItems, totalPrice } = useCart();
  const [selectedShipping, setSelectedShipping] = useState('canada-post-standard');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    province: '',
    postalCode: '',
    phone: '',
  });

  const selectedShippingOption = shippingOptions.find(opt => opt.id === selectedShipping);
  const shippingCost = selectedShippingOption?.price || 0;
  const tax = (totalPrice + shippingCost) * 0.13; // 13% HST for Ontario
  const finalTotal = totalPrice + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout submission
    alert('Order placed successfully! (This is a demo)');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <button
            onClick={() => onNavigate('products')}
            className="text-sm tracking-wide hover:opacity-60"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-sm tracking-wide transition-all"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO SHOP
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <h1 className="text-4xl mb-12 tracking-tight">CHECKOUT</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-6 border border-gray-200">
                <h2 className="text-xl mb-6 tracking-tight">CONTACT INFORMATION</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-xs tracking-wide text-gray-600">EMAIL</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 border border-gray-200">
                <h2 className="text-xl mb-6 tracking-tight">SHIPPING ADDRESS</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-xs tracking-wide text-gray-600">FIRST NAME</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-xs tracking-wide text-gray-600">LAST NAME</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-xs tracking-wide text-gray-600">ADDRESS</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="apartment" className="text-xs tracking-wide text-gray-600">APARTMENT, SUITE, ETC. (OPTIONAL)</Label>
                    <Input
                      id="apartment"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-xs tracking-wide text-gray-600">CITY</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="province" className="text-xs tracking-wide text-gray-600">PROVINCE</Label>
                      <Input
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        placeholder="ON"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="text-xs tracking-wide text-gray-600">POSTAL CODE</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="A1A 1A1"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs tracking-wide text-gray-600">PHONE</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white p-6 border border-gray-200">
                <h2 className="text-xl mb-6 tracking-tight">SHIPPING METHOD</h2>
                <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
                  <div className="space-y-3">
                    {shippingOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`flex items-center justify-between p-4 border transition-colors ${
                          selectedShipping === option.id
                            ? 'border-black bg-gray-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <label htmlFor={option.id} className="cursor-pointer">
                            <div className="flex items-center gap-2 mb-1">
                              <Truck className="w-4 h-4" />
                              <span className="text-sm">{option.name}</span>
                            </div>
                            <div className="text-xs text-gray-600">{option.estimatedDays}</div>
                          </label>
                        </div>
                        <div className="text-sm">${option.price.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Payment (Placeholder) */}
              <div className="bg-white p-6 border border-gray-200">
                <h2 className="text-xl mb-6 tracking-tight">PAYMENT</h2>
                <div className="text-sm text-gray-600">
                  Payment processing will be integrated here. For this demo, click "Place Order" to complete.
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 text-sm tracking-wide transition-all"
                style={{ backgroundColor: 'black' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--miami-coral)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}
              >
                PLACE ORDER
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 border border-gray-200 sticky top-24">
              <h2 className="text-xl mb-6 tracking-tight">ORDER SUMMARY</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-gray-400">[IMG]</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm mb-1">{item.product.name}</div>
                      <div className="text-xs text-gray-600">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-sm">${(item.product.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (HST 13%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
