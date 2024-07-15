import styles from './Input.module.scss'

const Input = ({ label, name, value, setValue, isValid }) => {
  return (
    <>
      <div className={`${styles['input']} ${isValid === false && styles['error']}`}>
        <label htmlFor={name}>{label}</label>
        <input placeholder="Введите текст здесь..." name={name} value={value} onChange={(e) => setValue(e.target.value)} />
        {!isValid && <p style={{ color: "#9F0E0E" }}>Вы ввели неккоректные данные</p>}
      </div>
    </>
  )
}

export default Input