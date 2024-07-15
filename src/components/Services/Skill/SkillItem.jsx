import React from "react"
import styles from "./Skill.module.scss"

export const SkillItem = ({imageUrl, title, description}) => {
    const [isMouse, setIsMouse] = React.useState(true)

    return (

      <div className={styles.servicesItem} style={{backgroundImage: `url(${imageUrl})`}} 
      onMouseOver={() => setIsMouse(false)} onMouseOut={() => setIsMouse(true)}>
          <p className={ isMouse ? styles.showTitle : styles.showTitle_false}>
              {title}
          </p>
          <div className={ isMouse ? styles.blur : styles.blur_false}>
              <div className={ isMouse ? styles.showDescription : styles.showDescription_false}>
                  {description}
              </div>
          </div>
      </div>

    )
}