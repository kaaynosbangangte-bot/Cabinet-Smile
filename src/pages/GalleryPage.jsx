import { FiCamera, FiLayout, FiUser, FiActivity } from 'react-icons/fi'
import { useState } from 'react'

const galleryImages = [
    {
        id: 1,
        url: '/images/about/about-cabinet.jpg',
        category: 'salle',
        title: 'Façade extérieurs du cabinet'
    },
    {
        id: 2,
        url: '/images/about/accueil-cabinet.jpg',
        category: 'salle',
        title: 'Espace accueil et attente'
    },
    {
        id: 3,
        url: '/images/about/smile-accueil.jpg',
        category: 'salle',
        title: 'Réception Smile'
    },
    {
        id: 4,
        url: '/images/about-cabinet-hero.jpg',
        category: 'salle',
        title: 'Salles de soins modernes'
    },
    {
        id: 5,
        url: '/images/service-cabinet-hero.jpg',
        category: 'equipement',
        title: 'Équipements de pointe'
    },
    {
        id: 6,
        url: '/images/actualité-cabinet-hero.jpg',
        category: 'equipement',
        title: 'Unité de diagnostic'
    },
    {
        id: 7,
        url: '/images/about/directeur-cabinet.jpg',
        category: 'personnel',
        title: 'Dr. Mike & Direction'
    },
    {
        id: 8,
        url: '/images/services/consultation-diagnostic.jpg',
        category: 'personnel',
        title: 'Consultation & Expertise'
    },
    {
        id: 9,
        url: '/images/services/radiologie-numerique.jpg',
        category: 'equipement',
        title: 'Scanner 3D (CBCT)'
    }
];

function GalleryPage() {
    const [filter, setFilter] = useState('all');

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <div className="gallery-page">
            {/* Gallery Hero */}
            <div className="gallery-page-hero" data-aos="fade-in">
                <div className="gallery-page-hero-content">
                    <h4>Découvrez notre univers</h4>
                    <h1>La Smile en images</h1>
                </div>
            </div>

            {/* Filter Section */}
            <div className="gallery-section">
                <div className="container">
                    <div className="gallery-filters" data-aos="fade-up">
                        <button
                            className={filter === 'all' ? 'active' : ''}
                            onClick={() => setFilter('all')}
                        >
                            Tout
                        </button>
                        <button
                            className={filter === 'equipement' ? 'active' : ''}
                            onClick={() => setFilter('equipement')}
                        >
                            Équipement
                        </button>
                        <button
                            className={filter === 'salle' ? 'active' : ''}
                            onClick={() => setFilter('salle')}
                        >
                            Salle
                        </button>
                        <button
                            className={filter === 'personnel' ? 'active' : ''}
                            onClick={() => setFilter('personnel')}
                        >
                            Personnel
                        </button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                data-aos="fade-up"
                                data-aos-delay={image.id * 50}
                            >
                                <div className="gallery-image-wrapper">
                                    <img src={image.url} alt={image.title} loading="lazy" />
                                    <div className="gallery-overlay">
                                        <h3>{image.title}</h3>
                                        <span className="category-badge">{image.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="no-results">
                            <p>Aucune image disponible dans cette catégorie pour le moment.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Gallery Intro Text */}
            <section className="gallery-intro">
                <div className="container">
                    <div className="intro-card-grid">
                        <div className="gallery-card" data-aos="fade-right">
                            <FiLayout />
                            <h3>Un cadre luxueux</h3>
                            <p>Des espaces pensés pour votre sérénité et votre bien-être dès votre arrivée.</p>
                        </div>
                        <div className="gallery-card" data-aos="fade-up">
                            <FiActivity />
                            <h3>Haute technologie</h3>
                            <p>Le meilleur de la technologie bucco-dentaire mondiale au service de votre diagnostic.</p>
                        </div>
                        <div className="gallery-card" data-aos="fade-left">
                            <FiUser />
                            <h3>Expertise humaine</h3>
                            <p>Une équipe dévouée pour une expérience de soin personnalisée et chaleureuse.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GalleryPage
