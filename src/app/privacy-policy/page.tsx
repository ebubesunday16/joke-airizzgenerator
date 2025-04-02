import ContentContainer from '@/components/contentContainer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy | AI Joke Generator",
  description: "Privacy Policy for AI Joke Generator - Learn how we collect, use, and protect your information.",
};

const PrivacyPolicy = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-8 text-[#1C3144]">Privacy Policy</h1>
        <ContentContainer>
        <div className="mx-auto">
        

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">1. Introduction</h2>
            <p className="mb-4">
            Welcome to AI Joke Generator ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI Joke Generator service, which is a subsidiary of AI Rizz Generator.
            </p>
            <p>
            By accessing or using the AI Joke Generator, you consent to the practices described in this Privacy Policy.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">2. Information We Collect</h2>
            
            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">2.1 Information You Provide</h3>
            <p className="mb-4">
            We may collect information that you voluntarily provide when using our service, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
            <li>User preferences for joke categories</li>
            <li>Saved jokes</li>
            <li>Feedback on jokes</li>
            <li>Contact information if you reach out to us</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 text-[#1C3144]">2.2 Automatically Collected Information</h3>
            <p className="mb-4">
            When you access our service, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6">
            <li>Device information (type of device, operating system, browser type)</li>
            <li>Usage data (pages visited, time spent, features used)</li>
            <li>IP address</li>
            <li>Cookies and similar tracking technologies</li>
            </ul>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">3. How We Use Your Information</h2>
            <p className="mb-4">
            We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6">
            <li>To provide and improve our joke generation service</li>
            <li>To personalize your experience</li>
            <li>To monitor and analyze usage patterns</li>
            <li>To respond to your inquiries</li>
            <li>To maintain the security of our service</li>
            <li>To comply with legal obligations</li>
            </ul>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">4. Cookies and Tracking Technologies</h2>
            <p>
            We use cookies and similar tracking technologies to enhance your experience on our service. You can control cookies through your browser settings, but disabling them may impact your experience.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">5. Information Sharing and Disclosure</h2>
            <p className="mb-4">
            We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
            <li>With service providers who help us operate our service</li>
            <li>To comply with legal obligations</li>
            <li>In connection with a business transaction (e.g., merger or acquisition)</li>
            <li>With your consent or at your direction</li>
            </ul>
            <p>
            We do not sell your personal information to third parties.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">6. Data Security</h2>
            <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">7. Children's Privacy</h2>
            <p>
            Our service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">8. Your Choices and Rights</h2>
            <p className="mb-4">
            Depending on your location, you may have rights regarding your personal information. These may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
            <li>Accessing your information</li>
            <li>Correcting inaccurate information</li>
            <li>Deleting your information</li>
            <li>Restricting or objecting to processing</li>
            <li>Data portability</li>
            </ul>
            <p>
            To exercise these rights, please contact us using the information in Section 11.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">9. International Data Transfers</h2>
            <p>
            Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. We take appropriate measures to ensure your information is protected.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">10. Changes to This Privacy Policy</h2>
            <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1C3144]">11. Contact Us</h2>
            <p className="mb-4">
            If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-2">
            Email: <a href="mailto:privacy@aijokegenerator.com" className="text-blue-600 hover:underline">privacy@airizzgenerator.com</a>
            </p>
            
        </section>

        <div className="mt-16 border-t pt-8">
            <Link href="/" className="text-blue-600 hover:underline">
            &larr; Back to Joke Generator
            </Link>
        </div>
        </div>
        </ContentContainer>
        <p className="text-sm mt-8 text-gray-600">Last Updated: April 2, 2025</p>

    </div>
  );
};

export default PrivacyPolicy;