import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Cookie } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#fffcfc] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-black text-slate-950 mb-6">
            Privacy <span className="text-red-600">Policy</span>
          </h1>
          <p className="text-xl text-slate-600">
            Your privacy is our priority. We believe in transparency and control over your personal information.
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
                <Shield className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-950">Data Collection</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect minimal data necessary to provide our digital library services. This includes:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Lock className="text-red-500 mt-1" size={20} />
                <span>Email address for newsletter subscription and account management</span>
              </li>
              <li className="flex items-start gap-3">
                <Database className="text-red-500 mt-1" size={20} />
                <span>Reading preferences and bookmark data (stored securely)</span>
              </li>
              <li className="flex items-start gap-3">
                <Eye className="text-red-500 mt-1" size={20} />
                <span>Usage analytics to improve our service experience</span>
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
                <UserCheck className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-950">Your Rights</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              You have complete control over your data:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Lock className="text-red-500 mt-1" size={20} />
                <span>Access all your personal data at any time</span>
              </li>
              <li className="flex items-start gap-3">
                <Database className="text-red-500 mt-1" size={20} />
                <span>Request deletion of your account and all associated data</span>
              </li>
              <li className="flex items-start gap-3">
                <Eye className="text-red-500 mt-1" size={20} />
                <span>Opt-out of analytics and marketing communications</span>
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
                <Cookie className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-950">Cookies & Tracking</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We use minimal cookies essential for site functionality and user experience. No third-party tracking 
              cookies are used. Your reading habits and personal information remain confidential and are never 
              shared with external parties without your explicit consent.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-red-50 p-6 rounded-xl border border-red-200"
          >
            <p className="text-sm text-red-800">
              <strong>Last Updated:</strong> March 28, 2026 | 
              <strong> Contact:</strong> privacy@bookshelf.com
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
