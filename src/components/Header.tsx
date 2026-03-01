import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, DollarSign, PieChart, ShieldCheck, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
  { name: 'Investing', path: '/investing' },
  { name: 'Saving', path: '/saving' },
  { name: 'Passive Income', path: '/passive-income' },
  { name: 'Calculators', path: '/calculators' },
  { name: 'About', path: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-600 p-1.5 rounded-lg group-hover:bg-emerald-500 transition-colors">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-slate-900">
              Aron Financial <span className="text-emerald-600 italic">Intelligence</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === item.path ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
