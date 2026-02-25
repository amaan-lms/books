import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BookCatalog from "./components/BookCatalog"
import BookReader from "./components/BookReader"
import About from "./components/About"
import Footer from "./components/Footer"
import CTA from "./components/CTA"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<><Hero /><BookCatalog /><CTA/></>} />
            <Route path="/books" element={<BookCatalog />} />
            <Route path="/read/:bookId" element={<BookReader />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<CTA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
