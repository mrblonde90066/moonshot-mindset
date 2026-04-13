import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import earthriseBg from '../assets/Earthrise better.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.news-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    // Inject ConvertKit script
    if (!document.querySelector('script[src="https://f.convertkit.com/ckjs/ck.5.js"]')) {
      const script = document.createElement('script');
      script.src = "https://f.convertkit.com/ckjs/ck.5.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="newsletter" className="relative min-h-[50vh] md:min-h-[80vh] pt-20 md:pt-32 overflow-hidden bg-midnight flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${earthriseBg}')` }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-midnight/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="news-reveal mx-auto max-w-7xl">
          <div dangerouslySetInnerHTML={{ __html: `
            <div class="moonshot-custom-wrapper">
              <h2 class="ms-title">The world moves fast. Moonshot is here to help.</h2>
              <p class="ms-description">
                Subscribe to the Moonshot newsletter for the latest transformation insights, stories demonstrating what you're truly capable of, and exclusive resources.
              </p>

              <form action="https://app.kit.com/forms/9082878/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9082878" data-uid="f1a1d317e2" data-format="inline" data-version="5">
                <div data-style="clean">
                  <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
                    
                    <div class="formkit-field">
                      <input class="formkit-input" name="email_address" placeholder="Email Address" required="" type="email">
                    </div>
                    
                    <div class="formkit-field">
                      <input class="formkit-input" name="fields[first_name]" placeholder="First Name" type="text">
                    </div>

                    <div class="formkit-field">
                      <input class="formkit-input" name="fields[last_name]" placeholder="Last Name" type="text">
                    </div>

                    <button data-element="submit" class="formkit-submit">
                      <span>Sign up</span>
                    </button>
                  </div>
                </div>
              </form>
              <p class="ms-privacy">We respect your privacy. No spam, ever.</p>
            </div>

            <style>
              @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap');

              .moonshot-custom-wrapper {
                width: 100%;
                max-width: 1200px; 
                margin: 0 auto;
                text-align: center;
                font-family: 'Urbanist', sans-serif !important;
              }

              .ms-title {
                color: #ffffff !important;
                font-size: 36px !important;
                font-weight: 400 !important;
                margin-bottom: 12px !important;
              }

              .ms-description {
                color: #ffffff !important;
                font-size: 16px !important;
                margin-bottom: 40px !important;
                white-space: nowrap;
                max-width: none !important;
              }

              .ms-privacy {
                color: rgba(255,255,255,0.4) !important;
                font-size: 12px !important;
                margin-top: 16px !important;
              }

              .formkit-fields {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                gap: 20px !important;
              }

              .formkit-field {
                flex: 1 !important;
                margin-right: 20px !important; 
                margin-bottom: 0 !important;
              }

              .formkit-field:last-of-type {
                margin-right: 20px !important;
              }

              .formkit-input {
                background: #ffffff !important;
                color: #060828 !important;
                border-radius: 4px !important;
                height: 45px !important;
                font-family: 'Urbanist', sans-serif !important;
                border: none !important;
                width: 100% !important;
                padding: 0 15px !important;
              }

              .formkit-submit {
                background-color: #EE9080 !important;
                color: #ffffff !important;
                border-radius: 50px !important;
                font-family: 'Urbanist', sans-serif !important;
                font-weight: 400 !important;
                height: 45px !important;
                padding: 0 40px !important;
                border: none !important;
                cursor: pointer !important;
                flex: 0 0 auto !important;
                margin: 0 !important;
              }

              @media (max-width: 767px) {
                .formkit-fields {
                  flex-direction: column !important;
                  display: block !important;
                  width: 100% !important;
                  text-align: center !important;
                }

                .formkit-field {
                  margin-right: 0 !important;
                  margin-left: 0 !important;
                  margin-bottom: 15px !important;
                  width: 100% !important;
                  display: block !important;
                  text-align: center !important;
                }

                .formkit-input {
                  width: 100% !important;
                  max-width: 300px !important;
                  margin: 0 auto !important;
                  display: block !important;
                  text-align: center !important;
                }

                .formkit-submit {
                  width: auto !important;
                  min-width: 130px !important;
                  padding: 0 20px !important;
                  margin: 10px auto 0 auto !important;
                  font-weight: 400 !important;
                  display: inline-block !important;
                }

                .ms-title { font-size: 28px !important; }
                .ms-description { white-space: normal !important; }
              }

              .formkit-powered-by-convertkit-container, 
              .formkit-label, 
              .formkit-powered-by-kit {
                display: none !important;
              }
            </style>
          ` }} />
        </div>
      </div>

      {/* Spacer to let the earthrise image breathe below */}
      <div className="flex-1" />
    </section>
  );
}
