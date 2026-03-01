import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Award, Globe, Briefcase, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AdSpace from '../components/AdSpace';

export default function PassiveIncome() {
  return (
    <Layout>
      <SEO 
        title="Passive Income Ideas & Strategies" 
        description="Learn how to build multiple streams of passive income to achieve financial freedom. From digital products to dividend investing."
      />
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Passive Income</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Passive income is money earned with minimal ongoing effort. It's the key to escaping the "time for money" trap and achieving true financial independence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Top Passive Income Streams</h2>
          <div className="space-y-6">
            {[
              { icon: Award, title: "Dividend Investing", desc: "Earn a share of company profits by owning dividend-paying stocks.", color: "text-blue-600 bg-blue-50" },
              { icon: Globe, title: "Digital Products", desc: "Create once, sell forever. E-books, courses, and templates.", color: "text-emerald-600 bg-emerald-50" },
              { icon: Briefcase, title: "Real Estate Crowdfunding", desc: "Invest in large-scale properties with small amounts of capital.", color: "text-amber-600 bg-amber-50" },
              { icon: Zap, title: "Affiliate Marketing", desc: "Earn commissions by recommending products you love to others.", color: "text-purple-600 bg-purple-50" }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-6 p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-lg transition-all group">
                <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-3xl font-bold mb-6">The Reality of Passive Income</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              "Passive" doesn't mean "no work." Most passive income streams require significant upfront time or capital investment. We help you choose the right path based on your current resources.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 text-sm">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>Requires upfront effort or capital</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>Takes time to scale and stabilize</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>Needs occasional maintenance</span>
              </li>
            </ul>
            <Link to="/guides/wealth-habits" className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300">
              Learn Wealth Habits <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <AdSpace type="sidebar" />
        </div>
      </div>

      <AdSpace type="banner" />
    </Layout>
  );
}
