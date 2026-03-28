import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useInView, useTransform } from 'framer-motion';
import { Book, Tablet, Heart, CheckCircle2, ArrowRight, Library, Star, Users, Sparkles, Quote } from 'lucide-react';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax for editorial feel
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen bg-[#fffcfc] overflow-x-hidden selection:bg-red-100">
      {/* Editorial Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-red-600 z-[100] origin-left" style={{ scaleX }} />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-20 text-[20rem] font-black text-red-500/[0.03] rotate-90 select-none">HISTORY</div>
        <div className="absolute bottom-[20%] -right-20 text-[20rem] font-black text-red-500/[0.03] -rotate-90 select-none">FUTURE</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 relative z-10">
        
        {/* Section 1: Editorial Header */}
        <header className="mb-40 border-b border-red-100 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="flex items-center gap-4 text-red-600 font-black tracking-widest text-sm mb-6 uppercase">
                <div className="w-12 h-1 bg-red-600" />
                <span>The Manifesto</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-slate-950 leading-[0.85] tracking-tighter">
                Books are <br /> 
                <span className="text-red-600 italic font-serif">Oxygen.</span>
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-2xl text-slate-600 font-light leading-relaxed lg:mb-4"
            >
              We don't just host files. We preserve the heartbeat of human thought. 
              BookShelf is a digital sanctuary for those who still believe in the power of a turning page.
            </motion.p>
          </div>
        </header>

        {/* Section 2: Interactive Mission Stack */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
              <h2 className="text-5xl font-black text-slate-950 leading-tight">
                Democratizing the <br/> <span className="text-red-600">Written Word.</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed italic border-l-4 border-red-600 pl-8">
                "A library is not a luxury but one of the necessities of life."
              </p>
              <div className="space-y-6 text-lg text-slate-600">
                <p>Founded in 2024, our mission was simple: make every rare manuscript and modern masterpiece accessible with one tap. We've bridged the gap between the dust of old libraries and the speed of the fiber optic.</p>
                <div className="grid grid-cols-2 gap-8 py-6">
                  <div>
                    <h4 className="font-black text-red-600 text-3xl mb-1"><Counter value="24" />h</h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Support Access</p>
                  </div>
                  <div>
                    <h4 className="font-black text-red-600 text-3xl mb-1"><Counter value="180" />+</h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Countries Reached</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div style={{ y: yImage }} className="relative z-20">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 rounded-full z-[-1] opacity-10 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000" 
                className="rounded-3xl shadow-[0_50px_100px_-20px_rgba(220,38,38,0.25)] border-8 border-white"
                alt="Library"
              />
              <div className="absolute bottom-10 -right-8 bg-red-600 text-white p-8 rounded-2xl shadow-2xl rotate-3 hidden md:block">
                <Quote size={40} className="mb-4 opacity-40" />
                <p className="text-xl font-serif italic font-bold">"The best library interface I've ever used."</p>
                <p className="mt-4 text-xs font-black uppercase tracking-widest text-red-200">— Time Magazine</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 3: Feature Grid (Brutalist Style) */}
        <div className="grid md:grid-cols-3 border-t border-slate-200">
          {[
            { icon: <Library size={32} />, title: "The Vault", desc: "A curated collection of 50k+ titles spanning 4 centuries.", border: "md:border-r" },
            { icon: <Tablet size={32} />, title: "LiveSync", desc: "Your bookmarks travel with you, across every device.", border: "md:border-r" },
            { icon: <Heart size={32} />, title: "Curation", desc: "Hand-picked recommendations from real bibliophiles." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ backgroundColor: "#fff1f1" }}
              className={`p-12 transition-colors group border-b border-slate-200 ${item.border}`}
            >
              <div className="text-red-600 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter">{item.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA: Editorial Footer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-950 rounded-[3rem] p-16 md:p-32 text-center text-white relative mt-40"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-12 tracking-tighter">Your next chapter <br/> starts now.</h2>
          <Link
            to="/books"
            className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white text-xl font-black px-12 py-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/30"
          >
            Open the Library
            <ArrowRight />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default About;