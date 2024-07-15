import styles from './AboutPage.module.scss';
// import { useState } from 'react';
import Organisation from '../../components/About/Organisation/Organisation';
// import Staff from '../../components/About/Staff/Staff';
// import Contacts from '../../components/About/Contacts/Contacts';

function AboutPage() {
    // const [tab, setTab] = useState(0)
    return (
        <div className={styles["wrapper"]}>
            <div className={styles.about}>
                <div className={styles.about__banner}>
                    {/* <div className={styles.about__tabs}>
                        <button onClick={()=>setTab(0)}>ОРГАНИЗАЦИЯ<div className={tab===0?styles.underline:styles['not-underline']}></div></button>
                        <button onClick={()=>setTab(1)}>СТАФФ<div className={tab===1?styles.underline:styles['not-underline']}></div></button>
                        <button onClick={()=>setTab(2)}>КОНТАКТЫ<div className={tab===2?styles.underline:styles['not-underline']}></div></button>
                    </div>  */}
                </div>
                {/* {tab===0&&<Organisation/>}
                {tab===1&&<Staff/>}
                {tab===2&&<Contacts/>} */}
                <Organisation />
            </div>
        </div>
    );
}

export default AboutPage;