import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FiStar } from 'react-icons/fi'

function Testimonials() {
    const testimonials = [
        {
            name: 'Arlette',
            role: 'Patiente',
            text: 'Un cabinet très propre et parfaitement entretenu. On se sent en totale confiance.',
            rating: 5,
            avatar: '/images/testimonials/patient-1.jpg'
        },
        {
            name: 'Patrick',
            role: 'Patien',
            text: ' Accueil impeccable et personnel très compétent. On se sent immédiatement à l’aise et en sécurité.',
            rating: 5,
            avatar: '/images/testimonials/patient-2.webp'
        },
        {
            name: 'Michael',
            role: 'Patient',
            text: 'Une équipe accueillante et très professionnelle. Je me suis senti en confiance dès la première consultation.',
            rating: 5,
            avatar: '/images/testimonials/patient-3.jpeg'
        }
    ]

    return (
        <section className="testimonials-refined">
            <div className="container">
                <div className="testimonials-header-refined">
                    <h4 className="testimonials-subtitle-refined">Témoignages</h4>
                    <h2 className="testimonials-title-refined">Ce que disent nos patients</h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    data-aos="fade-in"
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="testimonials-carousel-refined"
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card-refined">
                                <div className="testimonial-quote-icon-refined">“</div>
                                <div className="testimonial-stars-refined">
                                    {[...Array(t.rating)].map((_, i) => <FiStar key={i} fill="gold" stroke="gold" />)}
                                </div>
                                <p className="testimonial-main-text-refined">{t.text}</p>
                                <div className="testimonial-author-refined">
                                    <div className="testimonial-avatar-refined">
                                        <img src={t.avatar} alt={t.name} />
                                    </div>
                                    <div>
                                        <h4 className="testimonial-name-refined">{t.name}</h4>
                                        <p className="testimonial-role-refined">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
