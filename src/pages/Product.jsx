import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { FRAGRANCES, PRODUCTS, formatBRL, getCategory, getProduct } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import NotFound from './NotFound'

function Detail({ title, children, open: startOpen = false }) {
  const [open, setOpen] = useState(startOpen)
  return (
    <div className="border-b border-line">
      <button onClick={() => setOpen((v) => !v)} className="eyebrow flex w-full items-center justify-between py-4 text-left">
        {title}
        <span className="text-base font-light">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pb-5 text-[13px] leading-relaxed text-smoke">{children}</div>}
    </div>
  )
}

export default function Product() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { add } = useCart()
  const [img, setImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [cep, setCep] = useState('')

  if (!product) return <NotFound />
  const cat = getCategory(product.category)
  const frag = product.fragrance ? FRAGRANCES[product.fragrance] : null
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4)

  return (
    <div key={slug} className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
      <nav className="mb-8 text-[11px] tracking-[0.12em] text-smoke uppercase">
        <Link to="/" className="hover:text-ink">Início</Link> / <Link to={`/produtos/${cat.slug}`} className="hover:text-ink">{cat.name}</Link>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <div className="aspect-square overflow-hidden bg-mist">
            <img src={product.images[img]} alt={product.name} className="product-img size-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.images.map((src, i) => (
                <button key={src} onClick={() => setImg(i)} className={`size-16 overflow-hidden bg-mist transition-opacity ${i === img ? 'opacity-100 ring-1 ring-ink' : 'opacity-50 hover:opacity-100'}`}>
                  <img src={src} alt="" className="product-img size-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <h1 className="text-xl font-light tracking-[0.08em] uppercase sm:text-2xl">{product.name}</h1>
          <p className="mt-3 text-lg">{formatBRL(product.price)}</p>

          <p className="mt-8 text-[14px] leading-relaxed text-smoke">{frag ? frag.description : product.description}</p>

          {frag && (
            <dl className="mt-8 space-y-3 text-[13px]">
              {[
                ['Cabeça', frag.notes.cabeca],
                ['Corpo', frag.notes.corpo],
                ['Fundo', frag.notes.fundo],
              ].map(([label, notes]) => (
                <div key={label} className="grid grid-cols-[90px_1fr] gap-4">
                  <dt className="text-[11px] tracking-[0.16em] text-smoke uppercase">{label}</dt>
                  <dd>{notes}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-10 flex gap-3">
            <div className="flex items-center gap-4 border border-line px-4">
              <button aria-label="Diminuir" onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus className="size-3" /></button>
              <span className="w-4 text-center text-sm">{qty}</span>
              <button aria-label="Aumentar" onClick={() => setQty((q) => q + 1)}><Plus className="size-3" /></button>
            </div>
            <button
              disabled={product.soldOut}
              onClick={() => add(product.slug, qty)}
              className="eyebrow flex-1 bg-ink py-4 text-paper transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-30"
            >
              {product.soldOut ? 'Esgotado' : 'Adicionar ao carrinho'}
            </button>
          </div>

          <div className="mt-10 border-t border-line">
            <Detail title="Sobre" open>
              <ul className="space-y-1">
                {product.specs.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Detail>
            <Detail title="Meios de envio">
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 border-b border-line pb-2">
                <input
                  value={cep}
                  onChange={(e) => {
                    const d = e.target.value.replace(/\D/g, '').slice(0, 8)
                    setCep(d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d)
                  }}
                  inputMode="numeric"
                  placeholder="Seu CEP"
                  className="flex-1 bg-transparent text-ink outline-none"
                />
              </form>
              <p className="mt-3">O frete é calculado no fechamento do pedido pelo WhatsApp.</p>
            </Detail>
            <Detail title="Meios de pagamento">Pix, cartão de crédito e outras formas combinadas no fechamento do pedido.</Detail>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-28">
          <h2 className="eyebrow mb-10 border-b border-line pb-4">Quem viu também curtiu</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
