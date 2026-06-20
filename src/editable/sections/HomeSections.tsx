import Link from 'next/link'
import { BarChart3, CheckCircle2, Search, Send, Share2, Target, Zap } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const outlets = [
  ['Bloomberg', '54.9m', '94'], ['yahoo! finance', '227m', '93'], ['yahoo! news', '246m', '94'], ['BUSINESS INSIDER', '75.9m', '94'], ['AP Associated Press', '87m', '92'],
  ['MarketWatch', '54.9m', '92'], ['MORNINGSTAR', '7.4m', '84'], ['CENTRAL CHARTS', '403k', '43'], ['Bing news', '1.9m', '94'], ['BENZINGA', '15.9m', '87'],
]

const benefits = [
  { title: 'Immediate access to a targeted audience', text: 'Put announcements in front of readers, journalists, and media networks with a cleaner distribution path.', icon: Target },
  { title: 'Social media distribution', text: 'Give each release more places to travel with share-ready presentation and publication-friendly summaries.', icon: Share2 },
  { title: 'Low cost distribution without compromising quality', text: 'Choose practical publishing packages while keeping the message clear, formatted, and useful.', icon: BarChart3 },
  { title: 'Increased sales prospects', text: 'Support launches, milestones, partnerships, and product updates with broader visibility.', icon: Zap },
]

function SliderDots({ count = 5 }: { count?: number }) {
  return <div className="mt-5 flex justify-center gap-2">{Array.from({ length: count }).map((_, index) => <span key={index} className={`h-2.5 w-2.5 rounded-full border border-black/25 ${index === 0 ? 'bg-[#30343b]' : 'bg-white'}`} />)}</div>
}

export function EditableHomeHero({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="overflow-hidden bg-white">
      <div className={`${dc.shell.section} grid gap-10 py-12 lg:grid-cols-[1fr_.95fr] lg:items-center lg:py-16`}>
        <div className="press-reveal">
          <h1 className="max-w-[620px] text-4xl font-black leading-[1.02] text-[var(--slot4-accent)] sm:text-5xl lg:text-[3.7rem]">Best Press Release Distribution Services That Get Your Story Seen</h1>
          <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#3d4658]">Getting your news in front of the right audience should feel clear, reachable, and fast. Share announcements, launches, milestones, and brand updates through a polished media distribution experience.</p>
          <p className="mt-5 max-w-[620px] text-base leading-8 text-[#3d4658]"><strong>{SITE_CONFIG.name}</strong> helps organize media-ready updates with clean presentation, discoverable categories, and story pages that remain easy to read on every screen.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/about" className={dc.button.primary}>How it work</Link>
            <Link href="/search" className={dc.button.secondary}>Our plans</Link>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="press-hero-orbit absolute bottom-4 left-8 right-8 h-24 rounded-[50%] border-[10px] border-[var(--slot4-accent)] opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`press-phone absolute w-[165px] overflow-hidden rounded-[28px] border-[9px] border-black bg-black shadow-2xl ${index === 0 ? 'z-20' : index === 1 ? 'z-10 -translate-x-28 rotate-[-4deg]' : 'z-10 translate-x-28 rotate-[4deg]'}`}
              >
                <div className="h-6 bg-black" />
                <div className="h-[275px] overflow-hidden bg-white">
                  <div className="grid h-28 place-items-center bg-gradient-to-br from-[#eef3ff] to-white text-[var(--slot4-accent)]">
                    <span className="px-4 text-center text-sm font-black uppercase tracking-[0.16em]">Media Reach</span>
                  </div>
                  <div className="p-3">
                    <p className="text-[9px] font-black uppercase text-[var(--slot4-accent)]">Media distribution</p>
                    <h2 className="mt-2 text-sm font-black leading-tight">Publication-ready announcements for wider visibility</h2>
                    <p className="mt-2 text-[10px] leading-4 text-black/55">Plan, format, and share updates through a clean distribution experience.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SliderDots />
    </section>
  )
}

export function EditableStoryRail(_props: HomeSectionProps) {
  return null
}

