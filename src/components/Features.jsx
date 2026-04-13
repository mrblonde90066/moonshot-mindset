import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-reveal',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 lg:py-40 bg-white" id="method">
      <div className="max-w-4xl mx-auto px-6 md:px-0 text-center">
        {/* Crisp text flow without bounded card */}
        <div className="feature-reveal pt-8 md:pt-14">
          <h2 className="heading-lg text-midnight text-3xl md:text-5xl lg:text-6xl mb-8">
            The Moonshot Method
          </h2>
          
          <div className="w-16 h-1 bg-coral mx-auto mb-8 rounded-full" />
          
          <p className="text-midnight/90 text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 font-medium">
            The Moonshot Method is a simple, personalized approach for changing any behavior - starting with taking back control from your phone.
          </p>

          <p className="text-midnight/70 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
            Decades of behavioral science and hundreds of real-world transformation programs distilled into a clear, repeatable blueprint for change - so every bit of your effort fuels progress instead of frustration.
          </p>

          <div className="pt-8 border-t border-midnight/10">
            <p className="text-midnight text-lg md:text-xl font-medium">
              Available completely free through the{' '}
              <a href="https://www.themoonshotfoundation.org" target="_blank" rel="noopener noreferrer" className="text-coral hover:text-coral-dark hover:underline transition-colors block md:inline mt-2 md:mt-0">
                Moonshot Foundation.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
