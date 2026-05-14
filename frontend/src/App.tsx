import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { ProfileLink, ProfileLinkVariant, Publication, PublicationSubtopicId } from './data'
import {
  aboutParagraphs,
  allPublications,
  education,
  heroFocus,
  internships,
  isPreprintVenue,
  news,
  PUBLICATION_SUBTOPICS,
  profile,
  selectedPublications,
  serviceAndTalk,
} from './data'

const years = ['All', ...Array.from(new Set(allPublications.map((p) => String(p.year)))).sort((a, b) => Number(b) - Number(a))]

/** Default number of rows shown in All publications before "Show all". */
const ARCHIVE_PREVIEW_COUNT = 6

type ArchivePublicationGroup = {
  key: string
  year: number
  venue: string
  publications: Publication[]
}

/** Merge EMNLP YYYY Findings with EMNLP YYYY for grouping; each card still shows its own venue. */
function normalizeVenueForArchiveGroup(venue: string): string {
  const v = venue.trim()
  if (/^EMNLP\s+\d{4}\s+Findings$/i.test(v)) return v.replace(/\s+Findings$/i, '')
  return v
}

function groupPublicationsByYearAndVenue(publications: Publication[]): ArchivePublicationGroup[] {
  const map = new Map<string, Publication[]>()
  for (const p of publications) {
    const groupVenue = normalizeVenueForArchiveGroup(p.venue)
    const key = `${p.year}\u0000${groupVenue}`
    const list = map.get(key)
    if (list) list.push(p)
    else map.set(key, [p])
  }
  const groups: ArchivePublicationGroup[] = []
  for (const [key, pubs] of map) {
    const sep = key.indexOf('\u0000')
    const year = Number(key.slice(0, sep))
    const venue = key.slice(sep + 1)
    groups.push({
      key,
      year,
      venue,
      publications: [...pubs].sort((a, b) => a.title.localeCompare(b.title)),
    })
  }
  groups.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year
    const ap = isPreprintVenue(a.venue) ? 1 : 0
    const bp = isPreprintVenue(b.venue) ? 1 : 0
    if (bp !== ap) return bp - ap
    return a.venue.localeCompare(b.venue, undefined, { sensitivity: 'base' })
  })
  return groups
}

/** Prefer Paper URL for the title; otherwise Project; otherwise first link. */
function publicationPrimaryHref(links: Publication['links']): string | undefined {
  const lower = (s: string) => s.toLowerCase()
  return (
    links.find((l) => lower(l.label) === 'paper')?.href ??
    links.find((l) => lower(l.label) === 'project')?.href ??
    links[0]?.href
  )
}

function PublicationTitle({ title, links }: { title: string; links: Publication['links'] }) {
  const href = publicationPrimaryHref(links)
  if (!href) return <h4>{title}</h4>
  return (
    <h4 className="publication-title">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h4>
  )
}

/** Highlights "Shoubin Yu" / "Shoubin Yu*" in author strings (case-insensitive). */
function LinkIcon({ variant }: { variant: ProfileLinkVariant }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true as const }
  switch (variant) {
    case 'scholar':
      return (
        <svg {...common}>
          <path
            d="M12 3 2 8l10 5 10-5-10-5Zm0 7.5L4.2 8 12 4.5 19.8 8 12 10.5Zm8 3.2L12 17l-8-3.3V18l8 4 8-4v-7.3Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.9c.58.1.79-.25.79-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.75.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.38-5.25 5.67.42.36.8 1.08.8 2.18 0 1.57-.02 2.84-.02 3.23 0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
          />
        </svg>
      )
    case 'cv':
      return (
        <svg {...common}>
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M14 2v6h6M8 13h8M8 17h8M8 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'email':
      return (
        <svg {...common}>
          <path
            d="M4 6h16v12H4V6Zm0 0 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'twitter':
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      )
    default:
      return null
  }
}

