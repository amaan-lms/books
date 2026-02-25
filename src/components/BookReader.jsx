import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Settings, Moon, Sun, Book as BookIcon, Coffee,
  AlignLeft, Type   // ✅ ADD THESE
} from 'lucide-react'

import { sampleBooks } from '../data/books'

const BookReader = () => {
  const { bookId } = useParams()
  const [book, setBook] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [fontSize, setFontSize] = useState(20) 
  const [theme, setTheme] = useState('sepia') // Default to Sepia for that "Editorial" feel
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const foundBook = sampleBooks.find(b => b.id === parseInt(bookId))
    setBook(foundBook)
  }, [bookId])

  const chapters = useMemo(() => {
    if (!book) return []
    return book.content.split('Chapter').filter(c => c.trim()).map(c => `Chapter ${c}`)
  }, [book])

  const progress = ((currentPage + 1) / chapters.length) * 100

  if (!book) return <div className="p-20 text-center font-black uppercase tracking-widest text-red-600">Retrieving Manuscript...</div>

  const themes = {
    light: "bg-[#fffcfc] text-slate-900",
    sepia: "bg-[#fdf6e3] text-[#433422]",
    dark: "bg-[#080808] text-slate-300"
  }

  return (
    <div className={`min-h-screen pt-24 transition-colors duration-700 font-serif ${themes[theme]}`}>
      
      {/* Editorial Progress - Fixed Vertical Bar */}
      <div className="fixed left-0 top-0 h-full w-1.5 bg-slate-200/20 z-50">
        <motion.div 
          className="w-full bg-red-600" 
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-8 lg:px-12 py-16">
        {/* Masthead Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8 border-b border-current pb-8 border-opacity-10">
          <div className="flex items-center gap-6">
            <Link to="/books" className="w-12 h-12 border-2 border-current flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all">
              <ChevronLeft size={24} />
            </Link>
            <div>
              <h1 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mb-1">Now Reading</h1>
              <p className="text-xl font-black uppercase tracking-tighter italic leading-none">{book.title}</p>
            </div>
          </div>  

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={`p-3 border-2 border-current transition-all ${showSettings ? 'bg-red-600 text-white border-red-600' : 'hover:bg-red-600 hover:text-black'}`}
            >
              <Settings size={20} />
            </button>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-3 border-2 border-current hover:bg-red-600 hover:text-black transition-all"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        </header>

        {/* Floating Settings - Brutalist Style */}
        <AnimatePresence>
          {showSettings && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`p-8 border-4 border-slate-950 shadow-[12px_12px_0px_rgba(220,38,38,1)] mb-16 flex flex-wrap gap-12 justify-center bg-white text-slate-950`}
            >
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40"><AlignLeft size={14}/> Background</span>
                <div className="flex gap-2">
                  {['light', 'sepia', 'dark'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`w-8 h-8 rounded-full border-2 ${t === 'light' ? 'bg-white' : t === 'sepia' ? 'bg-[#f4ecd8]' : 'bg-slate-900'} ${theme === t ? 'border-red-600 scale-110' : 'border-slate-200'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40"><Type size={14}/> Typography</span>
                <div className="flex items-center gap-6">
                  <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="text-lg font-bold hover:text-red-600 transition-colors">A-</button>
                  <span className="text-xs font-black bg-slate-100 px-3 py-1">{fontSize}PX</span>
                  <button onClick={() => setFontSize(Math.min(32, fontSize + 2))} className="text-2xl font-bold hover:text-red-600 transition-colors">A+</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Digital Page */}
        <main className="relative min-h-[70vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: `${fontSize}px` }}
              className="leading-[1.8] font-serif max-w-none text-left"
            >
              <div className="whitespace-pre-wrap selection:bg-red-600 selection:text-white">
                {/* Custom First Letter Dropcap Effect */}
                <div className="first-letter:text-6xl first-letter:font-black first-letter:text-red-600 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                  {chapters[currentPage]}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer: Editorial Pagination */}
        <footer className="mt-24 pt-12 border-t-4 border-slate-950 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-12 order-2 md:order-1">
            <button
              onClick={() => { setCurrentPage(p => p - 1); window.scrollTo(0, 0); }}
              disabled={currentPage === 0}
              className={`text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3 group transition-all ${currentPage === 0 ? 'opacity-20' : 'hover:text-red-600'}`}
            >
              <ChevronLeft className="group-hover:-translate-x-2 transition-transform" /> Back
            </button>
            
            <div className="text-[10px] font-black uppercase tracking-[0.2em]">
               Page {currentPage + 1} <span className="text-red-600 mx-2">/</span> {chapters.length}
            </div>

            <button
              onClick={() => { setCurrentPage(p => p + 1); window.scrollTo(0, 0); }}
              disabled={currentPage === chapters.length - 1}
              className={`text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3 group transition-all ${currentPage === chapters.length - 1 ? 'opacity-20' : 'hover:text-red-600'}`}
            >
              Next <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 order-1 md:order-2">
            Digital Archive Volume 04
          </div>
        </footer>
      </div>
    </div>
  )
}

export default BookReader