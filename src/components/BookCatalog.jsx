import React, { useState } from 'react'
import { sampleBooks } from '../data/books'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BookCatalog = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? sampleBooks.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === sampleBooks.length - 1 ? 0 : prev + 1))
  }

  const currentBook = sampleBooks[currentIndex]

  return (
    <div className="min-h-screen bg-[#fffcfc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        
        {/* Editorial Header */}
        <div className="mb-12 border-b-2 border-slate-900 pb-12">
          <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none">
            The <span className="text-red-600 italic font-serif lowercase">Index.</span>
          </h2>
        </div>

        {/* Single Image Viewer with Navigation */}
        <div className="flex items-center justify-center gap-8">
          {/* Left Arrow */}
          <button 
            onClick={goToPrevious}
            className="p-4 bg-slate-950 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Current Image */}
          <div 
            className={`aspect-[3/4] overflow-hidden rounded-lg shadow-2xl ${
              currentBook.id === 1 ? 'w-[500px] ring-4 ring-red-600' : 'w-[400px]'
            }`}
          >
            <img
              src={currentBook.cover}
              alt={currentBook.title}
              className="w-full h-full object-cover saturate-150 contrast-110 brightness-105"
            />
          </div>

          {/* Right Arrow */}
          <button 
            onClick={goToNext}
            className="p-4 bg-slate-950 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-8">
          <p className="text-lg font-bold text-slate-400">
            {currentIndex + 1} / {sampleBooks.length}
          </p>
        </div>

        {/* America Content Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-blue-400 to-blue-200 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-5xl md:text-7xl font-black mb-4">
              <span className="text-red-600">A</span>MERICA:
            </h3>
            <p className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">
              LAND OF THE <span className="text-red-600 underline">FREE</span>,
            </p>
            <p className="text-2xl md:text-4xl font-black text-slate-900">
              AND <span className="text-red-600 underline">FINANCIALLY ENSLAVED!</span>
            </p>
          </div>
          
          <div className="mt-8 text-left">
            <p className="text-lg text-slate-700 leading-relaxed">
              Understanding the financial system is crucial for true freedom. Our educational resources 
              expose the truth about economic structures, debt systems, and how to achieve genuine 
              financial independence. Knowledge is the key to breaking free from financial chains.
            </p>
          </div>
        </div>

        {/* E-Learning Button */}
        <div className="text-center mt-12">
          <button className="px-12 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-slate-950 transition-colors shadow-lg">
            e-learning
          </button>
        </div>

      </div>
    </div>
  )
}

export default BookCatalog