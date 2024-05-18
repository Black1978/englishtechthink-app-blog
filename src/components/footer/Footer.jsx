import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.info}>
                <Link href='/'>
                    <div className={styles.logo}>
                        <Image
                            src='/english.svg'
                            alt='englishteachthink.com'
                            className={styles.logoImg}
                            fill
                            priority={true}
                        />
                    </div>
                </Link>
                <p className={styles.desc}>Методика изучения английского языка.</p>
                <nav className={styles.icons}>
                    <Link href='https://facebook.com'>
                        <Image src='/facebook.png' alt='facebook' width={30} height={30} />
                    </Link>
                    <Link href='https://instagram.com'>
                        <Image src='/instagram.png' alt='instagram' width={30} height={30} />
                    </Link>
                    <Link href='https://tiktok.com'>
                        <Image src='/tiktok.png' alt='tiktok' width={30} height={30} />
                    </Link>
                    <Link href='https://youtube.com'>
                        <Image src='/youtube.png' alt='youtube' width={30} height={30} />
                    </Link>
                </nav>
            </nav>
            <div className={styles.links}>
                <nav className={styles.list}>
                    <span className={styles.listTitle}>Ссылки</span>
                    <Link href='/'>Home</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/about'>About us</Link>
                </nav>
                <nav className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href='/blog?cat=reading'>Reading</Link>
                    <Link href='/blog?cat=speaking'>Speaking</Link>
                    <Link href='/blog?cat=understanding'>Understanding</Link>
                    <Link href='/blog?cat=listening'>Listening</Link>
                </nav>
                <nav className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href='https://facebook.com'>Facebook</Link>
                    <Link href='https://instagram.com'>Instagram</Link>
                    <Link href='https://tiktok.com'>Tiktok</Link>
                    <Link href='https://youtube.com'>Youtube</Link>
                </nav>
            </div>
        </div>
    )
}

export default Footer
