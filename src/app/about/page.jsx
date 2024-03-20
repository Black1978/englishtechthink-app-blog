'use client'
import { signIn, useSession } from 'next-auth/react'
import styles from './aboutPage.module.css'
import { useRouter } from 'next/navigation'

const AboutPage = () => {
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
                <p>
                    Изучения языка, на котором говоришь (русский), создает навык разговаривать и
                    понимать английский.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
