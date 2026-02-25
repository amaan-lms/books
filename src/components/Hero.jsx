import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Plus, Hash, Bookmark } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax for background elements
  const yText = useTransform(scrollY, [0, 1000], [0, 300]);
  const yMarquee = useTransform(scrollY, [0, 1000], [0, -150]);

  // Mouse tracking for the "Physical Book" effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [15, -15]);
  const rotateY = useTransform(springX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center bg-[#fffcfc] overflow-hidden pt-1"
    >
      {/* 1. Background Ticker (Editorial Energy) */}
      <motion.div 
        style={{ y: yMarquee }}
        className="absolute top-1/4 -right-20 rotate-90 origin-right opacity-[0.05] whitespace-nowrap pointer-events-none"
      >
        <span className="text-[15rem] font-black uppercase tracking-tighter">
          Archive Volume 04 // New Entries Daily // Archive Volume 04 //
        </span>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Aggressive Editorial Typography */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-red-600 mb-8"
            >
              <Hash size={18} className="animate-pulse" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase">Editorial Manuscript // 2026</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-8xl md:text-[9rem] font-black text-slate-950 mb-10 leading-[0.8] tracking-tighter uppercase">
                read <br /> 
                <span className="text-red-600 italic font-serif lowercase pr-4">DEAPLy</span>
              </h1>
            </motion.div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-sm text-sm font-bold uppercase tracking-widest text-slate-500 leading-loose"
              >
                The digital archive for high-status literature, rare manuscripts, and modern philosophy. 
                <span className="text-slate-950 block mt-2">Curated for the intellectually restless.</span>
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/books"
                  className="group relative inline-flex items-center justify-center bg-slate-950 text-white px-10 py-6 text-xs font-black uppercase tracking-[0.3em] transition-all shadow-[8px_8px_0px_rgba(220,38,38,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  Enter Library <ArrowRight size={16} className="ml-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Book & Metadata */}
          <div className="lg:col-span-5 relative h-[700px] flex items-center justify-center">
            
          

            {/* The Interactive "Manuscript" */}
            <motion.div 
              // style={{ rotateX, rotateY, perspective: 1000 }}
              className="relative w-72 h-[450px] bg-slate-950 shadow-[30px_30px_60px_rgba(0,0,0,0.3)] z-20 transition-shadow duration-500 group cursor-none"
            >
              {/* Internal Content of the Book */}
              <div className="absolute inset-0 flex flex-col justify-between p-10 border-4 border-slate-900 m-2 overflow-hidden">
                <div className="flex justify-between items-start">
                    <Bookmark size={24} className="text-red-600 fill-red-600" />
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] rotate-90 origin-right">Shelf_04</span>
                </div>
                
                <div>
                    <h2 className="text-white text-4xl font-black leading-none mb-4 uppercase tracking-tighter">
                      The <br/> <span className="text-red-600 italic font-serif">Deep</span> <br/> Archive
                    </h2>
                    <div className="h-1 w-12 bg-red-600 mb-6" />
                </div>

                <div className="flex justify-between items-end border-t border-white/10 pt-6">
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Est. 2026</span>
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-125 transition-transform">
                    <Plus size={16} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Spine Detail */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent opacity-50" />
            </motion.div>

            {/* Background Geometric Elements */}
            <div className="absolute w-[500px] h-[500px] border border-slate-100 rounded-full animate-spin-slow" />
            <div className="absolute w-80 h-80 bg-red-600/5 blur-[120px] rounded-full" />
          </div>

        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-12 left-0 w-full leading-[0] transform rotate-180 opacity-5">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-32 fill-slate-950">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
      </div>
    </div>
  );
};

export default Hero;