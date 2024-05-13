import Menu from '@/components/Menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed')
    }

    return res.json()
}

const SinglePage = async ({ params }) => {
    const { slug } = params

    const data = await getData(slug)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {/* {data?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image
                                    src={data.user.image}
                                    alt=''
                                    fill
                                    className={styles.avatar}
                                />
                            </div>
                        )}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user?.name}</span>
                        </div> */}
                        <span className={styles.date}>{data?.createdAt.substring(0, 10)}</span>
                    </div>
                </div>
                {data?.img && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={data.img}
                            alt=''
                            fill
                            sizes='(max-width: 500px) 0vw, 50vw'
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <main
                        className={'description'}
                        dangerouslySetInnerHTML={{ __html: data?.desc }}
                    />
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage
