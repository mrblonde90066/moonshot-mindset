import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'Reclaim',
    description: "Take back your attention. Understand exactly how it's being captured — and watch it lose its grip.",
  },
  {
    number: '2',
    title: 'Rewire',
    description: 'Build new mindsets and habits aligned with what actually matters to you. The right tools combined the right way.',
  },
  {
    number: '3',
    title: 'Compound',
    description: 'Watch small changes multiply across every area of your life. Each transformation makes the next one easier. This is the Moonshot.',
  },
];

export default function Protocol() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-pad" id="protocol">
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        <div className="pt-8 md:pt-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Section Header - Left Side (Sticky) */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start">
            <h2 className="heading-lg text-midnight text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Here's how we <br className="hidden lg:block" />
              <span className="drama-text text-coral" style={{ fontSize: '1.15em' }}>change that.</span>
            </h2>
          </div>

          {/* Protocol Steps - Right Side (Vertical Stack) */}
          <div className="w-full lg:w-7/12 flex flex-col lg:pt-20">
            {steps.map((step, i) => (
              <div key={step.number}>
                {i > 0 && (
                  <div className="border-t border-midnight/10 my-16 lg:my-24" />
                )}
                <div
                  ref={el => cardsRef.current[i] = el}
                  className="flex flex-col md:flex-row items-start gap-6 md:gap-10"
                >
                  <div className="shrink-0">
                    <span className="drama-text text-coral text-7xl md:text-8xl leading-none block md:mt-[-0.2em]">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="heading-lg text-midnight text-2xl md:text-3xl mb-3">{step.title}</h3>
                    <p className="text-midnight/70 text-base md:text-lg leading-relaxed max-w-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
