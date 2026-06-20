import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Latest'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Cover story' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block min-w-0 overflow-hidden rounded-lg bg-white shadow-[0_12px_34px_rgba(16,24,40,.10)] ring-1 ring-black/5">
      <div className="grid min-h-[430px] lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative min-h-[310px] overflow-hidden bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
          <span className="absolute left-5 top-5 rounded-md bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[.16em] text-[var(--slot4-accent)] shadow">{label}</span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-9">
          <p className="text-[11px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{getEditableCategory(post)}</p>
          <h3 className="mt-4 text-3xl font-black leading-[1.08] text-[#18233a] sm:text-5xl">{post.title}</h3>
          <p className="mt-5 text-sm leading-7 text-[#4a5568] sm:text-base">{getEditableExcerpt(post, 190)}</p>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[var(--slot4-accent)]">Read update <ArrowRight className="h-4 w-4" /></span>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden rounded-lg bg-white shadow-[0_10px_30px_rgba(16,24,40,.09)] ring-1 ring-black/5 ${dc.motion.lift}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-[10px] font-black text-[#202636]">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="p-4">
        <div className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{getEditableCategory(post)}</div>
        <h3 className="mt-3 line-clamp-3 text-lg font-black leading-tight text-[#18233a]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[46px_1fr] gap-4 border-b border-[#e5e9f2] py-4">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--slot4-accent-soft)] text-sm font-black leading-none text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-[#667085]"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-base font-black leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 rounded-lg border border-[#e5e9f2] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-5">
      <div className="relative aspect-[16/11] overflow-hidden rounded-md bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 p-2">
        <p className={`flex items-center gap-2 ${dc.type.eyebrow} ${pal.accentText}`}><CalendarDays className="h-3.5 w-3.5" /> {String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
        <h2 className="mt-3 line-clamp-3 text-2xl font-black leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
        <p className={`mt-3 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getEditableExcerpt(post, 190)}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[var(--slot4-accent)]">Read story <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}
