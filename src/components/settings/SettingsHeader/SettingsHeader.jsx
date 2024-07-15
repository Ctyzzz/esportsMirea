import { useDispatch } from 'react-redux'

import NavbarLink from '../../../UI/NavbarLink/NavbarLink'

import styles from './SettingsHeader.module.scss'
import { settingslinks } from '../../../const'
import { setSettingsLink } from '../../../redux/slices/link'

const SettingsHeader = ({ settingsLink }) => {

  const dispatch = useDispatch()

  return (
    <>
        <div className={styles.settings__header}>
            <h3 className={styles.settings__title}>Настройки</h3>
            <ul className={`${styles.settings__navbar}`}>
                {
                  settingslinks.map((link, index)=> {
                    return(
                      <li key={index} onClick={()=>dispatch(setSettingsLink(link.path))}>
                        <NavbarLink navLink={settingsLink} title={link.title} path={link.path} />
                      </li>
                    )
                  })
                }
               
            </ul>
        </div>
    </>
  )
}

export default SettingsHeader