import { useState } from 'react'
import { FiPlus, FiPhone, FiMail } from 'react-icons/fi'

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null)

    const faqs = [
        {
            question: 'Quels services proposez-vous chez Smile ?',
            answer: 'Nous proposons une vaste gamme de services spécialisés : Consultation & Diagnostic, Implantologie, Blanchiment bucco-dentaire, Soins & Prothèses, Orthodontie, Pédodontie (soins enfants), Chirurgie Maxillo-faciale, Endodontie, Radiologie 3D (CBCT) et Odontologie Restauratrice.'
        },
        {
            question: 'Comment prendre rendez-vous ?',
            answer: 'Vous pouvez prendre rendez-vous par téléphone, par email ou directement via notre formulaire de contact en ligne. Nous vous répondrons dans les plus brefs délais.'
        },
        {
            question: 'Acceptez-vous les urgences bucco-dentaires ?',
            answer: 'Oui, nous assurons une prise en charge des Urgences 24h/24 & 7j/7. En cas de douleur aiguë ou d\'accident, contactez-nous immédiatement au numéro d\'urgence.'
        },
        {
            question: 'Quels modes de paiement acceptez-vous ?',
            answer: 'Nous acceptons les paiements par Orange Money, MoMo, espèces et chèques. Nous proposons également des facilités de paiement pour les traitements importants.'
        }
    ]

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq-header-refined">
                    <h4 className="faq-subtitle-refined">FAQ</h4>
                    <h2 className="faq-title-refined">Foire aux questions</h2>
                </div>

                <div className="faq-container">
                    <div className="faq-left" data-aos="fade-right">
                        <h3>Questions fréquentes</h3>
                        <p>
                            Vous avez des questions ? Nous avons les réponses. N'hésitez pas à nous contacter pour plus d'informations.
                        </p>
                        <div className="faq-contact-item">
                            <div className="faq-contact-icon"><FiPhone /></div>
                            <div>
                                <strong>Téléphone</strong>
                                <span>+237 233 44 45 68</span>
                            </div>
                        </div>
                        <div className="faq-contact-item">
                            <div className="faq-contact-icon"><FiMail /></div>
                            <div>
                                <strong>Email</strong>
                                <span>cabinetssmile@yahoo.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="faq-accordion" data-aos="fade-left">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <span className="faq-icon"><FiPlus /></span>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
