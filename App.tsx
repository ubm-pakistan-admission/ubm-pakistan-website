/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Founder } from './components/Founder';
import { LearningProcess } from './components/LearningProcess';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090e0c] text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Interactive Green Particle Universe */}
        <Hero />

        {/* 2. About UBM Pakistan */}
        <About />

        {/* 3. Professional Course Catalogue (10 courses) */}
        <Courses />

        {/* 4. Digital Services (10 agency services) */}
        <Services />

        {/* 5. Why Choose UBM Pakistan (6 pillars) */}
        <WhyChooseUs />

        {/* 6. Founder Profile — Usman Iftikhar */}
        <Founder />

        {/* 7. Learning Process / 4-Step Roadmap */}
        <LearningProcess />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Contact & Enquiry Form */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Quick 1-tap WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
