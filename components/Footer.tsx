export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-blue-400">
            Portivo
          </h2>

          <h3 className="mt-4 text-lg font-bold text-white">
            Build. Showcase. Get Hired.
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
            AI-powered career platform helping students and professionals build
            ATS-friendly resumes and beautiful portfolio websites.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold text-white">Product</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-300">
            <a href="#features" className="hover:text-blue-400">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-blue-400">
              How It Works
            </a>

            <a href="#pricing" className="hover:text-blue-400">
              Pricing
            </a>

            <a href="#faq" className="hover:text-blue-400">
              FAQ
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-white">Company</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-300">
            <a href="#" className="hover:text-blue-400">
              About
            </a>

            <a href="#" className="hover:text-blue-400">
              Contact
            </a>

            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-white">Follow Us</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-300">
            <a href="#" className="hover:text-blue-400">
              LinkedIn
            </a>

            <a href="#" className="hover:text-blue-400">
              GitHub
            </a>

            <a href="#" className="hover:text-blue-400">
              YouTube
            </a>

            <a href="#" className="hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2026 Portivo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}