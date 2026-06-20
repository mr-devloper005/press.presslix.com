import type { Metadata } from 'next'
import Link from 'next/link'
import { LockKeyhole, Megaphone } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#141a26]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center rounded-lg bg-[var(--slot4-accent)] p-8 text-white shadow-xl sm:p-12">
            <Megaphone className="h-12 w-12" />
            <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-white/75">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/78">{pagesContent.auth.login.description}</p>
          </div>
          <div className="flex flex-col justify-center rounded-lg border border-[#e5e9f2] bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><LockKeyhole className="h-7 w-7" /></div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 text-4xl font-black text-[#24304a]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-[#e5e9f2] pt-5 text-sm text-[#667085]">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
