import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import AppointmentPage from './pages/AppointmentPage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apropos" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/actualites" element={<NewsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/appointment" element={<AppointmentPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App
