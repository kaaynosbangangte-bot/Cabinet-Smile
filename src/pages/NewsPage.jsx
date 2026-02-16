import { newsArticles } from '../data/newsData'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

function NewsPage() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };
    return (
        <div className="news-page">
            {/* Hero Section */}
            <div className="news-page-hero" data-aos="fade-in">
                <div className="news-page-hero-content">
                    <h4>Actualités</h4>
                    <h1>Toute l'actu Smile, sans vous déplacer.</h1>
                </div>
            </div>

            {/* News Grid Section */}
            <section className="news-page-grid-section">
                <div className="container">
                    <div className="news-grid-refined">
                        {newsArticles.map((article, index) => (
                            <div key={article.id} className="news-page-item-wrapper">
                                <article
                                    className={`news-card-refined ${expandedId === article.id ? 'expanded' : ''}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="news-image-refined">
                                        <img src={article.image} alt={article.title} />
                                        <div className="news-date-badge-refined">{article.date}</div>
                                    </div>
                                    <div className="news-content-refined">
                                        <span className="news-category-badge">{article.category}</span>
                                        <h3 className="news-article-title-refined">{article.title}</h3>
                                        <p className="news-excerpt-refined">{article.excerpt}</p>

                                        {expandedId === article.id && (
                                            <div
                                                className="news-full-content-expanded"
                                                dangerouslySetInnerHTML={{ __html: article.fullContent }}
                                            />
                                        )}

                                        <button
                                            className="news-read-more-btn"
                                            onClick={() => toggleExpand(article.id)}
                                        >
                                            {expandedId === article.id ? (
                                                <>Réduire <FiChevronUp /></>
                                            ) : (
                                                <>Lire la suite <FiChevronDown /></>
                                            )}
                                        </button>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsPage
