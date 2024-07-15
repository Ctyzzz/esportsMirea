import styles from './Services.module.scss'
import { useNavigate } from 'react-router-dom'
import { ServicesItem } from "./ServicesItem";
import { skill } from "../../const";

// import man from '../../assets/services/man.svg'
// import gamepad from "../../assets/services/gamepad.svg"
// import awards from "../../assets/services/img/awards.svg"
// import practice from "../../assets/services/img/practice.svg"
// import microphone from '../../assets/services/img/gridservices/microphone.svg'
// import key from '../../assets/services/img/gridservices/key.svg'
// import infinity from '../../assets/services/img/gridservices/infinity.svg'
// import arrowprev from '../../assets/services/img/gridservices/arrowprev.svg'
// import arrownext from '../../assets/services/img/gridservices/arrownext.svg'
// import iphones from '../../assets/services/img/gridservices/iphones.png'
// import telephone from '../../assets/services/img/gridservices/telephone.svg'
// import mail from '../../assets/services/img/gridservices/mail.svg'
// import { ZoneItem } from '../MainPage/Zones/ZoneItem';
// import stylesZoneSection from "../MainPage/Zones/Zones.module.scss";

import InDeveloping from '../InDeveloping/InDeveloping';

const Services = () => {
    const navigate = useNavigate()
    navigate('/services')
    return (
        <div>
            <InDeveloping label="/services/" />
        </div>
        // <div className={styles['services']}>
        //     <div className={styles['services-play']}>
        //         <div className={styles['services-play-text']}>
        //             <div className={styles['services-play-text__us']}>
        //                 <p>Играй, твори и<br />
        //                     получай <span className={styles['services-play-text__us__pleasure']}>удовольствие</span><br />
        //                     только у нас!</p>
        //             </div>
        //             <div className={styles['services-play-text__service']}>
        //                 <p>Мы предоставляем услуги аренды наших помещений<br />
        //                     и проведении мероприятий любой сложности “под<br />
        //                     ключ”.</p>
        //             </div>
        //         </div>
        //         <div className={styles['services-play-image']}>
        //             <img src={gamepad} alt="gamepad" />
        //         </div>
        //     </div>
        //     <div className={styles['services-successful']}>
        //         <div className={styles['services-successful-title']}>
        //             <div className={styles['services-successful-title__text1']}>
        //                 <h1>УСПЕШНЫЕ КЕЙСЫ</h1>
        //             </div>
        //             <div className={styles['services-successful-title__text2']}>
        //                 <h2>Посмотри, что мы уже сделали:</h2>
        //             </div>
        //         </div>
        //         <div className={styles['services-successful-blocks']}>
        //             <div className={styles['services-successful-blocks__b']}>
        //                 <img src={awards} alt="awards" />
        //                 <div div className={styles['services-successful-blocks__b__text']}>
        //                     <p className={styles['services-successful-blocks__b__text__1']}>НАГРАЖДЕНИЕ <br /> ПОБЕДИТЕЛЕЙ МСКЛ</p>
        //                 </div>
        //             </div>
        //             <div className={styles['services-successful-blocks__b']}>
        //                 <div div className={styles['services-successful-blocks__b__text']}>
        //                     <p className={styles['services-successful-blocks__b__text__1']}>ПРОВЕДЕНИЕ ШКОЛЬНОГО <br /> ТУРНИРА ПО CS:GO</p>
        //                 </div>
        //                 <img src={practice} alt="practice" />
        //             </div>
        //         </div>
        //         <div className={styles['services-successful-buttons']}>
        //             <button className={styles['services-successful-buttons__color']}> </button>
        //             <button className={styles['services-successful-buttons__color']}> </button>
        //             <button className={styles['services-successful-buttons__color']}> </button>
        //         </div>
        //     </div>
        //     <div className={styles['services-choose']}>
        //         <div className={styles['services-choose-why']}>
        //             <div className={styles['services-choose-why-image']}>
        //                 <img src={man} alt="man" />
        //             </div>
        //             <div className={styles['services-choose-text']}>
        //                 <div className={styles['services-choose-text__title']}>
        //                     <p>САМОЕ ВАЖНОЕ</p>
        //                 </div>
        //                 <div className={styles['services-choose-text__description']}>
        //                     <p>Почему нужно выбрать <br />
        //                         именно <span style={{ color: '#F90' }}>нас</span> ?
        //                     </p>
        //                 </div>
        //                 <div className={styles['services-choose-text__cybercenter']}>
        //                     <p>Наш Киберспортивный Центр всегда рад помочь вам с <br />
        //                         проведением мероприятий разного типа и масштаба. <br />
        //                         Начиная от организации дня рождения вашего <br />
        //                         двоюродного деда, заканчивая проведением крупного <br />
        //                         турнира.
        //                     </p>
        //                 </div>
        //                 <button className={styles['services-choose-text-button']}>
        //                     Узнать больше
        //                 </button>
        //             </div>
        //         </div>
        //         <div className={styles['services-choose-information']}>

        //             <div className={styles['services-choose-block']}>
        //                 <div className={styles['services-choose-block__text']}>
        //                     <p>
        //                         180<span style={{ color: '#F90' }}>+</span>
        //                     </p>
        //                 </div>
        //                 <div className={styles['services-choose-block__bottomtext']}>
        //                     <p>Организаторов по разным <br />
        //                         направлениям</p>
        //                 </div>
        //             </div>

        //             <div className={styles['services-choose-block']}>
        //                 <div className={styles['services-choose-block__text']}>
        //                     <p>
        //                         12<span style={{ color: '#F90' }}>+</span>
        //                     </p>
        //                 </div>
        //                 <div className={styles['services-choose-block__bottomtext']}>
        //                     <p>лет занимаемся <br />
        //                         организацией мероприятий</p>
        //                 </div>
        //             </div>
        //             <div className={styles['services-choose-block']}>
        //                 <div className={styles['services-choose-block__text']}>
        //                     <p>
        //                         <span style={{ color: '#F90' }}>~</span>471
        //                     </p>
        //                 </div>
        //                 <div className={styles['services-choose-block__bottomtext']}>
        //                     <p>довольных заказчиков</p>
        //                 </div>
        //             </div>
        //             <div className={styles['services-choose-block']}>
        //                 <div className={styles['services-choose-block__text']}>
        //                     <p>
        //                         157<span style={{ color: '#F90' }}>+</span>
        //                     </p>
        //                 </div>
        //                 <div className={styles['services-choose-block__bottomtext']}>
        //                     <p>турниров проведено за <br />
        //                         последние два года</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className={styles["services-proposition"]}>
        //         <div className={styles["services-proposition-services"]}>
        //             <h1>НАШИ УСЛУГИ</h1>
        //             <p className={styles["services-proposition-services__title"]}>Что мы можем вам предложить:</p>
        //         </div>
        //         <div className={styles["services-proposition-cards"]}>
        //             <div className={styles["services-proposition-card"]}>
        //                 <div className={styles["services-proposition-cards__micro__logocase"]}>
        //                     <img className={styles["services-proposition-cards__micro__logocase__logos"]} src={microphone} alt="microphone" />

        //                 </div>
        //                 <div className={styles["services-proposition-cards__description"]}>
        //                     <h2>Трансляция турнира</h2>
        //                     <p className={styles["services-proposition-cards__subtitle"]}>Наши комментаторы с радостью <br />проведут трансляцию матчей</p>
        //                 </div>
        //             </div>
        //             <div className={styles["services-proposition-card"]}>
        //                 <div className={styles["services-proposition-card__key"]}>
        //                     <div className={styles["services-proposition-cards__key__logocase"]}>
        //                         <img className={styles["services-proposition-cards__key__logocase__logos"]} src={key} alt="key" />
        //                     </div>
        //                 </div>
        //                 <div className={styles["services-proposition-cards__description"]}>
        //                     <h2>Аренда помещения</h2>
        //                     <p className={styles["services-proposition-cards__subtitle"]}>Вы можете арендовать нашу площадку <br />для проведения <br />своего мероприятия</p>
        //                 </div>
        //             </div>
        //             <div className={styles["services-proposition-card"]} nth-child>
        //                 <div className={styles["services-proposition-cards__infinity__logocase"]}>
        //                     <img className={styles["services-proposition-cards__infinity__logocase__logos"]} src={infinity} alt="infinity" />
        //                 </div>
        //                 <div className={styles["services-proposition-cards__description"]}>
        //                     <h2>Турнир под ключ</h2>
        //                     <p className={styles["services-proposition-cards__subtitle"]}>Мы берём на себя все обязательства <br />по организации, офорлмению и <br />проведению вашего турнира</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className={styles["services-skill"]}>
        //         <div className={styles["services-skill-zonesWrapper"]}>
        //             <h1>МЫ УМЕЕМ</h1>
        //             <div className={stylesZoneSection.zonesWrapper__zones}>
        //                 {skill.map((obj) => (
        //                     <ZoneItem
        //                         key={obj.id}
        //                         imageUrl={obj.imageUrl}
        //                         title={obj.title}
        //                         description={obj.description}
        //                     />
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        //     <div className={styles["services__footer"]}>
        //         <div className={styles["services__footer-interest"]}>
        //             <h3>ЗАИНТЕРЕСОВАЛО?</h3>
        //             <p>Свяжись с нами, выбрав удобный тебе способ и мы <br />поможем теебе сделать турнир твоей мечты</p>
        //             <div className={styles["services__footer-interest-contact"]}>
        //                 <div className={styles["services__footer-interest-contact-nummail"]}>
        //                     <img className={styles["services__footer-interest-contact-nummail-iconphone"]} src={telephone} />
        //                     <p>Позвоните нам: <br />+7 (499) 215-65-65</p>
        //                 </div>
        //                 <div className={styles["services__footer-interest-contact-nummail"]}>
        //                     <img className={styles["services__footer-interest-contact-nummail-iconmail"]} src={mail} />
        //                     <p>Напишите нам: <br />esports@mirea.ru</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Services;