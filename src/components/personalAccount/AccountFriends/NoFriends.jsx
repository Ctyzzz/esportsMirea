import { useEffect, useState } from 'react'
import styles from './AccountFriends.module.scss'

const NoFriends = ({friendsLink}) => {

  const [component, setComponent] = useState('')
  useEffect(() => {
    switch(friendsLink){
      case 'friends': 
        setComponent('У вас еще нет друзей:(')
        break
      case 'online': 
        setComponent('Нет друзей в онлайне')
        break
      case 'requests': 
        setComponent('Нет заявок в друзья')
        break
    }
  }, [friendsLink])

  return (
    <>
        <div className={styles['friends-cards']}>
            <div className={styles['friends-cards__no-friends']}>
              <p>{component}</p>
            </div>
        </div>
    </>
  )
}

export default NoFriends