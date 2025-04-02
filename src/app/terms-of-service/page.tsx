import ContentContainer from '@/components/contentContainer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms of Service | AI Joke Generator",
  description: "Terms of Service for AI Joke Generator - Read our terms and conditions before using our service.",
};

const TermsOfService = () => {
  return (
    <div className="mx-auto space-y-16">
      <h1 className="text-3xl font-bold mb-8 text-[#1C3144]">Terms of Service</h1>
      <ContentContainer>

      <div>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">1. Agreement to Terms</h2>
            <p>
            By accessing or using the AI Joke Generator service ("Service"), a subsidiary of AI Rizz Generator, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you should not use the Service.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">2. Description of Service</h2>
            <p>
            AI Joke Generator provides AI-generated jokes with setups and punchlines across various categories. The Service is provided "as is" and "as available" without warranties of any kind.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">3. User Accounts</h2>
            
            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">3.1 Account Creation</h3>
            <p className="mb-4">
            You may need to create an account to access certain features of our Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
            </p>

            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">3.2 Account Termination</h3>
            <p>
            We reserve the right to suspend or terminate your account at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">4. Acceptable Use</h2>
            
            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">4.1 Prohibited Activities</h3>
            <p className="mb-4">
            You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
            <li>Use the Service for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to any portion of the Service</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Collect or harvest user data without permission</li>
            <li>Use the Service to generate, post, or share offensive, harmful, or inappropriate content</li>
            <li>Reproduce, duplicate, copy, sell, or resell any portion of the Service</li>
            <li>Use automated methods to access or use the Service</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">4.2 Content Restrictions</h3>
            <p>
            Our Service generates jokes automatically. While we strive to provide appropriate content, we cannot guarantee that all generated jokes will be suitable for all audiences. Users should exercise discretion.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">5. Intellectual Property</h2>
            
            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">5.1 Our Intellectual Property</h3>
            <p className="mb-4">
            The Service, including its content, features, and functionality, is owned by us and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">5.2 User Content</h3>
            <p>
            By using our Service to generate jokes, you acknowledge that:
            </p>
            <ul className="list-disc pl-6">
            <li>AI-generated jokes may be similar to content created for other users</li>
            <li>You are granted a license to use the jokes generated for you for personal, non-commercial purposes</li>
            <li>For commercial use of generated jokes, separate licensing may be required</li>
            </ul>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">6. Disclaimers</h2>
            
            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">6.1 Service Disclaimers</h3>
            <p className="mb-4 uppercase text-sm">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">6.2 Content Disclaimers</h3>
            <p className="mb-4">
            We do not guarantee that jokes generated by our Service will be:
            </p>
            <ul className="list-disc pl-6">
            <li>Completely original</li>
            <li>Appropriate for all audiences</li>
            <li>Free from potentially offensive content</li>
            <li>Of any particular quality or style</li>
            </ul>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">7. Limitation of Liability</h2>
            <p className="uppercase text-sm">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">8. Indemnification</h2>
            <p>
            You agree to indemnify, defend, and hold harmless us, our affiliates, and our respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses arising out of or related to your use of the Service or violation of these Terms.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">9. Changes to Terms</h2>
            <p>
            We may modify these Terms at any time. The updated version will be effective when posted. Your continued use of the Service after changes indicates your acceptance of the modified Terms.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">10. Termination</h2>
            <p>
            We may terminate or suspend your access to the Service immediately, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">11. Governing Law</h2>
            <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">12. Dispute Resolution</h2>
            <p>
            Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization] in [Your Jurisdiction].
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">13. Severability</h2>
            <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">14. Entire Agreement</h2>
            <p>
            These Terms constitute the entire agreement between you and us regarding the Service and supersede all prior agreements and understandings.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">15. Contact Information</h2>
            <p className="mb-4">
            For questions about these Terms, please contact us at:
            </p>
            <p className="mb-2">
            Email: <a href="mailto:legal@aijokegenerator.com" className="text-blue-600 hover:underline">legal@airizzgenerator.com</a>
            </p>
            
        </section>
      </div>
      <div className="mt-16 border-t pt-8">
            <Link href="/" className="text-blue-600 hover:underline">
            &larr; Back to Joke Generator
            </Link>
        </div>
      </ContentContainer>
      <p className="text-sm mt-8 text-gray-600">Last Updated: April 2, 2025</p>


      
    </div>
  );
};

export default TermsOfService;