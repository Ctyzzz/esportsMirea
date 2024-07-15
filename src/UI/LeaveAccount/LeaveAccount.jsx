import styles from './LeaveAccount.module.scss'

import leave from '../../assets/personalAccount/settings/leave.svg'
import AuthService from '../../services/auth/auth.service'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/slices/auth'

const LeaveAccount = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const leaveAccount = () => {
    //AuthService.logout()
    dispatch(logOut())
    navigate('/')
  }

  return (
    <>
        <div className={styles.leave} onClick={leaveAccount}>
            <img draggable="false" src={leave} alt="" />
            <p>Выйти из аккаунта</p>
        </div>
    </>
  )
}

export default LeaveAccount