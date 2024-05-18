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

export async function generateMetadata({ params }) {
    const { slug } = params
    const post = await getData(slug)
    return {
        title: post?.title,
        description: post?.descript?.substring(0, 155),
        alternates: {
            canonical: `/posts/${slug}`,
            // languages: {
            //     'en-CA': `en-CA/posts/${slug}`,
            // },
        },
    }
}

const SinglePage = async ({ params }) => {
    const { slug } = params

    const data = await getData(slug)

    return (
        <article className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <footer className={styles.user}>
                        <span className={styles.date}>{data?.createdAt.substring(0, 10)}</span>
                    </footer>
                </div>
                {data?.img && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={data.img}
                            alt={data?.title}
                            fill
                            sizes='(max-width: 500px) 1vw, 50vw'
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={'description'}
                        dangerouslySetInnerHTML={{ __html: data?.desc }}
                    />
                    <aside className={styles.comment}>
                        <Comments postSlug={slug} />
                    </aside>
                </div>
                    <Menu />
            </div>
        </article>
    )
}

export default SinglePage
