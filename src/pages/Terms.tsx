import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <Layout>
      <SEO title="Terms & Conditions" description="The terms and conditions for using the Aron Financial Intelligence website and services." />
      <div className="max-w-4xl mx-auto markdown-body">
        <h1>Terms & Conditions</h1>
        <p className="text-slate-500 italic">Last Updated: March 1, 2026</p>

        <p>Welcome to Aron Financial Intelligence. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>Your use of this website constitutes your acceptance of these terms. If you do not agree with any part of these terms, you must not use our website.</p>

        <h2>2. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and images, is the property of Aron Financial Intelligence and is protected by intellectual property laws. You may not reproduce or distribute any content without our prior written consent.</p>

        <h2>3. Use of Content</h2>
        <p>The content provided on this website is for educational and informational purposes only. It does not constitute professional financial, investment, or legal advice. You should consult with a qualified professional before making any financial decisions.</p>

        <h2>4. User Conduct</h2>
        <p>You agree to use our website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use of the site. Prohibited behavior includes harassing or causing distress to any person.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Aron Financial Intelligence and its owner, Mich Ian Aron, shall not be liable for any direct, indirect, or consequential damages arising out of your use of this website or the information provided herein.</p>

        <h2>6. External Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites. The inclusion of any link does not imply endorsement by us.</p>

        <h2>7. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of Uganda. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Uganda.</p>

        <p>For any inquiries regarding these terms, please contact us at arodex@gmail.com.</p>
      </div>
    </Layout>
  );
}
