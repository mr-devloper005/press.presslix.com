'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, UserCircle, X } from 'lucide-react'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const displayDomain = 'Press.Presslix'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const userLabel = session?.name || session?.email || 'Member'

  return (
    <header className="sticky top-0 z-50 bg-white text-[#202636] shadow-[0_2px_14px_rgba(16,24,40,.08)]">
      <div className="mx-auto grid min-h-[88px] max-w-[1180px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-[190px] items-center text-left">
          <span className="max-w-[190px] truncate text-xl font-black leading-none text-[var(--slot4-accent)]">{displayDomain}</span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 text-[15px] font-black uppercase lg:flex">
          <Link href="/" className="text-[var(--slot4-accent)]">Home</Link>
          <Link href="/about" className="hover:text-[var(--slot4-accent)]">About</Link>
          <Link href="/contact" className="hover:text-[var(--slot4-accent)]">Contact</Link>
          <Link href="/search" className="hover:text-[var(--slot4-accent)]">Search</Link>
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <Link href="/search" className="grid h-12 w-12 place-items-center border border-dashed border-red-500 bg-white transition hover:border-[var(--slot4-accent)] hover:bg-[var(--slot4-accent-soft)]" aria-label="Search">
            <Search className="h-5 w-5" />
          </Link>
          {session ? (
            <>
              <span className="hidden max-w-[150px] items-center gap-2 truncate rounded-md border border-[#d8deea] bg-[#f8fbff] px-3 py-3 text-xs font-black text-[#24304a] md:inline-flex">
                <UserCircle className="h-4 w-4 shrink-0 text-[var(--slot4-accent)]" /> {userLabel}
              </span>
              <Link href="/create" className="hidden rounded-md border border-[var(--slot4-accent)] bg-white px-5 py-3 text-xs font-black uppercase text-[var(--slot4-accent)] shadow-sm transition hover:bg-[var(--slot4-accent-soft)] sm:block">Create</Link>
              <button type="button" onClick={logout} className="hidden rounded-md bg-[var(--slot4-accent)] px-5 py-3 text-xs font-black uppercase text-white shadow-sm transition hover:bg-[#163273] sm:block">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden rounded-md bg-[var(--slot4-accent)] px-5 py-3 text-xs font-black uppercase text-white shadow-sm transition hover:bg-[#163273] sm:block">Login</Link>
              <Link href="/signup" className="hidden rounded-md border border-[var(--slot4-accent)] bg-white px-5 py-3 text-xs font-black uppercase text-[var(--slot4-accent)] shadow-sm transition hover:bg-[var(--slot4-accent-soft)] sm:block">Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-12 w-12 items-center justify-center border border-[var(--press-border)] lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--press-border)] bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {session ? <div className="rounded-md bg-[var(--slot4-accent-soft)] px-4 py-3 text-sm font-black text-[var(--slot4-accent)]">{userLabel}</div> : null}
            {[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, { label: 'Search', href: '/search' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-[var(--press-border)] bg-white px-4 py-3 text-sm font-black uppercase">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md bg-[var(--slot4-accent)] px-4 py-3 text-left text-sm font-black uppercase text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
