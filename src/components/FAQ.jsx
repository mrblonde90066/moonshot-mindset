import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'Why is Moonshot Academy free?',
    a: `**Because this work matters too much to sit behind a paywall.**

The tools to reclaim your attention and rewire your habits have largely been available only to those who could afford elite coaching or corporate transformation programs. That's not okay.

Moonshot Academy is funded by the Moonshot Foundation — a 501(c)3 nonprofit (EIN: 39-4484308) created to make modern transformation science available to everyone.

**But this is bigger than one habit — or even one program.**

Every human being is operating the most powerful supercomputer in the known universe. But our default programming was designed for a different world — one of scarce resources, physical danger, and slow change. That world no longer exists. The world we live in now is changing faster than our default programming can keep up with. And it’s only accelerating. The most important skill humanity can develop right now is the ability to deliberately rewire — to update our thinking as fast as the world is changing.

That’s what Moonshot Academy teaches. And that’s why it has to be free.

This is also just the beginning. What you’re getting today is the best version of this work that exists right now — but not the final version. Think of Moonshot Academy as open source. The more people who engage with it, contribute to it, and help improve it, the better it gets for everyone. A for-profit model would calcify it. A nonprofit model sets it free.

**Want to help?**

Our mission is simple: Build a better future by helping millions of people unlock the full potential of their minds — for free. Your tax-deductible donation is how we get there.

But that’s not the only way to contribute. 

We each have a few superpowers. Together we have them all. 

Whatever yours is — neuroscience, design, filmmaking, teaching, reach, or something we haven’t thought of — if you believe this matters, we want to hear from you.

This work is for humanity. We can’t do it alone. 

Share it. Collaborate. Partner with us. Because we’re better together.`,
  },
  {
    q: "I’m already a fan of Huberman, Carol Dweck, Atomic Habits, or Brené Brown. Is this for me?",
    a: `Especially for you.

If you finish a Huberman podcast with 17 things you want to change but no idea where to start — this is for you.

If you love Atomic Habits, but your habits still aren’t sticking — this is for you.

If Carol Dweck convinced you that mindset matters but didn’t tell you how to actually change yours — this is for you.

If Brené Brown made you realize that the “soft” stuff might even be the most important stuff — you may have found your people.

Moonshot Academy is where the science you already believe becomes the life you actually live.`,
  },
  {
    q: 'What makes this different from habit apps and self-help programs?',
    a: `Most habit tools focus on what to do. Most self-help programs tell you what to think. Neither addresses the underlying mindset driving the behavior in the first place.

Moonshot Academy starts at the root. You identify the unconscious belief driving your habit, update it deliberately, and watch the behavior follow. Instead of stacking more rules on top of an unchanged system, you change the system itself.

Also — and this matters — you learn a blueprint, but use it to design your own program. A personalized plan built around your brain, your triggers, and your values. The blueprint is built to leverage how our brains are similar, but your plan leverages how you are completely unique. 

(And yes, it’s free. Which most of those other programs are not.)`,
  },
  {
    q: 'Do I need to be trying to quit my phone or social media?',
    a: `No — but it’s a great place to start.

Digital habits are the most measurable, most universal entry point. Most people are losing hours every day to their phone without meaning to. Reclaiming that time and attention creates the space for everything else.

But the Moonshot Method works for any behavior: focus, health, relationships, finances, creativity, productivity. If you feel stuck or inconsistent in any area of your life, the framework applies.`,
  },
  {
    q: 'Will this work for me?',
    a: `Honestly — we don’t know. And anyone who promises otherwise is selling you something.

Moonshot Academy doesn’t guarantee outcomes. It teaches skills. If you engage honestly, focus on one behavior at a time, and apply what you learn, change becomes far more likely. But no one can do the work for you.

What we can tell you is this: the science is solid, the framework is proven, and the only thing standing between you and a different trajectory is the decision to start.`,
  },
  {
    q: 'Does it really only take two hours per week?',
    a: `One hour per week with David and your cohort on Zoom. About one hour of practice on your own. Six weeks. That’s the commitment.

There’s no content library to work through. Most programs measure value by volume. We measure it by results. Repeating a few strategically targeted and personalized interventions is how you succeed.`,
  },
];

function FAQItem({ faq, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className={`border-b border-midnight/10 transition-colors duration-300 ${isOpen ? 'bg-white/50' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 md:gap-6 py-6 px-6 md:px-8 text-left group"
      >
        <span className="mono-text text-coral/60 text-xs mt-1 shrink-0 w-6">{num}</span>
        <span className={`flex-1 font-heading font-semibold text-base md:text-lg transition-colors duration-300 ${isOpen ? 'text-coral' : 'text-midnight'}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 mt-1 text-midnight/40 transition-transform duration-500 ${isOpen ? 'rotate-180 text-coral' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : '0px' }}
      >
        <div className="px-6 md:px-8 pb-6">
          {faq.a.split('\n\n').map((para, i) => (
            <p 
              key={i} 
              className="text-midnight/70 text-sm md:text-base leading-relaxed mb-3 last:mb-0"
              dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-midnight">$1</strong>') }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-container',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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
    <section ref={sectionRef} className="section-pad bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        <div className="pt-8 md:pt-12">
          <div className="mb-12">
            <h2 className="heading-lg text-midnight text-3xl md:text-4xl lg:text-5xl">
              Moonshot FAQs
            </h2>
          </div>

          <div className="faq-container -mx-4 md:auto px-4 md:px-0 mb-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

          <div className="text-center mt-12 pt-8 text-midnight text-lg md:text-xl">
            Learn more about the <a href="https://www.themoonshotfoundation.org" target="_blank" rel="noopener noreferrer" className="text-coral font-medium hover:text-coral-dark hover:underline transition-colors">
              Moonshot Foundation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
