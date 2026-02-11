import { Link } from 'react-router-dom'

function CTA() {
    return (
        <section className="cta-refined">
            <div className="cta-overlay-refined"></div>
            <div className="container">
                <div className="cta-content-refined" data-aos="zoom-in">
                    <h4 className="cta-subtitle-refined">Contactez-nous</h4>
                    <h2 className="cta-title-refined">Planifiez votre visite dès aujourd’hui</h2>
                    <p className="cta-description-refined">
                        Prenez rendez-vous avec notre équipe pour des soins dentaires de qualité. Nous sommes à votre écoute pour répondre à vos besoins et vous accompagner vers un sourire sain et éclatant
                    </p>
                    <Link to="/appointment" className="btn-cta-refined">
                        Prendre un rendez-vous
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA
