'use client'

import { FileText, Mail, Megaphone, PhoneCall } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release support', body: 'Send announcements, corrections, source material, and publishing questions.' },
  { icon: Megaphone, title: 'Media distribution', body: 'Discuss packages, visibility goals, categories, and campaign timing.' },
  { icon: PhoneCall, title: 'Account help', body: 'Get help with login, publishing access, or general site questions.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#141a26]">
        <section className="border-b border-[#e5e9f2] bg-white">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_.75fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[var(--slot4-accent)] sm:text-6xl">{pagesContent.contact.title}</h1>
              <p className="mt-6 max-w-2xl border-l-4 border-[var(--slot4-accent)] pl-5 text-base font-semibold leading-8 text-[#4a5568]">{pagesContent.contact.description}</p>
            </div>
            <div className="rounded-lg border border-[#e5e9f2] bg-[#f8fbff] p-6 shadow-sm">
              <Mail className="h-10 w-10 text-[var(--slot4-accent)]" />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#667085]">Direct inbox</p>
              <p className="mt-2 text-xl font-black text-[#24304a]">support@press.presslix.com</p>
              <p className="mt-3 text-sm leading-7 text-[#667085]">Use the form below for publishing requests and support questions.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-16">
          <aside className="grid gap-4">
            {desks.map((desk, index) => (
              <div key={desk.title} className="rounded-lg border border-[#e5e9f2] bg-[#f8fbff] p-6 shadow-sm">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-[#98a2b3]">0{index + 1}</span></div>
                <h2 className="mt-5 text-2xl font-black text-[#24304a]">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-lg border border-[#e5e9f2] bg-white p-6 shadow-sm sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black text-[#24304a]">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
