import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lightTexture from '../assets/light_texture.png';
import leavesTexture from '../assets/dark-green-tropical-leaves.jpg';
import heroImage from '../assets/Joshua Tree Supermoon.jpg';
import jungleLeaves from '../assets/tropical_jungle_leaves.jpg';
import seaShells from '../assets/sea_shells.jpg';
import whiteMarble from '../assets/white_marble.jpg';
import iceCliff from '../assets/ice_cliff.jpg';
import whitePebbles from '../assets/white_pebbles.jpg';

gsap.registerPlugin(ScrollTrigger);

// ─── Shared attribution row ────────────────────────────────────────────────────
function Attribution({ author, role, ruleColor = 'bg-coral', nameColor = 'text-midnight', roleColor = 'text-midnight/50' }) {
  return (
    <div className="flex items-center gap-5">
      <div className={`flex-shrink-0 h-px ${ruleColor}`} style={{ width: '2.5rem' }} />
      <div>
        <p className={`font-heading font-semibold text-sm tracking-tight leading-snug ${nameColor}`}>{author}</p>
        <p className={`eyebrow mt-1 ${roleColor}`}>{role}</p>
      </div>
    </div>
  );
}

// ─── Option B: Dark Inverted ──────────────────────────────────────────────────
// Midnight + leaves texture. Quote in cream, coral quote mark, coral author name.
// Best placed between two light sections — maximum contrast.
function DarkVariant({ quote, author, role, sectionRef }) {
  return (
    <section ref={sectionRef} className="relative section-pad overflow-hidden bg-midnight">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${leavesTexture}')` }}
      />
      <div className="absolute inset-0 bg-midnight/75" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
        <span
          aria-hidden="true"
          className="drama-text text-coral select-none pointer-events-none block mb-4"
          style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: 1, opacity: 0.55 }}
        >
          &ldquo;
        </span>

        <blockquote
          className="drama-text text-peach leading-snug mb-12"
          style={{ fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)' }}
        >
          {quote}
        </blockquote>

        <Attribution
          author={author}
          role={role}
          ruleColor="bg-coral/60"
          nameColor="text-coral"
          roleColor="text-peach/40"
        />
      </div>
    </section>
  );
}

