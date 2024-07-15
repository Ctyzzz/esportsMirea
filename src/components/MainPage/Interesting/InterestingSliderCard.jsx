import styles from "./Interesting.module.scss"
import Fire from "../../../assets/interesting/Fire.svg"
import Bg1 from "../../../assets/interesting/SliderBg1.png"


export const InterestingSliderCard = () => {
  return (
    <div
    className={styles.interestingSliderCard}
    style={{ backgroundImage: `url(${Bg1})` }}
  >
    
    <div className={styles.container}>
    <div className={styles.fire}>
        <img src={Fire} alt="fire" />
      </div>
        <div className={styles.container__content}>
            <span className={styles.content__title}> горячие итоги мскл </span>
            <span className={styles.content__subTitle}>  мы победили везде</span>
        </div>
      
      
    </div>
  </div>
  )
}
