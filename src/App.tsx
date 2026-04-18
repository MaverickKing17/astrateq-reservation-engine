/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import SafetyLayer from './components/SafetyLayer';
import Roadmap from './components/Roadmap';
import CanadianEngineering from './components/CanadianEngineering';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-cyan selection:text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <SafetyLayer />
        <Roadmap />
        <CanadianEngineering />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

