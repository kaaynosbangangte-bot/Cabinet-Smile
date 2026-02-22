import { FiCamera, FiLayout, FiUser, FiActivity } from 'react-icons/fi'
import { useState } from 'react'

const galleryImages = [
    // Clinique / Salles
    {
        id: 1,
        url: '/images/gallery/clinique/stérilisation.jpg',
        category: 'salle',
        title: 'Salle de stérilisation'
    },
    {
        id: 2,
        url: '/images/gallery/clinique/unité de radio.jpg',
        category: 'salle',
        title: 'l’unité de radio'
    },
    {
        id: 3,
        url: '/images/gallery/clinique/hospitalisation.jpg',
        category: 'salle',
        title: 'salle d’hospitalisation'
    },
    {
        id: 4,
        url: '/images/gallery/clinique/réunion.jpg',
        category: 'salle',
        title: 'salle de réunion'
    },
    {
        id: 5,
        url: '/images/gallery/clinique/accueil.jpg',
        category: 'salle',
        title: 'Espace Accueil & Réception'
    },
    {
        id: 6,
        url: '/images/gallery/clinique/accueil.jpg',
        category: 'salle',
        title: 'salle d’attente secretariat'
    },
    {
        id: 7,
        url: '/images/gallery/clinique/salle 02.jpg',
        category: 'salle',
        title: 'salle 02'
    },
    {
        id: 8,
        url: '/images/gallery/clinique/pédiatrie.jpg',
        category: 'salle',
        title: 'salle de pédiatrie'
    },


    {
        id: 9,
        url: '/images/gallery/clinique/couloir.jpg',
        category: 'salle',
        title: 'Accès aux Salles de Soins'
    },
    {
        id: 10,
        url: '/images/gallery/clinique/couloir%20espace.jpg',
        category: 'salle',
        title: 'Espace Circulation Lumineux'
    },
    {
        id: 11,
        url: '/images/gallery/clinique/sale%20de%20réunion.jpg',
        category: 'salle',
        title: 'Salle de Conférence & Réunion'
    },
    {
        id: 12,
        url: '/images/gallery/clinique/smile.jpg',
        category: 'salle',
        title: 'Ambiance Smile'
    },
    // Équipe / Personnel
    {
        id: 13,
        url: '/images/gallery/equipe/equipe%20de%20la%20clinique%20.jpg',
        category: 'personnel',
        title: 'L\'Équipe du Cabinet Smile'
    },
    // Technologie / Équipement
    {
        id: 14,
        url: '/images/gallery/technologie/equipement%201.jpg',
        category: 'equipement',
        title: 'Unité de Soin Haute Performance'
    },
    {
        id: 15,
        url: '/images/gallery/technologie/equipement%202.jpg',
        category: 'equipement',
        title: 'Plateau Technique Moderne'
    },
    {
        id: 16,
        url: '/images/gallery/technologie/equipement%203.jpg',
        category: 'equipement',
        title: 'Diagnostic de Précision'
    },
    {
        id: 17,
        url: '/images/gallery/technologie/equipement%204.jpg',
        category: 'equipement',
        title: 'Confort & Technologie'
    },
    {
        id: 37,
        url: '/images/gallery/technologie/Scanner 3D.jpg',
        category: 'equipement',
        title: 'Scanner 3D'
    },
    {
        id: 38,
        url: '/images/gallery/technologie/equipement 5.jpg',
        category: 'equipement',
        title: 'Équipement'
    },
    // Équipe / Personnel
    {
        id: 18,
        url: '/images/gallery/equipe/personelle1.jpg',
        category: 'personnel',
        title: 'Dr BOUTCHOUANG Raoul'
    },
    {
        id: 19,
        url: '/images/gallery/equipe/personelle2.jpg',
        category: 'personnel',
        title: 'Mme METCHOUAGUI Blandine. Assistante administrative'
    },
    {
        id: 20,
        url: '/images/gallery/equipe/personelle3.jpg',
        category: 'personnel',
        title: 'Mme Anne SEEM. Assistante administrative'
    },
    {
        id: 21,
        url: '/images/gallery/equipe/personelle4.jpg',
        category: 'personnel',
        title: 'Dr SAMEN Hermann'
    },
    {
        id: 22,
        url: '/images/gallery/equipe/personelle5.jpg',
        category: 'personnel',
        title: 'Dr MAGOUOH Sorèle'
    },
    {
        id: 23,
        url: '/images/gallery/equipe/personelle6.jpg',
        category: 'personnel',
        title: 'Dr SIMO Arthur'
    },
    {
        id: 24,
        url: '/images/gallery/equipe/personelle7.jpg',
        category: 'personnel',
        title: 'Dr WANANG Eva'
    },
    {
        id: 25,
        url: '/images/gallery/equipe/personelle8.jpg',
        category: 'personnel',
        title: 'Dr MANYA Leticia'
    },
    {
        id: 26,
        url: '/images/gallery/equipe/personelle9.jpg',
        category: 'personnel',
        title: 'Mme DOUGLA Christelle. Assistante Dentaire'
    },
    {
        id: 27,
        url: '/images/gallery/equipe/personelle10.jpg',
        category: 'personnel',
        title: 'Mr PENKA Cédric. Chauffeur /coursier'
    },
    {
        id: 28,
        url: '/images/gallery/equipe/personelle11.jpg',
        category: 'personnel',
        title: 'Mme ATONFACK Stéphanie. Assistante administrative'
    },
    {
        id: 29,
        url: '/images/gallery/equipe/personelle12.jpg',
        category: 'personnel',
        title: 'Mme DONFACK Esther. Assistante dentaire'
    },
    {
        id: 30,
        url: '/images/gallery/equipe/personelle13.jpg',
        category: 'personnel',
        title: 'ADIFFO Valoide. Assistante dentaire'
    },
    {
        id: 31,
        url: '/images/gallery/equipe/personelle14.jpg',
        category: 'personnel',
        title: 'NGALAMO Ivan. Stagiaire'
    },
    {
        id: 32,
        url: '/images/gallery/equipe/personelle15.jpg',
        category: 'personnel',
        title: 'NEMBOT Brandon technicien de surface'
    },
    // {
    //     id: 33,
    //     url: '/images/gallery/equipe/personelle16.jpg',
    //     category: 'personnel',
    //     title: 'L\'Équipe du Cabinet Smile'
    // },
    {
        id: 34,
        url: '/images/gallery/equipe/personelle17.jpg',
        category: 'personnel',
        title: 'TIAM Joël.  Stagiaire'
    },
    {
        id: 35,
        url: '/images/gallery/equipe/personelle18.jpg',
        category: 'personnel',
        title: 'Mme MAWA Caroline   Assistante dentaire'
    },
    {
        id: 36,
        url: '/images/gallery/equipe/personelle19.jpg',
        category: 'personnel',
        title: 'EMBO Faith'
    },

    {
        id: 40,
        url: '/images/gallery/clinique/salle 03.jpg',
        category: 'salle',
        title: 'salle'
    },
    {
        id: 41,
        url: '/images/gallery/clinique/salle 04.jpg',
        category: 'salle',
        title: 'salle'
    },
    {
        id: 42,
        url: '/images/gallery/clinique/salle 05.jpg',
        category: 'salle',
        title: 'salle'
    },
    {
        id: 43,
        url: '/images/gallery/clinique/salle 06.jpg',
        category: 'salle',
        title: 'salle'
    },

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
