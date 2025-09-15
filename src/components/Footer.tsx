export default function Footer() {
  return (
    <footer className="bg-[#2b4c8d] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About This Site */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                This is Todd Fisher&apos;s personal recruiting page for the Pennsylvania Department of Corrections.
              </p>
              <p className="text-gray-300">
                Todd is here to help you navigate your career journey with PA DOC.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-gray-300">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Todd */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#55a1d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:717-916-0291" className="hover:text-gray-300">
                  (717) 916-0291
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#55a1d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:todfisher@pa.gov" className="hover:text-gray-300">
                  todfisher@pa.gov
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}