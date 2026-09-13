'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { societies, Society } from '@/data/societies';

// Simple fuzzy search implementation
function fuzzySearch(query: string, items: Society[]): Society[] {
  if (!query.trim()) return [];
  
  const q = query.toLowerCase();
  return items
    .map((item) => {
      const name = item.name.toLowerCase();
      const area = item.area.toLowerCase();
      
      // Exact match gets highest score
      if (name === q || area === q) return { item, score: 1000 };
      
      // Starts with match
      if (name.startsWith(q) || area.startsWith(q)) return { item, score: 500 };
      
      // Contains match
      if (name.includes(q) || area.includes(q)) return { item, score: 100 };
      
      // Fuzzy match - check if characters match in order
      let score = 0;
      let queryIdx = 0;
      for (let i = 0; i < name.length && queryIdx < q.length; i++) {
        if (name[i] === q[queryIdx]) {
          score += 10;
          queryIdx++;
        }
      }
      
      if (queryIdx === q.length) return { item, score };
      return null;
    })
    .filter((result) => result !== null)
    .sort((a, b) => b!.score - a!.score)
    .map((result) => result!.item)
    .slice(0, 10); // Return top 10 matches
}

export default function SocietiesDirectoryClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userSociety, setUserSociety] = useState<Society | null>(null);
  const [customSocietyName, setCustomSocietyName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<Society | null>(null);
  const [showCoupon, setShowCoupon] = useState(false);
  const [spinCount, setSpinCount] = useState(0); // Track number of spins

  const searchResults = useMemo(() => fuzzySearch(searchQuery, societies), [searchQuery]);

  const handleSelectSociety = (society: Society) => {
    setUserSociety(society);
    setCustomSocietyName('');
    setSearchQuery(society.name);
    setShowDropdown(false);
  };

  // Allow user to enter custom society name (not in list)
  const handleUseCustomSociety = () => {
    if (!searchQuery.trim()) return;
    
    // Create a temporary society object for custom entry
    const customSociety: Society = {
      id: 'custom-' + Date.now(),
      name: searchQuery,
      area: customSocietyName || 'Not in list',
      region: 'Custom',
    };
    
    setUserSociety(customSociety);
    setShowDropdown(false);
    
    // Auto-scroll to spin section after 300ms
    setTimeout(() => {
      const spinSection = document.getElementById('spin-section');
      if (spinSection) {
        spinSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const getCouponCode = (societyName: string) => {
    const code = societyName.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 1000);
    return code;
  };

  const handleSpin = () => {
    if (!userSociety) return;
    
    setIsSpinning(true);
    setShowCoupon(false);
    
    const newSpinCount = spinCount + 1;
    setSpinCount(newSpinCount);
    
    let spins = 0;
    const spinInterval = setInterval(() => {
      const randomSociety = societies[Math.floor(Math.random() * societies.length)];
      setSpinResult(randomSociety);
      spins++;
      
      if (spins > 15) {
        clearInterval(spinInterval);
        
        // On 5th spin, guarantee a match for custom societies
        let finalResult = randomSociety;
        if (newSpinCount === 5 && userSociety.region === 'Custom') {
          // User's custom society gets to "win" on 5th attempt
          finalResult = userSociety;
        }
        
        setSpinResult(finalResult);
        setIsSpinning(false);
        setShowCoupon(true);
        
        // Track GA4 event for spin wheel
        const didWin = finalResult.id === userSociety.id;
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'spin_wheel_spin', {
            'society_name': userSociety.name,
            'spin_count': newSpinCount,
            'result': didWin ? 'win' : 'lose',
            'landed_on': finalResult.name,
            'coupon_code': getCouponCode(userSociety.name),
            'page_title': document.title,
          });
        }
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - Gamification Announcement */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              🎉 Limited Time Offer - Enter to Win!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Spin The Wheel & <br /> Win Amazing Offers! 🎡
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Enter your society name and spin to unlock exclusive discounts or a FREE design consultation worth ₹5,000!
            </p>
            
            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-2xl mb-2">💰</p>
                <p className="font-bold text-base">5% Discount</p>
                <p className="text-sm text-white/80">On all services if you win!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-2xl mb-2">🎁</p>
                <p className="font-bold text-base">Free Consultation</p>
                <p className="text-sm text-white/80">Worth ₹5,000 for participants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-2xl mb-2">⚡</p>
                <p className="font-bold text-base">Instant Results</p>
                <p className="text-sm text-white/80">Get your offer code right away!</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-white/80 pt-4">
              No purchase necessary. Enter your society details, spin once, and claim your offer!
            </p>
          </div>
        </div>
      </section>

      {/* Society Selection Section */}
      <section className="py-8 md:py-12 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              🏠 Find Your Society
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Enter your society name to get started
            </p>
          </div>

          {/* Searchable Dropdown */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Your Society / Area Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Type your society name... (e.g., Kolte-Patil, Luxuria, Hinjewadi)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-secondary focus:outline-none text-base shadow-sm hover:border-gray-400 transition-colors"
              />
              <span className="absolute right-4 top-12 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>

              {/* Dropdown Results */}
              {showDropdown && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <ul className="divide-y">
                      {searchResults.map((society) => (
                        <li key={society.id}>
                          <button
                            onClick={() => handleSelectSociety(society)}
                            className="w-full text-left px-6 py-3 hover:bg-blue-50 transition-colors flex justify-between items-center"
                          >
                            <div>
                              <p className="font-semibold text-gray-900">{society.name}</p>
                              <p className="text-sm text-gray-600">{society.area}</p>
                            </div>
                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                              {society.region}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-6 py-5 space-y-4 bg-gradient-to-b from-amber-50 to-orange-50 border-t-2 border-orange-200">
                      <div>
                        <p className="font-bold text-orange-900 mb-1 text-base">⭐ Not in our list?</p>
                        <p className="text-sm text-gray-700 mb-4">No problem! You can still enter your society name and spin the wheel to win exciting offers.</p>
                      </div>
                      
                      {/* Custom society area input */}
                      <div>
                        <label className="text-xs font-bold text-orange-900 block mb-2">Your Area/Locality (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g., Hadapsar, Koregaon Park, Wakad"
                          value={customSocietyName}
                          onChange={(e) => setCustomSocietyName(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg text-base focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 bg-white font-medium"
                        />
                      </div>
                      
                      {/* Use This Button - LARGE AND PROMINENT */}
                      <button
                        onClick={handleUseCustomSociety}
                        className="w-full px-6 py-4 bg-gradient-to-r from-secondary via-accent to-orange-500 text-white rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 text-base md:text-lg"
                      >
                        ✓ Proceed with "{searchQuery}"
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Selected Society Display */}
            {userSociety && (
              <div className="mt-4 md:mt-6 p-4 md:p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-3 border-green-400 rounded-xl shadow-lg">
                <p className="text-xs font-bold text-green-700 mb-2 uppercase tracking-wide">✓ Selected Society</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-green-900 text-base md:text-lg">{userSociety.name}</p>
                    <p className="text-sm text-gray-700 font-semibold">{userSociety.area} • {userSociety.region}</p>
                  </div>
                  <button
                    onClick={() => {
                      setUserSociety(null);
                      setSearchQuery('');
                      setSpinResult(null);
                      setShowCoupon(false);
                      setSpinCount(0);
                    }}
                    className="text-sm text-gray-600 hover:text-red-600 font-bold hover:underline transition-colors"
                  >
                    ✎ Change
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Spin the Wheel Section */}
      {userSociety && (
        <section id="spin-section" className="py-8 md:py-16 px-4 md:px-8 bg-gradient-to-b from-purple-100 via-pink-50 to-purple-50 border-b-4 border-purple-300 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                🎡 Spin the Wheel!
              </h2>
              <p className="text-gray-700 mb-6 md:mb-8 text-lg md:text-xl">
                Click below to spin and see if <span className="font-bold">{userSociety.name}</span> wins a <span className="font-bold text-secondary">5% discount coupon</span>
              </p>

              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className={`relative inline-block px-8 md:px-12 py-3 md:py-5 rounded-full font-bold text-lg md:text-xl text-white transition-all transform z-10 ${
                  isSpinning
                    ? 'bg-gray-400 cursor-not-allowed animate-pulse'
                    : 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 hover:scale-125 hover:shadow-2xl active:scale-95 cursor-pointer shadow-xl'
                }`}
              >
                {isSpinning ? (
                  <>
                    <span className="inline-block animate-spin mr-2">🎡</span>
                    Spinning...
                  </>
                ) : (
                  <>
                    🎡 SPIN THE WHEEL 🎡
                  </>
                )}
              </button>

              {/* Spin Counter */}
              {spinCount > 0 && !isSpinning && (
                <div className="mt-4 inline-block px-6 py-2 bg-blue-100 text-blue-900 rounded-full font-semibold">
                  Spins: {spinCount}
                </div>
              )}

              {/* Live Spinning - Show Current Society Name */}
              {isSpinning && spinResult && (
                <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-2 border-secondary animate-pulse">
                  <p className="text-gray-600 text-sm font-semibold mb-2">🔄 Scanning societies...</p>
                  <p className="text-3xl font-bold text-secondary mb-2">{spinResult.name}</p>
                  <p className="text-gray-700 text-sm">{spinResult.area} • {spinResult.region}</p>
                </div>
              )}

              {/* Spin Result Display */}
              {spinResult && showCoupon && (
                <div className="mt-4 md:mt-8 p-4 md:p-6 bg-white rounded-xl shadow-lg border-2 border-secondary space-y-4">
                  {spinResult.id === userSociety.id ? (
                    // Winner! - 5% Discount
                    <div>
                      <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl text-white font-bold text-xl mb-4">
                        🎉 JACKPOT! YOU WON! 🎉
                      </div>
                      <p className="text-lg text-gray-700 mb-2">
                        <span className="font-bold text-secondary">{userSociety.name}</span> is the lucky winner!
                      </p>
                      <p className="text-2xl font-bold text-green-600 mb-4">
                        💰 You Get: 5% Discount on All Interior Design Services!
                      </p>
                    </div>
                  ) : (
                    // Didn't win but get FREE design consultation
                    <div>
                      <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl text-white font-bold text-xl mb-4">
                        ✨ OHHH! SO CLOSE! ✨
                      </div>
                      <p className="text-lg text-gray-700 mb-2">
                        The wheel landed on <span className="font-bold text-blue-600">{spinResult.name}</span>
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">
                        🎁 You Get: FREE Design Consultation (Worth ₹5000!)
                      </p>
                      <p className="text-sm text-gray-600">
                        Even though you didn't win the wheel, we're offering you a complimentary consultation with our expert interior designers!
                      </p>
                    </div>
                  )}

                  {/* Coupon Code */}
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Your Exclusive Code:</p>
                    <div className="flex items-center justify-center gap-4">
                      <code className="text-3xl font-bold text-secondary tracking-widest bg-white px-4 py-2 rounded-lg">
                        {getCouponCode(userSociety.name)}
                      </code>
                      <button
                        onClick={() => navigator.clipboard.writeText(getCouponCode(userSociety.name))}
                        className="px-4 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-accent transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-3 font-semibold">
                      {spinResult.id === userSociety.id 
                        ? '💰 Use code for 5% OFF on your entire project'
                        : '🎁 Use code to claim your FREE design consultation'}
                    </p>
                  </div>

                  {/* Book Now Button */}
                  <Link
                    href={`/contact?society=${encodeURIComponent(userSociety.name)}&area=${encodeURIComponent(userSociety.area)}&region=${encodeURIComponent(userSociety.region)}&coupon=${getCouponCode(userSociety.name)}&offer=${spinResult.id === userSociety.id ? '5% Discount' : 'FREE Consultation'}`}
                    className="block w-full text-center mt-6 px-8 py-5 bg-gradient-to-r from-secondary via-accent to-orange-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 shadow-xl"
                  >
                    {spinResult.id === userSociety.id 
                      ? '✨ Claim 5% Discount Now!'
                      : '🎁 Get FREE Consultation Now!'}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Hidden Societies for SEO - Not Displayed to Users */}
      <div className="hidden">
        {societies.map((society) => (
          <div key={society.id} className="sr-only">
            <h3>{society.name}</h3>
            <p>{society.area}</p>
            <p>{society.region}</p>
          </div>
        ))}
      </div>

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
