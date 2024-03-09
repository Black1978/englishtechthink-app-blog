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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, modi!
                    </h2>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit obcaecati
                        porro iste dolor velit nostrum libero nulla quibusdam consectetur harum?
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
