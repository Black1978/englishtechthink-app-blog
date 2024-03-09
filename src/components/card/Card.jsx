import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h2 className={styles.title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem.
                    </h2>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aspernatur corporis
                    laborum facilis soluta consectetur numquam ut nulla vitae a!
                </p>
                <Link className={styles.link} href='/'>Read More</Link>
            </div>
        </div>
    )
}

export default Card
