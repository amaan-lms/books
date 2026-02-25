import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, User, LogOut, X, Menu, Feather, Hash
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Archive', path: '/' },
    { name: 'The Library', path: '/books' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-700 ${
        isScrolled 
          ? 'bg-white py-4 border-b-4 border-slate-950 shadow-[0_4px_0_rgba(220,38,38,0.1)]' 
          : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="z-50">
            <Link to="/" className="flex items-center gap-4 group">
              <motion.div 
                
                className="w-10 h-10 bg-red-600 flex items-center justify-center text-white rotate-3 transition-transform shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                <Feather size={20} />
              </motion.div>
              <span className="text-2xl font-black tracking-tighter text-slate-950 uppercase hidden sm:block">
                Book<span className="text-red-600 italic font-serif lowercase">shelf</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-slate-100/50 p-1 rounded-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`relative px-8 py-2 text-[10px] uppercase tracking-[0.3em] font-black transition-all ${
                    isActive ? 'text-red-600' : 'text-slate-500 hover:text-slate-950'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="navTab"
                      className="absolute inset-0 bg-white shadow-sm border border-slate-200"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            
            {/* Search Input */}
            <motion.form 
              onSubmit={handleSearchSubmit}
              animate={{ width: showSearch ? (window.innerWidth < 640 ? 180 : 300) : 40 }}
              className={`relative flex items-center h-10 border-2 transition-all overflow-hidden ${
                showSearch ? 'border-red-600 bg-white' : 'border-transparent'
              }`}
            >
              <button 
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="min-w-[40px] h-10 flex items-center justify-center text-slate-950 hover:text-red-600 transition-colors"
              >
                {showSearch ? <X size={18} /> : <Search size={20} />}
              </button>
              <input
                type="text"
                placeholder="FIND MANUSCRIPT..."
                className="w-full bg-transparent px-2 text-[10px] font-black tracking-widest outline-none uppercase"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.form>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="w-10 h-10 border-2 border-slate-950 flex items-center justify-center font-black text-[10px] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                JD
              </button>

              <AnimatePresence>
                {showProfile && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute right-0 mt-6 w-72 bg-white border-4 border-slate-950 shadow-[12px_12px_0px_rgba(220,38,38,1)] p-6 z-[110]"
                  >
                    <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4 mb-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-black text-red-600">JD</div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contributor</p>
                        <p className="text-sm font-black uppercase tracking-tighter italic">John Doe</p>
                      </div>
                    </div>
                    <nav className="space-y-1">
                      <button className="w-full flex items-center justify-between px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                        <span>Archive Dashboard</span>
                        <Hash size={12} />
                      </button>
                      <button className="w-full flex items-center justify-between px-4 py-3 text-[10px] font-black uppercase tracking-widest text-red-600 hover:bg-red-600 hover:text-white transition-colors">
                        <span>Terminate Session</span>
                        <LogOut size={12} />
                      </button>
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-slate-950 text-white flex items-center justify-center shadow-[4px_4px_0px_rgba(220,38,38,1)]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950 z-[200] flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="text-red-600 font-black text-2xl uppercase tracking-tighter">Menu</div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white border-2 border-white p-2"><X size={30} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-black text-white uppercase tracking-tighter hover:text-red-600 hover:italic transition-all flex items-center gap-4"
                  >
                    <span className="text-red-600 text-xl font-serif">0{i+1}</span> {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;