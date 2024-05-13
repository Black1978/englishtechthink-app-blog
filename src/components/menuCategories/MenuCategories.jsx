import Link from 'next/link'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
                <Link href='/blog?cat=understanding' className={`${styles.categoryItem} ${styles.understanding}`}>
                understanding
                </Link>
                <Link href='/blog?cat=reading' className={`${styles.categoryItem} ${styles.reading}`}>
                reading
                </Link>
                <Link href='/blog?cat=listening' className={`${styles.categoryItem} ${styles.listening}`}>
                listening
                </Link>
                <Link href='/blog?cat=spelling' className={`${styles.categoryItem} ${styles.spelling}`}>
                spelling
                </Link>
                <Link href='/blog?cat=speaking' className={`${styles.categoryItem} ${styles.speaking}`}>
                speaking
                </Link>
                <Link href='/blog?cat=etc' className={`${styles.categoryItem} ${styles.etc}`}>
                etc
                </Link>
            </div>
  )
}

export default MenuCategories
