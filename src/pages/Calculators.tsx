import React from 'react';
import { Calculator, TrendingUp, DollarSign, ShieldCheck, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AdSpace from '../components/AdSpace';

export default function Calculators() {
  return (
    <Layout>
      <SEO 
        title="Financial Calculators" 
        description="Free financial calculators to help you plan your future. Compound interest, ROI, budgeting, and loan calculators."
      />
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Financial Calculators</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Numbers don't lie. Use our professional tools to visualize your financial future and make data-driven decisions today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          { icon: TrendingUp, title: "Compound Interest", desc: "See how your investments grow over time with the power of compounding.", color: "text-emerald-600 bg-emerald-50" },
          { icon: DollarSign, title: "ROI Calculator", desc: "Calculate the return on investment for any asset or business venture.", color: "text-blue-600 bg-blue-50" },
          { icon: Calculator, title: "Budgeting Tool", desc: "Plan your monthly expenses using the 50/30/20 rule framework.", color: "text-amber-600 bg-amber-50" },
          { icon: ShieldCheck, title: "Emergency Fund", desc: "Determine exactly how much you need for a 3, 6, or 12-month safety net.", color: "text-red-600 bg-red-50" },
          { icon: Calculator, title: "Loan Repayment", desc: "Calculate monthly payments and total interest for any loan type.", color: "text-purple-600 bg-purple-50" },
          { icon: TrendingUp, title: "Retirement Planner", desc: "Estimate how much you need to save to maintain your lifestyle in retirement.", color: "text-indigo-600 bg-indigo-50" }
        ].map((tool, i) => (
          <div key={i} className="group bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer">
            <div className={`w-14 h-14 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <tool.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">{tool.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{tool.desc}</p>
            <span className="text-emerald-600 font-bold text-sm flex items-center">
              Open Calculator <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 p-12 rounded-[3rem] text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">Need a Custom Calculation?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">We are constantly adding new tools to our platform. If you have a specific financial question, reach out to us.</p>
        <a href="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all">
          Contact Support
        </a>
      </div>

      <AdSpace type="banner" />
    </Layout>
  );
}
