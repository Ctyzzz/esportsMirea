import awards from "../../../assets/services/img/awards.svg"
import practice from "../../../assets/services/img/practice.svg"
import styles from "./Successful.module.scss"

const Successful = () =>{
    return(
        <div className={styles['successful']}>
            <div className={styles['successful-title']}>
                <div className={styles['successful-title__text1']}>
                    <h1>УСПЕШНЫЕ КЕЙСЫ</h1>
                </div>
                <div className={styles['successful-title__text2']}>
                    <h2>Посмотри, что мы уже сделали:</h2>
                </div>
            </div>
            <div className={styles['successful-blocks']}>
                <div className={styles['successful-blocks__b']}>
                    <img src={awards} alt="awards"/>
                    <div div className={styles['successful-blocks__b__text']}>
                        <p className={styles['successful-blocks__b__text__1']}>НАГРАЖДЕНИЕ <br /> ПОБЕДИТЕЛЕЙ МСКЛ</p> 
                    </div>              
                </div>
                <div className={styles['successful-blocks__b']}>
                    <div div className={styles['successful-blocks__b__text']}>
                        <p className={styles['successful-blocks__b__text__1']}>ПРОВЕДЕНИЕ ШКОЛЬНОГО <br /> ТУРНИРА ПО CS:GO</p> 
                    </div>
                    <img src={practice} alt="practice"/>
                </div>
            </div>
            <div className={styles['successful-buttons']}>
                <button className={styles['successful-buttons__color']}> </button>
                <button className={styles['successful-buttons__color']}> </button>
                <button className={styles['successful-buttons__color']}> </button>
            </div>
        </div>
    );
};

export default Successful;
