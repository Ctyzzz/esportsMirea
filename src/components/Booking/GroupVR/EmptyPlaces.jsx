import styles from './GroupVR.module.scss'

const EmptyPlaces = () => {
  return (
    <>
        <div className={styles['group-vr-info__place']}>
          <p>Свободно: 2 из 6 мест</p>
          <div className={styles['group-vr-info__list']}>
            <p>Иван</p>
            <p>Иван Иванов</p>
            <p>Иван иванов Иванович</p>
          </div>
        </div>
    </>
  )
}

export default EmptyPlaces