import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogPostsByLang, type BlogLang } from './data'
import { SiteFooter, SiteHeader } from './SiteHeader'

const blogCopy = {
  en: {
    home: '← Home',
    published: 'Published',
    langLabel: 'Language',
  },
  zh: {
    home: '← 首页',
    published: '发布',
    langLabel: '语言',
  },
} as const

type BlogPageProps = {
  lang?: BlogLang
}

export default function BlogPage({ lang = 'en' }: BlogPageProps) {
  const posts = blogPostsByLang[lang]
  const copy = blogCopy[lang]

  return (
    <div className="page" id="top">
      <SiteHeader variant="blog" />

      <main className="container">
        {posts.map((post) => (
          <div key={post.slug} className="blog-layout">
            <aside className="blog-aside">
              <a className="blog-back" href="/">
                {copy.home}
              </a>
              <div>
                <p className="blog-aside-label">{copy.published}</p>
                <time>{post.date}</time>
              </div>
              <div>
                <p className="blog-aside-label">{copy.langLabel}</p>
                <div className="blog-lang">
                  <a href="/blog/" aria-current={lang === 'en' ? 'page' : undefined}>
                    English
                  </a>
                  <a href="/blog/zh/" aria-current={lang === 'zh' ? 'page' : undefined}>
                    中文（by GPT）
                  </a>
                </div>
              </div>
            </aside>

            <article className={`prose${lang === 'zh' ? ' prose--zh' : ''}`}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
            </article>
          </div>
        ))}
      </main>

      <SiteFooter />
    </div>
  )
}
