import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function ROI() {
  return (
    <Layout>
      <SEO 
        title="Understanding ROI (Return on Investment)" 
        description="A clear explanation of Return on Investment and how to calculate it for any asset or business venture."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Investing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Understanding ROI</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Return on Investment (ROI) is the most common metric used to evaluate the efficiency of an investment. Knowing how to calculate it is essential for any investor.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>What is ROI?</h2>
          <p>ROI is a performance measure used to evaluate the efficiency or profitability of an investment. It measures the amount of return on an investment relative to the investment's cost.</p>

          <h2>The ROI Formula</h2>
          <p>The formula for ROI is simple:</p>
          <div className="bg-slate-100 p-6 rounded-xl font-mono text-center my-8">
            ROI = (Current Value - Cost of Investment) / Cost of Investment * 100
          </div>

          <AdSpace type="in-article" />

          <h2>Example Calculation</h2>
          <p>Imagine you buy a stock for $1,000 and sell it a year later for $1,200.</p>
          <ul>
            <li><strong>Gain:</strong> $1,200 - $1,000 = $200</li>
            <li><strong>ROI:</strong> ($200 / $1,000) * 100 = <strong>20%</strong></li>
          </ul>

          <h2>Limitations of ROI</h2>
          <p>While ROI is a useful metric, it has some limitations:</p>
          <ul>
            <li><strong>Time Factor:</strong> ROI doesn't account for how long the investment was held. A 20% ROI over one year is much better than a 20% ROI over ten years.</li>
            <li><strong>Risk:</strong> ROI doesn't account for the risk involved in the investment.</li>
            <li><strong>Costs:</strong> Simple ROI calculations often ignore taxes, fees, and maintenance costs.</li>
          </ul>

          <h2>Annualized ROI</h2>
          <p>To compare investments held for different periods, investors use Annualized ROI. This calculates the average yearly return, allowing for a "fair" comparison between a short-term stock trade and a long-term real estate investment.</p>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">What is a "good" ROI?</p>
              <p className="text-slate-600">A "good" ROI depends on the asset class and the risk involved. For the stock market, a long-term average ROI of 7-10% (after inflation) is considered good.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Does ROI include dividends?</p>
              <p className="text-slate-600">Yes, a comprehensive ROI calculation (often called "Total Return") should include both capital gains and any dividends or interest received.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
