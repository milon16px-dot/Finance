import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, PieChart, ShieldCheck, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AdSpace from '../components/AdSpace';

export default function Investing() {
  return (
    <Layout>
      <SEO 
        title="Investing Education" 
        description="Master the art of investing with our expert guides. Learn about stocks, bonds, real estate, and asset allocation for long-term wealth."
      />
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Investing Education</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Investing is the most powerful tool for building long-term wealth. Our education center provides the knowledge you need to start your journey with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">The Foundations of Investing</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Before you put your first dollar into the market, it's essential to understand the basic principles that govern successful investing. We cover everything from risk tolerance to the power of diversification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link to="/guides/compound-interest-guide" className="p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                <TrendingUp className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="font-bold mb-2 group-hover:text-emerald-600">Compound Interest</h3>
                <p className="text-sm text-slate-500">The eighth wonder of the world explained.</p>
              </Link>
              <Link to="/guides/roi-explanation-guide" className="p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                <PieChart className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="font-bold mb-2 group-hover:text-emerald-600">Understanding ROI</h3>
                <p className="text-sm text-slate-500">How to measure your investment success.</p>
              </Link>
            </div>
          </section>

          <AdSpace type="in-article" />

          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Advanced Investing Topics</h2>
            <div className="space-y-6">
              {[
                { title: "Asset Allocation Strategies", desc: "How to balance risk and reward in your portfolio." },
                { title: "Stock Market Basics", desc: "Understanding shares, dividends, and market caps." },
                { title: "Real Estate Investing", desc: "Building wealth through physical and digital property." },
                { title: "Index Funds vs. Individual Stocks", desc: "Which approach is right for your goals?" }
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer group">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-emerald-600 transition-colors">{topic.title}</h3>
                    <p className="text-slate-500 text-sm">{topic.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-emerald-600 text-white p-8 rounded-[2rem] shadow-xl">
            <Target className="h-12 w-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
            <p className="text-emerald-100 mb-8 text-sm leading-relaxed">
              The best time to start investing was 20 years ago. The second best time is today. Don't let fear hold you back from your financial future.
            </p>
            <Link to="/guides/personal-finance-basics" className="block w-full py-4 bg-white text-emerald-600 rounded-xl font-bold text-center hover:bg-emerald-50 transition-colors">
              Beginner's Guide
            </Link>
          </div>

          <AdSpace type="sidebar" />

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100">
            <h3 className="font-bold mb-6">Investing FAQ</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-sm mb-2">How much money do I need to start?</p>
                <p className="text-xs text-slate-500">You can start with as little as $1 with many modern brokerage apps.</p>
              </div>
              <div>
                <p className="font-bold text-sm mb-2">Is investing like gambling?</p>
                <p className="text-xs text-slate-500">No. Investing is based on long-term value creation, while gambling is based on chance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
