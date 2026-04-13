import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lightTexture from '../assets/light_texture.png';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial({ quote, author, role, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={`relative section-pad overflow-hidden ${className}`}>
      {/* Elegant textured background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${lightTexture}')` }}
      />
      {/* Peach tint overlay */}
      <div className="absolute inset-0 bg-peach/75" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-0">
        {/* Solid White Card */}
        <div className="bg-white border border-midnight/5 rounded-[2rem] p-10 md:p-16 shadow-lg relative">
          <blockquote className="drama-text text-midnight text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug mb-8 pt-4">
            "{quote}"
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading font-semibold text-midnight text-sm">— {author}</span>
            <span className="text-xs text-midnight/50 tracking-wide">{role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
