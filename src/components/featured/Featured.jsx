import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>Научись думать на английском языке</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src='/london-panorama.jpg'
                        alt=''
                        fill
                        className={styles.image}
                        sizes='(max-width: 1024px) 0vw, (max-width: 1280px) 50vw, 50vw'
                        priority
                    />
                </div>
                <section className={styles.textContainer}>
                    <h2 className={styles.postTitle}>Не «переводить как…», а «понимать»</h2>
                    <p className={styles.postDesc}>
                        Английский язык изучается не как «аналог» русского языка, а как «устройство»
                        для создания картинок в воображении слушающего тебя человека. Такой подход
                        (смещение смысла такого явления как «иностранный язык») порождает устранение
                        «паразитирования» изучаемого английского языка на русском языке.
                    </p>
                    <Link href={`/posts/ne-perevodit-kak-a-ponimat`} className={styles.link}>
                        <button className={styles.button}>Читать</button>{' '}
                    </Link>
                </section>
            </div>
        </article>
    )
}

export default Featured
