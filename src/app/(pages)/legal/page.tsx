'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle, FiShield, FiAlertCircle } from 'react-icons/fi';
import HeroImage from '@/components/HeroImage';
import { useState } from 'react';

export default function Legal() {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'disclaimer'>('terms');

  const tabs = [
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'disclaimer', label: 'Disclaimer' },
  ];

  return (
    <div className="flex flex-col">
      <HeroImage
        title="Legal & Policies"
        subtitle="Terms, Privacy Policy, and Disclaimer"
        imageUrl="/images/sarvmaan-office2.webp"
        imageAlt="Legal & Policies"
      />

      {/* Tab Navigation */}
      <section className="py-6 md:py-12 bg-white sticky top-20 z-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'terms' | 'privacy' | 'disclaimer')}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            {/* TERMS & CONDITIONS */}
            {activeTab === 'terms' && (
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                    <FiCheckCircle className="text-secondary" size={32} />
                    Terms & Conditions
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    Last Updated: August 2026
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">1. Introduction</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Welcome to Sarvmaan Home Superhero ("Company," "we," "us," or "our"). These Terms & Conditions govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">2. Services Description</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      Sarvmaan Home Superhero provides interior design and execution services including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>Modular kitchen design and installation</li>
                      <li>Full home interior design and execution</li>
                      <li>2D & 3D design visualization</li>
                      <li>Material consultation and sourcing</li>
                      <li>Carpentry, painting, and wall finishes</li>
                      <li>Commercial interior solutions</li>
                      <li>Home renovation and makeover services</li>
                      <li>All services are subject to availability and project assessment</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">3. Project Quotations & Payments</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>All quotations are valid for 30 days from the date of submission</li>
                      <li>Quotations are subject to site inspection and detailed specification confirmation</li>
                      <li>Pricing includes labor, materials, installation, and allied works as specified</li>
                      <li>Payment terms: 30% advance, 40% mid-project, 30% on completion</li>
                      <li>GST and applicable taxes are applicable as per government rates</li>
                      <li>Revisions after contract signing may incur additional charges</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">4. Project Timeline</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>Timelines provided are estimates based on scope and availability</li>
                      <li>Delays due to client requirements, material unavailability, or force majeure events are not our responsibility</li>
                      <li>The company shall not be liable for penalties or claims due to project delays</li>
                      <li>Milestone tracking is provided as per project agreement</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">5. Intellectual Property</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      All designs, 3D renderings, and materials created by Sarvmaan Home Superhero remain the intellectual property of the company unless explicitly agreed otherwise in writing. Clients receive usage rights for personal use only. Reproduction, modification, or commercial use without written permission is prohibited.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">6. Cancellation & Refund Policy</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>Cancellations must be communicated in writing within 7 days of project commencement</li>
                      <li>Advance payment is non-refundable after design finalization</li>
                      <li>Material costs incurred cannot be refunded or returned</li>
                      <li>50% of remaining advance may be adjusted towards future projects within 1 year</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">7. Liability & Limitations</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>The company is not liable for structural issues, external damage, or third-party claims</li>
                      <li>All materials used comply with ISI standards and quality guidelines</li>
                      <li>Warranty on materials is as per manufacturer specifications</li>
                      <li>Warranty on workmanship is limited to 6 months for visible defects</li>
                      <li>The company's liability is limited to the amount paid for services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">8. Client Responsibilities</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>Clients must provide access to the site during working hours</li>
                      <li>Clients are responsible for securing valuables and personal items</li>
                      <li>Site safety remains the responsibility of the property owner</li>
                      <li>Clients must inform of any pre-existing conditions or structural issues</li>
                      <li>Approval of designs and materials must be provided in writing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">9. Governing Law</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">10. Modifications</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Sarvmaan Home Superhero reserves the right to modify these terms at any time. Changes will be posted on this page with an updated "Last Updated" date.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PRIVACY POLICY */}
            {activeTab === 'privacy' && (
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                    <FiShield className="text-secondary" size={32} />
                    Privacy Policy
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    Last Updated: August 2026
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">1. Introduction</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      At Sarvmaan Home Superhero, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">2. Information We Collect</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      We collect information in the following ways:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li><strong>Personal Information:</strong> Name, email, phone number, address, project requirements</li>
                      <li><strong>Project Details:</strong> Site photos, measurements, specifications, design preferences</li>
                      <li><strong>Payment Information:</strong> Bank details, transaction records (processed securely)</li>
                      <li><strong>Website Usage:</strong> IP address, device type, browser information, pages visited</li>
                      <li><strong>Communication Records:</strong> Emails, messages, and consultation notes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">3. How We Use Your Information</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>To provide interior design and execution services</li>
                      <li>To process payments and maintain billing records</li>
                      <li>To send project updates, quotations, and service-related communications</li>
                      <li>To improve our website and services</li>
                      <li>To respond to inquiries and customer support requests</li>
                      <li>To send marketing communications (only with your consent)</li>
                      <li>To comply with legal and regulatory requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">4. Information Sharing</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      We do not sell, trade, or rent your personal information to third parties. However, we may share information with:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>Project contractors and suppliers (only with your consent)</li>
                      <li>Payment processors and financial institutions for transaction processing</li>
                      <li>Government authorities when required by law</li>
                      <li>Service providers assisting in our operations (under confidentiality agreements)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">5. Data Security</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>We implement industry-standard encryption and security measures</li>
                      <li>All personal and financial information is protected with SSL encryption</li>
                      <li>Access to sensitive data is restricted to authorized personnel only</li>
                      <li>Regular security audits are conducted to ensure data protection</li>
                      <li>No method of internet transmission is 100% secure; we cannot guarantee absolute security</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">6. Cookies & Tracking</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Our website uses cookies to enhance user experience and track website analytics. You can control cookie settings through your browser. Disabling cookies may affect website functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">7. Your Rights</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>Right to access: You can request a copy of your personal data</li>
                      <li>Right to correction: You can update or correct inaccurate information</li>
                      <li>Right to deletion: You can request removal of your data</li>
                      <li>Right to withdraw consent: You can opt-out of marketing communications</li>
                      <li>To exercise these rights, contact us at contact@sarvmaan.com</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">8. Data Retention</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      We retain personal data for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Project records are maintained for a minimum of 5 years for warranty and legal compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">9. Third-Party Links</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">10. Contact Us</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      For privacy-related inquiries, contact us at:
                    </p>
                    <div className="mt-3 text-sm md:text-base text-gray-700 space-y-1">
                      <p><strong>Email:</strong> contact@sarvmaan.com</p>
                      <p><strong>Phone:</strong> +91 74477 22255</p>
                      <p><strong>Address:</strong> Bavdhan, Pune, Near Chaundhe Lake</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DISCLAIMER */}
            {activeTab === 'disclaimer' && (
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                    <FiAlertCircle className="text-secondary" size={32} />
                    Disclaimer
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    Last Updated: August 2026
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">1. General Disclaimer</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      This website and all information, materials, and services provided by Sarvmaan Home Superhero are provided on an "as-is" basis without warranties of any kind, either express or implied.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">2. Professional Advice Limitation</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      All design recommendations and suggestions provided by our team are professional opinions based on industry standards. However, final design decisions and project execution are subject to site conditions, building regulations, and local authority approvals.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">3. Site Conditions & Structural Issues</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>We are not responsible for pre-existing structural issues, dampness, or damage</li>
                      <li>Clients must disclose all known structural problems or damages before project commencement</li>
                      <li>Additional repairs or modifications required due to site conditions will be chargeable separately</li>
                      <li>No liability is accepted for issues that arise post-project completion</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">4. Material & Manufacturer Warranty</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>All materials used are sourced from reputed manufacturers and comply with ISI standards</li>
                      <li>Manufacturer warranty is as per their specifications and terms</li>
                      <li>We provide warranty on workmanship for 6 months from project completion</li>
                      <li>Warranty covers visible defects only; normal wear and tear is excluded</li>
                      <li>Improper maintenance or use by clients voids our warranty</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">5. Design & Color Accuracy</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>3D renderings are photorealistic representations but may vary from final execution</li>
                      <li>Actual colors, textures, and finishes may differ due to lighting and material properties</li>
                      <li>Small variations in measurements, dimensions, or proportions are acceptable</li>
                      <li>Client approval of physical samples before execution is recommended</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">6. Safety & Compliance</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>All work complies with applicable building codes and safety standards</li>
                      <li>Clients are responsible for obtaining necessary permissions and NOCs from authorities</li>
                      <li>We are not responsible for violations of building bye-laws or structural regulations</li>
                      <li>Safety on-site remains the responsibility of the property owner</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">7. Timeline Disclaimer</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>Project timelines are estimates and not guaranteed</li>
                      <li>Delays due to material unavailability, weather, labor, or client-requested changes are not our responsibility</li>
                      <li>The company is not liable for penalties, claims, or losses due to project delays</li>
                      <li>Force majeure events (pandemic, natural disasters, etc.) exempt us from timeline obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">8. Limitation of Liability</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      In no event shall Sarvmaan Home Superhero be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or business interruption, arising from or related to the use of our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">9. Third-Party Content & Links</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 ml-2">
                      <li>We are not responsible for third-party websites linked from our site</li>
                      <li>External content, testimonials, and reviews are provided for reference only</li>
                      <li>We do not endorse or guarantee accuracy of third-party information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">10. Testimonials & Case Studies</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Project showcases, testimonials, and case studies represent individual client experiences. Results may vary based on specific project requirements, budget, and site conditions. We do not guarantee similar outcomes for all projects.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">11. Photo & Portfolio Usage</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Clients grant Sarvmaan Home Superhero permission to photograph projects for portfolio, testimonials, and marketing purposes unless explicitly opted out in writing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">12. Disclaimer Modifications</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Sarvmaan Home Superhero reserves the right to modify this disclaimer at any time. Continued use of services implies acceptance of updated disclaimers.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      <strong>Important:</strong> By engaging Sarvmaan Home Superhero services, you acknowledge that you have read, understood, and agree to all terms, conditions, and disclaimers outlined in this document and our Terms & Conditions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-light rounded-xl p-6 md:p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Questions About Our Policies?</h2>
            <p className="text-gray-700 text-sm md:text-base mb-6">
              Contact us for any clarifications regarding our Terms, Privacy Policy, or Disclaimer.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 md:px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition text-sm md:text-base"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
