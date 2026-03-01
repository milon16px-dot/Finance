import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, ShieldCheck, Wallet, PiggyBank, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AdSpace from '../components/AdSpace';

export default function Saving() {
  return (
    <Layout>
      <SEO 
        title="Saving Money Strategies" 
        description="Discover effective saving strategies and money-saving tips to build your emergency fund and achieve your financial goals."
      />
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Saving Money</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Saving is the foundation of financial security. It's not about how much you make, but how much you keep. Learn the habits that lead to a life of abundance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-6">The Emergency Fund</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              An emergency fund is your financial insurance policy. It protects you from high-interest debt when life's unexpected events occur. We recommend having 3-6 months of essential expenses saved.
            </p>
          </div>
          <Link to="/guides/emergency-fund-guide" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700">
            Read the Full Guide <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
              <PiggyBank className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-6">High-Yield Savings</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Don't let your money sit idle in a traditional bank account. Learn how to use high-yield savings accounts (HYSA) to earn significantly more interest while keeping your money accessible.
            </p>
          </div>
          <button className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700">
            Compare Account Types <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <AdSpace type="banner" className="mb-20" />

      <section className="py-20 bg-slate-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-[3rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Money-Saving Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Automate Savings", desc: "Set up automatic transfers to your savings account on payday." },
              { title: "The 24-Hour Rule", desc: "Wait 24 hours before making any non-essential purchase over $50." },
              { title: "Subscription Audit", desc: "Cancel unused streaming services and gym memberships." },
              { title: "Meal Planning", desc: "Save hundreds each month by reducing dining out and food waste." }
            ].map((tip, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold mb-4 text-emerald-600">{tip.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <AdSpace type="in-article" />
      </div>
    </Layout>
  );
}
