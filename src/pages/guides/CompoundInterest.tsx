import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function CompoundInterest() {
  return (
    <Layout>
      <SEO 
        title="Compound Interest Guide" 
        description="Understand the power of compound interest and how it can help you build long-term wealth."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Investing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Compound Interest Guide</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Albert Einstein famously called compound interest the "eighth wonder of the world." Understanding it is the key to building massive wealth over time.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>What is Compound Interest?</h2>
          <p>Compound interest is the interest you earn on both your original money and the interest you've already earned. It's essentially "interest on interest."</p>

          <h2>The Formula</h2>
          <p>The basic formula for compound interest is:</p>
          <div className="bg-slate-100 p-6 rounded-xl font-mono text-center my-8">
            A = P(1 + r/n)^(nt)
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>A:</strong> The final amount of money.</li>
            <li><strong>P:</strong> The principal (initial investment).</li>
            <li><strong>r:</strong> The annual interest rate (as a decimal).</li>
            <li><strong>n:</strong> The number of times interest is compounded per year.</li>
            <li><strong>t:</strong> The number of years the money is invested.</li>
          </ul>

          <AdSpace type="in-article" />

          <h2>The Power of Time</h2>
          <p>The most important factor in compound interest is <strong>time</strong>. The longer your money is invested, the more powerful the compounding effect becomes. This is why starting early is more important than the amount of money you start with.</p>

          <h2>Example: The Tale of Two Investors</h2>
          <p>Imagine two friends, Alex and Ben:</p>
          <ul>
            <li><strong>Alex</strong> starts investing $200 a month at age 25. By age 65, with an 8% annual return, Alex has approximately <strong>$620,000</strong>.</li>
            <li><strong>Ben</strong> waits until age 35 to start investing $200 a month. By age 65, with the same 8% return, Ben has only <strong>$270,000</strong>.</li>
          </ul>
          <p>Even though Ben only started 10 years later, he ended up with less than half of what Alex had. That's the power of time.</p>

          <h2>How to Maximize Compound Interest</h2>
          <ol>
            <li><strong>Start Early:</strong> Don't wait for the "perfect" time. Start now.</li>
            <li><strong>Be Consistent:</strong> Invest a set amount every month, regardless of market conditions.</li>
            <li><strong>Reinvest Dividends:</strong> Use your earnings to buy more shares, which will then earn more interest.</li>
            <li><strong>Minimize Fees:</strong> High fees can eat away at your compounding returns over time.</li>
          </ol>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">What is the Rule of 72?</p>
              <p className="text-slate-600">The Rule of 72 is a simple way to estimate how long it will take for your money to double. Divide 72 by your annual interest rate. For example, at an 8% return, your money will double in about 9 years (72 / 8 = 9).</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Does compound interest work for debt?</p>
              <p className="text-slate-600">Yes, unfortunately. Compound interest works against you when you have debt, especially high-interest credit card debt. This is why paying off debt quickly is so important.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
