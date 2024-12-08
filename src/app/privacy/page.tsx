"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFE8F7] to-[#FFD6EF]">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to Senseflows ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at senseflows.fun.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-gray-600">
                We collect information that you provide directly to us, including but not limited to your name, email address, company information, and payment details. We also automatically collect certain information about your device and usage of our platform through cookies and similar technologies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the collected information to provide, maintain, and improve our services, process your transactions, send you administrative information, and communicate with you about our products and services. We may also use your information for analytics and research purposes to enhance user experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600">
                We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our platform, conducting our business, or servicing you. These parties are bound by confidentiality agreements and are prohibited from using your information for any other purpose.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-600">
                You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications and choose whether to accept cookies. To exercise these rights, please contact us at privacy@senseflows.fun.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Cookie Policy</h2>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences. Some cookies are essential for the platform's functionality, while others are used for analytics and marketing purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us at privacy@senseflows.fun.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. Third-Party Links</h2>
              <p className="text-gray-600">
                Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">12. Marketing Communications</h2>
              <p className="text-gray-600">
                With your consent, we may send you marketing communications about our products and services. You can opt-out of these communications at any time by clicking the "unsubscribe" link in our emails or contacting us at support@senseflows.fun.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">13. Legal Basis for Processing</h2>
              <p className="text-gray-600">
                We process your personal information based on various legal grounds, including your consent, contract performance, legal obligations, and our legitimate business interests. You have the right to withdraw your consent at any time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">14. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our platform and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions, concerns, or requests related to this Privacy Policy or our privacy practices, please contact us at:<br /><br />
                Senseflows<br />
                Email: privacy@senseflows.fun<br />
                Website: https://senseflows.fun
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
