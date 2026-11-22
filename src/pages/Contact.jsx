import { useState } from 'react'
import { STORE } from '../data/products'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', mensagem: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const field = 'mt-2 w-full border-b border-line bg-transparent py-2 text-sm outline-none focus:border-ink'

  return (
    <div className="mx-auto max-w-xl px-6 pt-16 text-center">
      <h1 className="text-2xl font-light tracking-[0.2em] uppercase sm:text-3xl">Contato</h1>
      <div className="mt-10 space-y-2 text-[13px] text-smoke">
        <p>WhatsApp <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noreferrer" className="link-line text-ink">{STORE.whatsappLabel}</a></p>
        <p>Instagram <a href={`https://instagram.com/${STORE.instagram}`} target="_blank" rel="noreferrer" className="link-line text-ink">@{STORE.instagram}</a></p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const text = `Olá, sou ${form.nome}!\n\n${form.mensagem}`
          window.open(`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
        }}
        className="mt-16 space-y-8 text-left"
      >
        <label className="block">
          <span className="eyebrow text-smoke">Nome</span>
          <input required value={form.nome} onChange={set('nome')} className={field} />
        </label>
        <label className="block">
          <span className="eyebrow text-smoke">Mensagem</span>
          <textarea required rows={4} value={form.mensagem} onChange={set('mensagem')} className={`${field} resize-none`} />
        </label>
        <button className="eyebrow w-full bg-ink py-4 text-paper transition-opacity hover:opacity-85">Enviar pelo WhatsApp</button>
        <p className="text-center text-[11px] text-smoke">A mensagem abre no WhatsApp; nada é guardado neste site.</p>
      </form>
    </div>
  )
}
