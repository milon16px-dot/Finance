import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Disclaimer() {
  return (
    <Layout>
      <SEO title="Financial Disclaimer" description="Important financial disclaimer regarding the content provided on Aron Financial Intelligence." />
      <div className="max-w-4xl mx-auto markdown-body">
        <h1>Financial Disclaimer</h1>
        <p className="text-slate-500 italic">Last Updated: March 1, 2026</p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-xl">
          <p className="font-bold text-amber-800 mb-2">Important Notice:</p>
          <p className="text-amber-700 m-0">The information provided on this website is for educational and informational purposes only and should not be construed as professional financial advice.</p>
        </div>

        <h2>1. No Professional Advice</h2>
        <p>Aron Financial Intelligence is an educational platform. Mich Ian Aron is not a licensed financial advisor, broker, or tax professional. The content on this site is based on personal research and experience and is intended to provide general knowledge about personal finance and investing.</p>

        <h2>2. Investment Risks</h2>
        <p>Investing involves risk, including the potential loss of principal. Past performance is not indicative of future results. You should carefully consider your financial situation and consult with a qualified financial advisor before making any investment decisions.</p>

        <h2>3. Accuracy of Information</h2>
        <p>While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on this website.</p>

        <h2>4. No Endorsement</h2>
        <p>References to specific stocks, funds, or financial products are for illustrative purposes only and do not constitute an endorsement or recommendation to buy or sell any security.</p>

        <h2>5. Personal Responsibility</h2>
        <p>You are solely responsible for your own financial decisions. Aron Financial Intelligence and Mich Ian Aron shall not be held liable for any losses or damages resulting from your reliance on the information provided on this website.</p>

        <h2>6. Affiliate Disclosure</h2>
        <p>We may include affiliate links in some of our content. This means we may earn a small commission if you make a purchase through these links, at no additional cost to you. This helps support our mission to provide free financial education.</p>

        <p>If you have any questions regarding this disclaimer, please contact us at arodex@gmail.com or call +256 781 118 149.</p>
      </div>
    </Layout>
  );
}
