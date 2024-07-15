import styles from './Die.module.scss'

function Die({img, title, font, mt, mb, mr, ml}) {
    if(typeof title != 'string'){
        
    }
    return ( 
        <div className={styles.die}
            style={{
                marginTop: `${mt}px`,
                marginRight: `${mr}px`,
                marginBottom: `${mb}px`,
                marginLeft: `${ml}px`,
            }}
        >
            <div className={styles.img}><img src={img}></img></div>
            <div className={styles["text"]}>
                {typeof title === 'object'?
                    title.map(text => <p style={{fontSize: `${font}px`, marginTop: '0px'}}>{text}</p>):
                    <p style={{fontSize: `${font}px`}}>{title}</p>
                }
            </div>
        </div>
     );
}

export default Die;