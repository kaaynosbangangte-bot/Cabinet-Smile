const newsArticles = [
    {
        title: "Nouvelle technologie pour des soins plus confortables",
        description: "Nous avons équipé la clinique d'un nouvel appareil de radiographie 3D, pour des diagnostics précis et plus rapides.",
        image: "/images/news/article-1.jpg"
    },
    {
        title: "Guide complet pour un sourire éclatant",
        description: "Découvrez les rituels quotidiens et les soins professionnels pour maintenir une blancheur naturelle et une santé buccale parfaite.",
        image: "/images/news/article-2.jpg"
    },
    {
        title: "L'implantologie : une solution de vie",
        description: "Les technologies modernes nous permettent aujourd'hui de restaurer votre sourire de manière durable, indolore et esthétique.",
        image: "/images/news/article-3.jpg"
    },
    {
        title: "Orthodontie invisible pour adultes",
        description: "Redécouvrez le plaisir de sourire grâce à nos solutions de bagues invisibles, alliant discrétion absolue et efficacité remarquable.",
        image: "/images/news/article-4.jpg"
    },
    {
        title: "Prévention dentaire pour toute la famille",
        description: "Des conseils pratiques et des soins préventifs adaptés à chaque âge pour garantir une santé bucco-dentaire optimale.",
        image: "/images/news/article-5.jpg"
    },
    {
        title: "Les avancées en dentisterie esthétique",
        description: "Découvrez comment les nouvelles techniques de blanchiment et de facettes peuvent transformer votre sourire en toute sécurité.",
        image: "/images/news/article-6.jpg"
    }
]

function NewsPage() {
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
                            <article
                                key={index}
                                className="news-card-refined"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="news-image-refined">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className="news-content-refined" style={{ textAlign: 'center' }}>
                                    <h3 className="news-article-title-refined">{article.title}</h3>
                                    <p className="news-excerpt-refined">{article.description}</p>
                                    <a href="#" className="news-card-btn">Voir plus</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsPage
