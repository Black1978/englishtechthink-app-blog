import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Научись думать на английском языке</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>
                        Взрослый человек, его способности познавать окружающий мир
                    </h2>
                    <p className={styles.postDesc}>
                        Уже сформированные приемы мышления взрослого человека, диктуют особый подход к изучению другого языка.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
