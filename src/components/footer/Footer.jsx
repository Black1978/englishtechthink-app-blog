import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src='/english.svg'
                        alt='englishteachthink.com'
                        className={styles.logoImg}
                        fill
                        priority={true}
                    />
                </div>
                <p className={styles.desc}>Методика изучения английского языка.</p>
                <div className={styles.icons}>
                    <Link href='https://facebook.com'>
                        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
                    </Link>
                    <Link href='https://instagram.com'>
                        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
                    </Link>
                    <Link href='https://tiktok.com'>
                        <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
                    </Link>
                    <Link href='https://youtube.com'>
                        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
                    </Link>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Ссылки</span>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>About us</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href='/'>Style</Link>
                    <Link href='/'>Fashion</Link>
                    <Link href='/'>Coding</Link>
                    <Link href='/'>Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href='https://facebook.com'>Facebook</Link>
                    <Link href='https://instagram.com'>Instagram</Link>
                    <Link href='https://tiktok.com'>Tiktok</Link>
                    <Link href='https://youtube.com'>Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
