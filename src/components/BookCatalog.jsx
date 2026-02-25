import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, Star, Clock, FilterX, Hash, Plus } from 'lucide-react'
import { sampleBooks } from '../data/books'

const categories = ["All", "Fiction", "Mystery", "Science", "Romance", "Business", "Art"]

const BookCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBooks = sampleBooks.filter(book => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#fffcfc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        
        {/* Editorial Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12 border-b-2 border-slate-900 pb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-red-600 font-black tracking-widest text-xs uppercase mb-4"
            >
              <Hash size={14} />
              <span>Volume 04 // 2026 Archive</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-slate-950 mb-6 tracking-tighter leading-none"
            >
              The <span className="text-red-600 italic font-serif lowercase">Index.</span>
            </motion.h2>
            <p className="text-xl text-slate-500 font-medium max-w-lg">
              Curated literature for the modern mind. Every title in our catalog is hand-selected for its cultural impact.
            </p>
          </div>

          {/* Brutalist Search Bar */}
          <div className="relative w-full lg:w-96 group">
            <input
              type="text"
              placeholder="SEARCH BY AUTHOR OR TITLE..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b-4 border-slate-950 py-4 pr-12 text-sm font-black tracking-[0.2em] focus:border-red-600 focus:outline-none transition-colors uppercase placeholder:text-slate-300"
            />
            <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-950 group-focus-within:text-red-600 transition-colors" size={24} />
          </div>
        </div>

        {/* Category Filter - Editorial Tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mr-2">Filter By:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 text-xs font-black uppercase tracking-widest transition-all ${
                selectedCategory === category
                  ? 'bg-red-600 text-white rotate-2'
                  : 'text-slate-900 hover:text-red-600 hover:underline'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Book Grid - Post-Modern Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          <AnimatePresence mode='popLayout'>
            {filteredBooks.map((book) => (
              <motion.div
                layout
                key={book.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative"
              >
                {/* Book Spine Detail (Visual flair) */}
                <div className="absolute -left-4 top-10 bottom-10 w-1 bg-red-600/20 group-hover:bg-red-600 transition-colors" />

                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 shadow-[20px_20px_0px_rgba(0,0,0,0.03)] group-hover:shadow-[20px_20px_0px_rgba(220,38,38,0.1)] transition-all duration-500">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Category Badge - Brutalist */}
                  <div className="absolute top-0 left-0 bg-slate-950 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest">
                    {book.category}
                  </div>

                  {/* Read Overlay */}
                  <div className="absolute inset-0 bg-red-600/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 text-center">
                    <p className="text-white text-sm font-bold mb-6 leading-relaxed italic font-serif">"{book.description}"</p>
                    <Link 
                      to={`/read/${book.id}`}
                      className="bg-white text-slate-950 px-8 py-3 font-black uppercase tracking-tighter text-sm flex items-center gap-2 hover:bg-slate-950 hover:text-white transition-colors"
                    >
                      Open Archive <Plus size={16} />
                    </Link>
                  </div>
                </div>

                {/* Content - Typographic Focus */}
                <div className="mt-8">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-1 text-red-600">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-black">{book.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-serif italic text-slate-500 mt-2">Written by {book.author}</p>
                  
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Clock size={12} />
                      <span>{book.pages} Pages</span>
                    </div>
                    <div className="h-1 w-1 bg-red-600 rounded-full" />
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                      Available Now
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State - Editorial Illustration */}
        {filteredBooks.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-40">
            <FilterX size={64} className="mx-auto text-red-200 mb-8" />
            <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">End of the record.</h3>
            <p className="text-slate-500 mt-4 font-serif italic">No volumes found matching your current query.</p>
            <button 
              onClick={() => {setSearchTerm(""); setSelectedCategory("All")}}
              className="mt-8 px-10 py-4 bg-slate-950 text-white font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-colors"
            >
              Reset the Archive
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BookCatalog