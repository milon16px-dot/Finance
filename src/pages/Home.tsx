import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, PieChart, DollarSign, ArrowRight, Zap, Target, Award, Calculator } from 'lucide-react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AdSpace from '../components/AdSpace';

export default function Home() {
  return (
    <Layout showBreadcrumbs={false}>
      <SEO 
        title="Financial Intelligence & Smart Money Management" 
        description="Master your finances with Aron Financial Intelligence. Expert guides on investing, saving, budgeting, and building passive income for a secure future."
        keywords="financial intelligence, money management, investing for beginners, passive income, budgeting, wealth building"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100"
          >
            Global Financial Education
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-[1.1]"
          >
            Master Your Money. <br />
            <span className="text-emerald-600 italic">Build Your Future.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Professional financial intelligence and smart money education designed for global users. From budgeting basics to advanced investing strategies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/guides" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center">
              Explore Guides <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
              Our Mission
            </Link>
          </motion.div>
        </div>
      </section>

      <AdSpace type="banner" className="mb-20" />

      {/* Features Grid */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Financial Intelligence Matters</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We provide the tools and knowledge you need to navigate the complex world of personal finance with confidence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Security First", desc: "Learn how to protect your assets and build a robust emergency fund for life's surprises.", color: "bg-blue-50 text-blue-600" },
            { icon: PieChart, title: "Strategic Growth", desc: "Master the art of asset allocation and diversification to grow your wealth sustainably.", color: "bg-emerald-50 text-emerald-600" },
            { icon: Zap, title: "Passive Income", desc: "Discover multiple streams of income that work for you while you sleep.", color: "bg-amber-50 text-amber-600" }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-shadow">
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Major Sections */}
      <section className="py-20 bg-slate-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-[3rem] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">Explore Our Knowledge Hub</h2>
              <p className="text-slate-400 text-lg">Deep dive into our specialized sections designed to take you from financial basics to mastery.</p>
            </div>
            <Link to="/guides" className="text-emerald-400 font-bold hover:text-emerald-300 flex items-center">
              View All Content <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Investing Education", path: "/investing", icon: Target, count: "12+ Articles" },
              { title: "Saving Strategies", path: "/saving", icon: DollarSign, count: "8+ Guides" },
              { title: "Passive Income", path: "/passive-income", icon: Award, count: "10+ Ideas" },
              { title: "Financial Calculators", path: "/calculators", icon: Calculator, count: "5+ Tools" }
            ].map((item, i) => (
              <Link key={i} to={item.path} className="group p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 transition-all">
                <item.icon className="h-10 w-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{item.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdSpace type="in-article" className="my-20" />

      {/* Latest Articles / Featured */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Financial Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "The Master Guide to Budgeting", desc: "Learn the 50/30/20 rule and how to track every dollar effectively.", path: "/guides/budgeting-master-guide" },
            { title: "Understanding Compound Interest", desc: "The eighth wonder of the world explained with real-life examples.", path: "/guides/compound-interest-guide" },
            { title: "Credit Score Mastery", desc: "How to build, maintain, and repair your credit for better loan terms.", path: "/guides/credit-score-guide" },
            { title: "Emergency Fund Essentials", desc: "Why you need 6 months of expenses and how to save it fast.", path: "/guides/emergency-fund-guide" }
          ].map((article, i) => (
            <Link key={i} to={article.path} className="flex flex-col group">
              <div className="aspect-video bg-slate-200 rounded-3xl mb-6 overflow-hidden relative">
                <img src={`https://picsum.photos/seed/finance${i}/800/450`} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">{article.title}</h3>
              <p className="text-slate-600 mb-4">{article.desc}</p>
              <span className="text-emerald-600 font-bold flex items-center text-sm">Read Article <ArrowRight className="ml-1 h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-t border-slate-200">
        <div className="bg-emerald-50 rounded-[3rem] p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Thousands of Smart Investors</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Aron Financial Intelligence is dedicated to providing unbiased, high-quality financial education to help you achieve your dreams.</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            {/* Mock logos or trust signals */}
            <span className="font-serif font-bold text-2xl">FINANCE WEEKLY</span>
            <span className="font-serif font-bold text-2xl">MONEY INSIGHTS</span>
            <span className="font-serif font-bold text-2xl">WEALTH DAILY</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
