'use client'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Link href='http://facebook.com'>
                    <Image src='/facebook.png' alt='facebook' width={30} height={30} />
                </Link>
                <Link href='http://instagram.com'>
                    <Image src='/instagram.png' alt='instagram' width={30} height={30} />
                </Link>
                <Link href='http://tiktok.com'>
                    <Image src='/tiktok.png' alt='tiktok' width={30} height={30} />
                </Link>
                <Link href='http://youtube.com'>
                    <Image src='/youtube.png' alt='youtube' width={30} height={30} />
                </Link>
            </div>
            <Link href='/' className={styles.logo}>
                <Image
                    src='/english.svg'
                    alt='englishteachthink.com'
                    className={styles.logoImg}
                    fill
                    priority={true}
                />
            </Link>
            <nav className={styles.links}>
                <ThemeToggle />
                <Link href='/' className={styles.link}>
                    Home
                </Link>
                <Link href='/contact' className={styles.link}>
                    Contact
                </Link>
                <Link href='/about' className={styles.link}>
                    About
                </Link>
                <AuthLinks />
            </nav>
        </div>
    )
}

export default Navbar
