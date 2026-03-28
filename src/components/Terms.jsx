import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, Users } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#fffcfc] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-black text-slate-950 mb-6">
            Terms of <span className="text-red-600">Service</span>
          </h1>
          <p className="text-xl text-slate-600">
            By using BookShelf, you agree to these terms that protect both your rights and our community.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <FileText className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-950">Service Agreement</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              BookShelf provides digital library services including:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span>Access to curated digital literature and manuscripts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span>Personal reading experience with bookmarks and preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span>Community features and newsletter subscriptions</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertCircle className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-950">User Responsibilities</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              As a BookShelf user, you agree to:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span>Use the service for personal, non-commercial purposes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span>Respect copyright and intellectual property rights</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span>Maintain account security and not share credentials</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 mt-1" size={20} />
                <span>Not attempt to reverse engineer or exploit the service</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Scale className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-950">Content & Copyright</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              All content on BookShelf is protected by copyright law. Users may access content for personal reading 
              but may not reproduce, distribute, or create derivative works without explicit permission. We respect 
              intellectual property rights and respond to DMCA takedown notices promptly.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Users className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-950">Account Termination</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms. Users may also 
              request account deletion at any time. Upon termination, all personal data will be removed from 
              our systems within 30 days, except as required by law.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-red-50 p-6 rounded-xl border border-red-200"
          >
            <p className="text-sm text-red-800">
              <strong>Last Updated:</strong> March 28, 2026 | 
              <strong> Contact:</strong> legal@bookshelf.com | 
              <strong> Governing Law:</strong> United States Digital Services Act
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
