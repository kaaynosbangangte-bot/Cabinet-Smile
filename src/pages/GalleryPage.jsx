import { FiCamera, FiLayout, FiUser, FiActivity } from 'react-icons/fi'
import { useState } from 'react'

const galleryImages = [
    // Clinique / Salles
    {
        id: 1,
        url: '/images/gallery/clinique/accueil.jpg',
        category: 'salle',
        title: 'Espace Accueil & Réception'
    },
    {
        id: 2,
        url: '/images/gallery/clinique/couloir.jpg',
        category: 'salle',
        title: 'Accès aux Salles de Soins'
    },
    {
        id: 3,
        url: '/images/gallery/clinique/couloir%20espace.jpg',
        category: 'salle',
        title: 'Espace Circulation Lumineux'
    },
    {
        id: 4,
        url: '/images/gallery/clinique/sale%20de%20réunion.jpg',
        category: 'salle',
        title: 'Salle de Conférence & Réunion'
    },
    {
        id: 5,
        url: '/images/gallery/clinique/smile.jpg',
        category: 'salle',
        title: 'Ambiance Smile'
    },
    // Équipe / Personnel
    {
        id: 6,
        url: '/images/gallery/equipe/equipe%20de%20la%20clinique%20.jpg',
        category: 'personnel',
        title: 'L\'Équipe du Cabinet Smile'
    },
    // Technologie / Équipement
    {
        id: 7,
        url: '/images/gallery/technologie/equipement%201.jpg',
        category: 'equipement',
        title: 'Unité de Soin Haute Performance'
    },
    {
        id: 8,
        url: '/images/gallery/technologie/equipement%202.jpg',
        category: 'equipement',
        title: 'Plateau Technique Moderne'
    },
    {
        id: 9,
        url: '/images/gallery/technologie/equipement%203.jpg',
        category: 'equipement',
        title: 'Diagnostic de Précision'
    },
    {
        id: 10,
        url: '/images/gallery/technologie/equipement%204.jpg',
        category: 'equipement',
        title: 'Confort & Technologie'
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
                    <h1>Galerie</h1>
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


        </div>
    )
}

export default GalleryPage
