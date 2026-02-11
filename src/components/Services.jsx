import { Link } from 'react-router-dom'

function Services() {
    const services = [
        {
            image: '/images/consultation-diagnostic.jpg',
            title: 'Consultation & diagnostic',
            description: 'Examen complet de votre santé bucco-dentaire avec des équipements de pointe.'
        },
        {
            image: '/images/orthodontie.jpg',
            title: 'Orthodontie',
            description: 'Appareils dentaires et aligneurs invisibles pour corriger votre dentition.'
        },
        {
            image: '/images/implantologie.jpg',
            title: 'Implantologie',
            description: 'Implants dentaires durables pour remplacer les dents manquantes.'
        },
        {
            image: '/images/esthetique-dentaire.jpg',
            title: 'Esthétique dentaire',
            description: 'Blanchiment et facettes pour un sourire éclatant et harmonieux.'
        },
        {
            image: '/images/soins-parodontologie.jpg',
            title: 'Soins & Parodontologie',
            description: 'Nettoyage, détartrage et traitement des caries pour une hygiène optimale.'
        },
        {
            image: '/images/odontologie-pediatrique.png',
            title: 'Odontologie pédiatrique',
            description: 'Approche douce et rassurante pour les soins dentaires des plus jeunes.'
        }
    ]

    return (
        <section className="services-refined" id="services">
            <div className="container">
                <div className="services-header-refined">
                    <h4 className="services-subtitle-refined">Services bucco dentaires</h4>
                    <h2 className="services-title-refined">Nous prenons soin de chaque aspect de votre sourire</h2>
                    <p className="services-description-refined">
                        De la prévention aux soins spécialisés, notre clinique propose une prise en charge complète pour répondre à tous vos besoins.
                    </p>
                </div>

                <div className="services-grid-refined">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card-refined"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-image-refined">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3 className="service-card-title-refined">{service.title}</h3>
                            <p className="service-card-text-refined">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="services-footer-refined">
                    <Link to="/services" className="btn-services">Voir tous les services</Link>
                </div>
            </div>
        </section>
    )
}

export default Services
