import { useEffect, useMemo, useState, type CSSProperties, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react'
import type {
  ProfileLink,
  ProfileLinkVariant,
  Publication,
  PublicationSubtopicId,
  ResearchPaperName,
  ResearchView,
} from './data'
import { NAV_ITEMS, SiteFooter, SiteHeader } from './SiteHeader'
import {
  aboutLogos,
  aboutParagraphs,
  researchPaperLinks,
  researchViews,
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

const NEWS_PREVIEW_COUNT = 8
const ARCHIVE_PREVIEW_YEARS = 2
const RESEARCH_COLLAPSED_PARAS = 0

const SUBTOPIC_SHORT = Object.fromEntries(PUBLICATION_SUBTOPICS.map((t) => [t.id, t.short])) as Record<
  PublicationSubtopicId,
  string
>

const topicCounts = Object.fromEntries([
  ['All', allPublications.length],
  ...PUBLICATION_SUBTOPICS.map((t) => [t.id, allPublications.filter((p) => p.subtopics.includes(t.id)).length]),
]) as Record<PublicationSubtopicId | 'All', number>

function parseTalkLine(line: string): { period: string; detail: string } {
  const splitAt = line.indexOf(': ')
  if (splitAt === -1) return { period: '', detail: line }
  return { period: line.slice(0, splitAt), detail: line.slice(splitAt + 2) }
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

/** Short name shown before the colon in a title, e.g. "VEGGIE" from "VEGGIE: Instructional …". */
function splitTitle(title: string): { short?: string; rest: string } {
  const i = title.indexOf(': ')
  if (i > 0 && (title.slice(0, i).match(/ /g) ?? []).length <= 2) return { short: title.slice(0, i), rest: title.slice(i + 2) }
  return { rest: title }
}

function LinkIcon({ variant }: { variant: ProfileLinkVariant }) {
  const common = { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true as const }
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
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M14 2v6h6M8 13h8M8 17h8M8 9h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'email':
      return (
        <svg {...common}>
          <path
            d="M4 6h16v12H4V6Zm0 0 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.6"
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

/** Assemble the address only on click so scrapers reading the HTML never see it. */
function openEmail(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  const { user, domain } = profile.emailParts
  window.location.href = `mailto:${user}@${domain.join('.')}`
}

function ProfileLinkItem({ link }: { link: ProfileLink }) {
  if (link.variant === 'email') {
    return (
      <a className="profile-link profile-link--internal" href={link.href} onClick={openEmail}>
        <LinkIcon variant={link.variant} />
        <span>{link.label}</span>
      </a>
    )
  }
  return (
    <a className="profile-link" href={link.href} target="_blank" rel="noopener noreferrer">
      <LinkIcon variant={link.variant} />
      <span>{link.label}</span>
    </a>
  )
}

/**
 * `**phrase**` → emphasis. With `papersSyntax`, `[[Paper]]` → small-caps paper name.
 * With `logos`, `{{key}}` → inline org logo.
 */
function MarkedText({
  text,
  papersSyntax = false,
  logos = false,
}: {
  text: string
  papersSyntax?: boolean
  logos?: boolean
}) {
  const nodes: ReactNode[] = []
  const re = papersSyntax
    ? /\*\*([^*]+)\*\*|\[\[([^\]]+)\]\]/g
    : logos
      ? /\*\*([^*]+)\*\*|\{\{(\w+)\}\}/g
      : /\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(<span key={k++}>{text.slice(last, m.index)}</span>)
    if (papersSyntax && m[2] != null) {
      nodes.push(
        <span key={k++} className="paper-ref">
          {m[2]}
        </span>,
      )
    } else if (logos && m[2] != null) {
      const logo = aboutLogos[m[2]]
      if (logo) {
        nodes.push(<img key={k++} className="inline-logo" src={logo.src} alt="" title={logo.alt} />)
      }
    } else if (m[1] != null) {
      nodes.push(<em key={k++}>{m[1]}</em>)
    }
    last = m.index + m[0].length
  }
  if (last < text.length) nodes.push(<span key={k++}>{text.slice(last)}</span>)
  return <>{nodes}</>
}

function AuthorsLine({ text }: { text: string }) {
  const parts = text.split(/(Shoubin Yu\*?)/gi)
  return (
    <p className="pub-authors">
      {parts.map((part, i) =>
        /^Shoubin Yu\*?$/i.test(part) ? (
          <strong key={i} className="author-self">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}

function PubLinks({ links }: { links: Publication['links'] }) {
  return (
    <span className="pub-links">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      ))}
    </span>
  )
}

function PubTitle({ title, links }: { title: string; links: Publication['links'] }) {
  const href = publicationPrimaryHref(links)
  const { short, rest } = splitTitle(title)
  const inner = short ? (
    <>
      <span className="pub-title-short">{short}:</span> {rest}
    </>
  ) : (
    rest
  )
  return (
    <h4 className="pub-title">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </h4>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

/** Small line icons for Research Interests, keyed by view id, stage id, or part label. */
const RESEARCH_ICONS: Record<string, ReactNode> = {
  capability: (
    <>
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M19 15.5v4M17 17.5h4" />
    </>
  ),
  pipeline: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M6.5 10v4.5a3 3 0 0 0 3 3H14" />
    </>
  ),
  perception: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  reasoning: (
    <>
      <path d="M12 2.5a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.3 1 2.1v.8h6v-.8c0-.8.3-1.5 1-2.1a6.5 6.5 0 0 0-4-11.6Z" />
      <path d="M9.5 20h5M10.5 22h3" />
    </>
  ),
  acting: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M10 8.2v7.6l6-3.8-6-3.8Z" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V12c0 1.7 3.6 3 8 3s8-1.3 8-3V5.5" />
      <path d="M4 12v6.5c0 1.7 3.6 3 8 3s8-1.3 8-3V12" />
    </>
  ),
  model: (
    <>
      <path d="m12 3 9 4.8-9 4.8-9-4.8L12 3Z" />
      <path d="m3 12.3 9 4.8 9-4.8M3 16.7l9 4.8 9-4.8" />
    </>
  ),
  training: <path d="M6.5 6.5v11M3.5 9v6M17.5 6.5v11M20.5 9v6M6.5 12h11" />,
  inference: (
    <>
      <path d="M4.5 18a9 9 0 1 1 15 0" />
      <path d="m12 13 4-5" />
      <circle cx="12" cy="13" r="1.2" />
    </>
  ),
  Inference: <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />,
  Evaluation: <path d="M5 20V10M12 20V4M19 20v-7" />,
}

function ResearchIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {RESEARCH_ICONS[name]}
    </svg>
  )
}

/** Research Interests: one set of papers, switchable between two groupings. */
function ResearchInterests() {
  const [viewId, setViewId] = useState<ResearchView['id']>(researchViews[0].id)
  /** Paper under the pointer; every copy of it in the current view is highlighted. */
  const [linked, setLinked] = useState<ResearchPaperName | null>(null)
  const activeIndex = Math.max(
    0,
    researchViews.findIndex((v) => v.id === viewId),
  )
  const view = researchViews[activeIndex]

  const onSwitchKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const step = event.key === 'ArrowRight' ? 1 : -1
    const next = researchViews[(activeIndex + step + researchViews.length) % researchViews.length]
    setViewId(next.id)
    document.getElementById(`interest-tab-${next.id}`)?.focus()
  }

  return (
    <>
      <div
        className="view-switch"
        role="tablist"
        aria-label="Group research by"
        data-active={activeIndex}
        onKeyDown={onSwitchKey}
      >
        {researchViews.map((v) => (
          <button
            key={v.id}
            id={`interest-tab-${v.id}`}
            type="button"
            role="tab"
            aria-selected={v.id === viewId}
            aria-controls="interest-panel"
            tabIndex={v.id === viewId ? 0 : -1}
            className="view-switch-option"
            onClick={() => setViewId(v.id)}
          >
            <ResearchIcon name={v.id} />
            <span>
              <span className="view-switch-label">{v.label}</span>
              <span className="view-switch-caption">{v.caption}</span>
            </span>
          </button>
        ))}
      </div>
      <div key={view.id} id="interest-panel" role="tabpanel" aria-labelledby={`interest-tab-${view.id}`}>
        <p className="view-note">
          {view.note}{' '}
          <span className="view-note-hint">Hover a paper to see what it adds; every stage it belongs to lights up.</span>
        </p>
        <ol className="stages">
          {view.stages.map((stage, i) => (
            <li key={stage.id} className={`stage stage--${stage.id}`} style={{ '--i': i } as CSSProperties}>
              <header className="stage-head">
                <span className="stage-icon">
                  <ResearchIcon name={stage.id} />
                </span>
                <div>
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-blurb">{stage.blurb}</p>
                </div>
              </header>
              <div className="stage-body">
                {stage.parts.map((part) => (
                  <div key={part.label ?? stage.id}>
                    {part.label ? (
                      <p className="stage-part-label">
                        <ResearchIcon name={part.label} />
                        {part.label}
                      </p>
                    ) : null}
                    <div className="stage-groups">
                      {part.groups.map((group) => (
                        <div key={group.title}>
                          <h4 className="stage-group-title">{group.title}</h4>
                          <p className="paper-chips">
                            {group.papers.map(([name, detail]) => (
                              <a
                                key={name}
                                href={researchPaperLinks[name] || undefined}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-tip={detail}
                                className={name === linked ? 'is-linked' : undefined}
                                onMouseEnter={() => setLinked(name)}
                                onMouseLeave={() => setLinked(null)}
                                onFocus={() => setLinked(name)}
                                onBlur={() => setLinked(null)}
                              >
                                {name}
                              </a>
                            ))}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

function useActiveSection() {
  const [active, setActive] = useState<string>('about')
  useEffect(() => {
    const els = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return active
}

export default function App() {
  const [activeSubtopic, setActiveSubtopic] = useState<PublicationSubtopicId | 'All'>('All')
  const [archiveExpanded, setArchiveExpanded] = useState(false)
  const [researchExpanded, setResearchExpanded] = useState(false)
  const [newsExpanded, setNewsExpanded] = useState(false)
  const activeSection = useActiveSection()

  const visibleNews = newsExpanded ? news : news.slice(0, NEWS_PREVIEW_COUNT)

  const yearGroups = useMemo(() => {
    const pubs =
      activeSubtopic === 'All' ? allPublications : allPublications.filter((p) => p.subtopics.includes(activeSubtopic))
    const map = new Map<number, Publication[]>()
    for (const p of pubs) {
      const list = map.get(p.year)
      if (list) list.push(p)
      else map.set(p.year, [p])
    }
    // Within a year: pinned (newest) first, then published venues (alphabetical), preprints last.
    for (const list of map.values()) {
      list.sort((a, b) => {
        if (a.pinned || b.pinned) return Number(!!b.pinned) - Number(!!a.pinned)
        const ap = isPreprintVenue(a.venue) ? 1 : 0
        const bp = isPreprintVenue(b.venue) ? 1 : 0
        return ap - bp || a.venue.localeCompare(b.venue) || a.title.localeCompare(b.title)
      })
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0])
  }, [activeSubtopic])

  // Only the unfiltered list is long enough to collapse.
  const collapsed = activeSubtopic === 'All' && !archiveExpanded
  const visibleYearGroups = collapsed ? yearGroups.slice(0, ARCHIVE_PREVIEW_YEARS) : yearGroups
  const hiddenCount =
    activeSubtopic === 'All' ? yearGroups.slice(ARCHIVE_PREVIEW_YEARS).reduce((n, [, pubs]) => n + pubs.length, 0) : 0

  const researchParagraphs = researchExpanded
    ? heroFocus.paragraphs
    : heroFocus.paragraphs.slice(0, RESEARCH_COLLAPSED_PARAS)
  const pipelineStages = heroFocus.intro.pipeline.split('→').map((s) => s.trim())

  return (
    <div className="page" id="top">
      <SiteHeader active={activeSection} />

      <main className="container">
        {/* ── Hero ───────────────────────────────────────── */}
        <section id="about" className="hero">
          <div className="hero-aside">
            <img className="hero-photo" src={profile.photo} alt={profile.photoAlt ?? profile.name} />
            <div className="profile-links">
              {profile.links.map((link) => (
                <ProfileLinkItem key={link.label} link={link} />
              ))}
            </div>
          </div>

          <div className="hero-main">
            <h1 className="hero-name">
              {profile.name}
            </h1>
            <p className="hero-role">
              Ph.D. Student in Computer Science
              <span className="dot-sep">·</span>
              UNC Chapel Hill
            </p>
            <p className="hero-meta">
              MURGe-Lab / UNC-NLP, advised by{' '}
              <a href="https://www.cs.unc.edu/~mbansal/" target="_blank" rel="noopener noreferrer">
                Prof. Mohit Bansal
              </a>
            </p>

            <div className="hero-prose">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i}>
                  <MarkedText logos text={paragraph} />
                </p>
              ))}
            </div>


          </div>
        </section>

        {/* ── Research interests ─────────────────────────── */}
        <Section id="interests" title="Research Interests">
          <ResearchInterests />
        </Section>

        {/* ── News ───────────────────────────────────────── */}
        <Section id="news" title="News">
          <ul className="news">
            {visibleNews.map((item) => (
              <li key={`${item.date}-${item.venue ?? ''}-${item.text}`} className="news-item">
                <time className="news-date">{item.date}</time>
                <p className="news-text">
                  {item.venue ? <strong>{item.venue}</strong> : null} {item.text}
                </p>
              </li>
            ))}
          </ul>
          {news.length > NEWS_PREVIEW_COUNT ? (
            <button type="button" className="more-btn" onClick={() => setNewsExpanded((v) => !v)}>
              {newsExpanded ? 'Show less' : `Earlier news (${news.length - NEWS_PREVIEW_COUNT})`}
            </button>
          ) : null}
        </Section>

        {/* ── Research statement ─────────────────────────── */}
        <Section id="research" title="Research Statement">
          <h3 className="statement-headline">{heroFocus.headline}</h3>
          <p className="statement-lede">
            <MarkedText papersSyntax text={heroFocus.intro.preamble} />
          </p>
          <ol className="pipeline" aria-label="Research pipeline">
            {pipelineStages.map((stage, i) => (
              <li key={stage}>
                <span className="pipeline-step">{i + 1}</span>
                {stage}
              </li>
            ))}
          </ol>
          <p className="statement-para">
            <MarkedText papersSyntax text={heroFocus.intro.afterPipeline} />
          </p>
          {researchParagraphs.map((para, i) => (
            <p key={i} className="statement-para">
              <MarkedText papersSyntax text={para} />
            </p>
          ))}
          <button type="button" className="more-btn" onClick={() => setResearchExpanded((v) => !v)}>
            {researchExpanded ? 'Show less' : 'Read the full statement'}
          </button>
        </Section>

        {/* ── Publications ───────────────────────────────── */}
        <Section id="publications" title="Publications">
          <div className="pub-heading-row">
            <h3 className="sub-heading">Selected work</h3>
            <p className="pub-note">* equal contribution</p>
          </div>
          <div className="selected">
            {selectedPublications.map((p) => (
              <article key={p.title} className="selected-item">
                <a
                  className="selected-thumb"
                  href={publicationPrimaryHref(p.links)}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                >
                  {p.image ? <img src={p.image} alt={p.imageAlt ?? ''} loading="lazy" /> : null}
                  <span className="venue-badge venue-badge--overlay">{p.venue}</span>
                </a>
                <div className="selected-body">
                  <PubTitle title={p.title} links={p.links} />
                  <AuthorsLine text={p.authors} />
                  <p className="pub-summary">{p.summary}</p>
                  <div className="pub-footer">
                    <PubLinks links={p.links} />
                    {p.selectedKeywords?.length ? (
                      <span className="pub-keywords">{p.selectedKeywords.join(' · ')}</span>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="pub-heading-row pub-heading-row--spaced">
            <h3 className="sub-heading">Full list</h3>
            <p className="pub-note">Browse by research area</p>
          </div>
          <div className="topic-picker" role="tablist" aria-label="Filter by research area">
            {[{ id: 'All' as const, short: 'All papers' }, ...PUBLICATION_SUBTOPICS].map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={activeSubtopic === t.id}
                className={`topic-tile topic-tile--${t.id}${activeSubtopic === t.id ? ' is-active' : ''}`}
                onClick={() => setActiveSubtopic(t.id)}
              >
                <span className="topic-tile-count">{topicCounts[t.id]}</span>
                <span className="topic-tile-label">{t.short}</span>
              </button>
            ))}
          </div>

          <div className="archive">
            {visibleYearGroups.map(([year, pubs]) => (
              <div key={year} className="archive-year">
                <h4 className="archive-year-label">{year}</h4>
                <ul className="archive-list">
                  {pubs.map((p) => (
                    <li key={p.title} className="archive-item">
                      <a
                        className="archive-thumb"
                        href={publicationPrimaryHref(p.links)}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={-1}
                      >
                        {p.image ? <img src={p.image} alt={p.imageAlt ?? ''} loading="lazy" /> : null}
                      </a>
                      <div className="archive-text">
                        <p className="archive-topline">
                          <span className={isPreprintVenue(p.venue) ? 'venue-badge venue-badge--muted' : 'venue-badge'}>
                            {p.venue}
                          </span>
                          {p.award ? <span className="pub-award">{p.award}</span> : null}
                        </p>
                        <PubTitle title={p.title} links={p.links} />
                        <AuthorsLine text={p.authors} />
                        <p className="archive-meta">
                          <PubLinks links={p.links} />
                          <span className="topic-dots">
                            {p.subtopics.map((id) => (
                              <span key={id} className={`topic-dot topic-dot--${id}`}>
                                {SUBTOPIC_SHORT[id]}
                              </span>
                            ))}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {hiddenCount > 0 ? (
            <button type="button" className="more-btn" onClick={() => setArchiveExpanded((v) => !v)}>
              {archiveExpanded ? 'Show less' : `Earlier publications (${hiddenCount})`}
            </button>
          ) : null}
        </Section>

        {/* ── Background ─────────────────────────────────── */}
        <Section id="background" title="Background">
          <div className="bg-grid">
            <div>
              <h3 className="sub-heading">Education</h3>
              <ul className="timeline">
                {education.map((row) => (
                  <li key={row.school}>
                    {row.logo ? <img className="timeline-logo" src={row.logo} alt="" loading="lazy" /> : <span />}
                    <div>
                      <p className="timeline-title">{row.school}</p>
                      <p className="timeline-detail">{row.degree}</p>
                    </div>
                    <time className="timeline-period">{row.period}</time>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="sub-heading">Industry</h3>
              <ul className="timeline">
                {internships.map((row) => (
                  <li key={`${row.org}-${row.period}`}>
                    {row.logo ? <img className="timeline-logo" src={row.logo} alt="" loading="lazy" /> : <span />}
                    <div>
                      <p className="timeline-title">{row.org}</p>
                      <p className="timeline-detail">{row.role}</p>
                    </div>
                    <time className="timeline-period">{row.period}</time>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-grid">
            <div>
              <h3 className="sub-heading">Invited talks</h3>
              <ul className="plain-list">
                {serviceAndTalk.talks.map((talk) => {
                  const { period, detail } = parseTalkLine(talk)
                  return (
                    <li key={talk}>
                      <time>{period}</time>
                      <span>{detail.replace(/^Invited talk at /, '').replace(/\.$/, '')}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h3 className="sub-heading">Service</h3>
              <div className="service">
                {serviceAndTalk.reviewing.map((line) => {
                  const [label, rest] = line.split(': ')
                  return (
                    <p key={line}>
                      <span className="service-label">{label}</span>
                      {rest}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  )
}
