import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Hash, Globe } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-[#fffcfc] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header: Editorial Masthead Style */}
        <div className="border-b-8 border-slate-950 pb-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-red-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6"
          >
            <Hash size={12} />
            <span>Correspondence // Volume 04</span>
          </motion.div>
          <h1 className="text-7xl md:text-6xl font-black uppercase tracking-tighter leading-none text-slate-950">
            Get in <span className="text-red-600 italic font-serif lowercase">touch.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Editorial Info Blocks */}
          <div className="lg:col-span-5 space-y-16">
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mb-6">The Bureau</h3>
              <p className="text-2xl font-serif italic text-slate-500 leading-relaxed">
                "Whether you are looking for a rare manuscript or wish to contribute to the archive, our doors are always open to the curious."
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <MapPin size={12} className="text-red-600" /> Location
                </span>
                <p className="text-sm font-bold uppercase tracking-tight leading-relaxed">
                  124 Literary Row<br />Archive District<br />London, UK
                </p>
              </div>
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <Globe size={12} className="text-red-600" /> Digital
                </span>
                <p className="text-sm font-bold uppercase tracking-tight">
                  hello@bookshelf.com<br />@bookshelf_archive
                </p>
              </div>
            </div>

            {/* Brutalist "Office Hours" Card */}
            <div className="bg-slate-950 p-8 text-white shadow-[12px_12px_0px_rgba(220,38,38,1)] mt-12">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-red-500">Reading Hours</h4>
              <ul className="text-xs space-y-2 font-bold tracking-widest uppercase">
                <li className="flex justify-between"><span>Mon — Fri</span> <span>09:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Sat — Sun</span> <span>11:00 - 15:00</span></li>
              </ul>
            </div>
          </div>

          {/* Right Side: The "Stationery" Form */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-100 p-8 md:p-16 shadow-[24px_24px_0px_rgba(0,0,0,0.02)]">
            <form className="space-y-12">
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-red-600 transition-colors">
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="IDENTITY"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-sm font-black tracking-widest uppercase focus:border-red-600 outline-none transition-colors placeholder:text-slate-100"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-red-600 transition-colors">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="COMMUNICATION@EMAIL.COM"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-sm font-black tracking-widest uppercase focus:border-red-600 outline-none transition-colors placeholder:text-slate-100"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-red-600 transition-colors">
                  Inquiry
                </label>
                <textarea 
                  rows="5"
                  placeholder="WHAT IS ON YOUR MIND?"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-sm font-black tracking-widest uppercase focus:border-red-600 outline-none transition-colors resize-none placeholder:text-slate-100"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group flex items-center gap-4 bg-slate-950 text-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-red-600 transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.1)] active:shadow-none translate-y-0 active:translate-y-1"
              >
                Dispatch Message <Send size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;