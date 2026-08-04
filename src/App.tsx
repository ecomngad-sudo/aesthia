import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Trust } from '@/components/sections/Trust';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { WhyAesthia } from '@/components/sections/WhyAesthia';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';

import Book from './pages/Book';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500"
      />

      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Trust />
                <Problem />
                <Solution />
                <WhyAesthia />
                <CaseStudies />
                <Process />
                <Testimonials />
                <Faq />
                <FinalCta />
              </>
            }
          />

          <Route path="/book" element={<Book />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}