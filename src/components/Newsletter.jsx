import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import earthriseBg from '../assets/Earthrise better.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef(null);
  const kitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.news-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    if (kitRef.current && !kitRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://moonshotmindset.kit.com/f1a1d317e2/index.js';
      script.setAttribute('data-uid', 'f1a1d317e2');
      script.async = true;
      kitRef.current.appendChild(script);
    }

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="newsletter" className="relative min-h-[50vh] md:min-h-[80vh] pt-20 md:pt-32 overflow-hidden bg-midnight flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${earthriseBg}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-midnight/75" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 text-center">
        <div className="news-reveal mx-auto" style={{ maxWidth: '450px' }}>
          <h3 className="heading-md text-peach text-2xl md:text-3xl mb-4">
            The world moves fast. Moonshot is here to help.
          </h3>
          <p className="text-peach/70 text-base leading-relaxed mb-8">
            Subscribe to the Moonshot newsletter for the latest transformation insights, stories demonstrating what you're truly capable of, and exclusive resources.
          </p>
          <div ref={kitRef} />
          <p className="text-peach/40 text-xs mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>

      {/* Spacer to let the earthrise image breathe below */}
      <div className="flex-1" />
    </section>
  );
}
