import type { Metadata } from 'next'
import Link from 'next/link'
import { PenLine, UserPlus } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#141a26]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[.9fr_1fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center rounded-lg border border-[#e5e9f2] bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><UserPlus className="h-7 w-7" /></div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-4xl font-black text-[#24304a]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-[#e5e9f2] pt-5 text-sm text-[#667085]">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="flex flex-col justify-center rounded-lg bg-[#f8fbff] p-8 shadow-sm ring-1 ring-[#e5e9f2] sm:p-12">
            <PenLine className="h-12 w-12 text-[var(--slot4-accent)]" />
            <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight text-[var(--slot4-accent)] sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-[#667085]">{pagesContent.auth.signup.description}</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
