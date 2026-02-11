import { FiPhone, FiMail, FiClock, FiRefreshCw, FiCheckCircle } from 'react-icons/fi'

function ContactPage() {
    return (
        <div className="contact-page">
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
                            <h2>Moyens pratiques pour contacter le Cabinet dentaire smile</h2>
                            <p>
                                Chez Cabinet dentaire Smile, votre sourire est notre priorité. Contactez-nous pour des soins personnalisés et des conseils adaptés à votre santé dentaire.
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
                                <li><FiCheckCircle /> Lundi à Vendredi : 08h00 - 20h00</li>
                                <li><FiCheckCircle /> Samedi : 08h00 - 18h00</li>
                                <li><FiCheckCircle /> Dimanche et jours fériés sur RDV</li>
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
                            <form className="contact-form-refined">
                                <div className="form-group-refined">
                                    <input type="text" placeholder="Nom" required />
                                </div>
                                <div className="form-row-refined">
                                    <div className="form-group-refined">
                                        <input type="email" placeholder="Adresse Email" required />
                                    </div>
                                    <div className="form-group-refined">
                                        <input type="tel" placeholder="Numéro de tél" required />
                                    </div>
                                </div>
                                <div className="form-group-refined">
                                    <textarea placeholder="Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn-pill-refined btn-contact-submit">Envoyer le message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" data-aos="zoom-in">
                <iframe
                    title="Carte Cabinet Smile"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.918991278148!2d10.4208226!3d5.4746864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f00c5000000001%3A0xe5a3c9e6c38f6b86!2sBafoussam!5e0!3m2!1sfr!2scm!4v1700000000000"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    )
}

export default ContactPage
