

const Interest = () => {
    return(
        <div className={styles["interest"]}>
            <div className={styles["interest-interesting"]}>
                <h3>ЗАИНТЕРЕСОВАЛО?</h3>
                <p>Свяжись с нами, выбрав удобный тебе способ и мы <br/>поможем теебе сделать турнир твоей мечты</p>
                <div  className={styles["interest-interesting-contact"]}>
                    <div className={styles["interest-interesting-contact-number"]}>
                        <img className={styles["interest-interesting-contact-number-icon"]} src={telephone}/>
                        <p>Позвоните нам: <br/>+7 (499) 215 65 65</p>
                    </div>
                    <div className={styles["interest-interesting-contact-mail"]}>
                        <img className={styles["interest-interesting-contact-mail-icon"]} src={mail} />
                        <p>Напишите нам: <br/>cyber@mirea.ru</p>
                    </div>
                </div>
            </div>
            <div className={styles["interest-interesting-phones"]}>
                <img className={styles["interest-interesting-phones__white"]} src={iphonewhite}/>
                <img className={styles["interest-interesting-phones__red"]} src={iphonered}/>
            </div>
        </div>
    )
}

export default Interest;