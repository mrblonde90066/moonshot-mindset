import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto text-midnight/80">
        <h1 className="heading-lg text-4xl md:text-5xl text-midnight mb-2">MOONSHOT MINDSET — PRIVACY POLICY</h1>
        
        <p className="mb-1 text-sm font-semibold mt-4">Effective Date: April 14, 2026</p>
        <p className="mb-8 text-sm font-semibold">Last Updated: April 14, 2026</p>
        
        <hr className="border-midnight/10 mb-10" />
        
        <div className="space-y-6 text-lg leading-relaxed">
          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">The short version</h3>
          <p>We collect only what we need, we never sell your data, and we use what you share to help you — not to profit from your attention. That would be a little on-brand ironic, given what we do.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">1. Who we are</h3>
          <p>Moonshot Mindset (moonshotmindset.co) is operated by Armstrong Ventures, Inc., doing business as Moonshot Mindset, a California S-Corporation.</p>
          <p>When this policy says "Moonshot Mindset," "we," "us," or "our," it means Armstrong Ventures, Inc. and its Moonshot Mindset platform, including Moonshot Academy.</p>
          <p>The Moonshot Foundation is a separate 501(c)(3) nonprofit organization (EIN: 39-4484308) whose mission is to make the Academy available, free of charge, to anyone who wants it. The Foundation has its own privacy policy governing donations and Foundation-specific communications.</p>
          <p>Questions about this policy? Contact us at <a href="mailto:privacy@moonshotmindset.co" className="text-coral hover:underline">privacy@moonshotmindset.co</a>.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">2. What information we collect</h3>
          <p className="font-semibold text-midnight mt-6">Information you give us directly:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email address, first name, and last name</strong> — when you subscribe to our newsletter via our Kit (formerly ConvertKit) form</li>
            <li><strong>Application information</strong> — when you apply to join Moonshot Academy, including your name, email, and your responses to application questions</li>
            <li><strong>Communications</strong> — if you email us or fill out a contact form, we receive and store that message</li>
          </ul>

          <p className="font-semibold text-midnight mt-6">Information collected automatically:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Usage data</strong> — pages visited, time on site, referring pages, browser type, and general geographic location (city/country level), collected via standard web analytics</li>
            <li><strong>Cookies</strong> — we use essential cookies to make the site function and, if you consent, analytics cookies to understand how people use the site. We do not use advertising cookies.</li>
          </ul>

          <p className="font-semibold text-midnight mt-6">Information we do NOT collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not collect payment information directly. Any future payment processing will be handled by third-party providers with their own privacy policies.</li>
            <li>We do not collect sensitive personal information such as health data, financial records, or government ID numbers.</li>
            <li>We do not build behavioral profiles for advertising purposes.</li>
          </ul>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">3. How we use your information</h3>
          <p>We use what you share with us to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send you the Moonshot newsletter and program updates you signed up for</li>
            <li>Communicate with you about your Moonshot Academy application and participation</li>
            <li>Improve the website and understand how people find and use it</li>
            <li>Respond to your questions and requests</li>
            <li>Meet our legal obligations</li>
          </ul>

          <p className="mt-6">We do not use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sell or rent it to anyone, ever</li>
            <li>Target you with advertising</li>
            <li>Build profiles for third-party marketing</li>
            <li>Make automated decisions that significantly affect you</li>
          </ul>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">4. How we share your information</h3>
          <p>We share your information only in these limited circumstances:</p>

          <p><strong>Service providers:</strong> We use a small number of trusted third-party tools to operate:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Kit (formerly ConvertKit)</strong> — email newsletter platform. Your name and email are stored there when you subscribe. Kit's privacy policy is at kit.com/privacy.</li>
            <li><strong>Analytics provider</strong> — we use privacy-respecting web analytics to understand site traffic. We do not share personally identifiable information with our analytics provider.</li>
            <li><strong>Zoom</strong> — Moonshot Academy sessions are held on Zoom. When you join a session, Zoom's own privacy policy applies.</li>
          </ul>

          <p><strong>Legal requirements:</strong> We may disclose information if required to do so by law, court order, or governmental authority.</p>

          <p><strong>Organizational transfers:</strong> If Armstrong Ventures, Inc. transfers its assets or business, your information may transfer as part of that transaction. We will notify you if that happens.</p>

          <p className="mt-6 font-semibold pb-4">We do not sell, rent, trade, or otherwise share your personal information for commercial purposes. Full stop.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">5. Email communications</h3>
          <p>When you subscribe to our newsletter, you will receive:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Moonshot newsletter (frequency varies — typically weekly or biweekly)</li>
            <li>Occasional updates about Moonshot Mindset programs, content, and offerings</li>
          </ul>

          <p className="mt-6 pb-4">You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any email. We will remove you promptly. We do not send spam. We do not share your email with other organizations for marketing purposes.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">6. Cookies</h3>
          <p><strong>Essential cookies:</strong> Required for the site to function. Cannot be disabled.</p>
          <p><strong>Analytics cookies:</strong> Help us understand how visitors use the site — which pages are most useful, how people find us, and where we can improve. We use these only with your consent and do not use them to track you across other websites.</p>
          <p><strong>Advertising cookies:</strong> We do not use these. We do not run retargeting or behavioral advertising.</p>
          <p className="mt-6 pb-4">You can manage cookie preferences through your browser settings at any time.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">7. Data retention</h3>
          <p>We keep your information for as long as your relationship with us is active, or as long as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
          <p>If you unsubscribe from our newsletter, we will remove you from active mailing lists. We may retain a record of your email address to honor future unsubscribe requests.</p>
          <p className="pb-4">If you would like us to delete all information we hold about you, contact us at <a href="mailto:privacy@moonshotmindset.co" className="text-coral hover:underline">privacy@moonshotmindset.co</a> and we will do so within 30 days, except where we are required by law to retain certain records.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">8. Your rights</h3>
          <p>Depending on where you live, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access</strong> the personal information we hold about you</li>
            <li><strong>Correct</strong> inaccurate information</li>
            <li><strong>Delete</strong> your information (the "right to be forgotten")</li>
            <li><strong>Object</strong> to certain types of processing</li>
            <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format</li>
            <li><strong>Withdraw consent</strong> at any time where processing is based on consent</li>
          </ul>

          <p className="mt-6"><strong>California residents (CCPA):</strong> You have the right to know what personal information we collect, to delete it, to opt out of its sale (we do not sell it), and to non-discrimination for exercising these rights.</p>
          <p><strong>EU/UK residents (GDPR):</strong> Our legal bases for processing are: consent (for newsletter subscriptions and analytics cookies), legitimate interests (for site security and fraud prevention), and legal obligation (for required records). You may lodge a complaint with your local data protection authority.</p>
          <p className="mt-6 pb-4">To exercise any of these rights, contact us at <a href="mailto:privacy@moonshotmindset.co" className="text-coral hover:underline">privacy@moonshotmindset.co</a>.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">9. Children&#39;s privacy</h3>
          <p className="pb-4">Moonshot Mindset and Moonshot Academy are designed for adults. We do not knowingly collect personal information from anyone under the age of 13. If we learn that we have collected information from a child under 13, we will delete it promptly. If you believe we may have information about a child, please contact us at <a href="mailto:privacy@moonshotmindset.co" className="text-coral hover:underline">privacy@moonshotmindset.co</a>.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">10. Security</h3>
          <p>We take reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS), access controls, and working only with service providers who maintain appropriate security standards.</p>
          <p className="pb-4">No method of transmission over the internet is 100% secure. We cannot guarantee absolute security, but we take this seriously and will notify you promptly if a breach occurs that affects your data.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">11. Third-party links</h3>
          <p className="pb-4">Our site may contain links to third-party websites, including the Moonshot Foundation site, Zoom, and others. This privacy policy applies only to moonshotmindset.co. We are not responsible for the privacy practices of other sites and encourage you to read their policies.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">12. Changes to this policy</h3>
          <p className="pb-4">We may update this policy from time to time. When we do, we will update the "Last Updated" date at the top. If we make material changes, we will notify subscribers by email. Your continued use of the site after changes are posted constitutes your acceptance of the updated policy.</p>

          <hr className="border-midnight/10 my-10" />

          <h3 className="heading-md text-2xl text-midnight mt-10 mb-4">13. Contact</h3>
          <p className="pb-8">Armstrong Ventures, Inc. DBA Moonshot Mindset <a href="mailto:privacy@moonshotmindset.co" className="text-coral hover:underline font-normal">privacy@moonshotmindset.co</a></p>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
