import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AthletesPageProps {
  onNavigate: (page: string) => void;
}

export const AthletesPage: React.FC<AthletesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <div className="mb-4 text-sm tracking-widest" style={{ color: 'var(--miami-coral)' }}>
              HORIZON TEAM
            </div>
            <h1 className="text-5xl sm:text-6xl mb-6 tracking-tight">
              OUR ATHLETES
            </h1>
            <div className="inline-block mt-8 px-6 py-3 text-white text-sm tracking-widest" style={{ backgroundColor: 'var(--miami-purple)' }}>
              COMING SOON
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-8">
              We're building an incredible team of athletes who embody our values of inclusivity, transparency, and excellence in sport. Stay tuned for announcements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl mb-4 tracking-tight">
            INTERESTED IN BECOMING A HORIZON ATHLETE?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate athletes who share our values and want to be part of something special.
          </p>
          <button
            className="bg-black text-white px-8 py-3 text-sm tracking-wide transition-all inline-block"
            style={{ backgroundColor: 'black' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--miami-coral)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
            }}
          >
            GET IN TOUCH
          </button>
        </div>
      </section>
    </div>
  );
};