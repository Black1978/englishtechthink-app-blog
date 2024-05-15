import Link from 'next/link'
import styles from './menuPosts.module.css'
import Image from 'next/image'

const getData = async (cat) => {
    const res = await fetch(`http://localhost:3000/api/popularies?cat=${cat}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed')
    }

    return res.json()
}

const MenuPosts = async () => {
    const understandings = await getData('understanding')
    const readings = await getData('reading')
    const listenings = await getData('listening')
    const spellings = await getData('spelling')
    const speakings = await getData('speaking')
    const etc = await getData('etc')
    

    return (
        <div className={styles.items}>
            <Link href={`/posts/${understandings[0].slug}`} className={styles.item}>
                <div className={styles.imageContainer}>
                    <Image
                        src={understandings[0].img}
                        alt={understandings[0].title}
                        fill
                        sizes='(max-width: 1024px) 0vw, 10vw'
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.understanding}`}>
                        understanding
                    </span>
                    <h3 className={styles.postTitle}>{understandings[0].title}</h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            {understandings[0].createdAt.substring(0, 10)}
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={`/posts/${readings[0].slug}`} className={styles.item}>
                <div className={styles.imageContainer}>
                    <Image
                        src={readings[0].img}
                        alt={readings[0].title}
                        fill
                        sizes='(max-width: 1024px) 0vw, 10vw'
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.reading}`}>reading</span>
                    <h3 className={styles.postTitle}>{readings[0].title}</h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            {readings[0].createdAt.substring(0, 10)}
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={`/posts/${listenings[0].slug}`} className={styles.item}>
                <div className={styles.imageContainer}>
                    <Image
                        src={listenings[0].img}
                        alt={listenings[0].title}
                        fill
                        sizes='(max-width: 1024px) 0vw, 10vw'
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.listening}`}>listening</span>
                    <h3 className={styles.postTitle}>{listenings[0].title}</h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            {readings[0].createdAt.substring(0, 10)}
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={`/posts/${spellings[0].slug}`} className={styles.item}>
                <div className={styles.imageContainer}>
                    <Image
                        src={spellings[0].img}
                        alt={spellings[0].title}
                        fill
                        sizes='(max-width: 1024px) 0vw, 10vw'
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.spelling}`}>spelling</span>
                    <h3 className={styles.postTitle}>{spellings[0].title}</h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            {spellings[0].createdAt.substring(0, 10)}
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={`/posts/${speakings[0].slug}`} className={styles.item}>
                <div className={styles.imageContainer}>
                    <Image
                        src={speakings[0].img}
                        alt={speakings[0].title}
                        fill
                        sizes='(max-width: 1024px) 0vw, 10vw'
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.speaking}`}>speaking</span>
                    <h3 className={styles.postTitle}>{speakings[0].title}</h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            {speakings[0].createdAt.substring(0, 10)}
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={`/posts/${etc[0].slug}`} className={styles.item}>
                <div className={styles.imageContainer}>
                    <Image
                        src={etc[0].img}
                        alt={etc[0].title}
                        fill
                        sizes='(max-width: 1024px) 0vw, 10vw'
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.etc}`}>etc</span>
                    <h3 className={styles.postTitle}>{etc[0].title}</h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>{etc[0].createdAt.substring(0, 10)}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts
