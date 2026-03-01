import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" description="Our commitment to protecting your privacy and personal data at Aron Financial Intelligence." />
      <div className="max-w-4xl mx-auto markdown-body">
        <h1>Privacy Policy</h1>
        <p className="text-slate-500 italic">Last Updated: March 1, 2026</p>
        
        <p>At Aron Financial Intelligence, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data when you visit our website.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect personal information such as your name and email address when you subscribe to our newsletter or contact us through our forms. We also collect non-personal information such as your IP address, browser type, and pages visited to improve our website's performance.</p>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used to provide you with financial education content, respond to your inquiries, and improve our services. We do not sell or rent your personal information to third parties.</p>

        <h2>3. Cookies and Tracking</h2>
        <p>We use cookies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies in your browser settings, although this may affect some features of our site.</p>

        <h2>4. Third-Party Services</h2>
        <p>We use third-party services such as Google AdSense to display advertisements. These services may use cookies and web beacons to collect information about your visits to this and other websites to provide relevant ads.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at arodex@gmail.com.</p>

        <h2>6. Security</h2>
        <p>We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

        <p>If you have any questions about our Privacy Policy, please contact us at +256 781 118 149.</p>
      </div>
    </Layout>
  );
}