// ─── Warm Light Variant ────────────────────────────────────────────────────────
// Natural image behind a coral/pink overlay. Quote mark in midnight (low opacity),
// quote text and attribution in midnight. Warm, organic, distinct from peach sections.
// Used in two colorways: light texture (subtler) and hero photo (more dramatic).
function WarmVariant({ quote, author, role, sectionRef, bgImage, overlayOpacity = '0.60' }) {
  return (
    <section ref={sectionRef} className="relative section-pad overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      {/* Coral/pink overlay — the defining characteristic of this variant */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(240, 142, 128, ${overlayOpacity})` }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
        <div className="relative">
          <span
            aria-hidden="true"
            className="drama-text text-midnight pointer-events-none select-none"
            style={{
              position: 'absolute',
              top: '-1rem',
              left: '-0.5rem',
              fontSize: 'clamp(7rem, 18vw, 13rem)',
              lineHeight: 1,
              opacity: 0.12,
            }}
          >
            &ldquo;
          </span>

          <blockquote
            className="drama-text text-midnight leading-snug mb-10 relative z-10"
            style={{
              fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)',
              paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
            }}
          >
            {quote}
          </blockquote>

          <Attribution
            author={author}
            role={role}
            ruleColor="bg-midnight/30"
            nameColor="text-midnight"
            roleColor="text-midnight/55"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────
// variant="warm-texture"  →  light organic texture + coral overlay  (Testimonial 1)
// variant="B"             →  dark midnight + leaves                  (Testimonial 2)
// variant="warm-photo"    →  Joshua Tree hero photo + coral overlay  (Testimonial 3)
export default function Testimonial({ quote, author, role, variant = 'warm-texture' }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  if (variant === 'B') {
    return <DarkVariant quote={quote} author={author} role={role} sectionRef={ref} />;
  }

  if (variant === 'warm-jungle') {
    return (
      <WarmVariant
        quote={quote}
        author={author}
        role={role}
        sectionRef={ref}
        bgImage={jungleLeaves}
        overlayOpacity="0.58"
      />
    );
  }

  // Shells + white overlay: soft ivory field, coral accents pop against the light bg
  if (variant === 'warm-shells') {
    return (
      <section ref={ref} className="relative section-pad overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${seaShells}')` }}
        />
        {/* White overlay — shells read as delicate texture, not literal photo */}
        <div className="absolute inset-0 bg-white/[0.68]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <div className="relative">
            {/* Quote mark in coral — pops warmly on the light field */}
            <span
              aria-hidden="true"
              className="drama-text text-coral pointer-events-none select-none"
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-0.5rem',
                fontSize: 'clamp(7rem, 18vw, 13rem)',
                lineHeight: 1,
                opacity: 0.45,
              }}
            >
              &ldquo;
            </span>

            <blockquote
              className="drama-text text-midnight leading-snug mb-10 relative z-10"
              style={{
                fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)',
                paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
              }}
            >
              {quote}
            </blockquote>

            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 h-px bg-coral" style={{ width: '2.5rem' }} />
              <div>
                <p className="font-heading font-semibold text-midnight text-sm tracking-tight leading-snug">{author}</p>
                <p className="eyebrow text-midnight/45 mt-1">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'warm-photo') {
    return (
      <WarmVariant
        quote={quote}
        author={author}
        role={role}
        sectionRef={ref}
        bgImage={heroImage}
        overlayOpacity="0.72"
      />
    );
  }

  // White marble A — lighter overlay, more veining visible
  if (variant === 'warm-marble') {
    return (
      <section ref={ref} className="relative section-pad overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${whiteMarble}')` }}
        />
        <div className="absolute inset-0 bg-white/[0.55]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <div className="relative">
            <span
              aria-hidden="true"
              className="drama-text text-midnight pointer-events-none select-none"
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-0.5rem',
                fontSize: 'clamp(7rem, 18vw, 13rem)',
                lineHeight: 1,
                opacity: 0.08,
              }}
            >
              &ldquo;
            </span>

            <blockquote
              className="drama-text text-midnight leading-snug mb-10 relative z-10"
              style={{
                fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)',
                paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
              }}
            >
              {quote}
            </blockquote>

            <Attribution
              author={author}
              role={role}
              ruleColor="bg-coral/50"
              nameColor="text-midnight"
              roleColor="text-midnight/45"
            />
          </div>
        </div>
      </section>
    );
  }

  // White marble B — heavier overlay, cleaner/more muted, just a whisper of veining
  if (variant === 'warm-marble-b') {
    return (
      <section ref={ref} className="relative section-pad overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${whiteMarble}')` }}
        />
        <div className="absolute inset-0 bg-white/[0.82]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <div className="relative">
            <span
              aria-hidden="true"
              className="drama-text text-midnight pointer-events-none select-none"
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-0.5rem',
                fontSize: 'clamp(7rem, 18vw, 13rem)',
                lineHeight: 1,
                opacity: 0.08,
              }}
            >
              &ldquo;
            </span>

            <blockquote
              className="drama-text text-midnight leading-snug mb-10 relative z-10"
              style={{
                fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)',
                paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
              }}
            >
              {quote}
            </blockquote>

            <Attribution
              author={author}
              role={role}
              ruleColor="bg-coral/50"
              nameColor="text-midnight"
              roleColor="text-midnight/45"
            />
          </div>
        </div>
      </section>
    );
  }

  // Ice cliff — cool blue-white luminosity under a very light white overlay
  if (variant === 'warm-ice') {
    return (
      <section ref={ref} className="relative section-pad overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${iceCliff}')` }}
        />
        <div className="absolute inset-0 bg-white/[0.60]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <div className="relative">
            <span
              aria-hidden="true"
              className="drama-text text-midnight pointer-events-none select-none"
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-0.5rem',
                fontSize: 'clamp(7rem, 18vw, 13rem)',
                lineHeight: 1,
                opacity: 0.10,
              }}
            >
              &ldquo;
            </span>

            <blockquote
              className="drama-text text-midnight leading-snug mb-10 relative z-10"
              style={{
                fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)',
                paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
              }}
            >
              {quote}
            </blockquote>

            <Attribution
              author={author}
              role={role}
              ruleColor="bg-coral/50"
              nameColor="text-midnight"
              roleColor="text-midnight/45"
            />
          </div>
        </div>
      </section>
    );
  }

  // White pebbles — near-monochrome texture under white overlay, very subtle
  if (variant === 'warm-pebbles') {
    return (
      <section ref={ref} className="relative section-pad overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${whitePebbles}')` }}
        />
        <div className="absolute inset-0 bg-white/[0.65]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <div className="relative">
            <span
              aria-hidden="true"
              className="drama-text text-coral pointer-events-none select-none"
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-0.5rem',
                fontSize: 'clamp(7rem, 18vw, 13rem)',
                lineHeight: 1,
                opacity: 0.35,
              }}
            >
              &ldquo;
            </span>

            <blockquote
              className="drama-text text-midnight leading-snug mb-10 relative z-10"
              style={{
                fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)',
                paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
              }}
            >
              {quote}
            </blockquote>

            <Attribution
              author={author}
              role={role}
              ruleColor="bg-coral"
              nameColor="text-midnight"
              roleColor="text-midnight/45"
            />
          </div>
        </div>
      </section>
    );
  }

  // Default: warm-texture
  return (
    <WarmVariant
      quote={quote}
      author={author}
      role={role}
      sectionRef={ref}
      bgImage={lightTexture}
      overlayOpacity="0.62"
    />
  );
}
