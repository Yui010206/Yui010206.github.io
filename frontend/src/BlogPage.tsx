import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BackgroundGlow, CursorEffect } from './chrome'
import { blogPostsByLang, profile, type BlogLang } from './data'
import { SiteHeader } from './SiteHeader'

const blogCopy = {
  en: {
    home: '← Home',
    published: 'Published',
    by: 'by',
    langLabel: 'Language',
  },
  zh: {
    home: '← 首页',
    published: '发布',
    by: '作者',
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
    <div className="app-shell blog-shell">
      <BackgroundGlow />
      <CursorEffect />
      <SiteHeader variant="blog" />

      <main className="blog-page">
        {posts.map((post) => (
          <div key={post.slug} className="blog-page-layout">
            <aside className="blog-sidebar">
              <a className="blog-back-link" href="/">
                {copy.home}
              </a>
              <p className="blog-sidebar-label">{copy.published}</p>
              <p className="blog-sidebar-date">{post.date}</p>
              <div className="blog-lang-switch">
                <p className="blog-sidebar-label">{copy.langLabel}</p>
                <div className="blog-lang-links">
                  <a href="/blog/" aria-current={lang === 'en' ? 'page' : undefined}>
                    EN
                  </a>
                  <a href="/blog/zh/" aria-current={lang === 'zh' ? 'page' : undefined}>
                    中文（by GPT）
                  </a>
                </div>
              </div>
            </aside>

            <article className="surface-card blog-article blog-article--page">
              <div className={`blog-article-body blog-article-body--page${lang === 'zh' ? ' blog-article-body--zh' : ''}`}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <>
                        <h1>{children}</h1>
                        <p className="blog-byline">
                          {copy.by} {profile.name}
                        </p>
                      </>
                    ),
                  }}
                >
                  {post.body}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        ))}
      </main>
    </div>
  )
}
