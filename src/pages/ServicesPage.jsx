import CTA from '../components/CTA'

const servicesData = [
    {
        title: "Consultation & Diagnostic",
        description: "Une étape cruciale pour identifier vos besoins. Nous réalisons un examen complet, des radiographies numériques si nécessaire, et élaborons un plan de traitement personnalisé adapté à votre situation unique.",
        image: "/images/services/consultation-diagnostic.jpg"
    },
    {
        title: "Implantologie",
        description: "Retrouvez le confort et l'esthétique d'une dentition complète. Nous utilisons des implants de haute technologie pour remplacer les dents manquantes de manière durable et naturelle.",
        image: "/images/services/implantologie.jpg"
    },
    {
        title: "Blanchiment dentaire",
        description: "Redonnez de l'éclat à votre sourire. Nos techniques de blanchiment professionnel sont sûres, rapides et offrent des résultats visibles dès la première séance, tout en préservant l'émail de vos dents.",
        image: "/images/services/blanchiment-dentaire.jpg"
    },
    {
        title: "Soins & Prothèse Dentaire",
        description: "Expertise complète pour restaurer la fonction et l'esthétique. Qu'il s'agisse de couronnes, de ponts ou de prothèses amovibles, nous concevons des solutions sur mesure d'une qualité irréprochable.",
        image: "/images/services/prothese-dentaire.jpg"
    },
    {
        title: "Orthodontie",
        description: "Alignez vos dents en toute discrétion. Pour enfants et adultes, nous proposons des solutions modernes comme les bagues céramiques ou les aligneurs transparents pour un sourire harmonieux.",
        image: "/images/services/orthodontie.jpg"
    },
    {
        title: "Pédodontie",
        description: "Des soins adaptés aux plus jeunes dans un environnement rassurant. Nous mettons tout en œuvre pour que la visite chez le dentiste soit une expérience positive pour vos enfants.",
        image: "/images/services/pedodontie.jpg"
    },
    {
        title: "Chirurgie Traumatologie & Maxillo-faciale",
        description: "Expertise chirurgicale pour les cas complexes. Extractions de dents de sagesse, greffes osseuses et interventions spécialisées réalisées avec la plus grande précision et sécurité.",
        image: "/images/services/chirurgie-maxillo.jpg"
    },
    {
        title: "Endodontie",
        description: "Sauvez vos dents naturelles. Spécialisés dans le traitement des canaux radiculaires, nous utilisons des microscopes opératoires pour assurer le succès de vos traitements endodontiques.",
        image: "/images/services/endodontie.jpg"
    },
    {
        title: "Radiologie Numérique",
        description: "Imagerie de pointe pour un diagnostic précis. Équipés de Cone Beam (Scanner 3D) et de panoramiques numériques, nous réduisons l'exposition aux rayons X tout en augmentant la précision.",
        image: "/images/services/radiologie-numerique.jpg"
    },
    {
        title: "Odontologie Restauratrice",
        description: "Réparation discrète et esthétique des dents abîmées. Nous utilisons des matériaux composites de dernière génération pour traiter les caries et restaurer l'intégrité de vos dents.",
        image: "/images/services/odontologie-restauratrice.jpg"
    }
];

function ServicesPage() {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <div className="services-page-hero" data-aos="fade-in">
                <div className="services-page-hero-content">
                    <h4>Nos services</h4>
                    <h1>Votre sourire mérite un accompagnement d'exception</h1>
                </div>
            </div>

            {/* Services List Section */}
            <section className="services-list-section">
                <div className="container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="service-detail-card"
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            <div className="service-detail-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-detail-content">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
        </div>
    )
}

export default ServicesPage
