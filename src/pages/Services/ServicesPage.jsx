
import styles from "./ServicesPage.module.scss"

import Play from "../../components/Services/Play/Play"
import Successful from "../../components/Services/Successful/Successful"
import Choose from "../../components/Services/Choose/Choose"
import Proposition from "../../components/Services/Proposition/Proposition"
import Skill from "../../components/Services/Skill/Skill"
import Interest from "../../components/Services/Interest/Interest"

function ServicesPage() {
    return (
        <>
            <div className={styles.servicesContent}>
                <Play />
                <Successful />
                <Choose />
                <Proposition />
                <Skill />
                <Interest />
            </div>
        </>
    )
}

export default ServicesPage