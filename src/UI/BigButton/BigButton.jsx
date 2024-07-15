import s from "./BigButton.module.scss"
import Button from './../Button/Button';

const BigButton = ({children, doing, params}) => {
  return (
    <div className={s.bigbutton}>
      <Button doing={doing} params={params}>{children}</Button>
    </div>
  )
}

export default BigButton