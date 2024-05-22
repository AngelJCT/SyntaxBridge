import { getArticleData, getSortedArticles } from '@/lib/articles'

// Generate static params
export async function generateStaticParams() {
  const articles = getSortedArticles()
  return articles.map((article) => ({
    slug: article.id,
  }))
}

// Component to render the blog post
export default async function BlogPost({ params }) {
  const articleData = await getArticleData(params.slug)
  
  return (
    <section className="py-12 xl:py-24 xl:h-[65vh] lg:h-[50vh] xs:h-[100hv] xl:pt-[200px] lg:pt-[120px]">
        <div className="container mx-auto sm:p-6 xs:px-[1rem] relative">
        <div className="gradient-ball-1 -z-10 absolute lg:top-[25rem] md:top-[40rem] xs:top-[83rem] sm:top-[75rem]"></div>
        <div className="gradient-ball-2 -z-10 absolute md:top-[8rem] xs:top-[6rem]"></div>
            <h1 className="text-[1.5rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight max-w-3xl text-center mx-auto mb-8 tracking-[2px] font-medium bg-gradient-to-l from-[#5c656d] to-[#26292b] dark:bg-gradient-to-r dark:from-[#f7f8f8] dark:to-[#b7bdc2] bg-clip-text text-transparent dark:bg-clip-text dark:text-transparent">{articleData.title}</h1>
            <p className="text-gray-500 mb-8 text-center">{articleData.date}</p>
            <div className="prose dark:prose-dark break-words whitespace-pre-wrap text-center sm:text-base xs:text-sm md:text-xl text-gray-600 dark:text-gray-400 leading-6 lg:px-[150px] md:px-[50px]" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </div>
    </section>
    
  )
}
