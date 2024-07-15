import s from "./H2.module.scss"

const H2 = ({children}) => {
  return (
    <h2 className={s.h2}> {children}</h2>
  )
}

export default H2