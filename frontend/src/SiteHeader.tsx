type SiteHeaderProps = {
  variant?: 'home' | 'blog'
}

export function SiteHeader({ variant = 'home' }: SiteHeaderProps) {
  const hashPrefix = variant === 'blog' ? '/#' : '#'

  return (
    <header className="site-header">
      <a className="brand" href={variant === 'home' ? '#top' : '/'}>
        Shoubin Yu
      </a>
      <nav className="site-nav">
        <a href={`${hashPrefix}about`}>About</a>
        <a href={`${hashPrefix}research`}>Research</a>
        <a href={`${hashPrefix}publications`}>Publications</a>
        <a href="/blog/" aria-current={variant === 'blog' ? 'page' : undefined}>
          Blog
        </a>
      </nav>
    </header>
  )
}
