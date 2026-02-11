import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import { FiHeart, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function AboutPage() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-page-hero" data-aos="fade-in">
                <div className="about-page-hero-content">
                    <h4>À propos de Smile</h4>
                    <h1>Votre partenaire pour une santé dentaire optimale</h1>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="about-section-who">
                <div className="container">
                    <div className="about-who-grid">
                        <div className="about-who-text" data-aos="fade-right">
                            <h4>Qui sommes-nous ?</h4>
                            <h2>Une référence d'excellence en soins dentaires modernes</h2>
                            <p>
                                Fondé en 2015, le Cabinet Dentaire Smile incarne une vision exigeante de la médecine bucco-dentaire, fondée sur quatre piliers essentiels : précision clinique, technologie de pointe, humanisme et disponibilité.
                            </p>
                            
                            {isExpanded && (
                                <div className="history-expanded">
                                    <p>
                                        Dès sa création, le cabinet a été pensé comme un lieu où le soin dépasse l'acte médical pour devenir une expérience maîtrisée, rassurante et personnalisée. Chaque patient est unique et est accueilli avec attention, respect et discrétion.
                                    </p>
                                    
                                    <p>
                                        Le Cabinet Dentaire Smile s'appuie aujourd'hui sur six praticiens, disponibles 24h/24 et 7j/7, accompagnés par une équipe d'assistantes qualifiées et engagées. Cette organisation garantit une continuité de soins absolue, dans un environnement moderne, calme et parfaitement sécurisé.
                                    </p>
                                    
                                    <p>
                                        Afin d'offrir une prise en charge fluide, précise et efficiente, nous avons réuni en un seul lieu :
                                    </p>
                                    <ul>
                                        <li>Cinq unités de soins autonomes et entièrement équipées</li>
                                        <li>Un laboratoire de prothèses dentaires intégré et numérisé</li>
                                        <li>Une unité d'imagerie odonto-stomatologique numérique de dernière génération (CBCT 3D)</li>
                                        <li>Une salle de stérilisation aux normes internationales, garantissant une prévention rigoureuse de toute contamination croisée</li>
                                    </ul>
                                    
                                    <p>
                                        Cette infrastructure de pointe nous permet d'intervenir avec exigence et précision, de l'odontologie générale aux disciplines spécialisées telles que l'implantologie, l'orthodontie et la dentisterie esthétique.
                                    </p>
                                    
                                    <p>
                                        Deux principes fondamentaux guident notre pratique quotidienne :
                                    </p>
                                    <p>
                                        <strong>Anticiper, prévenir, soulager et préserver</strong>, afin d'inscrire chaque patient dans une démarche personnalisée et durable de santé bucco-dentaire.
                                    </p>
                                    <p>
                                        <strong>Redonner le sourire</strong>, avec justesse et naturel, pour que chacun reparte serein, confiant et pleinement satisfait.
                                    </p>
                                    
                                    <p>
                                        Un accueil attentif, une écoute sincère, le respect absolu de votre temps et un suivi personnalisé définissent l'expérience Smile. Ici, chaque détail est pensé pour votre rassurance, votre confort, votre sécurité et votre tranquillité d'esprit.
                                    </p>
                                    
                                    <p style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>
                                        Au Cabinet Dentaire Smile<br />
                                        « On y arrive KO, on en repart OK. »
                                    </p>
                                    
                                    <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                                        Dr Boutchouang & l'équipe Smile
                                    </p>
                                </div>
                            )}
                            
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)} 
                                className="btn-read-more"
                                style={{ 
                                    marginTop: '1rem', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem',
                                    background: 'none',
                                    border: 'none',
                                    color: '#0066cc',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '500'
                                }}
                            >
                                {isExpanded ? (
                                    <>
                                        Réduire <FiChevronUp />
                                    </>
                                ) : (
                                    <>
                                        Lire la suite <FiChevronDown />
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="about-who-image" data-aos="fade-left">
                            <img src="/images/about/directeur-cabinet.jpg" alt="Directeur du cabinet" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="choose-us-section">
                <div className="container">
                    <div className="choose-us-grid">
                        <div className="choose-us-image" data-aos="fade-right">
                            <img src="/images/about/accueil-cabinet.jpg" alt="Accueil cabinet" style={{ borderRadius: '20px' }} />
                        </div>
                        <div className="choose-us-text" data-aos="fade-left">
                            <h4>Pourquoi nous choisir ?</h4>
                            <h2>Une approche unique pour votre sourire</h2>

                            <div className="feature-item">
                                <div className="feature-icon"><FiHeart /></div>
                                <div className="feature-content">
                                    <h3>Soins personnalisés</h3>
                                    <p>Chaque patient est unique. Nous réalisons une évaluation complète afin de proposer des soins adaptés à vos besoins spécifiques et à vos attentes.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon"><FiCheckCircle /></div>
                                <div className="feature-content">
                                    <h3>Expertise et professionnalisme</h3>
                                    <p>Notre équipe est composée de professionnels qualifiés et expérimentés, engagés à vous offrir des soins fiables et durables.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* Clinic Visit Section */}
            <section className="clinic-visit-section" data-aos="zoom-in">
                <div className="clinic-visit-content">
                    <h4>Visite de la clinique</h4>
                    <h2>Des installations modernes pour des soins d'exception</h2>
                    <p>Votre clinique dispose d'équipements de dernière génération et d'un environnement moderne, conçu pour garantir votre confort et un traitement agréable.</p>
                    <a href="#" className="btn-visit">Explorer la clinique</a>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Split CTA Section */}
            <section className="about-cta-split">
                <div className="container">
                    <div className="cta-split-container">
                        <div className="cta-split-image" data-aos="fade-right">
                            <img src="/images/about/smile-accueil.jpg" alt="Smile accueil" />
                        </div>
                        <div className="cta-split-content" data-aos="fade-left">
                            <h4>Appel à l'action</h4>
                            <h2>Prêt à découvrir la smile ?</h2>
                            <p>Ne tardez plus pour prendre soin de votre sourire. Contactez-nous dès aujourd'hui et bénéficiez de notre expertise professionnelle adaptée à vos besoins.</p>
                            <Link to="/appointment" className="btn-pill-refined">Prendre un rendez-vous</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
