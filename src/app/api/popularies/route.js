import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')
    try {

      const post = await prisma.post.findMany({
        where: { catSlug: cat },
        take: 1,
        orderBy: {
          views: 'desc'
        }
       
      })
        return new NextResponse(JSON.stringify(post, { status: 200 }))
    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
        )
    }
}

