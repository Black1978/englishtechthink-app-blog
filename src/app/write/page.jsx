'use client'

import Image from 'next/image'
import styles from './writePage.module.css'
import { useEffect, useState } from 'react'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { app } from '@/utils/firebase'
// import ReactQuill from "react-quill";
import dynamic from 'next/dynamic'

const WritePage = () => {
    const { status } = useSession()
    const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState('')
    const [value, setValue] = useState('')
    const [title, setTitle] = useState('')
    const [catSlug, setCatSlug] = useState('')

    useEffect(() => {
        const storage = getStorage(app)
        const upload = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name)

            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused')
                            break
                        case 'running':
                            console.log('Upload is running')
                            break
                    }
                },
                (error) => {},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                    })
                }
            )
        }

        file && upload()
    }, [file])

    if (status === 'loading') {
        return <div className={styles.loading}>Loading...</div>
    }

    if (status === 'unauthenticated') {
        router.push('/')
    }
    function rus_to_latin(str) {
        var ru = {
                а: 'a',
                б: 'b',
                в: 'v',
                г: 'g',
                д: 'd',
                е: 'e',
                ё: 'e',
                ж: 'j',
                з: 'z',
                и: 'i',
                к: 'k',
                л: 'l',
                м: 'm',
                н: 'n',
                о: 'o',
                п: 'p',
                р: 'r',
                с: 's',
                т: 't',
                у: 'u',
                ф: 'f',
                х: 'h',
                ц: 'c',
                ч: 'ch',
                ш: 'sh',
                щ: 'shch',
                ы: 'y',
                э: 'e',
                ю: 'u',
                я: 'ya',
            },
            n_str = []

        str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i')

        for (var i = 0; i < str.length; ++i) {
            n_str.push(
                ru[str[i]] ||
                    (ru[str[i].toLowerCase()] == undefined && str[i]) ||
                    ru[str[i].toLowerCase()].toUpperCase()
            )
        }

        return n_str.join('')
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '')

    const handleSubmit = async () => {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(rus_to_latin(title)),
                catSlug: catSlug || 'understanding', //If not selected, choose the general category
            }),
        })

        if (res.status === 200) {
            const data = await res.json()
            router.push(`/posts/${data.slug}`)
        }
    }

    return (
        <div className={styles.container}>
            <input
                type='text'
                placeholder='Title'
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                <option value='understanding'>understanding</option>
                <option value='reading'>reading</option>
                <option value='listening'>listening</option>
                <option value='spelling'>spelling</option>
                <option value='speaking'>speaking</option>
                <option value='etc'>etc</option>
            </select>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input
                            type='file'
                            id='image'
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: 'none' }}
                        />
                        <button className={styles.addButton}>
                            <label htmlFor='image'>
                                <Image src='/image.png' alt='' width={16} height={16} />
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/external.png' alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/video.png' alt='' width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme='bubble'
                    value={value}
                    onChange={setValue}
                    placeholder='Tell your story...'
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>
                Publish
            </button>
        </div>
    )
}

export default WritePage
