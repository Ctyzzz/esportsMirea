import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
/*
import styles from "./News.module.scss";
import fire from "../../assets/news/fire.svg"
import news from "../../assets/news/news.svg"
*/
import InDeveloping from '../InDeveloping/InDeveloping';

const News = () => {
  const navigate = useNavigate()
  navigate('/news')
  return (
    <div>
      <div>
        <InDeveloping label="/News/" />
      </div>
    </div>
    /*
    <div className={styles.news}>
      <div className={styles.news__main}>
        <img src={fire} alt="fire" />
        <div className={styles.news__main__title}>
          <h1>ГОРЯЧИЕ ИТОГИ МСКЛ</h1>
          <p>МЫ ПОБЕДИЛИ ВЕЗДЕ</p>
        </div>
      </div>
      <div className={styles.news__all}>
        <Link to="/news/newsabout" style={{ textDecoration: 'none' }}>
          <div className={styles.news__all__block}>
            <p>Победа на ВКСЛ-2023 — главное событие этого года...</p>
            <img src={news} alt="news" />
          </div>
        </Link>
        <div className={styles.news__all__block}>
          <p>Победа на ВКСЛ-2023 — главное событие этого года...</p>
          <img src={news} alt="news" />
        </div>
        <div className={styles.news__all__block}>
          <p>Победа на ВКСЛ-2023 — главное событие этого года...</p>
          <img src={news} alt="news" />
        </div>
        <div className={styles.news__all__block}>
          <p>Победа на ВКСЛ-2023 — главное событие этого года...</p>
          <img src={news} alt="news" />
        </div>
        <div className={styles.news__all__block}>
          <p>Победа на ВКСЛ-2023 — главное событие этого года...</p>
          <img src={news} alt="news" />
        </div>
        <div className={styles.news__all__block}>
          <p>Победа на ВКСЛ-2023 — главное событие этого года...</p>
          <img src={news} alt="news" />
        </div>
      </div>
      <div className={styles.news__button}>
        <p>ПОКАЗАТЬ ЕЩЁ</p>
      </div>
    </div>
    */
  )
}

export default News;