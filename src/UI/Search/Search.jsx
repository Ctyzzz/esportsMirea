import styles from './Search.module.scss'

const Search = () => {
  return (
    <>
        <div className={styles['search__input']}>
            <input placeholder="Поиск"></input>
        </div> 
    </>
  )
}

export default Search