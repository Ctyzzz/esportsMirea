import { useEffect, useState } from 'react';

import DatePickerUI from '../BookingFilters/DatePickerUI';
import Button from '../../../UI/Button/Button';

import styles from './GroupVR.module.scss'
import EmptyPlaces from './EmptyPlaces';
import TimeCard from './TimeCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooking, fetchCreateBooking } from '../../../redux/slices/reservation';

const GroupVR = () => {
  const date = useSelector(state=>state.reservationReducer.date)
  const dispatch = useDispatch()
  const groupVR = useSelector(state=>state.reservationReducer.groupVR)
  useEffect(()=>{
    dispatch(fetchBooking({duration: '1h'}))
  }, [date])
  const startTime = useSelector(state=>state.reservationReducer.startTime)+':00'
  const endTime = useSelector(state=>state.reservationReducer.endTime)+':00'
  const createBooking = (device_id, date, start_time, end_time)=>{
    const data = {
        device_id,
        date: date.slice(0, 10),
        start_time,
        end_time
    }
    dispatch(fetchCreateBooking({data}))
  }
  return (
    <div className={styles['group-vr']}>
      <div className={styles['group-vr__place']}>
      <input></input>
      </div>
      <div className={`${styles['group-vr__info']} ${styles['group-vr-info']}`}>
        <div className={styles['group-vr-info__date']}> 
          <DatePickerUI/>
        </div>
        <div className={styles['group-vr-info__time']}>
          <p>Время бронирования</p>
          <div className={styles['group-vr-info__buttons']}>
            {groupVR.slots.length <= 11 && groupVR.slots.map((card, index) => {
              return(
                <TimeCard key={index} time={card.time} enabled={card.enabled}/>
              )
            })}
          </div>
        </div>
        <EmptyPlaces />
        <div className={styles['group-vr-info__booking']}>
          <Button children={'Забронировать'} doing={createBooking} params={[groupVR.id, date, startTime, endTime]} isGroupVr={true}/>
        </div>
      </div>
    </div>
  )
}
 
export default GroupVR
