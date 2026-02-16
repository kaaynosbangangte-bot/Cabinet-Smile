import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { newsArticles } from '../data/newsData'

function News() {
    // Utilisation des 3 premiers articles pour l'accueil
    const displayArticles = newsArticles.slice(0, 3);

    return (
        <section className="news-refined" id="actualites">
            <div className="container">
                <div className="news-header-refined" data-aos="fade-up">
                    <h4 className="news-subtitle-refined">Actualités</h4>
                    <h2 className="news-title-refined">Le fil d'actu du Cabinet Smile</h2>
                    <p className="news-description-refined">
                        Restez informé des nouveautés du Cabinet Smile et de nos précieux conseils pour votre santé bucco-dentaire.
                    </p>
                </div>

                <div className="news-grid-refined">
                    {displayArticles.map((article, index) => (
                        <article
                            key={index}
                            className="news-card-refined"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="news-image-refined">
                                <img src={article.image} alt={article.title} />
                                <div className="news-date-badge-refined">{article.date}</div>
                            </div>
                            <div className="news-content-refined">
                                <h3 className="news-article-title-refined">{article.title}</h3>
                                <p className="news-excerpt-refined">{article.excerpt}</p>
                                <Link to="/actualites" className="news-link-refined">
                                    Lire l'article <FiArrowRight />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News
