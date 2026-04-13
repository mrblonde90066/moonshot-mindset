export default function Footer() {
  return (
    <footer className="bg-white py-12 relative z-20 border-t border-midnight/5 w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
        
        {/* Left Side: Brand & Stacked Links */}
        <div className="flex flex-col items-start text-left gap-6">
          <h2 className="font-heading font-bold text-2xl text-midnight tracking-tight m-0">
            Moonshot Mindset
          </h2>
          
          <div className="flex flex-col gap-3 text-sm font-medium">
            <a href="#" className="text-midnight/70 hover:text-coral transition-colors">Home</a>
            <a href="#newsletter" className="text-midnight/70 hover:text-coral transition-colors">Follow Us</a>
            <a href="https://www.themoonshotfoundation.org" target="_blank" rel="noopener noreferrer" className="text-midnight/70 hover:text-coral transition-colors">Foundation</a>
          </div>
        </div>

        {/* Right Side: Legal & Copyright */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right gap-3 text-xs md:text-sm text-midnight/50">
          <div className="flex gap-6 font-medium mb-1">
            <a href="/terms-of-use" className="hover:text-midnight transition-colors">Terms of Use</a>
            <a href="/privacy-policy" className="hover:text-midnight transition-colors">Privacy Policy</a>
          </div>
          <p className="m-0">© 2026 Moonshot Mindset. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
