import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, Twitter, Instagram, Github, 
  ArrowUp, Send, CheckCircle2, Feather, Mail
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] text-white pt-24 pb-12 overflow-hidden border-t-8 border-red-600">
       {/* Editorial Ticker Tape */}
      <div className="absolute top-0 left-0 w-full bg-red-600 py-2 overflow-hidden whitespace-nowrap border-b border-black/20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-10 text-[10px] font-black uppercase tracking-[0.5em] text-white italic"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i}>Volume 04 Edition // New Manuscripts Added Daily // Explore the Archive //</span>
          ))}
        </motion.div>
      </div>
      {/* Massive Background Text */}
      <div className="absolute top-0 right-0 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[25rem] font-black leading-none -translate-y-20 translate-x-20 tracking-tighter">READ</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Newsletter Section: Editorial Focus */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                <Feather size={20} />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">
                Book<span className="text-red-600 italic font-serif lowercase">shelf</span>
              </span>
            </Link>
            
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-red-50">Subscribe to the Archive.</h3>
            <p className="text-gray-500 mb-8 max-w-sm text-lg leading-relaxed font-light">
              Get the weekly dispatch on rare finds, author interviews, and digital literature trends.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative group max-w-md">
              <div className="relative flex items-center border-b-2 border-white/20 focus-within:border-red-600 transition-colors py-2">
                <Mail className="text-gray-500 mr-3" size={20} />
                <input
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold tracking-[0.2em] outline-none uppercase placeholder:text-gray-700"
                  required
                />
                <motion.button 
                  whileHover={{ x: 5 }}
                  type="submit"
                  className="text-red-600 font-black tracking-widest text-xs flex items-center gap-2 group-hover:text-red-500"
                >
                  {isSubscribed ? "CONFIRMED" : "JOIN US"} 
                  {isSubscribed ? <CheckCircle2 size={16} /> : <Send size={16} />}
                </motion.button>
              </div>
            </form>
          </div>

          {/* Links: Clean Columns */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-red-600 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white hover:italic transition-all text-lg font-medium"
                >
                  Archive
                </Link>
              </li>
              <li>
                <Link 
                  to="/books" 
                  className="text-gray-400 hover:text-white hover:italic transition-all text-lg font-medium"
                >
                  The Library
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white hover:italic transition-all text-lg font-medium"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white hover:italic transition-all text-lg font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-red-600 mb-8">Curated</h4>
            <ul className="space-y-4">
              {['New Releases', 'Classic Lit', 'Philosophy', 'Sci-Fi'].map((cat) => (
                <li key={cat}>
                  <Link 
                    to={`/books?category=${cat}`} 
                    className="text-gray-400 hover:text-white hover:italic transition-all text-lg font-medium"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons: Neobrutalist Blocks */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-red-600 mb-8">Follow</h4>
            <div className="grid grid-cols-2 gap-3">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
                  className="h-12 border-2 border-white/10 flex items-center justify-center hover:border-red-600 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: High Contrast */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase">
            © 2026 BookShelf Digital Archive. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-gray-600 hover:text-red-600 transition uppercase">Privacy</a>
              <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-gray-600 hover:text-red-600 transition uppercase">Terms</a>
            </div>
            
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="w-12 h-12 bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/20"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;