import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import leavesTexture from '../assets/dark-green-tropical-leaves.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-element',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-midnight">
      {/* Night leaf background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${leavesTexture}')` }}
      />
      <div className="absolute inset-0 bg-midnight/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center text-peach">
        <div className="cta-element bg-white/[0.06] backdrop-blur-sm border border-peach/10 rounded-[2rem] p-8 md:p-12 mb-12 mx-auto">
          <h2 className="heading-lg text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight">
            Get better at <br className="md:hidden" /><span className="drama-text text-coral" style={{ fontSize: '1.15em' }}>getting better.</span>
          </h2>
          
          <div className="space-y-4 text-peach/80 text-lg md:text-xl mb-12">
            <p>You've seen the science. You've seen what's possible. You've seen what's at stake.</p>
            <p>You know what to do next.</p>
            <p className="pt-4 font-semibold text-peach text-lg md:text-xl">
              Space isn't the final frontier. Our minds are.
            </p>
            <p className="pt-2 text-coral text-2xl md:text-3xl drama-text">
              What's your Moonshot?
            </p>
          </div>

          <div className="mb-6 flex flex-col items-center">
            <a href="https://forms.gle/4UUTN3Hw3XnpPYXJ7" target="_blank" rel="noopener noreferrer" className="btn-magnetic btn-primary text-lg py-4 px-10 border border-coral">
              <span className="btn-bg bg-coral-dark rounded-full" />
              <span className="btn-text">
                Launch Your Moonshot
                <ArrowRight size={20} />
              </span>
            </a>
          </div>
        </div>
        
        <p className="cta-element text-peach/50 text-sm mb-12 max-w-md mx-auto relative z-10">
          Moonshot Academy is a free program of the <a href="https://www.themoonshotfoundation.org" target="_blank" rel="noopener noreferrer" className="text-coral hover:text-coral-light hover:underline transition-colors">Moonshot Foundation</a>.
        </p>
      </div>
    </section>
  );
}
