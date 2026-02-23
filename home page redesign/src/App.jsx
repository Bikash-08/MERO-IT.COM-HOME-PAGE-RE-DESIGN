import { useEffect, useRef, useState } from 'react';
import {
  FileText,
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

function App() {
  const observerRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img src="https://mero-it.com/Content/images/logo.png" alt="Mero-IT" className="h-10" />
            </div>

            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Home</a>
              <a href="#services" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Services</a>
              <a href="#support" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Support</a>
              <a href="#about" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>About</a>
              <a href="#contact" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Contact</a>
              
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100` }>
          <div className="px-6 pb-6 space-y-4">
            <a onClick={() => setMobileOpen(false)} href="#home" className="block text-gray-700 font-medium text-lg" style={{ color: '#D61223' }}>Home</a>
            <a onClick={() => setMobileOpen(false)} href="#services" className="block text-gray-700 font-medium text-lg" style={{ color: '#D61223' }}>Services</a>
            <a onClick={() => setMobileOpen(false)} href="#support" className="block text-gray-700 font-medium text-lg" style={{ color: '#D61223' }}>Support</a>
            <a onClick={() => setMobileOpen(false)} href="#about" className="block text-gray-700 font-medium text-lg" style={{ color: '#D61223' }}>About</a>
            <a onClick={() => setMobileOpen(false)} href="#contact" className="block text-gray-700 font-medium text-lg" style={{ color: '#D61223' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-red-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto scroll-animate opacity-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: '#FEE2E4', color: '#D61223' }}>
              <Zap className="w-4 h-4 mr-2" />
              Modern Accounting Software
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              Accounting Software,
              For Your Business Simplify,
              Automate, Prosper. <br />
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Mero-IT is a comprehensive accounting solution designed to streamline your financial operations.
              Manage invoices, track expenses, and generate reports with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 text-white rounded-xl font-semibold hover:opacity-90 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center cursor-pointer" style={{ backgroundColor: '#D61223' }}>
                Get Start Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:shadow-lg transition-all cursor-pointer" style={{ borderColor: '#FEE2E4', backgroundColor: '#FEE2E4' }}>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image/Stats */}
          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto scroll-animate opacity-0">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl font-bold mb-2" style={{ color: '#D61223' }}>1000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl font-bold mb-2" style={{ color: '#D61223' }}>99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl font-bold mb-2" style={{ color: '#D61223' }}>24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your business finances efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Invoice Management',
                description: 'Create, send, and track professional invoices. Get paid faster with automated reminders and online payment options.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Financial Reports',
                description: 'Generate comprehensive financial reports with real-time data. Make informed decisions with powerful analytics.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Expense Tracking',
                description: 'Track all your business expenses in one place. Categorize spending and stay within budget effortlessly.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Bank-Level Security',
                description: 'Your financial data is protected with enterprise-grade encryption and security protocols.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Multi-User Access',
                description: 'Collaborate with your team and accountant. Set custom permissions for different user roles.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Automation',
                description: 'Automate recurring invoices, payment reminders, and financial workflows to save time.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group scroll-animate opacity-0 bg-white p-8 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2"
                style={{ borderColor: '#FEE2E4' }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ backgroundColor: '#FEE2E4', color: '#D61223', '::groupHover': { backgroundColor: '#D61223', color: 'white' } }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate opacity-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Mero-IT?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of businesses that trust Mero-IT for their accounting needs
              </p>

              <div className="space-y-6">
                {[
                  'Save hours every week on accounting tasks',
                  'Reduce errors with automated calculations',
                  'Access your data anywhere, anytime',
                  'Scale with your business growth',
                  'Get expert support when you need it'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-animate opacity-0">
              <img src="https://mero-it.com/Content/images/homemain.jpg" alt="Mero-IT Benefits" className="w-full rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-24 px-6 lg:px-8" style={{ background: 'linear-gradient(to right, #D61223, #A60D1A)' }}>
        <div className="max-w-4xl mx-auto text-center scroll-animate opacity-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Boost Your Business With Mero Account
          </h2>
          <p className="text-xl text-red-100 mb-6 leading-relaxed">
            Take control of your business finances effortlessly with Mero Account. Our intuitive accounting software is designed to simplify financial management, allowing you to focus on growth and success.
          </p>
           <p className="text-xl text-red-100 my-10 leading-relaxed">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white rounded-xl font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center cursor-pointer" style={{ color: '#D61223' }}>
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-white rounded-xl font-semibold border-2 transition-all hover:shadow-xl hover:opacity-90" style={{ backgroundColor: '#A60D1A', borderColor: '#A60D1A' }}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <img src="https://mero-it.com/Content/images/logo.png" alt="Mero-IT" className="h-8" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional accounting software for modern businesses
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li className="transition-colors text-gray-400" >Custom Software Development</li>
                <li className="transition-colors text-gray-400" >Web & Mobile Solutions</li>
                <li className="transition-colors text-gray-400">Automation & Integration</li>
                <li className="transition-colors text-gray-400">Cloud & SAS Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Our Contact</h3>
              <ul className="space-y-3">
                <li className="transition-colors text-gray-400">Sikuchhen, Kirtipur</li>
                <li className="transition-colors text-gray-400" >9 Kathmandu Nepal</li>
                <li><a href="" className="transition-colors text-gray-400">Phone : +977-1-4334077</a></li>
                <li><a href="" className="transition-colors text-gray-400">info@mero-it.com</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center space-x-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors" style={{ color: '#fff' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.9v-2.9h1.6V9.1c0-1.6 1-2.5 2.4-2.5.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.2h1.7l-.3 2.9h-1.4v7A10 10 0 0022 12z" />
                  </svg>
                </a>

                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors" style={{ color: '#fff' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors" style={{ color: '#fff' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-1-1.7-1-2.1-1.1C16.7 2.5 12 2.5 12 2.5h-.1s-4.7 0-8.6.3c-.5 0-1.4.1-2.1 1.1-.6.7-.8 2.3-.8 2.3S0 8 0 9.8v2.4C0 14 0.3 15.6 0.3 15.6s.2 1.6.8 2.3c.8 1 1.9 1 2.4 1.1 1.7.1 7.4.3 7.4.3s4.7 0 8.6-.3c.5 0 1.4-.1 2.1-1.1.6-.7.8-2.3.8-2.3s.3-1.6.3-3.4V9.8c0-1.8-.3-3.6-.3-3.6zM9.8 15.1V8.9l6.2 3.1-6.2 3.1z" />
                  </svg>
                </a>

                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors" style={{ color: '#fff' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.8a4.28 4.28 0 001.33 5.7 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.7 8.7 0 0022.46 6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mero-IT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 transition-colors text-sm hover:opacity-70 text-gray-400" >Privacy Policy</a>
              <a href="#" className="text-gray-400 transition-colors text-sm hover:opacity-70 text-gray-400">Terms of Service</a>
              <a href="#" className="text-gray-400 transition-colors text-sm hover:opacity-70 text-gray-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
