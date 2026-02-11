import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Team() {
    const team = [
        {
            name: 'Dr. BOUTCHOUANG Raoul',
            role: 'Chirurgien-Dentiste',
            img: '/images/team/dr-boutchouang-raoul.jpg',
            oncdc: '257'
        },
        {
            name: 'Dr. SAMEN Hermann',
            role: 'Chirurgien-Dentiste',
            img: '/images/team/dr-samen-hermann.jpg',
            oncdc: '361'
        },
        {
            name: 'Dr. MAGOUOH Sorèle',
            role: 'Chirurgien-Dentiste',
            img: '/images/team/dr-magouoh-sorele.jpg',
            oncdc: '383'
        },
        {
            name: 'Dr. MANYA Laetitia',
            role: 'Chirurgien-Dentiste',
            img: '/images/team/dr-manya-laetitia.jpg',
            oncdc: '633'
        },
        {
            name: 'Dr. WANANG Eva',
            role: 'Chirurgien-Dentiste',
            img: '/images/team/dr-wanang-eva.jpg',
            oncdc: '1120'
        },
        {
            name: 'Dr. SIMO Arthur',
            role: 'Chirurgien-Dentiste',
            img: '/images/team/dr-simo-arthur.jpg',
            oncdc: '1121'
        },
        {
            name: 'Mlle ATONFACK Stéphanie Laure',
            role: 'Assistante Administrative - Comptable',
            img: '/images/team/mlle-atonfack-stephanie.jpg',
            oncdc: null
        },
        {
            name: 'Mlle ANNA SEEM',
            role: 'Assistante Administrative - Comptable',
            img: '/images/team/mlle-anna-seem.jpg',
            oncdc: null
        },
        {
            name: 'Mlle METCHOUAGUI Blandine',
            role: 'Assistante Administrative - Comptable',
            img: '/images/team/mlle-metchouagui-blandine.jpg',
            oncdc: null
        },
        {
            name: 'Mme MAWA Caroline',
            role: 'Assistante Dentaire',
            img: '/images/team/mme-mawa-caroline.jpg',
            oncdc: null
        },
        {
            name: 'Mme DOUGLA Christelle',
            role: 'Assistante Dentaire',
            img: '/images/team/mme-dougla-christelle.jpg',
            oncdc: null
        },
        {
            name: 'Mme DONFACK Esther',
            role: 'Assistante Dentaire',
            img: '/images/team/mme-donfack-esther.jpg',
            oncdc: null
        },
        {
            name: 'Mme ADIFFO Valoide',
            role: 'Assistante Dentaire',
            img: '/images/team/mme-adiffo-valoide.jpg',
            oncdc: null
        }
    ]

    return (
        <section className="team-refined" id="equipe">
            <div className="container">
                <div className="team-header-refined" data-aos="fade-up">
                    <h4 className="team-subtitle-refined">Notre Équipe</h4>
                    <h2 className="team-title-refined">Des experts à votre service</h2>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="team-swiper"
                    data-aos="fade-up"
                >
                    {team.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="team-card-refined">
                                <div className="team-image-refined">
                                    <img src={member.img} alt={member.name} />
                                </div>
                                <h3 className="team-name-refined">{member.name}</h3>
                                <p className="team-role-refined">{member.role}</p>
                                {member.oncdc && <p className="team-reg-refined">ONCDC N° {member.oncdc}</p>}
                                <div className="team-socials-refined">
                                    <a href="#" className="social-icon-refined"><FiFacebook /></a>
                                    <a href="#" className="social-icon-refined"><FiTwitter /></a>
                                    <a href="#" className="social-icon-refined"><FiInstagram /></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Team
