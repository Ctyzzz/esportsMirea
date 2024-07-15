import { useEffect, useState } from 'react'
import styles from './GroupVR.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setEndTime, setStartTime } from '../../../redux/slices/reservation'

const TimeCard = ({time, enabled}) => {
    const [active, setActive] = useState(false)
    const dispatch  = useDispatch()
    const endTime = useSelector(state=>state.reservationReducer.endTime)
    const handleClick = () => {
        if(enabled){
            if(active){
                dispatch(setEndTime(''))
            }
            else{
                dispatch(setStartTime(time.slice(0, 5)))
                dispatch(setEndTime(time.slice(6)))
            }
            setActive(!active)
        }
    }
    useEffect(()=>{
        if(endTime != time.slice(6)){
            setActive(false)
        }
    }, [endTime])

    return (
        <>
            <div onClick={() => handleClick()} 
                className={`${styles['group-vr-info__button']} 
                ${enabled ? '' : styles['group-vr-info__button_disabled']} 
                ${active ? styles['group-vr-info__button_active'] : ''}`}
            >
                <p>{time}</p>
            </div>
        </>
    )
}

export default TimeCard