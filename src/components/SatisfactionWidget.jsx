import { useState, useEffect } from 'react'
import { FiMessageSquare, FiX, FiSmile } from 'react-icons/fi'

function SatisfactionWidget() {
    const [isVisible, setIsVisible] = useState(false)
    const [isClosed, setIsClosed] = useState(false)

    useEffect(() => {
        // Apparaît après 4 secondes
        const timer = setTimeout(() => {
            if (!isClosed) {
                setIsVisible(true)
            }
        }, 4000)

        return () => clearTimeout(timer)
    }, [isClosed])

    if (isClosed) return null

    return (
        <div className={`satisfaction-widget ${isVisible ? 'visible' : ''}`}>
            <button className="widget-close" onClick={() => {
                setIsVisible(false)
                setTimeout(() => setIsClosed(true), 500)
            }}>
                <FiX />
            </button>
            <div className="widget-content">
                <div className="widget-icon-box">
                    <FiSmile className="icon-pulse" />
                </div>
                <div className="widget-text">
                    <h4>Votre avis compte !</h4>
                    <p>Pourriez-vous répondre à notre questionnaire de satisfaction ?</p>
                    <a
                        href="http://kaaynosbangangte-bot.github.io/questionnaire-satisfaction/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-widget-action"
                    >
                        Donner mon avis
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SatisfactionWidget
