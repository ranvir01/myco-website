import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Privacy Policy | MyCo Network",
  description: "MyCo Network Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Introduction
              </h2>
              <p>
                MyConsulting Network ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal information in connection with our website, services, and business operations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                1. Information We Collect
              </h2>
              <p>We collect information in several ways:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Information You Provide:</strong> Name, email address, phone number, company name, job title, and project details when you contact us or fill out forms.
                </li>
                <li>
                  <strong>Automatically Collected:</strong> IP address, browser type, pages visited, time spent on pages, referring website, and other usage data through cookies and analytics tools.
                </li>
                <li>
                  <strong>Third-Party Information:</strong> Information from business partners, marketing partners, and publicly available sources to verify your identity and improve our services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our consulting services</li>
                <li>Process and respond to your inquiries and requests</li>
                <li>Send you service-related announcements and updates</li>
                <li>Personalize your experience and tailor content to your interests</li>
                <li>Conduct market research and analytics</li>
                <li>Comply with legal obligations and enforce our agreements</li>
                <li>Prevent fraud and ensure security of our platform</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>With Consultants:</strong> We share relevant project information with consultants in our network to provide services you've requested.
                </li>
                <li>
                  <strong>Service Providers:</strong> We share information with third-party vendors who assist us in operating our website and conducting business (payment processors, email services, hosting providers).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We disclose information when required by law, court order, or government agency.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of merger, acquisition, bankruptcy, or sale of assets.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We share information when you explicitly consent to such sharing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                5. Your Privacy Rights
              </h2>
              <p>
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> You have the right to access your personal information.
                </li>
                <li>
                  <strong>Correction:</strong> You can request correction of inaccurate information.
                </li>
                <li>
                  <strong>Deletion:</strong> You may request deletion of your information, subject to legal obligations.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can opt out of marketing communications at any time.
                </li>
                <li>
                  <strong>Data Portability:</strong> You may request a copy of your information in a portable format.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:privacy@myconsultingnetwork.com" className="text-primary font-semibold hover:underline">
                  privacy@myconsultingnetwork.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Note that disabling cookies may affect certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                7. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                8. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we've collected information from a child under 18, we will delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                9. Retention of Information
              </h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You can request deletion at any time, subject to legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                10. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to, and processed in, countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                11. California Privacy Rights (CCPA)
              </h2>
              <p>
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to know what personal information is collected and used</li>
                <li>Right to delete personal information collected from you</li>
                <li>Right to opt out of the sale or sharing of your personal information</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the bottom of this policy or by sending you notice. Your continued use of our services constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                13. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold">MyConsulting Network</p>
                <p>Email: <a href="mailto:privacy@myconsultingnetwork.com" className="text-primary hover:underline">privacy@myconsultingnetwork.com</a></p>
                <p>Email: <a href="mailto:info@myconsultingnetwork.com" className="text-primary hover:underline">info@myconsultingnetwork.com</a></p>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
