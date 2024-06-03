import React from 'react'
import Link from 'next/link'
import { getSortedArticles } from '@/lib/articles'
import Image from 'next/image'

const BlogComponent = () => {
    const articles = getSortedArticles()

  return (
    <section className="py-12 xl:py-24 xl:h-[65vh] lg:h-[50vh] xs:h-[100hv] xl:pt-[200px] lg:pt-[120px]">
        <div className="container xs:px-[1rem] mx-auto relative">
            <div className="gradient-ball-1 -z-10 absolute lg:top-[25rem] md:top-[40rem] xs:top-[83rem] sm:top-[75rem]"></div>
            <div className="gradient-ball-2 -z-10 absolute md:top-[8rem] xs:top-[6rem]"></div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {articles.map((article) => (
                <div key={article.id} className="blog-card group relative overflow-hidden">
                    <Link className="absolute inset-0 z-10" href={`/blog/${article.id}`}>
                        <span className="sr-only">Read more</span>
                    </Link>
                    <Image
                        alt={article.title}
                        className="h-56 w-full object-cover transition-all group-hover:scale-105"
                        height={400}
                        src={article.image}
                        style={{
                            aspectRatio: "600/400",
                            objectFit: "cover",
                        }}
                        width={600}
                    />
                    <div className="space-y-3 bg-[#eceff2] p-4 dark:bg-[#798189] dark:bg-opacity-30">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-[#f7f8f8]">{article.title}</h3>
                        <p className="sm:text-base xs:text-sm text-gray-600 dark:text-gray-300/80">
                            {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300/80">{article.date}</span>
                            <Link
                                className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-700 dark:text-[#f7f8f8] dark:hover:text-gray-300"
                                href={`/blog/${article.id}`}
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default BlogComponent