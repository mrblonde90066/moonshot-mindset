import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import davidHeadshot from '../assets/David Headshot 1 main page intro.jpg';
import carlJungPic from '../assets/Carl Jung copy.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current.querySelectorAll('.about-reveal');
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
    <section ref={sectionRef} className="section-pad bg-white" id="about">
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        {/* Removed white card, text breathes directly on peach */}
        <div className="text-midnight/80 text-base md:text-lg leading-relaxed space-y-12">
          
          <div className="about-reveal flex flex-col md:flex-row gap-8 items-end">
            <div className="w-full md:w-1/3">
              <img src={davidHeadshot} alt="David Armstrong" className="rounded-2xl shadow-xl w-full object-cover aspect-square" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="heading-lg text-midnight text-3xl md:text-4xl lg:text-5xl mb-4">
                Hi, I'm <span className="drama-text text-coral" style={{ fontSize: '1.15em' }}>David Armstrong.</span>
              </h2>
              <p className="text-midnight/80 text-lg md:text-xl leading-relaxed">
                I'm the former Head of Global Operations for McKinsey & Company's Transformation Practice and the creator of Moonshot.
              </p>
            </div>
          </div>

          <div className="about-reveal space-y-6">
            <p>
              For over 20 years, I have designed and led multi-million dollar behavior change programs for some of the most demanding organizations in the world — mostly in healthcare, where the stakes are life and death.
            </p>
            <p>
              Healthcare workers are of course always working hard to improve. Intelligent and capable, they know more than most about human behavior and the underlying science.
            </p>
            <p className="font-semibold text-midnight">
              Yet well over 90% of my clients were repeat customers. Why? Because time and time again these programs work - much, much better than a smart, informed person doing their best.
            </p>
            <p>
              I'll be honest: before I started this work, I didn't get it.
            </p>
            <p>
              I've always been a peak performance nerd. I read all the books, listened to the podcasts, and watched the TED talks. If I wanted to stop scrolling I'd turn off notifications and use an app blocker. I thought I was pretty good at this stuff.
            </p>
          </div>

          <div className="about-reveal border-l-4 border-coral pl-6 py-2 my-8">
            <p className="drama-text text-midnight text-2xl md:text-3xl leading-snug">
              Then I saw real transformation science at work — and realized how wrong I was.
            </p>
          </div>

          <div className="about-reveal space-y-6">
            <p>
              From my new perspective I could see two things clearly: how much my amateur approach had been leaving on the table, and the almost absurd potential of getting better at getting better.
            </p>
            <p>
              There was nothing wrong with my tools, but I didn't know how to combine them. Like trying to start a fire by putting a match to some random wood I found versus mindfully stacked paper, kindling, and logs. One catches, the other doesn't.
            </p>
            <p className="font-semibold text-midnight">
              But even that wasn't the biggest gap. I'd completely missed the most important part — my mindset. The thoughts, mostly subconscious, forming the lens through which I perceive the world and the real drivers of my actions.
            </p>
          </div>

          <div className="about-reveal flex flex-col sm:flex-row gap-8 items-start py-4">
            <img src={carlJungPic} alt="Carl Jung" className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover grayscale opacity-65 flex-shrink-0" />
            <blockquote className="flex-1 border-l-2 border-coral/40 pl-6">
              <p className="drama-text text-xl sm:text-2xl text-midnight/90 leading-snug">
                "Until you make the unconscious conscious, it will direct your life, and you will call it fate."
              </p>
              <footer className="mono-text mt-3 block text-sm text-midnight/50">— Carl Jung</footer>
            </blockquote>
          </div>

          <div className="about-reveal space-y-6">
            <p>
              Trying to create long term change by focusing only on behavior is like trying to change the direction of an iceberg by focusing only on the part above the water. 90% of my effort was focused on 10% of what mattered.
            </p>
            <p>
              The good news is that when you change the underlying mindset, the behavior follows — and often so do others you weren't even focused on.
            </p>
            <p>
              I started applying all of it in my own life - my health, finances, relationships, anything. And what I found was that my brain was far more adaptable than I had ever assumed — and that I had far more agency over how it rewired. And like any skill, the more I practiced it, the more natural it became.
            </p>
          </div>

          <div className="about-reveal space-y-6">
            <p className="font-semibold text-midnight">
              Then, four years ago, my wife Frances suffered a sudden and catastrophic brain injury that changed our family's life permanently.
            </p>
            <p>
              Rebuilding while caring for our two young daughters was the most daunting challenge I've ever faced. But I had to. Thank God I knew where to start.
            </p>
            <p>
              Those years of deep work — rebuilding from the hardest possible starting point — transformed the approach in ways no client work ever could.
            </p>
          </div>

          <div className="about-reveal mt-8 pt-8 border-t border-midnight/10">
            <h3 className="heading-md text-midnight text-2xl md:text-3xl mb-4">
              What emerged is the <span className="drama-text text-coral" style={{ fontSize: '1.15em' }}>Moonshot Method</span>
            </h3>
            <p className="text-midnight/70 mb-6 max-w-2xl">
              The most effective and efficient way to Change Your Mind that I've ever seen.
            </p>
            <p className="text-midnight/80 leading-relaxed mb-6 max-w-3xl">
              I capitalize 'Change Your Mind' because it's a real life superpower. This skill is the single most important thing I'm teaching my daughters - especially in a world that is changing faster than ever.
            </p>
            <p className="text-midnight/80 leading-relaxed max-w-3xl border-t border-midnight/10 pt-6">
              To create and implement this for a large company would cost them millions of dollars.
            </p>
          </div>

          <div className="about-reveal pt-6">
            <p className="text-xl md:text-2xl font-bold text-midnight max-w-3xl leading-relaxed">
              Now I'm on a mission to share this with as many people as possible for free - starting with you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
