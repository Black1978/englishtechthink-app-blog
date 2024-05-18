'use client'

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
    const [open, setOpen] = useState(false)

    const { status } = useSession()
    const onclickHandler = () =>  {
        signOut()
        setOpen(!open)

    }

    return (
        <>
            {status === 'unauthenticated' ? (
                <Link href='/login' className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <span className={styles.link} onClick={signOut}>
                        Logout
                    </span>
                </>
            )}

            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href='/' onClick={() => setOpen(!open)}>
                        Home
                    </Link>
                    <Link href='/contact' onClick={() => setOpen(!open)}>
                        Contact
                    </Link>
                    <Link href='/about' onClick={() => setOpen(!open)}>
                        About
                    </Link>
                    {status === 'unauthenticated' ? (
                        <Link href='/login' onClick={() => setOpen(!open)}>
                            Login
                        </Link>
                    ) : (
                        <>
                            <span onClick={() => onclickHandler()}>
                                Logout
                            </span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks
