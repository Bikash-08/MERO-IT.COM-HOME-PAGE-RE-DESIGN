import { useEffect, useRef } from 'react';
import {
  FileText,
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

function App() {
  const observerRef = useRef(null);

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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Home</a>
              <a href="#services" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Services</a>
              <a href="#support" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Support</a>
              <a href="#about" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>About</a>
              <a href="#contact" className="text-gray-600 transition-colors font-medium hover:opacity-70 text-xl" style={{ color: '#D61223' }}>Contact</a>
              
            </div>
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
                <li className="transition-colors" style={{ color: '#D61223' }}>Custom Software Development</li>
                <li className="transition-colors" style={{ color: '#D61223' }}>Web & Mobile Solutions</li>
                <li className="transition-colors" style={{ color: '#D61223' }}>Automation & Integration</li>
                <li className="transition-colors" style={{ color: '#D61223' }}>Cloud & SAS Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Our Contact</h3>
              <ul className="space-y-3">
                <li className="transition-colors" style={{ color: '#D61223' }}>Sikuchhen, Kirtipur</li>
                <li className="transition-colors" style={{ color: '#D61223' }}>9 Kathmandu Nepal</li>
                <li><a href="" className="transition-colors" style={{ color: '#D61223' }}>Phone : +977-1-4334077</a></li>
                <li><a href="" className="transition-colors" style={{ color: '#D61223' }}>info@mero-it.com</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors hover:opacity-70" style={{ color: '#D61223' }}>Help Center</a></li>
                <li><a href="#" className="transition-colors hover:opacity-70" style={{ color: '#D61223' }}>Documentation</a></li>
                <li><a href="#" className="transition-colors hover:opacity-70" style={{ color: '#D61223' }}>API</a></li>
                <li><a href="#" className="transition-colors hover:opacity-70" style={{ color: '#D61223' }}>Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mero-IT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 transition-colors text-sm hover:opacity-70" style={{ color: '#D61223' }}>Privacy Policy</a>
              <a href="#" className="text-gray-400 transition-colors text-sm hover:opacity-70" style={{ color: '#D61223' }}>Terms of Service</a>
              <a href="#" className="text-gray-400 transition-colors text-sm hover:opacity-70" style={{ color: '#D61223' }}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
