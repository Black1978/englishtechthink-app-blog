'use client'
import Image from 'next/image'
import styles from './writePage.module.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const WritePage = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    return (
        <div className={styles.container}>
            <input type='text' placeholder='Title' className={styles.textTitle} />
            <div className={styles.editor}>
                <div className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </div>
                {open && (
                    <div className={styles.add}>
                        <div className={styles.addButton}>
                            <Image src='/image.png' alt='' width={16} height={16} />
                        </div>
                        <div className={styles.addButton}>
                            <Image src='/external.png' alt='' width={16} height={16} />
                        </div>
                        <div className={styles.addButton}>
                            <Image src='/video.png' alt='' width={16} height={16} />
                        </div>
                    </div>
                )}
                <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story' className={styles.textArea}/>
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    )
}

export default WritePage
