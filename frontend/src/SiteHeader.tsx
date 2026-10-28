export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'background', label: 'Background' },
] as const

type SiteHeaderProps = {
  variant?: 'home' | 'blog'
  /** Id of the section currently in view (home only). */
  active?: string
}

export function SiteHeader({ variant = 'home', active }: SiteHeaderProps) {
  const hashPrefix = variant === 'blog' ? '/#' : '#'

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="topbar-name" href={variant === 'home' ? '#top' : '/'}>
          Shoubin Yu
        </a>
        <nav className="topbar-nav" aria-label="Sections">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`${hashPrefix}${item.id}`}
              className={variant === 'home' && active === item.id ? 'is-active' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/blog/"
            className={variant === 'blog' ? 'is-active' : undefined}
            aria-current={variant === 'blog' ? 'page' : undefined}
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Shoubin Yu</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