export function EditableMagazineSplit(_props: HomeSectionProps) {
  return (
    <section className="bg-white py-12">
      <div className={dc.shell.section}>
        <h2 className="mx-auto max-w-[820px] text-center text-4xl font-black leading-tight text-[var(--slot4-accent)] sm:text-5xl">Why Choose {SITE_CONFIG.name} for Press Release Distribution Services</h2>
        <p className="mx-auto mt-6 max-w-[850px] text-center text-base leading-8">When you are looking for a partner to share your news, you need a place that understands media outreach, clear formatting, and fast discovery.</p>
        <div className="mx-auto mt-8 max-w-[760px]">
          <h3 className="text-xl font-black text-[#3d4658]">What makes us different:</h3>
          <ul className="mt-4 grid gap-2 text-base">
            {['Access to verified media-style publishing sections', 'Professional release writing structure', 'Fast turnaround-friendly layouts', 'Transparent packages with no visual clutter', 'Dedicated support pages throughout the process'].map((item) => (
              <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[var(--slot4-accent)]" /> {item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Media-ready formatting', 'Audience-focused discovery', 'Clean reporting pages'].map((item, index) => (
            <div key={item} className="rounded-lg border border-[#e5e9f2] bg-[#f8fbff] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-xl font-black text-[var(--slot4-accent)] shadow-sm">0{index + 1}</div>
              <h3 className="mt-5 text-xl font-black text-[#24304a]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[#667085]">Designed to make every announcement easier to understand, scan, and share.</p>
            </div>
          ))}
          </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections(_props: HomeSectionProps) {
  return (
    <>
      <section className="bg-white py-12">
        <div className={dc.shell.section}>
          <p className="text-center text-xl font-black text-[#3d4658]">Distribute Your Press Release Through {SITE_CONFIG.name} Across Media Networks</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-black leading-tight text-[var(--slot4-accent)]">Reach business, finance, news, and industry audiences through a media-ready distribution surface.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-[#667085]">Organize announcements for wider visibility with publication-friendly formatting, discoverable categories, and clean destination pages for every campaign.</p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {outlets.map(([name, visitors, authority]) => (
              <div key={name} className="min-h-[138px] rounded-lg border border-[#dfe5f0] bg-[#f8fbff] p-4 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <div className="grid h-16 place-items-center rounded-md bg-white px-2 text-center text-2xl font-black tracking-tight text-[#24304a] shadow-sm">{name}</div>
                <div className="mt-4 flex justify-between text-xs text-[#3d4658]">
                  <span><strong className="block text-xl text-[var(--slot4-accent)]">{visitors}</strong>Monthly reach</span>
                  <span className="text-right"><strong className="block text-xl text-[var(--slot4-accent)]">{authority}</strong>Media score</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className={`${dc.shell.section} space-y-16`}>
          <h2 className="text-center text-4xl font-black text-[var(--slot4-accent)] sm:text-5xl">Benefits of Press Release Distribution Services</h2>
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                <div className="grid min-h-[260px] place-items-center rounded-lg bg-[#f3f7ff]">
                  <div className="grid h-40 w-40 place-items-center rounded-full bg-white text-[var(--slot4-accent)] shadow-xl"><Icon className="h-20 w-20" /></div>
                </div>
                <div>
                  <h3 className="text-3xl font-black leading-tight text-[var(--slot4-accent)]">{item.title}</h3>
                  <p className="mt-5 text-base leading-8">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[#eef3f9] py-16">
        <div className={dc.shell.section}>
          <h2 className="text-center text-3xl font-black text-[var(--slot4-accent)]">Why do you need a press release?</h2>
          <p className="mx-auto mt-5 max-w-[940px] text-base leading-8">Public updates help brands establish trust, explain important moments, and make announcements easier to discover. A focused distribution page gives each story a clean place to live and a clear path into related content.</p>
        </div>
      </section>
    </>
  )
}

export function EditableHomeCta() {
  const faqs = [
    ['What are press release distribution services?', 'They help package and share announcements through organized publication pages and discoverable media categories.'],
    ['Is cheap press release distribution effective?', 'It can be useful when the release is clearly written, formatted well, and sent through relevant channels.'],
    ['How long does press release distribution take?', 'Most workflows depend on review, formatting, media selection, and publication timing.'],
    ['Can you help write my press release?', 'The site supports content that can include summaries, full body text, images, links, and category data.'],
  ]

  return (
    <>
      <section className="bg-white py-14">
        <div className={dc.shell.section}>
          <h2 className="text-center text-4xl font-black text-[var(--slot4-accent)] sm:text-5xl">Frequently Asked Question</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group border-t border-[#e5e9f2] py-4" open={index < 2}>
                <summary className="cursor-pointer list-none text-lg font-black text-[#3d4658] group-open:text-[var(--slot4-accent)]">+ {question}</summary>
                <p className="mt-4 text-base leading-8">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1040px] px-4 text-center sm:px-6">
          <h2 className="text-4xl font-black text-[var(--slot4-accent)] sm:text-5xl">Get Started with {SITE_CONFIG.name} Today</h2>
          <p className="mt-5 text-base leading-8">Your news deserves to be easy to find and easy to read. Choose a publishing path, prepare your announcement, and give every update a polished home.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Link href="/contact" className={dc.button.secondary}><Send className="h-4 w-4" /> Get Your Free Quote</Link>
            <Link href="/search" className={dc.button.secondary}>View Our Packages</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact Our Team</Link>
          </div>
          <form action="/search" className="mx-auto mt-10 flex max-w-xl overflow-hidden rounded-md border border-[#d8deea] bg-white shadow-sm">
            <Search className="ml-4 mt-4 h-5 w-5 text-[#667085]" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 px-3 py-3 text-sm outline-none" />
            <button className="bg-[var(--slot4-accent)] px-5 text-sm font-black text-white">Search</button>
          </form>
        </div>
      </section>
    </>
  )
}
