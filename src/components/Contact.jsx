import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock, FiRefreshCw } from 'react-icons/fi'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                source: 'Accueil',
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
        <section className="contact-refined" id="contact">
            <ToastContainer />
            <div className="container">
                <div className="contact-header-refined">
                    <h4 className="contact-subtitle-refined">Contact</h4>
                    <h2 className="contact-title-refined">Nous vous répondrons dès que possible</h2>
                </div>

                <div className="contact-container-refined">
                    <form className="contact-form-refined" onSubmit={handleSubmit} data-aos="flip-left">
                        <h3 className="form-title-refined">Envoyez-nous un message</h3>
                        <div className="form-grid-refined">
                            <div className="form-group-refined">
                                <label htmlFor="name">Nom complet</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group-refined">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="votre@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group-refined">
                            <label htmlFor="phone">Téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="06 12 34 56 78"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group-refined">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Décrivez votre demande..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-contact-refined" disabled={loading}>
                            {loading ? <><FiRefreshCw className="spin" /> Envoi...</> : 'Envoyer le message'}
                        </button>
                    </form>

                    <div className="contact-info-refined" data-aos="fade-left">
                        <h3 className="info-title-refined">Nos coordonnées</h3>
                        <p>N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous.</p>

                        <div className="contact-details-refined">
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiPhone /></div>
                                <div className="contact-text-refined">
                                    <strong>Téléphone</strong>
                                    <span>+237 233 44 45 68</span>
                                </div>
                            </div>
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiMail /></div>
                                <div className="contact-text-refined">
                                    <strong>Email</strong>
                                    <span>cabinetssmile@yahoo.com</span>
                                </div>
                            </div>
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiMapPin /></div>
                                <div className="contact-text-refined">
                                    <strong>Adresse</strong>
                                    <span>Bafoussam - Tamdja, 1er étage Immeuble Quifeurou</span>
                                </div>
                            </div>
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiClock /></div>
                                <div className="contact-text-refined">
                                    <strong>Horaires</strong>
                                    <span>Ouvert 24h/24 & 7j/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
