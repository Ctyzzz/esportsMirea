import styles from './AccountTeams.module.scss'

const AccountTeams = () => {
  return (
    <>
        <div className={styles["blocks_container"]}>
            <div className={styles["block"]}>
                <p>ВСЕГО СЫГРАНО</p>
                <p>1000</p>
            </div>
            <div className={styles["block"]}>
                <p>ПРОЦЕНТ ПОБЕД</p>
                <p>100%</p>
            </div>
            <div className={styles["block"]}>
                <p>НАИБОЛЬШАЯ СЕРИЯ ПОБЕД</p>
                <p>1</p>
            </div>
            <div className={styles["block"]}>
                <p>ПОСЛЕДНИЕ РЕЗУЛЬТАТЫ</p>
                <p>---</p>
            </div>
        </div>
    </>
  )
}


export default AccountTeams



/*

  <div className={styles["team-info"]}>
      <div className={styles["team-info__header"]}>
        <AccountTitles img={players} title={'Игроки команды'}/>
        <Search />
      </div>
      <TeamsTable />
      <AccountTitles img={history} title={'История турниров'}/>
      <div className={styles["teams-cards"]}>
        <TeamsCard />
        <TeamsCard />
        <TeamsCard />
      </div>
      <div className={styles["team-settings-button"]}>
        <ShowMoreButton />
      </div>
    </div>




import styles from './team-settings.module.scss'
import crown from '../../assets/personalAccount/teams/crown.svg'
import plus from  '../../assets/personalAccount/teams/plus-white.svg'
import close from '../../assets/personalAccount/teams/close.svg'
import ShowMoreButton from './../../../UI/ShowMoreButton/ShowMoreButton';
import TeamsCard from './TeamsCard';
import BigButton from './../../../UI/BigButton/BigButton';
import SaveButton from './../../../UI/SaveButton/SaveButton';
const team-settings = () => {
  return (

        <div className={styles["team-settings"]}>
            <div className={styles["team-settings-wrap"]}>

                <div className={styles["team-settings-settings"]}>
                    <div className={styles["team-settings-settings__header"]}>
                        <p className={styles["team-settings-settings__header-text"]}>Настройки</p>
                        <img src={crown} alt="Crown" className={styles["team-settings-settings__header-icon"]}/>
                    </div>

                    <div className={`${styles["team-settings-settings__name"]} ${styles["team-settings-settings__block"]}`}>
                        <p className={`${styles["team-settings-settings__name-text"]} ${styles["team-settings-settings__text"]}`}>Название команды</p>
                        <input type="text" maxLength={40} required placeholder={"BARBARIKI TEAM"} className={`${styles["team-settings-settings__name-input"]} ${styles["team-settings-settings__input"]}`}/>
                    </div>

                    <div className={`${styles["team-settings-settings__description"]} ${styles["team-settings-settings__block"]}`}>
                        <p className={`${styles["team-settings-settings__description-text"]} ${styles["team-settings-settings__text"]}`}>Описание команды</p>
                        <textarea maxLength={240} required rows={9} placeholder={"Самая успешная женская киберспортивная команда в РТУ МИРЭА. Лидер по количеству побед по таким дисциплинам, как Minecraft, Roblox, Among Us."} className={`${styles["team-settings-settings__description-input"]} ${styles["team-settings-settings__input"]}`}/>
                    </div>
                </div>
                
                <div className={styles["team-settings-player-card"]}>
                    <p className={styles["team-settings-player-card__number"]}>Игрок 2</p>

                    <div className={`${styles["team-settings-player-card__player-select"]} ${styles["team-settings-player-card__select"]}`}>
                        <label htmlFor="player-select" className={`${styles["team-settings-player-card__player-select_label"]} ${styles["team-settings-player-card__select_label"]}`}>Выбрать игрока</label>
                        <select name="player" id="player-select" className={`${styles["team-settings-player-card__player-select_options"]} ${styles["team-settings-player-card__select_options"]}`}>
                            <option value=""  className={`${styles["team-settings-player-card__player-select_option"]} ${styles["team-settings-player-card__select_option"]}`}>Выбрать из списка друзей</option>
                            <option value="Friend1"  className={`${styles["team-settings-player-card__player-select_option"]} ${styles["team-settings-player-card__select_option"]}`}>irmyakino</option>
                        </select>
                    </div>
                    <div className={`${styles["team-settings-player-card__role-select"]} ${styles["team-settings-player-card__select"]}`}>
                        <label htmlFor= "role-select" className={`${styles["team-settings-player-card__role-select_label"]} ${styles["team-settings-player-card__select_label"]}`}>Роль в команде</label>
                        <select name="role" id="role-select" className={`${styles["team-settings-player-card__role-select_options"]} ${styles["team-settings-player-card__select_options"]}`}>
                            <option value="Member" className={`${styles["team-settings-player-card__role-select_option"]} ${styles["team-settings-player-card__select_option"]}`}>Участник</option>
                            <option value="Moderator"  className={`${styles["team-settings-player-card__role-select_option"]} ${styles["team-settings-player-card__select_option"]}`}>Модератор</option>
                        </select>
                    </div>
                        <button className={styles["team-settings-player-card__close"]}>
                            <img src={close} alt="Close" className={styles["team-settings-player-card__close-img"]}/>
                        </button>
                </div>

                <div className={styles["team-settings-button__add"]}>
                    <button className={styles["team-settings-button__add-button"]}>
                    <img src={plus} alt="Plus" className={styles["team-settings-button__add-img"]}/>
                </button>
                </div>

                <div className={styles["team-settings-button__save"]}>
                    <button className={styles["team-settings-button__save-button"]}>Сохранить</button>
                </div>
            </div>
        </div>

















          <div className={styles["team-settings"]}>

        <div className={styles["settings-info"]}>
            <div className={styles["settings-info__header"]}>
                <h5>Настройки</h5>
                <img src={crown} alt="Crown"/>
            </div>
            <div className={`${styles["settings-info__input"]}`}>
                <p>Название команды</p>
                <input type="text" maxLength={40} required placeholder={"BARBARIKI TEAM"}/>
            </div>
            <div className={`${styles["settings-info__input"]}`}>
                <p>Описание команды</p>
                <textarea maxLength={240} required rows={9} placeholder={"Самая успешная женская киберспортивная команда в РТУ МИРЭА. Лидер по количеству побед по таким дисциплинам, как Minecraft, Roblox, Among Us."}/>
            </div>
        </div>
        <PlayerCard />
        <div className={styles["team-settings__add"]}>
            <button>
                <img src={plus} alt="Plus"/>
            </button>
        </div>

        <div className={styles["team-settings__save"]}>Ф
            <SaveButton />
        </div>
</div>
*/