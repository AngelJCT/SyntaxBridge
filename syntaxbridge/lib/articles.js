import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const articleDirectory = path.join(process.cwd(), "articles")

export function getSortedArticles() {
    const fileNames = fs.readdirSync(articleDirectory)
    const allArticlesData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(articleDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
    
        return {
        id,
        ...matterResult.data
        }
    })
    
    return allArticlesData.sort((a, b) => {
        if (a.date < b.date) {
        return 1
        } else {
        return -1
        }
    })
}

export async function getArticleData(id) {
    const fullPath = path.join(articleDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}