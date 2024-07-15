import { useSelector } from "react-redux"
import classNames from "classnames";
import styles from "./Button.module.scss"
import { Link } from "react-router-dom"

const Button = ({ children, doing, params, isGroupVr, className }) => {
  let disabled = false
  const endTime = useSelector(state=>state.reservationReducer.endTime)
  if(isGroupVr){
    if(!endTime){О
      disabled = true
    }
  }
  return (
    <button className={classNames(styles.button, className)} onClick={()=>{
      if(doing){
        doing(...params)
      }
    }} disabled={disabled}>{children}</button>
  )
}

export default Button