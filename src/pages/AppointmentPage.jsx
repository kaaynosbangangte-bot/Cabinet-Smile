import { useState } from 'react'
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiCheckCircle, FiRefreshCw } from 'react-icons/fi'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AppointmentPage() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
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
            await addDoc(collection(db, 'appointments'), {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                service: formData.service,
                date: formData.date,
                time: formData.time,
                message: formData.message,
                status: 'pending', // Re-confirmation du statut en attente
                source: 'website',
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            })

            toast.success('Demande de rendez-vous envoyée avec succès!')
            window.scrollTo(0, 0)
            setSubmitted(true)
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                date: '',
                time: '',
                message: ''
            })
        } catch (error) {
            console.error('Error submitting appointment:', error)
            toast.error('Erreur lors de l\'envoi. Veuillez réessayer.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="appointment-page">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Hero Section */}
            <div className="appointment-page-hero" data-aos="fade-in">
                <div className="appointment-page-hero-content">
                    <h4>Prendre un rendez-vous</h4>
                    <h1>{submitted ? "Demande confirmée" : "Réservez votre séance en quelques clics"}</h1>
                </div>
            </div>

            {/* Content Section */}
            <section className="appointment-form-section">
                <div className="container">
                    {submitted ? (
                        <div className="success-wrapper" data-aos="zoom-in">
                            <div className="success-card">
                                <FiCheckCircle className="success-icon" />
                                <h2>Rendez-vous envoyé !</h2>
                                <p>Merci pour votre confiance. Notre équipe vous contactera très prochainement pour confirmer la date et l'heure de votre consultation.</p>
                                <button onClick={() => setSubmitted(false)} className="btn-pill-refined success-btn">
                                    <FiRefreshCw /> Effectuer une autre demande
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="appointment-card" data-aos="fade-up">
                            <div className="appointment-header">
                                <h2>Informations de Consultation</h2>
                                <p>Veuillez remplir le formulaire ci-dessous pour nous aider à préparer votre visite.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="appointment-form-refined">
                                <div className="form-grid-refined">
                                    <div className="form-group-refined">
                                        <label><FiUser /> Nom complet</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ex: Jean Dupont"
                                            required
                                        />
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiPhone /> Numéro de téléphone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Ex: +237 6XX XXX XXX"
                                            required
                                        />
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiMail /> Adresse Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="votre@email.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-group-refined">
                                        <label>Type de service</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Sélectionnez un service</option>
                                            <option value="consultation">Consultation & Diagnostic</option>
                                            <option value="detartrage">Détartrage & Nettoyage</option>
                                            <option value="implant">Implantologie</option>
                                            <option value="ortho">Orthodontie</option>
                                            <option value="blanchiment">Blanchiment bucco-dentaire</option>
                                            <option value="urgence">Urgence bucco-dentaire</option>
                                        </select>
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiCalendar /> Date souhaitée</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiClock /> Heure souhaitée</label>
                                        <select
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Sélectionnez un créneau</option>
                                            <option value="08:00">08:00 - 09:00</option>
                                            <option value="09:00">09:00 - 10:00</option>
                                            <option value="10:00">10:00 - 11:00</option>
                                            <option value="11:00">11:00 - 12:00</option>
                                            <option value="14:00">14:00 - 15:00</option>
                                            <option value="15:00">15:00 - 16:00</option>
                                            <option value="16:00">16:00 - 17:00</option>
                                            <option value="17:00">17:00 - 18:00</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group-refined">
                                    <label>Notes additionnelles (optionnel)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Décrivez brièvement votre besoin ou vos symptômes..."
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="form-footer-refined">
                                    <button
                                        type="submit"
                                        className="btn-pill-refined appointment-submit"
                                        disabled={loading}
                                    >
                                        {loading ? 'Envoi en cours...' : 'Confirmer la demande de rendez-vous'}
                                    </button>
                                    <p className="form-disclaimer">En envoyant ce formulaire, vous acceptez d'être recontacté pour la confirmation de votre rendez-vous.</p>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </section>

            {/* Satisfaction Questionnaire Static Section */}
            <section className="appointment-satisfaction-section">
                <div className="container">
                    <div className="satisfaction-static-card" data-aos="fade-up">
                        <div className="satisfaction-static-content">
                            <div className="satisfaction-static-text">
                                <h3>Votre avis nous est précieux</h3>
                                <p>Pour nous aider à toujours mieux vous servir, merci de prendre un court instant pour répondre à notre questionnaire de satisfaction.</p>
                            </div>
                            <a
                                href="http://kaaynosbangangte-bot.github.io/questionnaire-satisfaction/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill-refined satisfaction-static-btn"
                            >
                                Répondre au questionnaire
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AppointmentPage