function ProfileLinkButton({ link }: { link: ProfileLink }) {
  return (
    <a
      className={`cta-link cta-link--${link.variant}`}
      href={link.href}
      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    >
      <span className="cta-link__icon" aria-hidden>
        <LinkIcon variant={link.variant} />
      </span>
      {link.label}
    </a>
  )
}

/**
 * `**phrase**` → conceptual highlight (`about-emphasis`).
 * With `papersSyntax`, `[[PaperName]]` → paper tag (`statement-paper`).
 */
function MarkedText({ text, papersSyntax = false }: { text: string; papersSyntax?: boolean }) {
  const nodes: ReactNode[] = []
  const re = papersSyntax ? /\*\*([^*]+)\*\*|\[\[([^\]]+)\]\]/g : /\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(<span key={k++}>{text.slice(last, m.index)}</span>)
    if (papersSyntax && m[2] != null) {
      nodes.push(
        <span key={k++} className="statement-paper">
          {m[2]}
        </span>,
      )
    } else if (m[1] != null) {
      nodes.push(
        <span key={k++} className="about-emphasis">
          {m[1]}
        </span>,
      )
    }
    last = m.index + m[0].length
  }
  if (last < text.length) nodes.push(<span key={k++}>{text.slice(last)}</span>)
  return <>{nodes}</>
}

