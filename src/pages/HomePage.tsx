import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [isHovering, setIsHovering] = useState(false);
  const newProducts = products.filter(p => p.isNew);
  const comingSoonProducts = products.filter(p => p.comingSoon);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} ${t.addedToCart}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] sm:h-[700px] overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Hero Image */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1434596922112-19c563067271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dCUyMHdvbWFufGVufDF8fHx8MTc2MTYwNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fitness training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
          <div className="max-w-xl">
            <div className="mb-4 text-sm tracking-widest text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              <span style={{ color: 'var(--miami-coral)' }}>{t.heroNewPoiseSeries}</span>
            </div>
            <h1 className="text-5xl sm:text-7xl mb-6 tracking-tight text-white whitespace-pre-line" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {t.heroTitle.replace(' Your', '\nYour')}
            </h1>
            
            {/* Button appears on hover */}
            <button
              onClick={() => onNavigate('products')}
              className={`transition-all duration-300 ${
                isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } bg-white text-black px-8 py-3 text-sm tracking-wide border border-black`}
              style={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--miami-coral)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--miami-coral)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
                e.currentTarget.style.borderColor = 'black';
              }}
            >
              {t.shopNow}
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { labelKey: 'preWorkout' as const, page: 'products', image: 'https://images.unsplash.com/photo-1584827387179-355517d8a5fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MTU1Mjk0OXww&ixlib=rb-4.1.0&q=80&w=1080' },
              { labelKey: 'recovery' as const, page: 'products', image: 'https://images.unsplash.com/photo-1687436874044-2c593fbf0245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvdmVyeSUyMHdlbGxuZXNzJTIwaGVhbHRofGVufDF8fHx8MTc2MTYwNTg5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
              { labelKey: 'wellness' as const, page: 'products', image: 'https://images.unsplash.com/photo-1614643458308-656e13a14a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWlucyUyMHBpbGxzJTIwaGVhbHRofGVufDF8fHx8MTc2MTYwNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080' },
              { labelKey: 'energy' as const, page: 'products', image: 'https://images.unsplash.com/photo-1634825881542-9bd54ca437ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGhlYWx0aHl8ZW58MXx8fHwxNzYxNjA1ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => onNavigate(item.page)}
                className="aspect-square relative group overflow-hidden"
              >
                <ImageWithFallback 
                  src={item.image}
                  alt={t[item.labelKey]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <span className="text-white tracking-widest text-sm">{t[item.labelKey]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All New Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight">{t.allNew}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.newArrivalsIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {newProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white group"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 mb-6 relative overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1611073061590-ee32fe3768b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbGVtZW50JTIwamFyJTIwY29udGFpbmVyfGVufDF8fHx8MTc2MTYwNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badge */}
                  {product.comingSoon ? (
                    <div className="absolute top-4 right-4 text-white text-xs px-3 py-1 tracking-wide" style={{ backgroundColor: 'var(--miami-purple)' }}>
                      {t.comingSoon}
                    </div>
                  ) : (
                    <>
                      {product.caffeineContent === 0 && (
                        <div className="absolute top-4 right-4 text-white text-xs px-3 py-1 tracking-wide" style={{ backgroundColor: 'var(--miami-cyan)' }}>
                          {t.nonStim}
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
                    <h3 className="text-xl tracking-tight mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.type}</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    {product.comingSoon ? (
                      <>
                        <span className="text-sm text-gray-500">{t.comingSoon}</span>
                        <button
                          disabled
                          className="bg-gray-300 text-gray-500 px-6 py-2 text-sm tracking-wide cursor-not-allowed"
                        >
                          {t.notifyMe}
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl">${product.price}</span>
                        <div className="flex gap-3">
                          <button
                            onClick={() => onNavigate('product', product.id)}
                            className="text-sm tracking-wide transition-all"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            {t.view}
                          </button>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-black text-white px-6 py-2 text-sm tracking-wide transition-all"
                            style={{ backgroundColor: 'black' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--miami-coral)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}
                          >
                            {t.addToCart}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Products Section */}
      {comingSoonProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight">{t.comingSoon}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.comingSoonSectionIntro}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {comingSoonProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white group"
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-gray-100 mb-6 relative overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1614643458308-656e13a14a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWlucyUyMHBpbGxzJTIwaGVhbHRofGVufDF8fHx8MTc2MTYwNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4 text-white text-xs px-3 py-1 tracking-wide" style={{ backgroundColor: 'var(--miami-purple)' }}>
                      {t.comingSoon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-2">
                      <h3 className="text-xl tracking-tight mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.type}</p>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                      <span className="text-sm text-gray-500">{t.availableSoon}</span>
                      <button
                        disabled
                        className="bg-gray-300 text-gray-500 px-6 py-2 text-sm tracking-wide cursor-not-allowed"
                      >
                        {t.notifyMe}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-lg mb-3 tracking-tight">{t.premiumIngredients}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.premiumIngredientsDesc}
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3 tracking-tight">{t.designedForEveryone}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.designedForEveryoneDesc}
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3 tracking-tight">{t.qualityTested}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.qualityTestedDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight">{t.certifiedQuality}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.certifiedQualityIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <button 
              onClick={() => onNavigate('certifications')}
              className="bg-white p-8 text-center group transition-all hover:shadow-xl border border-transparent hover:border-gray-200 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: 'var(--miami-cyan)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg mb-3 tracking-tight">{t.gmpCertified}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.gmpCertifiedDesc}
              </p>
            </button>

            <button 
              onClick={() => onNavigate('certifications')}
              className="bg-white p-8 text-center group transition-all hover:shadow-xl border border-transparent hover:border-gray-200 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: 'var(--miami-coral)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-lg mb-3 tracking-tight">{t.healthCanadaCertified}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.healthCanadaCertifiedDesc}
              </p>
            </button>

            <button 
              onClick={() => onNavigate('certifications')}
              className="bg-white p-8 text-center group transition-all hover:shadow-xl border border-transparent hover:border-gray-200 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: 'var(--miami-purple)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg mb-3 tracking-tight">{t.sgsCertified}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.sgsCertifiedDesc}
              </p>
            </button>

            <button 
              onClick={() => onNavigate('certifications')}
              className="bg-white p-8 text-center group transition-all hover:shadow-xl border border-transparent hover:border-gray-200 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: 'var(--miami-cyan)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg mb-3 tracking-tight">{t.downloadCOA}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.coaDesc}
              </p>
            </button>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              {t.transparencyStatement}
            </p>
            <button
              onClick={() => onNavigate('certifications')}
              className="inline-block px-6 py-3 border border-black text-sm tracking-wide transition-all"
              style={{ backgroundColor: 'white', color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--miami-cyan)';
                e.currentTarget.style.borderColor = 'var(--miami-cyan)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = 'black';
                e.currentTarget.style.color = 'black';
              }}
            >
              {t.viewAllCertifications}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
