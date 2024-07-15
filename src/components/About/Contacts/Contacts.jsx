import Button from "../../../UI/Button/Button";
import styles from "./Contacts.module.scss"
import { useState } from "react";
import contacts1 from '../../../assets/about/contacts1.png'
import contacts2 from '../../../assets/about/contacts2.png'
import contacts3 from '../../../assets/about/contacts3.png'
import marker from '../../../assets/about/marker.svg'
import clock from '../../../assets/about/clock.svg'
import phone from '../../../assets/about/phone.svg'
import mail from '../../../assets/about/mail.svg'
import map from '../../../assets/about/map.png'
import Die from "../../../UI/AboutDie/Die";

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        main: '',
    })

    const handleSubmit = (e)=>{
    e.target.value()
    }

    return ( 
        <div className={styles.contacts}>
            <section className={styles["s1"]}>
                <div className={styles.images}>
                    <img src={contacts1} alt="photo" className={styles.im1} />
                    <img src={contacts2} alt="photo" className={styles.im2}/>
                    <img src={contacts3} alt="photo" className={styles.im3}/>
                </div>
                <div className={styles.main}>
                    <h1>Хочешь задать нам очень <span>важный вопрос</span> или что-то обсудить?</h1>
                    <p>Мы всегда любим поговорить на любые темы, поэтому ты можешь заполнить форму ниже и мы тебе ответим в ближайшее время!</p>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className={styles['form-top']}>
                            <div className={styles["input-block"]}>
                                <label htmlFor="name">Как к вам обращаться<span>?</span></label>
                                <input type="text"
                                    id='name'
                                    placeholder="Введите ваше имя сюда..."
                                    value={formData.name}
                                    onChange={e=>setFormData(prev=> ({...prev, name: e.target.value}))}
                                />
                            </div>
                            <div className={styles["input-block"]}>
                                <label htmlFor="email">Ваша почта</label>
                                <input type="email"
                                    id="email"
                                    placeholder="Введите адрес электронной почты..."
                                    value={formData.email}
                                    onChange={e=>setFormData(prev=> ({...prev, email: e.target.value}))}
                                />
                            </div>
                        </div>
                        <div className={styles["form-bottom"]}>
                            <label htmlFor="main">Ваш вопрос <span>/</span> предложение</label>
                            <textarea type="text"
                                id='main'
                                placeholder="Введите адрес электронной почты..."
                                value={formData.main}
                                onChange={e=>setFormData(prev=> ({...prev, main: e.target.value}))}
                            />
                        </div>
                        <Button doing={handleSubmit}>ОТПРАВИТЬ</Button>
                    </form>
                </div>
            </section>
            <div className={styles["line"]}></div>
            <section className={styles["s2"]}>
                <div className={styles["main"]}>
                    <h1>Наши контакты<span>:</span></h1>
                    <Die img={marker} title={'Москва, м. Юго-Западная, пр-т Вернадского, 78, стр. 7'} mb={25} mt={44}/>
                    <Die img={clock} title={'понедельник – пятница, с 9:00 до 20:00'} mb={25}/>
                    <Die img={phone} title={'+ 7 (495) 555 25 25'} mb={25}/>
                    <Die img={mail} title={'cyberinfo@mirea.ru'} mb={25}/>
                </div>
                <div className={styles["map"]}>
                    <img src={map} alt="карта" />
                </div>
            </section>
            <div className={styles["line"]}></div>
        </div>
     );
}

export default Contacts;