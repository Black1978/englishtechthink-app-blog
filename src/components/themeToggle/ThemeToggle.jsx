'use client'

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext)

    return (
        <div className={styles.container} style={
          theme === 'dark'
              ? { backgroundColor: 'white' }
              : { backgroundColor: '#0f172a' }
      } onClick={() => toggle()}>
            <Image src='/moon.png' width={14} height={14} alt='' />
            <div
                className={styles.ball}
                style={
                    theme === 'dark'
                        ? { left: 1, backgroundColor: '#0f172a' }
                        : { right: 1, backgroundColor: 'white'  }
                }
            ></div>
            <Image src='/sun.png' width={14} height={14} alt='' />
        </div>
    )
}

export default ThemeToggle
