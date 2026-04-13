import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AttentionEconomy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current.querySelectorAll('.attn-reveal');
      els.forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-peach py-24 md:py-36 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Main content in white card */}
        <div className="bg-white border border-midnight/10 rounded-[2rem] p-8 md:p-12 shadow-lg shadow-midnight/5">
          
          {/* Section Marker */}
          <div className="attn-reveal text-center mb-8">
            <span className="text-xs text-midnight/60 uppercase tracking-[0.2em] font-medium">The Attention Economy</span>
          </div>

          <div className="attn-reveal text-center mb-8">
            <h2 className="heading-lg text-midnight text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight max-w-3xl mx-auto">
              Right now, the single biggest drag on your trajectory are the <span className="drama-text text-coral" style={{ fontSize: '1.35em' }}>apps on your phone</span> — and that's no accident.
            </h2>
            <p className="text-midnight/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If you feel exhausted, scattered, unable to focus or be present, you are not alone. Welcome to the Attention Economy.
            </p>
          </div>

          <div className="attn-reveal space-y-6">
            <p className="text-midnight/80 text-base md:text-lg leading-relaxed">
              An entire industry worth trillions of dollars employs an army of very smart people with an unprecedented view into your conscious and subconscious mind to do one thing: <strong className="text-midnight">monetize as much of your time and attention as possible.</strong>
            </p>
            <p className="text-midnight/80 text-base md:text-lg leading-relaxed">
              They have every incentive to keep you uninformed. A person who understands how their attention is being captured is a person who can resist it. That's bad for business.
            </p>

            <div className="text-midnight/80 text-base md:text-lg leading-relaxed pt-4">
              <p className="mb-4">
                Their most powerful tools? <strong className="text-coral">Fear. Anxiety. Outrage. FOMO.</strong>
              </p>
              <blockquote className="border-l-2 border-coral/40 pl-6 my-6 bg-midnight/[0.02] p-4 rounded-r-xl">
                <p className="drama-text text-midnight/90 text-xl md:text-2xl leading-snug mb-2">
                  "When you optimize for engagement, you optimize for outrage."
                </p>
                <footer className="text-midnight/50 text-xs tracking-wide">— Jaron Lanier</footer>
              </blockquote>
              <p className="mb-4">
                And not just while you're on your phone. These powerful emotions push your mind back toward your phone.
              </p>
              <p>
                Flow states, deep focus, presence — these are their enemies. A calm, focused mind is not a profitable mind.
              </p>
            </div>
          </div>

          <div className="attn-reveal mt-12 pt-8 border-t border-midnight/10 text-center">
            <p className="heading-md text-midnight text-xl md:text-2xl mb-2">
              They are getting their 1% every day.
            </p>
            <p className="heading-md text-coral text-2xl md:text-3xl">
              You can't afford to keep giving it to them.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
