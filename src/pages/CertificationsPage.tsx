import React from 'react';
import { ArrowLeft, Shield, CheckCircle, Award, FileCheck, Download } from 'lucide-react';

interface CertificationsPageProps {
  onNavigate: (page: string) => void;
}

const certifications = [
  {
    id: 'gmp',
    name: 'GMP Certified',
    icon: Shield,
    color: 'var(--miami-cyan)',
    description: 'Good Manufacturing Practice (GMP) certification ensures our products are consistently produced and controlled according to quality standards.',
    details: [
      'ISO 22000 compliant manufacturing facilities',
      'Regular third-party audits and inspections',
      'Strict quality control at every production stage',
      'Complete traceability of all ingredients'
    ],
    documents: [
      { name: 'GMP Certificate 2024', type: 'PDF', size: '2.4 MB' },
      { name: 'Manufacturing Facility Audit Report', type: 'PDF', size: '5.1 MB' }
    ]
  },
  {
    id: 'health-canada',
    name: 'Health Canada Approved',
    icon: CheckCircle,
    color: 'var(--miami-coral)',
    description: 'All Horizon products are approved by Health Canada, meeting rigorous safety, efficacy, and quality standards for natural health products.',
    details: [
      'NPN (Natural Product Number) registered',
      'Complies with Natural Health Products Regulations',
      'Regular product testing and monitoring',
      'Approved labeling and health claims'
    ],
    documents: [
      { name: 'Health Canada License', type: 'PDF', size: '1.8 MB' },
      { name: 'NPN Registration - Poise 200', type: 'PDF', size: '856 KB' },
      { name: 'NPN Registration - Poise 0', type: 'PDF', size: '892 KB' }
    ]
  },
  {
    id: 'sgs',
    name: 'SGS/GMP Certified Factory',
    icon: Award,
    color: 'var(--miami-purple)',
    description: 'Our manufacturing partner is SGS and GMP certified, representing the highest standards in quality assurance and safety.',
    details: [
      'Independent third-party verification',
      'International quality standards compliance',
      'Advanced testing and quality control systems',
      'Continuous improvement protocols'
    ],
    documents: [
      { name: 'SGS Factory Certification', type: 'PDF', size: '3.2 MB' },
      { name: 'Quality Management System Overview', type: 'PDF', size: '4.5 MB' }
    ]
  },
  {
    id: 'coa',
    name: 'Certificate of Analysis',
    icon: FileCheck,
    color: 'var(--miami-peach)',
    description: 'Every ingredient batch comes with a Certificate of Analysis (COA), verifying purity, potency, and absence of contaminants.',
    details: [
      'Third-party lab testing for all raw materials',
      'Heavy metals screening',
      'Microbial contamination testing',
      'Ingredient identity and potency verification'
    ],
    documents: [
      { name: 'L-Citrulline COA - Batch 2024-10', type: 'PDF', size: '1.2 MB' },
      { name: 'Beta-Alanine COA - Batch 2024-10', type: 'PDF', size: '1.1 MB' },
      { name: 'Creatine Monohydrate COA - Batch 2024-10', type: 'PDF', size: '1.3 MB' },
      { name: 'Caffeine COA - Batch 2024-10', type: 'PDF', size: '987 KB' }
    ]
  }
];

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onNavigate }) => {
  const handleDownload = (certName: string, docName: string) => {
    // In a real implementation, this would download the actual document
    alert(`Download initiated for: ${docName}\n\nNote: This is a demo. In production, actual certification documents would be downloaded.`);
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-sm tracking-wide transition-all mb-4"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--miami-purple)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl mb-6 tracking-tight">CERTIFICATIONS & QUALITY</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Horizon, quality isn't just a promise—it's proven. Every product is manufactured in certified facilities, tested by third-party labs, and approved by regulatory bodies. Transparency is at our core.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-12">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.id} className="border border-gray-200 bg-white">
                  <div className="p-8 border-b border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: cert.color + '20' }}
                      >
                        <Icon className="w-8 h-8" style={{ color: cert.color }} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl mb-2 tracking-tight">{cert.name}</h2>
                        <p className="text-gray-700 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-gray-50">
                    <h3 className="text-sm tracking-wide mb-4">KEY DETAILS</h3>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {cert.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: cert.color }} />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h3 className="text-sm tracking-wide mb-4">AVAILABLE DOCUMENTS</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {cert.documents.map((doc, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleDownload(cert.name, doc.name)}
                            className="flex items-center justify-between p-4 bg-white border border-gray-200 text-left transition-all hover:border-gray-400 group"
                          >
                            <div className="flex-1 mr-4">
                              <div className="text-sm mb-1">{doc.name}</div>
                              <div className="text-xs text-gray-500">
                                {doc.type} • {doc.size}
                              </div>
                            </div>
                            <Download 
                              className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl mb-6 tracking-tight">QUESTIONS ABOUT OUR CERTIFICATIONS?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We're committed to complete transparency. If you have questions about our quality standards, certifications, or testing procedures, our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:quality@horizonsupplements.com"
                className="px-6 py-3 bg-white text-black text-sm tracking-wide transition-all"
                style={{ backgroundColor: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--miami-cyan)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                CONTACT QUALITY TEAM
              </a>
              <button
                onClick={() => onNavigate('home')}
                className="px-6 py-3 border border-white text-white text-sm tracking-wide transition-all hover:bg-white hover:text-black"
              >
                BACK TO HOME
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
