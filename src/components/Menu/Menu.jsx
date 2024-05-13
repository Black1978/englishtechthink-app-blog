import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.subtitle}>{"What's hot"}</h3>
            <h2 className={styles.title}>Самое популярное</h2>
            <MenuPosts />
            <h3 className={styles.subtitle}>Discover by topic</h3>
            <h2 className={styles.title}>Categories</h2>
            <MenuCategories />
        </div>
    )
}

export default Menu
