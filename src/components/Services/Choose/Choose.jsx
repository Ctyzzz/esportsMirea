import man from '../../../assets/services/man.svg'
import { Image } from "../../../UI/Image";
import styles from './Choose.module.scss'

const Choose = () => {
    return(
        <div className={styles['choose']}>
            <div className={styles['choose-why']}>  
                <div className={styles['choose-why-image']}>
                    <Image src={man} lazy={"intersecting"} alt="man" />
                </div>
                <div className={styles['choose-text']}>
                    <div className={styles['choose-text__title']}>
                        <p>САМОЕ ВАЖНОЕ</p>
                    </div>
                    <div className={styles['choose-text__description']}>
                        <p>Почему нужно выбрать <br/>
                        именно <span style={{color: '#F90'}}>нас</span> ?
                        </p>
                    </div>
                    <div className={styles['choose-text__cybercenter']}>
                        <p>Наш Киберспортивный Центр всегда рад помочь вам с <br/>
                        проведением мероприятий разного типа и масштаба. <br/>
                        Начиная от организации дня рождения вашего <br/>
                        двоюродного деда, заканчивая проведением крупного <br/>
                        турнира.
                        </p>
                    </div>
                    <button className={styles['choose-text-button']}>
                        Узнать больше 
                    </button>
                </div>
            </div>
            <div className={styles['choose-information']}>
                <div className={styles['choose-block']}>
                    <div className={styles['choose-block__text']}>
                        <p>
                            180<span style={{color: '#F90'}}>+</span>                        
                        </p>
                    </div>
                    <div className={styles['choose-block__bottomtext']}>
                    <p>Организаторов по разным <br />
                        направлениям</p>
                    </div>
                </div>
                <div className={styles['choose-block']}>
                    <div className={styles['choose-block__text']}>
                        <p>
                            12<span style={{color: '#F90'}}>+</span>                        
                        </p>
                    </div>
                    <div className={styles['choose-block__bottomtext']}>
                    <p>лет занимаемся <br />
                        организацией мероприятий</p>
                    </div>
                </div>
                <div className={styles['choose-block']}>
                    <div className={styles['choose-block__text']}>
                        <p>
                            <span style={{color: '#F90'}}>~</span>471                       
                        </p>
                    </div>
                    <div className={styles['choose-block__bottomtext']}>
                    <p>довольных заказчиков</p>
                    </div>
                </div>
                <div className={styles['choose-block']}>
                    <div className={styles['choose-block__text']}>
                        <p>
                            157<span style={{color: '#F90'}}>+</span>                        
                        </p>
                    </div>
                    <div className={styles['choose-block__bottomtext']}>
                    <p>турниров проведено за <br />
                        последние два года</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;