import prisma from '@/utils/connect'

export default async function sitemap() {
    const baseUrl = process.env.BASE_URL
    try {
        const posts = await prisma.post.findMany()
        const postUrls = posts?.map((post) => ({
            url: `${baseUrl}/posts/${post.slug}`,
            lastModified: post.createdAt,
        }))
        return [{ url: baseUrl, lastModified: new Date() }, ...postUrls]
    } catch (error) {
        console.log(error)
    }
}
