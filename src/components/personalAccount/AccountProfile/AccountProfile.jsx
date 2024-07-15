import AccountBooking from '../AccountBooking/AccountBooking'
import AccountTournaments from '../AccountTournaments/AccountTournaments'

import styles from './AccountProfile.module.scss'

const AccountProfile = () => {
  return (
    <>
        <div className={styles.profile}>
            <AccountBooking /> 
            <AccountTournaments /> 
        </div>
    </>
  )
}

export default AccountProfile