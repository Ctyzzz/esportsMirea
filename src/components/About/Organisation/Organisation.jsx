import styles from "./Organisation.module.scss"
import s1Pic from "../../../assets/about/s1Pic.svg"
import { aboutDipartments, socialsAbout } from "../../../const"
// import pic1 from '../../../assets/about/photo1.jpg'
// import pic2 from '../../../assets/about/photo2.jpg'
// import pic3 from '../../../assets/about/photo3.jpg'
import Die from "../../../UI/AboutDie/Die"
import edit from '../../../assets/about/edit.svg'
import marker from '../../../assets/about/marker.svg'
import phone from '../../../assets/about/phone.svg'
import { ZoneItem } from "../../MainPage/Zones/ZoneItem"

function Organisation() {
    return (
        <div className={styles.organisation}>
            <section className={styles.organisation__s1}>
                <div className={styles.s1__left}>
                    <h1>Играй, твори и получай <span>удовольствие</span> только у нас!</h1>
                    <p>Наш Киберспортивный Центр всегда рад помочь вам с проведением мероприятий разного типа и масштаба. Начиная от организации дня рождения вашего двоюродного деда, заканчивая проведением крупного турнира.</p>
                    <div className={styles.dies}>
                        <Die img={phone}
                            title={[
                                'Позвоните нам:',
                                '+ 7 (495) 555 25 25']}
                            font={15} mr={26} />
                        <Die img={marker}
                            title={[
                                'пр-т Вернадского,',
                                'дом 78, строение 7']}
                            font={15} mr={26} />
                    </div>
                </div>
                <div className={styles.s1__right}>
                    <div className={styles.img}>
                        <img src={s1Pic} alt="" />
                    </div>
                    <div className={styles.aword}>
                        <div className={styles.img}></div>
                        <h2>152</h2>
                        <p> Турнира за последние два года</p>
                    </div>
                </div>
            </section>
            <section className={styles.organisation__s2}>
                <h1>ОТДЕЛЕНИЯ</h1>
                <p>Мы, как и любая другая крупная организация, состоим из нескольких отделений, которые делятся в зависимости от выполняемой работы. </p>
                <div className={styles.department}>
                    {aboutDipartments.map((obj, index) =>
                        <ZoneItem key={index} imageUrl={obj.img} title={obj.title} description="ffdfvre" />
                    )}
                </div>
            </section>
            <section className={styles.organisation__s3}>
                <div className={styles.main}>
                    <h1>ХОЧЕШЬ К НАМ?</h1>
                    <p>Мы постоянно заинтеросованы в новых кадрах с горящими глазами. Скорее заполняй заявку по понравившемуся направлению и вступай в наши ряды!</p>
                    <a href=""><Die img={edit} title={'Заполнить форму'} mt={30} /></a>
                </div>
                <div className={styles.s3__img}></div>
            </section>
            <section className={styles.organisation__s4}>
                <h1>НАШИ СОЦСЕТИ</h1>
                <div className={styles.socials}>
                    {socialsAbout.map((social, index) => <div key={index} className={styles.social}><img src={social.img} alt="social logo" /><h4>{social.followers}</h4><p>подписчиков</p></div>)}
                </div>
            </section>
            {/* <section className={styles.organisation__s4}>
                <h1>ФОТО ГАЛЕРЕЯ</h1>
                <div className={styles.pics}>
                    <img src={pic1} alt="pic1" />
                    <img src={pic2} alt="pic1" />
                    <img src={pic3} alt="pic1" />
                </div>
            </section> */}
        </div>
    );
}

export default Organisation;