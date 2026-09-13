'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { societies, regions, searchSocieties } from '@/data/societies';

const COLORS = [
  'bg-red-100',
  'bg-blue-100',
  'bg-green-100',
  'bg-yellow-100',
  'bg-purple-100',
  'bg-pink-100',
  'bg-indigo-100',
  'bg-cyan-100',
  'bg-orange-100',
  'bg-lime-100',
  'bg-rose-100',
  'bg-sky-100',
];

const TEXT_COLORS = [
  'text-red-700',
  'text-blue-700',
  'text-green-700',
  'text-yellow-700',
  'text-purple-700',
  'text-pink-700',
  'text-indigo-700',
  'text-cyan-700',
  'text-orange-700',
  'text-lime-700',
  'text-rose-700',
  'text-sky-700',
];

export default function SocietiesDirectoryClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSociety, setSelectedSociety] = useState<string | null>(null);
  const [showCoupon, setShowCoupon] = useState(false);

  const filteredSocieties = useMemo(() => {
    let results = societies;

    if (searchQuery.trim()) {
      results = searchSocieties(searchQuery);
    }

    if (selectedRegion) {
      results = results.filter(s => s.region === selectedRegion);
    }

    return results;
  }, [searchQuery, selectedRegion]);

  const totalSocieties = societies.length;

  const handleSpin = () => {
    if (filteredSocieties.length === 0) return;
    
    setIsSpinning(true);
    setShowCoupon(false);
    
    // Simulate wheel spin with multiple rotations
    let spins = 0;
    const spinInterval = setInterval(() => {
      const randomSociety = filteredSocieties[Math.floor(Math.random() * filteredSocieties.length)];
      setSelectedSociety(randomSociety.name);
      spins++;
      
      if (spins > 15) {
        clearInterval(spinInterval);
        setIsSpinning(false);
        setShowCoupon(true);
      }
    }, 100);
  };

  const getCouponCode = (societyName: string) => {
    const code = societyName.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 1000);
    return code;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary via-accent to-secondary text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              🎡 Find Your Society & Win a Discount!
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto font-light">
              Browse our <span className="font-bold">{totalSocieties}+ societies</span> across Pune, spin the wheel, and get <span className="font-bold text-yellow-300">5% discount</span> when you book with us!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">{totalSocieties}+</div>
              <p className="text-lg opacity-90">Societies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Projects Done</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">5%</div>
              <p className="text-lg opacity-90">Instant Discount</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spin the Wheel Section */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              🎯 Spin the Wheel!
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Click below to spin and see if your society wins a <span className="font-bold text-secondary">5% discount coupon</span>
            </p>

            <button
              onClick={handleSpin}
              disabled={isSpinning || filteredSocieties.length === 0}
              className={`relative inline-block px-10 py-4 rounded-full font-bold text-lg text-white transition-all transform ${
                isSpinning
                  ? 'bg-gray-400 cursor-not-allowed animate-pulse'
                  : filteredSocieties.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:scale-110 hover:shadow-2xl active:scale-95 cursor-pointer'
              }`}
            >
              {isSpinning ? (
                <>
                  <span className="inline-block animate-spin mr-2">🎡</span>
                  Spinning...
                </>
              ) : (
                <>
                  🎡 SPIN THE WHEEL
                </>
              )}
            </button>

            {/* Selected Society Display */}
            {selectedSociety && (
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-2 border-secondary">
                <p className="text-gray-600 text-sm mb-2">Currently Selected:</p>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  {selectedSociety}
                </h3>
                
                {showCoupon && (
                  <div className="space-y-4">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl text-white font-bold text-xl">
                      🎉 CONGRATS! YOU WON 5% OFF! 🎉
                    </div>
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Your Coupon Code:</p>
                      <div className="flex items-center justify-center gap-4">
                        <code className="text-2xl font-bold text-secondary tracking-widest">
                          {getCouponCode(selectedSociety)}
                        </code>
                        <button
                          onClick={() => navigator.clipboard.writeText(getCouponCode(selectedSociety))}
                          className="px-4 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-accent transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 mt-3">
                        Use this code when booking your interior design consultation
                      </p>
                    </div>
                    <Link
                      href={`/contact?society=${encodeURIComponent(selectedSociety)}&coupon=${getCouponCode(selectedSociety)}`}
                      className="inline-block mt-4 px-8 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-accent transition-colors"
                    >
                      Book Now with Discount
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for your society... (e.g., Kolte-Patil, Hadapsar, Wakad)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedRegion(null);
                  setSelectedSociety(null);
                  setShowCoupon(false);
                }}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-secondary focus:outline-none text-base shadow-sm hover:border-gray-400 transition-colors"
              />
              <span className="absolute right-4 top-4 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Region Filter */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-4">Filter by Region</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSelectedRegion(null);
                  setSearchQuery('');
                  setSelectedSociety(null);
                  setShowCoupon(false);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedRegion === null
                    ? 'bg-secondary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                All Regions
              </button>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => {
                    setSelectedRegion(selectedRegion === region ? null : region);
                    setSearchQuery('');
                    setSelectedSociety(null);
                    setShowCoupon(false);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    selectedRegion === region
                      ? 'bg-secondary text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-8 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredSocieties.length}</span> of {totalSocieties} societies
          </div>
        </div>
      </section>

      {/* Societies Grid - Cube Style */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            All Available Societies
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredSocieties.map((society, index) => {
              const colorIndex = index % COLORS.length;
              const bgColor = COLORS[colorIndex];
              const textColor = TEXT_COLORS[colorIndex];

              return (
                <div
                  key={society.id}
                  onClick={() => setSelectedSociety(society.name)}
                  className={`
                    ${bgColor} ${textColor}
                    p-4 md:p-6
                    rounded-xl
                    font-bold text-center
                    cursor-pointer
                    transition-all transform
                    hover:scale-110 hover:shadow-2xl
                    active:scale-95
                    flex items-center justify-center
                    min-h-24 md:min-h-28
                    border-2 border-current
                    hover:border-secondary
                    relative
                    overflow-hidden
                  `}
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Cube effect */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 30%, currentColor 30%, currentColor 70%, transparent 70%),
                        linear-gradient(-45deg, transparent 30%, currentColor 30%, currentColor 70%, transparent 70%)
                      `,
                      backgroundSize: '40px 40px',
                      backgroundPosition: '0 0, 20px 20px',
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center px-2">
                    <p className="text-xs md:text-sm font-semibold mb-1 line-clamp-1">
                      {society.area}
                    </p>
                    <p className="text-sm md:text-base font-bold line-clamp-2">
                      {society.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredSocieties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-600 mb-4">
                No societies found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion(null);
                }}
                className="text-secondary font-bold hover:underline text-sm"
              >
                View all societies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Sarvmaan?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Award Winning', desc: 'Recognized excellence in interior design' },
              { icon: '⚡', title: 'On-Time Delivery', desc: 'Projects completed on promised timeline' },
              { icon: '💰', title: 'Best Pricing', desc: 'Transparent costs without hidden charges' },
              { icon: '👥', title: 'Dedicated Support', desc: 'Personal project manager for your home' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-secondary via-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-95 font-light max-w-2xl mx-auto">
            Get started today with a free consultation from our expert interior designers
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
