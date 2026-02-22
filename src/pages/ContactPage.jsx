import { useState } from 'react'
import { FiPhone, FiMail, FiClock, FiRefreshCw, FiCheckCircle } from 'react-icons/fi'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactPage() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                source: 'Page Contact',
                status: 'unread',
                createdAt: serverTimestamp()
            })

            toast.success('Message envoyé avec succès ! Nous vous répondrons bientôt.')
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        } catch (error) {
            console.error('Error sending message:', error)
            toast.error('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="contact-page">
            <ToastContainer />
            {/* Hero Section */}
            <div className="contact-page-hero" data-aos="fade-in">
                <div className="contact-page-hero-content">
                    <h4>Contactez-nous</h4>
                    <h1>Prenez rendez-vous en toute simplicité</h1>
                </div>
            </div>

            {/* Contact Info & Hours Section */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        <div className="info-text-side" data-aos="fade-right">
                            <h4>Rendez-nous visite / appelez-nous</h4>
                            <h2>Moyens pratiques pour contacter le Cabinet Dentaire Smile</h2>
                            <p>
                                Au Cabinet Dentaire Smile, votre sourire est notre priorité. Contactez-nous pour des soins personnalisés et des conseils adaptés à votre santé bucco-dentaire.
                            </p>
                            <div className="contact-methods">
                                <div className="method-item">
                                    <FiMail /> <span>cabinetssmile@yahoo.com</span>
                                </div>
                                <div className="method-item">
                                    <FiPhone /> <span>+237 233 44 45 68</span>
                                </div>
                            </div>
                        </div>

                        <div className="hours-card" data-aos="fade-left">
                            <h3><FiRefreshCw /> Horaires d'ouverture</h3>
                            <ul className="hours-list">
                                <li><FiCheckCircle /> Tous les jours, du lundi au dimanche, 24h/24 et 7j/7</li>

                            </ul>
                            <div className="urgency-box">
                                <strong>Urgence 24h/24 & 7j/7</strong>
                                <span>+237 691 63 58 93</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Split Section */}
            <section className="contact-form-split">
                <div className="container">
                    <div className="form-split-grid">
                        <div className="form-image-container" data-aos="fade-right">
                            <img src="/images/contact/cabinet-office.jpg" alt="Cabinet Office" />
                        </div>
                        <div className="form-side" data-aos="fade-left">
                            <h4>Formulaire de contact</h4>
                            <h2>Nous vous répondrons dès que possible</h2>
                            <form className="contact-form-refined" onSubmit={handleSubmit}>
                                <div className="form-group-refined">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nom"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-row-refined">
                                    <div className="form-group-refined">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Adresse Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-refined">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Numéro de tél"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group-refined">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-pill-refined btn-contact-submit" disabled={loading}>
                                    {loading ? <><FiRefreshCw className="spin" /> Envoi...</> : 'Envoyer le message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" data-aos="zoom-in">
                <a
                    href="https://maps.app.goo.gl/uX7Ww5o7Jv7x8_b86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                >
                    <img
                        src="/images/localisation.png"
                        alt="Localisation Cabinet Smile à Bafoussam"
                        className="map-static-image"
                    />
                    {/* <div className="map-overlay-hint">
                        <span>Cliquez pour ouvrir dans Google Maps</span>
                    </div> */}
                </a>
            </section>
        </div>
    )
}

export default ContactPage
