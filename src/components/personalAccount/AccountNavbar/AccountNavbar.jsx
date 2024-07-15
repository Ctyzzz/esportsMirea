import { useDispatch } from 'react-redux'

import NavbarLink from '../../../UI/NavbarLink/NavbarLink'

import styles from "./AccountNavbar.module.scss"
import { accountlinks } from '../../../const'
import { setProfileLink } from '../../../redux/slices/link'
import { useNavigate } from 'react-router-dom'


const AccountNavbar = ({ profileLink }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
        <ul className={`${styles.account__navbar} ${styles.navbar}`}>
            {
              accountlinks.map((link, index) => {
                return(
                  <li key={index} onClick={()=>{link.path==='settings'?navigate('/settings'):dispatch(setProfileLink(link.path))}}>
                    <NavbarLink icon={link.icon} iconActive={link.iconActive} navLink={profileLink} title={link.title} path={link.path} />
                  </li>
                )
              })
            }
        </ul>
    </>
  )
}

export default AccountNavbar