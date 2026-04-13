import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import leavesTexture from '../assets/dark-green-tropical-leaves.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = sectionRef.current.querySelectorAll('.reveal-line');
      lines.forEach((line, i) => {
        gsap.fromTo(line,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-midnight py-24 md:py-36 lg:py-44">
      {/* Night leaf background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${leavesTexture}')` }}
      />
      <div className="absolute inset-0 bg-midnight/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Full Section Box */}
        <div className="bg-white/[0.06] backdrop-blur-sm border border-peach/10 rounded-[2rem] p-8 md:p-12 shadow-lg text-center space-y-8">
          {/* Hero statement */}
          <div className="reveal-line mb-8">
            <p className="heading-lg text-peach text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
              You are capable of{' '}
              <span className="drama-text text-coral block mt-2" style={{ fontSize: '1.15em' }}>
                far more than you think.
              </span>
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="reveal-line text-peach/80 text-lg md:text-2xl font-body leading-relaxed mb-6">
                But if you don't believe that you can change, you won't.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="reveal-line w-24 h-px bg-coral/40 mx-auto mb-8" />

          {/* Content */}
          <div className="reveal-line max-w-3xl mx-auto space-y-8">
            <p className="text-peach/70 text-base md:text-lg leading-relaxed">
              Moonshot Academy is designed to prove to yourself that you can. One real transformation — something you've struggled with, done the right way — permanently shifts what you believe is possible. The next change becomes easier. Then the next. This is the flywheel.
            </p>

            <p className="heading-md text-peach text-2xl md:text-3xl leading-snug">
              Tiny changes, <span className="drama-text text-coral" style={{ fontSize: '1.15em' }}>enormous impact.</span>
            </p>

            <p className="text-peach/70 text-base md:text-lg leading-relaxed">
              James Clear put it simply: improve 1% every day and you'll be 37 times better in a year. Let that compound over a lifetime and the math becomes staggering.
            </p>

            <p className="text-peach/70 text-base md:text-lg leading-relaxed">
              But the same is true in reverse. Get 1% worse every day and within a year you're operating at 3% of your starting point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
