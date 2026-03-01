import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, TrendingUp, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-emerald-500" />
              <span className="font-serif font-bold text-2xl text-white">
                Aron Financial
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering global users with financial intelligence, smart money management strategies, and investment education to build lasting wealth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Knowledge Hub</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/guides" className="hover:text-emerald-500 transition-colors">Financial Guides</Link></li>
              <li><Link to="/investing" className="hover:text-emerald-500 transition-colors">Investing Education</Link></li>
              <li><Link to="/saving" className="hover:text-emerald-500 transition-colors">Saving Money</Link></li>
              <li><Link to="/passive-income" className="hover:text-emerald-500 transition-colors">Passive Income</Link></li>
              <li><Link to="/calculators" className="hover:text-emerald-500 transition-colors">Financial Calculators</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Legal & Trust</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="hover:text-emerald-500 transition-colors">Financial Disclaimer</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Mich Ian Aron</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Direct Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>arodex@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <div className="space-y-1">
                  <p>+256 781 118 149</p>
                  <p>+256 726 865 131</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Kampala, Uganda (Global Services)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>&copy; {currentYear} Aron Financial Intelligence. All rights reserved.</p>
          <p>Designed for Financial Freedom & Smart Investing.</p>
        </div>
      </div>
    </footer>
  );
}
