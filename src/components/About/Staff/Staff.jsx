import { staff } from "../../../const.js";
import styles from "./Staff.module.scss"

function Staff() {
    return ( 
        <div className={styles.staff}>
            <div className={styles.cards}>
                {staff.map(obj=>
                    <div className={styles.card}>
                        <img src={obj.img} alt={obj.name} />
                        <div className={styles.info}>
                            <h2>{obj.nick.toUpperCase()}</h2>
                            <p className={styles.name}>{obj.name}</p>
                            <p className={styles.job}>{obj.job}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}

export default Staff;