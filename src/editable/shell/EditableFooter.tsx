'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[#f6f8fc] text-[#141a26]">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex text-left">
              <span className="max-w-[260px] text-2xl font-black text-[var(--slot4-accent)]">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7">{globalContent.footer?.description || 'Share announcements, updates, and brand stories through a cleaner media distribution experience.'}</p>
          </div>

          <div>
            <h3 className="text-2xl font-black underline decoration-2 underline-offset-4">Useful links</h3>
            <div className="mt-5 grid gap-2">
              {[['Home', '/'], ['About', '/about'], ['Contact', '/contact'], ['Search', '/search'], ['Login', '/login'], ['Sign up', '/signup']].map(([label, href]) => (
                <Link key={label} href={href} className="flex items-center gap-2 border-b border-black/10 py-1.5 text-sm transition hover:text-[var(--slot4-accent)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--slot4-accent)]" />{label}
                </Link>
              ))}
              {session ? <button onClick={logout} className="mt-2 rounded-md bg-[var(--slot4-accent)] px-4 py-3 text-left text-sm font-black uppercase text-white">Logout</button> : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
