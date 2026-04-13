import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sciencePoints = [
  {
    num: '01',
    title: "Your brain is constantly rewiring. The question is who's in charge.",
    desc: "Neuroplasticity never stops. Every thought and behavior you practice strengthens a neural pathway. Right now your brain is rewiring around whatever you repeatedly do — deliberately or not."
  },
  {
    num: '02',
    title: "To change what you do, change how you think.",
    desc: "Only 10% of an iceberg sits above water. Behavior works the same way — it's driven by the 90% underneath. Target only the behavior and nothing changes. Change the mindset and the behavior follows."
  },
  {
    num: '03',
    title: "Your values are rocket fuel.",
    desc: "Good habits are simply actions aligned with your core values. When behavior is anchored to values instead of rules, motivation becomes intrinsic and self-reinforcing. No willpower required."
  },
  {
    num: '04',
    title: "You've got to fry your biggest fish.",
    desc: "You've only got so much capacity. Pick one improvement at a time. Then identify the fewest, highest-leverage interventions, to make it stick. Move on to the next one. No need to worry about all the things you 'should' do - you know you'll get to them."
  },
  {
    num: '05',
    title: "Science gets you started, story makes it stick.",
    desc: "Logic and frameworks alone won't rewire your brain. Lasting change requires engaging the whole brain — imagery, emotion, story, and meaning. Most programs never get here. Moonshot is built around it."
  }
];

export default function Science() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.science-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
    <section ref={sectionRef} className="section-pad bg-white" id="science">
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        {/* Minimal container without heavy shadows */}
        <div className="overflow-hidden pt-8 md:pt-12">
          
          <h2 className="heading-lg text-midnight text-3xl md:text-5xl mb-4 px-6 md:px-12">
            Grounded in science.
            <br className="hidden md:block"/>
            <span className="drama-text text-coral" style={{ fontSize: '1.15em' }}> Built for real life.</span>
          </h2>
          <div className="h-px w-full bg-midnight/10 mb-6 mt-8" />

          {sciencePoints.map((point, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={point.num} 
                className={`science-item border-b border-midnight/10 last:border-b-0 transition-colors duration-300 ${isOpen ? 'bg-white' : 'hover:bg-midnight/[0.02]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full text-left py-5 px-6 md:px-12 flex items-start gap-4 md:gap-6 focus:outline-none group"
                >
                  <span className="text-coral text-sm md:text-base mt-1 shrink-0 font-medium tracking-wide">{point.num}</span>
                  <p className={`flex-1 heading-md text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-midnight' : 'text-midnight/70 group-hover:text-midnight'}`}>
                    {point.title}
                  </p>
                  <span className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180 text-coral' : 'text-midnight/40'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pl-12 md:pl-24 pr-6 md:pr-12 ${
                    isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-midnight/80 text-base md:text-lg leading-relaxed pt-2 max-w-2xl">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
