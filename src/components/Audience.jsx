import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, XCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const perfectFor = [
  {
    title: "Overwhelmed Parents",
    desc: "The best thing you can do to help your kids thrive in a world changing faster than ever isn't managing their screen time. It's teaching them the superpower of changing their minds. Starting with you."
  },
  {
    title: "Ambitious Professionals",
    desc: "Driven and capable, but scattered attention is costing you more than you realize."
  },
  {
    title: "Entrepreneurs & Small Business Owners",
    desc: "Your focus and follow-through are your most valuable assets. Protect them."
  },
  {
    title: "Creative Individuals",
    desc: "Writers, filmmakers, musicians, designers. Your best work requires sustained attention. The attention economy is designed to destroy it."
  },
  {
    title: "Knowledge Workers",
    desc: "You consume more information than ever and retain less than you'd like. Reclaim the cognitive space to do your best thinking."
  },
  {
    title: "Productivity & Self-Improvement Enthusiasts",
    desc: "You're already following the science and the experts. Now you want an approach that actually puts it all to work."
  },
  {
    title: "Students & Lifelong Learners",
    desc: "Your brain is a learning beast. Learning how to work with it is the skill that multiplies all the others - the one skill to rule them all."
  }
];

const notFor = [
  "You're looking for a 7-minute hack that changes your life forever. (We've all tried those. You know how that went.)",
  "You're not ready to examine the mindsets behind your behavior.",
  "You're not ready to take ownership of how you think, act, and choose.",
  "You really want to change… once the current fire you're fighting is over. (Spoiler: there will always be a fire.)"
];

export default function Audience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.audience-reveal',
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
    <section ref={sectionRef} className="section-pad bg-peach" id="audience">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-midnight/10 rounded-[2rem] p-8 md:p-12 shadow-lg shadow-midnight/5">
          
          <div className="audience-reveal text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-lg text-midnight text-3xl md:text-5xl mb-6">
              Is Moonshot Academy Right For You?
            </h2>
            <p className="text-midnight/80 text-lg md:text-xl leading-relaxed mb-4">
              Not everyone is ready — and that's okay. Only you can change your mind. It takes commitment, practice, and a willingness to think differently about how you think.
            </p>
            <p className="text-midnight/80 text-lg md:text-xl leading-relaxed">
              But if you're ready to find out what you're truly capable of, you don't have to do it alone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-8 border-t border-midnight/10">
            {/* Perfect For */}
            <div className="audience-reveal">
              <h3 className="heading-md text-coral text-2xl mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-coral" size={28} />
                Moonshot Academy is perfect for:
              </h3>
              <div className="space-y-6">
                {perfectFor.map((item, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-midnight mb-1">{item.title} —</p>
                    <p className="text-midnight/70 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-12 lg:gap-16">
              {/* Not For */}
              <div className="audience-reveal">
                <h3 className="heading-md text-coral text-2xl mb-8 flex items-center gap-3">
                  <XCircle className="text-coral" size={28} />
                  This is not for you if:
                </h3>
                <ul className="space-y-6">
                  {notFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-midnight/80 text-sm md:text-base leading-relaxed pl-2 border-l-2 border-coral/30">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Start Now CTA */}
          <div className="audience-reveal mt-20 pt-16 border-t border-midnight/10 text-center flex flex-col items-center">
            <h4 className="text-coral tracking-[0.25em] text-sm font-semibold uppercase mb-6">
              Moonshot Academy
            </h4>
            <h2 className="heading-lg text-midnight text-5xl md:text-7xl mb-8 leading-tight max-w-3xl">
              Start now — future you <br className="hidden md:block" />will thank you for it.
            </h2>
            <p className="text-midnight/60 text-lg md:text-xl max-w-2xl text-center leading-relaxed mb-10">
              You've seen the science. You've seen what's possible. You've seen what's at stake. You know what to do next.
            </p>
            <a href="https://forms.gle/4UUTN3Hw3XnpPYXJ7" target="_blank" rel="noopener noreferrer" className="btn-magnetic btn-primary text-lg py-4 px-10 border-none bg-coral text-white rounded-full">
              <span className="btn-bg bg-coral-dark rounded-full" />
              <span className="btn-text">Apply Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
