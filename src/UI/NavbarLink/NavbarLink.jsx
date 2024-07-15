import { useLocation } from 'react-router-dom'
import styles from './NavbarLink.module.scss'

const NavbarLink = ({ icon, title, iconActive, navLink, path }) => {
  const location = useLocation()

  return (
    <>
        <div  className={`${styles.navbar__item} ${(path === navLink ? location.pathname === '/booking' ? styles.navbar__item_booking  : styles.navbar__item_active : '')}`}>
            {
                <>
                    {icon ? <img draggable="false" src={path === navLink ? iconActive : icon} alt='icon' />
                    : <></>}
                    <span>{title}</span>
                </>
            }
        </div>
    </>
  )
}
export default NavbarLink
