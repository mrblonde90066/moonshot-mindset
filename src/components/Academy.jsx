import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import leavesTexture from '../assets/dark-green-tropical-leaves.jpg';

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    week: 'Weeks 1 & 2',
    title: 'The Map',
    points: [
      "You learn just enough about how your brain works to make everything that follows feel obvious.",
      "You see exactly how the attention economy captures your attention — and watch that knowledge begin to defuse it in real time.",
      "You learn the Moonshot Method: a simple blueprint for changing any behavior."
    ]
  },
  {
    week: 'Week 3',
    title: 'The Transformation Begins',
    points: [
      "You design your own transformation plan — built around your brain, your triggers, your values.",
      "Then you launch it."
    ]
  },
  {
    week: 'Weeks 4 & 5',
    title: 'The Doldrums',
    points: [
      "This is where most attempts collapse. We plan for it in advance.",
      "You'll know what to expect, how to stay in the game, and why this phase is actually the proof that it's working."
    ]
  },
  {
    week: 'Week 6',
    title: 'The Real Adventure Begins',
    points: [
      "You learn how to make this permanent — and how to run your next transformation using the same blueprint.",
      "You've made real change on something you've struggled with before. You know what that feels like. You know you can do it again. You see that you can change and you can never unsee it.",
      "That's not just a win. That's a new way of being."
    ]
  }
];

export default function Academy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.academy-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section ref={sectionRef} className="relative section-pad bg-midnight text-peach overflow-hidden" id="academy">
      {/* Night leaf background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${leavesTexture}')` }}
      />
      <div className="absolute inset-0 bg-midnight/70" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Timeline in a subtle elevated card for dark sections */}
        <div className="bg-white/[0.06] backdrop-blur-sm border border-peach/10 rounded-[2rem] p-8 md:p-12">
          <div className="academy-reveal mb-16 text-center">
            <h2 className="heading-lg text-3xl md:text-5xl mb-6">Inside Moonshot Academy</h2>
            <div className="space-y-4 text-peach/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-left">
              <p>
                You come in with one behavior you've been struggling to change - doomscrolling social media, compulsively reading the news…
              </p>
              <p>
                We start with a digital habit because most people are losing hours every day to their phone — time and attention that'll fuel your new trajectory.
              </p>
              <p className="font-semibold text-peach border-l-2 border-coral pl-4 my-6">
                One hour per week with David and your cohort on Zoom. One hour of practice on your own. Six weeks. That's the commitment.
              </p>
            </div>
          </div>
          
          <div className="relative border-l border-peach/20 pl-6 md:pl-10 ml-2 md:ml-4 space-y-12 md:space-y-16 mt-12">
            {timelineSteps.map((step) => (
              <div key={step.week} className="academy-reveal relative">
                {/* Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-coral border-4 border-midnight" />
                
                <div className="mb-2">
                  <span className="text-coral text-sm md:text-base uppercase tracking-[0.15em] block mb-1 font-medium">{step.week}</span>
                  <h3 className="heading-md text-xl md:text-2xl text-peach">{step.title}</h3>
                </div>
                
                <div className="space-y-3 mt-4">
                  {step.points.map((point, idx) => (
                    <p key={idx} className="text-peach/70 text-base md:text-lg leading-relaxed">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
