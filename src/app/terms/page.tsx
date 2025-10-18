import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Terms of Service | MyCo Network",
  description: "MyCo Network Terms of Service - Review our terms and conditions for using our consulting services.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Introduction
              </h2>
              <p>
                These Terms of Service ("Terms") constitute a legal agreement between you and MyConsulting Network ("Company," "we," "us," or "our"). By accessing or using our website, services, or engaging with our consultants, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                1. Definitions
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Services:</strong> All consulting, advisory, and talent-matching services provided by MyCo Network.
                </li>
                <li>
                  <strong>User:</strong> Any individual or entity accessing or using our website or services.
                </li>
                <li>
                  <strong>Consultant:</strong> Independent professionals in our network providing specialized services.
                </li>
                <li>
                  <strong>Project:</strong> Any engagement between you and our consultants.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                2. Use License
              </h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to access and use our website and services subject to these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use our services for any unlawful or fraudulent purpose</li>
                <li>Attempt to gain unauthorized access to our systems or content</li>
                <li>Interfere with or disrupt the integrity or performance of our website</li>
                <li>Remove, alter, or obscure any proprietary notices</li>
                <li>Use automated tools to scrape or collect data without permission</li>
                <li>Engage in any form of harassment, abuse, or discrimination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                3. Intellectual Property Rights
              </h2>
              <p>
                All content on our website, including text, graphics, logos, images, software, and code, is the property of MyCo Network or our content providers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, or distribute any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                4. Consultant Engagement
              </h2>
              <p>
                <strong>4.1 Selection and Match:</strong> We use reasonable efforts to match you with appropriate consultants based on your project requirements. However, we do not guarantee specific results or outcomes.
              </p>
              <p>
                <strong>4.2 Independent Contractors:</strong> All consultants in our network are independent contractors, not employees of MyCo Network. You are responsible for determining the suitability and qualifications of any consultant for your project.
              </p>
              <p>
                <strong>4.3 Direct Engagement:</strong> You agree not to directly engage consultants outside of MyCo Network without our involvement for a period of 12 months after introduction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                5. Payment Terms
              </h2>
              <p>
                <strong>5.1 Fees:</strong> Consulting fees are determined based on the scope of work and consultant rates. Payment terms will be specified in your engagement agreement.
              </p>
              <p>
                <strong>5.2 Payment Methods:</strong> We accept various payment methods as specified during the engagement process.
              </p>
              <p>
                <strong>5.3 Late Payment:</strong> Invoices are due within terms specified. Late payments may incur interest charges at the maximum rate allowed by law.
              </p>
              <p>
                <strong>5.4 Refunds:</strong> Refunds are subject to our refund policy and will be determined on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                6. Disclaimers and Limitations of Liability
              </h2>
              <p>
                <strong>6.1 As-Is Service:</strong> Our services are provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the services' quality, accuracy, or completeness.
              </p>
              <p>
                <strong>6.2 No Guarantee of Results:</strong> We do not guarantee specific business outcomes, revenue generation, or project success. Results depend on multiple factors, including implementation and market conditions.
              </p>
              <p>
                <strong>6.3 Limitation of Liability:</strong> To the maximum extent permitted by law, MyCo Network shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including lost profits or data loss.
              </p>
              <p>
                <strong>6.4 Maximum Liability:</strong> Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                7. Confidentiality
              </h2>
              <p>
                <strong>7.1 Confidential Information:</strong> You agree to maintain the confidentiality of any proprietary information, business plans, financial data, or trade secrets shared during engagements.
              </p>
              <p>
                <strong>7.2 Consultant Obligations:</strong> Our consultants are bound by confidentiality agreements and will not disclose your information to competitors or third parties without authorization.
              </p>
              <p>
                <strong>7.3 Permitted Disclosures:</strong> We may disclose information as required by law, court order, or government agency, and to our service providers under confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                8. Termination
              </h2>
              <p>
                <strong>8.1 Termination by You:</strong> You may terminate your engagement with us in accordance with the terms specified in your engagement agreement.
              </p>
              <p>
                <strong>8.2 Termination by Us:</strong> We reserve the right to terminate services if you violate these Terms, engage in fraudulent activity, or fail to pay required fees.
              </p>
              <p>
                <strong>8.3 Effect of Termination:</strong> Upon termination, your rights to use our services immediately cease, though sections regarding payment, confidentiality, and liability shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                9. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless MyCo Network, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your violation of these Terms</li>
                <li>Your use of our services</li>
                <li>Your violation of any law or third-party rights</li>
                <li>Any content you provide or actions you take using our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                10. Dispute Resolution
              </h2>
              <p>
                <strong>10.1 Informal Resolution:</strong> Before initiating formal proceedings, you agree to attempt to resolve disputes through good faith negotiation.
              </p>
              <p>
                <strong>10.2 Binding Arbitration:</strong> Any dispute arising from or related to these Terms shall be resolved through binding arbitration in accordance with American Arbitration Association (AAA) rules, rather than in court.
              </p>
              <p>
                <strong>10.3 Class Action Waiver:</strong> You agree not to participate in any class action or representative proceeding against MyCo Network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                11. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Significant modifications will be communicated to you, and your continued use of our services constitutes acceptance of modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                12. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                13. Entire Agreement
              </h2>
              <p>
                These Terms, together with any applicable engagement agreements, constitute the entire agreement between you and MyCo Network and supersede all prior negotiations, agreements, and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                14. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or if not possible, severed, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                15. Contact Information
              </h2>
              <p>
                If you have questions or concerns regarding these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold">MyConsulting Network</p>
                <p>Email: <a href="mailto:legal@myconsultingnetwork.com" className="text-primary hover:underline">legal@myconsultingnetwork.com</a></p>
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