function AuthorsLine({ text }: { text: string }) {
  const parts = text.split(/(Shoubin Yu\*?)/gi)
  return (
    <p className="authors">
      {parts.map((part, i) =>
        /^Shoubin Yu\*?$/i.test(part) ? (
          <span key={i} className="author-self">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  )
}

type ArchiveView = 'year' | 'topic'

export default function App() {
  const [archiveView, setArchiveView] = useState<ArchiveView>('year')
  const [activeYear, setActiveYear] = useState('All')
  const [activeSubtopic, setActiveSubtopic] = useState<PublicationSubtopicId | 'All'>('All')
  const [archiveExpanded, setArchiveExpanded] = useState(false)
  const [photoEasterEgg, setPhotoEasterEgg] = useState<{ x: number; y: number } | null>(null)
  const [researchIndex, setResearchIndex] = useState(0)

  const researchStatements = useMemo(() => [heroFocus], [])

  const activeResearch = researchStatements[researchIndex % researchStatements.length]

  const stepResearch = (delta: number) => {
    setResearchIndex((current) => (current + delta + researchStatements.length) % researchStatements.length)
  }

  const filteredPublications = useMemo(() => {
    if (archiveView === 'year') {
      if (activeYear === 'All') return allPublications
      return allPublications.filter((p) => String(p.year) === activeYear)
    }
    if (activeSubtopic === 'All') return allPublications
    return allPublications.filter((p) => p.subtopics.includes(activeSubtopic))
  }, [archiveView, activeYear, activeSubtopic])

  const archiveGroups = useMemo(
    () => groupPublicationsByYearAndVenue(filteredPublications),
    [filteredPublications],
  )

  useEffect(() => {
    setArchiveExpanded(false)
  }, [archiveView, activeYear, activeSubtopic])

  const flatArchivePublications = useMemo(
    () => archiveGroups.flatMap((group) => group.publications),
    [archiveGroups],
  )

  const visibleArchivePublications = useMemo(() => {
    if (archiveExpanded) return flatArchivePublications
    return flatArchivePublications.slice(0, ARCHIVE_PREVIEW_COUNT)
  }, [archiveExpanded, flatArchivePublications])

  const archiveHasMore = flatArchivePublications.length > ARCHIVE_PREVIEW_COUNT

  return (
    <div className="app-shell" id="top">
      <BackgroundGlow />
      <CursorEffect />

      {photoEasterEgg !== null ? (
        <div
          className="hero-photo-easter-egg"
          style={{ left: photoEasterEgg.x, top: photoEasterEgg.y }}
          aria-hidden
        >
          {'Yui & Piepie'}
        </div>
      ) : null}

      <header className="site-header">
        <a className="brand" href="#top">
          Shoubin Yu
        </a>
        <nav>
          <a href="#research">Current Research statement</a>
          <a href="#about">About</a>
          <a href="#selected">Selected work</a>
          <a href="#all">Publications</a>
          <a href="#news">News</a>
          <a href="#education">Education</a>
          <a href="#blog">Blog</a>
        </nav>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-main">
            <div className="hero-copy">
              <h1>{profile.name}</h1>
              <h2 className="hero-role">{profile.role}</h2>
              <p className="tagline">{profile.tagline}</p>
              <p className="bio">{profile.bio}</p>
            </div>

            <div
              className="hero-panel"
              onMouseMove={(e) => setPhotoEasterEgg({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setPhotoEasterEgg(null)}
            >
              <div className="hero-photo-frame float-slow">
                <div className="hero-photo-glow" />
                {profile.photo ? (
                  <HeroPhoto src={profile.photo} alt={profile.photoAlt ?? `${profile.name} headshot`} />
                ) : (
                  <div className="hero-photo placeholder-photo">
                    <span>{profile.name.slice(0, 1)}</span>
                    <small>Put your headshot here</small>
                  </div>
                )}
              </div>
            </div>

            <div className="cta-row hero-cta-row">
              {profile.links.map((link) => (
                <ProfileLinkButton key={link.label} link={link} />
              ))}
            </div>
          </div>

          <div className="glass-card hero-focus-card" id="research">
            <div className="carousel-head">
              <span className="card-label">{activeResearch.title}</span>
              <div className="carousel-controls" aria-label="Research statement controls">
                <button type="button" className="carousel-btn" onClick={() => stepResearch(-1)} aria-label="Previous research statement">
                  <span aria-hidden>‹</span>
                </button>
                <button type="button" className="carousel-btn" onClick={() => stepResearch(1)} aria-label="Next research statement">
                  <span aria-hidden>›</span>
                </button>
              </div>
            </div>
            <strong className="hero-focus-headline">{activeResearch.headline}</strong>
            <div className="hero-focus-intro">
              <p className="hero-focus-preamble">
                <MarkedText papersSyntax text={activeResearch.intro.preamble} />
              </p>
              <p className="hero-focus-pipeline" aria-label="Pipeline stages">
                {activeResearch.intro.pipeline}
              </p>
              <p className="hero-focus-intro-body">
                <MarkedText papersSyntax text={activeResearch.intro.afterPipeline} />
              </p>
            </div>
            {activeResearch.paragraphs.map((para, i) => (
              <p key={i} className="hero-focus-para">
                <MarkedText papersSyntax text={para} />
              </p>
            ))}
          </div>
        </section>

        <section className="section about-news-section">
          <div className="about-news-layout">
            <div id="news" className="glass-card news-card news-card--split">
              <div className="section-heading section-heading--inline">
                <p className="section-kicker">Updates</p>
                <h2 className="section-title">News</h2>
              </div>
              <div className="news-scroll">
                <ul className="news-list">
                  {news.map((item) => (
                    <li key={`${item.date}-${item.venue ?? ''}-${item.text}`} className="news-item">
                      <span className="news-date">{item.date}</span>
                      <div className="news-item__main">
                        {item.venue ? <span className="news-venue">{item.venue}</span> : null}
                        <p className="news-text">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="about" className="glass-card prose-card about-prose-card">
              <div className="section-heading section-heading--inline">
                <p className="section-kicker">About</p>
                <h2 className="section-title">About Me</h2>
              </div>
              <div className="about-prose-body">
                {aboutParagraphs.map((paragraph, i) => (
                  <p key={i}>
                    <MarkedText text={paragraph} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="selected" className="section">
          <div className="section-heading section-heading--row">
            <p className="section-kicker">Portfolio</p>
            <h2 className="section-title">Selected work</h2>
          </div>

          <div className="publication-grid">
            {selectedPublications.map((publication) => (
              <article key={publication.title} className="glass-card publication-card">
                <ProjectCover
                  title={publication.title}
                  image={publication.image}
                  imageAlt={publication.imageAlt}
                  variant="card"
                />
                <div className="publication-card-body">
                  <div className="card-topline">
                    <span className="venue-name">{publication.venue}</span>
                    <span className="venue-year">{publication.year}</span>
                  </div>
                  {publication.award ? <p className="paper-award">{publication.award}</p> : null}
                  <PublicationTitle title={publication.title} links={publication.links} />
                  <AuthorsLine text={publication.authors} />
                  <p>{publication.summary}</p>
                  <div className="tag-row">
                    {publication.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="link-row">
                    {publication.links.map((link) => (
                      <a key={link.label} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="all" className="section">
          <div className="section-header archive-header">
            <div className="section-heading">
              <p className="section-kicker">Archive</p>
              <h2 className="section-title">All publications</h2>
            </div>
            <div className="archive-view-switch" role="tablist" aria-label="Browse publications">
              <button
                type="button"
                role="tab"
                aria-selected={archiveView === 'year'}
                className={archiveView === 'year' ? 'archive-tab active' : 'archive-tab'}
                onClick={() => setArchiveView('year')}
              >
                By year
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={archiveView === 'topic'}
                className={archiveView === 'topic' ? 'archive-tab active' : 'archive-tab'}
                onClick={() => setArchiveView('topic')}
              >
                By topic
              </button>
            </div>
          </div>

          <div className="archive-filters">
            {archiveView === 'year' ? (
              <div className="filter-row" role="group" aria-label="Filter by year">
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    className={year === activeYear ? 'filter active' : 'filter'}
                    onClick={() => setActiveYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            ) : (
              <div className="filter-row" role="group" aria-label="Filter by sub-topic">
                <button
                  type="button"
                  className={activeSubtopic === 'All' ? 'filter active' : 'filter'}
                  onClick={() => setActiveSubtopic('All')}
                >
                  All topics
                </button>
                {PUBLICATION_SUBTOPICS.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    className={activeSubtopic === st.id ? 'filter active' : 'filter'}
                    onClick={() => setActiveSubtopic(st.id)}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="glass-card archive-card">
            {filteredPublications.length === 0 ? (
              <p className="archive-empty">No publications match this filter.</p>
            ) : null}
            {visibleArchivePublications.map((publication) => (
              <article key={`${publication.title}-${publication.year}`} className="archive-item">
                <ProjectCover
                  title={publication.title}
                  image={publication.image}
                  imageAlt={publication.imageAlt}
                  variant="archive"
                />
                <div className="archive-main">
                  <div className="archive-meta">
                    <span className="venue-name">{publication.venue}</span>
                    <span className="venue-year">{publication.year}</span>
                  </div>
                  {publication.award ? <p className="paper-award paper-award--compact">{publication.award}</p> : null}
                  <div className="archive-body">
                    <PublicationTitle title={publication.title} links={publication.links} />
                    <AuthorsLine text={publication.authors} />
                    <p>{publication.summary}</p>
                  </div>
                </div>
                <div className="archive-links">
                  {publication.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
            {archiveHasMore ? (
              <div className="archive-expand-wrap">
                <button
                  type="button"
                  className="archive-expand-btn"
                  onClick={() => setArchiveExpanded((v) => !v)}
                  aria-expanded={archiveExpanded}
                >
                  {archiveExpanded
                    ? 'Show less'
                    : `Show all (${flatArchivePublications.length})`}
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="education" className="section edu-exp-section">
          <div className="glass-card news-card edu-exp-card">
            <div className="section-heading section-heading--inline">
              <p className="section-kicker">Background</p>
              <h2 className="section-title">Education &amp; internships</h2>
            </div>
            <div className="edu-exp-grid">
              <div className="edu-exp-col">
                <h3 className="edu-exp-subtitle">Education</h3>
                <ul className="org-list">
                  {education.map((row) => (
                    <li key={row.school} className="org-row">
                      {row.logo ? (
                        <img className="org-logo" src={row.logo} alt="" loading="lazy" />
                      ) : (
                        <div className="org-logo org-logo--empty" aria-hidden />
                      )}
                      <div className="org-row-body">
                        <span className="edu-period">{row.period}</span>
                        <strong>{row.school}</strong>
                        <span>{row.degree}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="edu-exp-col">
                <h3 className="edu-exp-subtitle">Internships</h3>
                <ul className="org-list">
                  {internships.map((row) => (
                    <li key={`${row.org}-${row.period}`} className="org-row">
                      {row.logo ? (
                        <img className="org-logo" src={row.logo} alt="" loading="lazy" />
                      ) : (
                        <div className="org-logo org-logo--empty" aria-hidden />
                      )}
                      <div className="org-row-body">
                        <span className="edu-period">{row.period}</span>
                        <strong>{row.org}</strong>
                        <span>{row.role}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <div className="glass-card prose-card">
            <div className="section-heading section-heading--inline">
              <p className="section-kicker">Blog</p>
              <h2 className="section-title">Blog</h2>
            </div>
            <p className="section-note blog-coming-soon-lede">TBD</p>
          </div>
        </section>

        <section className="section">
          <div className="glass-card prose-card service-card">
            <div className="section-heading section-heading--inline">
              <p className="section-kicker">Community</p>
              <h2 className="section-title">Service &amp; talks</h2>
            </div>
            <ul>
              {serviceAndTalk.talks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {serviceAndTalk.reviewing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const HEADSHOT_FALLBACK = '/headshot-placeholder.svg'

function ProjectCover({
  title,
  image,
  imageAlt,
  variant,
}: {
  title: string
  image?: string
  imageAlt?: string
  variant: 'card' | 'archive' | 'blog'
}) {
  const alt = imageAlt ?? `${title} — project figure`
  const base = `project-cover project-cover--${variant}`

  if (image) {
    return (
      <div className={base}>
        <img src={image} alt={alt} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`${base} project-cover--placeholder`}>
      <span className="project-cover-hint">Project image</span>
      <span className="project-cover-path">public/projects/…</span>
    </div>
  )
}

function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  const [activeSrc, setActiveSrc] = useState(src)

  useEffect(() => {
    setActiveSrc(src)
  }, [src])

  return (
    <img
      className="hero-photo"
      src={activeSrc}
      alt={alt}
      onError={() => setActiveSrc((current) => (current === HEADSHOT_FALLBACK ? current : HEADSHOT_FALLBACK))}
    />
  )
}

function BackgroundGlow() {
  // No animated gradients / bubbles — page background is plain CSS on `body`.
  return <div className="background-layer" aria-hidden="true" />
}

function CursorEffect() {
  useEffect(() => {
    const root = document.documentElement
    const target = { x: -100, y: -100 }
    const glow = { x: -100, y: -100 }
    let visible = false
    let rafId = 0

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const loop = () => {
      glow.x = lerp(glow.x, target.x, 0.09)
      glow.y = lerp(glow.y, target.y, 0.09)

      root.style.setProperty('--cursor-x', `${target.x}px`)
      root.style.setProperty('--cursor-y', `${target.y}px`)
      root.style.setProperty('--cursor-gx', `${glow.x}px`)
      root.style.setProperty('--cursor-gy', `${glow.y}px`)
      root.style.setProperty('--cursor-on', visible ? '1' : '0')

      rafId = requestAnimationFrame(loop)
    }

    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const move = (event: MouseEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      visible = true
    }

    const leave = () => {
      visible = false
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div className="cursor-stack" aria-hidden="true">
      <div className="cursor-glow-blob" />
      <div className="cursor-core" />
    </div>
  )
}
