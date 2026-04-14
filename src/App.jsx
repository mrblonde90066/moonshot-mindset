import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import Features from './components/Features';
import AttentionEconomy from './components/AttentionEconomy';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Science from './components/Science';
import Academy from './components/Academy';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

export default function App() {
  const path = window.location.pathname;

  if (path === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (path === '/terms-of-use') {
    return <TermsOfUse />;
  }

  // Home Page
  return (
    <div className="relative">
      <Navbar />
      
      {/* The Opening Shot */}
      <Hero />

      {/* First Testimonial — white marble */}
      <Testimonial
        variant="warm-marble"
        quote="Moonshot didn't just help me change one habit — it taught me how to change habits. That skill now shows up everywhere in my life. I wish I'd learned this in my 20s."
        author="Brian H."
        role="Author"
      />

      {/* The Moonshot Method Intro (previously Features) */}
      <Features />

      {/* About David Armstrong */}
      <About />

      {/* The Philosophy - You are capable */}
      <Philosophy />

      {/* The Attention Economy Problem */}
      <AttentionEconomy />

      {/* The Protocol — Reclaim, Rewire, Compound */}
      <Protocol />

      {/* Second Testimonial — dark midnight + leaves (ideal placement between white sections) */}
      <Testimonial
        variant="B"
        quote="When trying to kick my phone addiction, Moonshot Academy helped me get unstuck. And in doing so taught me how to rewire mindset, habits, and decision-making at a systems level. My friends now see my phone discipline as a superhuman strength. Moonshot was an OS upgrade for my mind."
        author="David M."
        role="Tech Industry Veteran & Moonshot Foundation Board Member"
      />

      {/* Grounded in Science */}
      <Science />

      {/* Inside Moonshot Academy */}
      <Academy />

      {/* Third Testimonial — white marble */}
      <Testimonial
        variant="warm-marble"
        quote="I came in wanting to fix my entire relationship with Instagram. Instead I focused on one thing: late-night scrolling. Working through my values made it clear why it didn't fit — it was crowding out the creativity and quiet I actually need. I replaced the late-night scrolling with reading and journaling — something I'd wanted to do for years but never actually did. My daytime Instagram use shifted too, without even trying. I didn't realize how much I'd lost until I had it back. Now I'm using the same approach to walk a marathon."
        author="Theresa W."
        role="Social Worker, Cape Town"
      />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

