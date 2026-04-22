import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

import heroImage from '../assets/Joshua Tree Supermoon.jpg';

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-line-1',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3 }
      )
      .fromTo('.hero-line-2',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4 },
        '-=0.7'
      )
      .fromTo('.hero-sub',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.6'
      )
      .fromTo('.hero-details',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '700px' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      />

      {/* Uniform Blue Tint Filter */}
      <div className="absolute inset-0 bg-midnight/30" />

      {/* Content — pushed to bottom-left */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 md:pb-20 lg:pb-24 max-w-6xl"
      >
        {/* Details Line Top */}
        <p 
          className="hero-details text-peach/90 text-xs md:text-sm mb-4 uppercase tracking-[0.2em] font-medium"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          Moonshot Academy
        </p>

        {/* Hero Typography */}
        <div className="mb-6">
          <h1>
            <span className="hero-line-1 block heading-xl text-peach text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl mb-2 md:mb-3">
              Get Better at
            </span>
            <span className="hero-line-2 block drama-text text-coral text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.85] mt-2">
              Getting Better.
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="hero-sub text-peach/90 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10">
          Change the trajectory of your life by training your brain to crave progress instead of distraction.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-5">
          <a href="https://forms.gle/4UUTN3Hw3XnpPYXJ7" target="_blank" rel="noopener noreferrer" className="hero-cta btn-magnetic btn-primary text-base md:text-lg py-3 px-8">
            <span className="btn-bg bg-coral-dark rounded-full" />
            <span className="btn-text">
              Launch Your Moonshot
              <ArrowRight size={18} />
            </span>
          </a>
        </div>

        {/* Details Line Bottom */}
        <p 
          className="hero-details text-peach/90 text-xs md:text-sm uppercase tracking-[0.2em] font-medium"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          Two hours a week · Six weeks · Completely free
        </p>
      </div>

      {/* Removed bottom fade for sharp cinematic cut */}
    </section>
  );
}
