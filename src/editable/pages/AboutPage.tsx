import Link from 'next/link'
import { ArrowRight, BadgeCheck, Globe2, Megaphone, Newspaper } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const stats = [
  ['180k+', 'media contacts'],
  ['24-72h', 'review rhythm'],
  ['1000+', 'publishing paths'],
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#141a26]">
        <section className="border-b border-[#e5e9f2] bg-white">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[var(--slot4-accent)] sm:text-6xl">Media distribution built for clear public updates.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4a5568]">{pagesContent.about.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-white">Contact our team <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/search" className="inline-flex items-center gap-2 rounded-md border-2 border-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-[var(--slot4-accent)]">Explore updates</Link>
              </div>
            </div>
            <div className="grid gap-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-[#e5e9f2] bg-[#f8fbff] p-6 shadow-sm">
                  <p className="text-4xl font-black text-[var(--slot4-accent)]">{value}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#667085]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-16">
          <article className="rounded-lg border border-[#e5e9f2] bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#3d4658]">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-4">
            {pagesContent.about.values.map((value, index) => {
              const Icon = [Newspaper, Megaphone, Globe2][index] || BadgeCheck
              return (
                <div key={value.title} className="rounded-lg border border-[#e5e9f2] bg-[#f8fbff] p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-[var(--slot4-accent)]" />
                    <span className="text-xs font-black text-[#98a2b3]">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black text-[#24304a]">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">{value.description}</p>
                </div>
              )
            })}
          </aside>
        </section>

        <section className="bg-[#eef3f9] py-14">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-3xl font-black leading-tight text-[var(--slot4-accent)] sm:text-4xl">Share announcements in a cleaner, more discoverable format.</h2>
            <Link href="/search" className="inline-flex w-fit rounded-md bg-[var(--slot4-accent)] px-6 py-4 text-sm font-black text-white">View packages</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
