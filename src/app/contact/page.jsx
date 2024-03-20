'use client'
import { signIn, useSession } from 'next-auth/react'
import styles from './contactPage.module.css'
import { useRouter } from 'next/navigation'

const ContactPage = () => {
    const { data, status } = useSession()
    const router = useRouter()
    if (status === 'loading') {
        return <div className={styles.loading}>Loading ...</div>
    }

    if (status === 'authenticated') {
        router.push('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.email}>
              englishteachthink@gmail.com
              </div>
            </div>
        </div>
    )
}

export default ContactPage
