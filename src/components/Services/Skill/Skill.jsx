import { SkillItem } from "./SkillItem";
import { skill } from "../../../const.js";

const Skill = () => {
    return(
        <div className={styles["skill"]}>
            <div className={styles["skill-zonesWrapper"]}>
                <h1>МЫ УМЕЕМ</h1>
                <div className={styles["skill-zonesWrapper__zones"]}>
                    {skill.map((obj) => (
                        <SkillItem
                            key={obj.id}
                            imageUrl={obj.imageUrl}
                            title={obj.title}
                            description={obj.description}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skill;