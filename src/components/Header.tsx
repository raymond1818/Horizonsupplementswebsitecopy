import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown, Search, Mail, MessageCircle, Phone, HelpCircle, Globe } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { CartSheet } from './CartSheet';
import { SearchDialog } from './SearchDialog';
{/* If you want to change the logo that appears at the top of your website, just change
  the "bingus.webp" below to whatever your logo name is. i.e., "logo.png" */}
import horizonLogo from '../assets/bingus.webp';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { cartCount } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(251, 146, 60, 0.15) 100%), rgba(255, 255, 255, 0.85)' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Left Nav - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('supplements')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm tracking-wide hover:opacity-60 transition-opacity">
                  {t.supplements}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'supplements' && (
                  <div
                    className="absolute top-full left-0 pt-4"
                  >
                    <div className="w-[280px] bg-white shadow-xl p-6">
                      <ul className="space-y-3 text-sm">
                        <li>
                          <button
                            onClick={() => onNavigate('home')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            {t.home}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => onNavigate('products')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            {t.allProducts}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => onNavigate('allnew')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            {t.whatsNew}
                          </button>
                        </li>
                        <li className="border-t border-gray-200 pt-3 mt-3">
                          <button
                            onClick={() => onNavigate('products')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-cyan)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            {t.preWorkout}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => onNavigate('products')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-peach)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            {t.wellness}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => onNavigate('allnew')}
                className="text-sm tracking-wide transition-all"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                {t.allNew}
              </button>
            </nav>

            {/* Logo - Center */}
            <button
              onClick={() => onNavigate('home')}
              className="absolute left-1/2 transform -translate-x-1/2 hover:opacity-80 transition-opacity"
            >
              <img
                src={horizonLogo}
                alt="Horizon Supplements"
                className="h-24 w-auto"
              />
            </button>

            {/* Right Nav - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => onNavigate('athletes')}
                className="text-sm tracking-wide transition-all"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                {t.athletes}
              </button>

              {/* Language Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('language')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm tracking-wide hover:opacity-60 transition-opacity">
                  <Globe className="w-4 h-4" />
                  <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'language' && (
                  <div className="absolute top-full right-0 pt-4">
                    <div className="w-[200px] bg-white shadow-xl p-4">
                      <ul className="space-y-2 text-sm">
                        <li>
                          <button
                            onClick={() => setLanguage('en')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: language === 'en' ? 'var(--miami-coral)' : 'inherit' }}
                            onMouseEnter={(e) => language !== 'en' && (e.currentTarget.style.color = 'var(--miami-coral)')}
                            onMouseLeave={(e) => language !== 'en' && (e.currentTarget.style.color = 'inherit')}
                          >
                            {t.english}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setLanguage('fr')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: language === 'fr' ? 'var(--miami-cyan)' : 'inherit' }}
                            onMouseEnter={(e) => language !== 'fr' && (e.currentTarget.style.color = 'var(--miami-cyan)')}
                            onMouseLeave={(e) => language !== 'fr' && (e.currentTarget.style.color = 'inherit')}
                          >
                            {t.french}
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setLanguage('zh')}
                            className="w-full text-left py-2 transition-all hover:pl-2"
                            style={{ color: language === 'zh' ? 'var(--miami-purple)' : 'inherit' }}
                            onMouseEnter={(e) => language !== 'zh' && (e.currentTarget.style.color = 'var(--miami-purple)')}
                            onMouseLeave={(e) => language !== 'zh' && (e.currentTarget.style.color = 'inherit')}
                          >
                            {t.mandarin}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('contact')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm tracking-wide hover:opacity-60 transition-opacity">
                  {t.contact}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'contact' && (
                  <div className="absolute top-full right-0 pt-4">
                    <div className="w-[240px] bg-white shadow-xl p-4">
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a
                            href="mailto:support@horizonsupplements.com"
                            className="flex items-center gap-3 py-2 transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            <Mail className="w-4 h-4" />
                            {t.emailSupport}
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+1234567890"
                            className="flex items-center gap-3 py-2 transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-cyan)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            <Phone className="w-4 h-4" />
                            {t.callUs}
                          </a>
                        </li>
                        <li>
                          <button
                            className="flex items-center gap-3 py-2 w-full text-left transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            <MessageCircle className="w-4 h-4" />
                            {t.liveChat}
                          </button>
                        </li>
                        <li>
                          <button
                            className="flex items-center gap-3 py-2 w-full text-left transition-all hover:pl-2"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-peach)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                          >
                            <HelpCircle className="w-4 h-4" />
                            {t.faq}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:opacity-60 transition-opacity"
              >
                <Search className="w-5 h-5" />
              </button>

              <button className="relative hover:opacity-60 transition-opacity" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--miami-coral)' }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden hover:opacity-60 transition-opacity"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Cart */}
            <button
              className="lg:hidden relative hover:opacity-60 transition-opacity"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 backdrop-blur-md" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(168, 85, 247, 0.12) 50%, rgba(251, 146, 60, 0.12) 100%), rgba(255, 255, 255, 0.9)' }}>
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  className="w-full text-left text-sm tracking-wide py-2"
                  onClick={() => {
                    setActiveDropdown(activeDropdown === 'supplements-mobile' ? null : 'supplements-mobile');
                  }}
                >
                  <div className="flex items-center justify-between">
                    {t.supplements}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'supplements-mobile' ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {activeDropdown === 'supplements-mobile' && (
                  <div className="pl-4 pt-3 space-y-2">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <button
                          onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
                          className="w-full text-left py-1.5 transition-all hover:pl-2"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          {t.home}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { onNavigate('products'); setIsMobileMenuOpen(false); }}
                          className="w-full text-left py-1.5 transition-all hover:pl-2"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          {t.allProducts}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { onNavigate('allnew'); setIsMobileMenuOpen(false); }}
                          className="w-full text-left py-1.5 transition-all hover:pl-2"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-coral)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          {t.whatsNew}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { onNavigate('products'); setIsMobileMenuOpen(false); }}
                          className="w-full text-left py-1.5 transition-all hover:pl-2"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-cyan)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          {t.preWorkout}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { onNavigate('products'); setIsMobileMenuOpen(false); }}
                          className="w-full text-left py-1.5 transition-all hover:pl-2"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-peach)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          {t.wellness}
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={() => { onNavigate('allnew'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-sm tracking-wide py-2"
              >
                {t.allNew}
              </button>

              <button
                onClick={() => { onNavigate('athletes'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-sm tracking-wide py-2"
              >
                {t.athletes}
              </button>

              {/* Contact Dropdown Mobile */}
              <div>
                <button
                  className="w-full text-left text-sm tracking-wide py-2"
                  onClick={() => {
                    setActiveDropdown(activeDropdown === 'contact-mobile' ? null : 'contact-mobile');
                  }}
                >
                  <div className="flex items-center justify-between">
                    {t.contact}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'contact-mobile' ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {activeDropdown === 'contact-mobile' && (
                  <div className="pl-4 pt-3 space-y-2">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="mailto:support@horizonsupplements.com" className="flex items-center gap-2 py-1.5">
                          <Mail className="w-4 h-4" />
                          {t.emailSupport}
                        </a>
                      </li>
                      <li>
                        <a href="tel:+1234567890" className="flex items-center gap-2 py-1.5">
                          <Phone className="w-4 h-4" />
                          {t.callUs}
                        </a>
                      </li>
                      <li>
                        <button className="flex items-center gap-2 py-1.5">
                          <MessageCircle className="w-4 h-4" />
                          {t.liveChat}
                        </button>
                      </li>
                      <li>
                        <button className="flex items-center gap-2 py-1.5">
                          <HelpCircle className="w-4 h-4" />
                          {t.faq}
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Language Dropdown Mobile */}
              <div>
                <button
                  className="w-full text-left text-sm tracking-wide py-2"
                  onClick={() => {
                    setActiveDropdown(activeDropdown === 'language-mobile' ? null : 'language-mobile');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {t.selectLanguage}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'language-mobile' ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {activeDropdown === 'language-mobile' && (
                  <div className="pl-4 pt-3 space-y-2">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <button
                          onClick={() => { setLanguage('en'); setActiveDropdown(null); }}
                          className="w-full text-left py-1.5"
                          style={{ color: language === 'en' ? 'var(--miami-coral)' : 'inherit' }}
                        >
                          {t.english}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { setLanguage('fr'); setActiveDropdown(null); }}
                          className="w-full text-left py-1.5"
                          style={{ color: language === 'fr' ? 'var(--miami-cyan)' : 'inherit' }}
                        >
                          {t.french}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { setLanguage('zh'); setActiveDropdown(null); }}
                          className="w-full text-left py-1.5"
                          style={{ color: language === 'zh' ? 'var(--miami-purple)' : 'inherit' }}
                        >
                          {t.mandarin}
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Search Mobile */}
              <button
                onClick={() => { setIsSearchOpen(true); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-2 text-sm tracking-wide py-2"
              >
                <Search className="w-4 h-4" />
                {t.search}
              </button>
            </div>
          </div>
        )}
      </header>

      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onNavigate={onNavigate} />
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onNavigate={onNavigate} />
    </>
  );
};