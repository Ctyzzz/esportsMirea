import styles from "./Interesting.module.scss"
import InterestingCard from "./InterestingCard"
import { InterestingCardData } from "../../../data/Interesting"
import { InterestingSliderCard } from "./InterestingSliderCard"
const Interesting = () => {
  return (
    <div className={styles.interestingWrapper}>
        <div className={styles.interestingWrapper__leftCol}>
            <h2 className={styles.title}>Интересное</h2>
            {
                InterestingCardData.map(obj => (
                    < InterestingCard 
                        key={obj.id}
                        image={obj.image}
                        title={obj.title}
                        desc={obj.desc}
                    />
                ))
            }
        </div>
        <div className={styles.interestingWrapper__sliderCont}>
            <InterestingSliderCard />
        </div>
    </div>
  )
}

export default Interesting