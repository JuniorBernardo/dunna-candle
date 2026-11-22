import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Minus, Plus, Search, ShoppingBag, X } from 'lucide-react'
import { CATEGORIES, PRODUCTS, STORE, formatBRL } from '../data/products'
import { useCart } from '../context/CartContext'
import { InstagramIcon, Logo, WhatsAppIcon } from './Icons'
import ThemeToggle from './ThemeToggle'

const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }

function AnnouncementBar() {
  return (
    <div className="border-b border-line py-2.5 text-center text-[11px] tracking-[0.18em] text-smoke uppercase">
      Primeira compra: <span className="text-ink">10% off</span> com o cupom <span className="text-ink">{STORE.coupon}</span>
    </div>
  )
}

function Header({ onSearch }) {
  const { count, setOpen } = useCart()
  const [menu, setMenu] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobile(false)
    setMenu(false)
  }, [pathname])

  const nav = ({ isActive }) => `link-line ${isActive ? 'bg-[length:100%_1px]' : ''}`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur" onMouseLeave={() => setMenu(false)}>
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:h-24">
        <div className="flex items-center gap-8 text-[13px] tracking-[0.12em] uppercase">
          <button className="lg:hidden" aria-label="Abrir menu" onClick={() => setMobile(true)}>
            <Menu className="size-5" strokeWidth={1.25} />
          </button>
          <nav className="hidden items-center gap-8 lg:flex">
            <NavLink to="/" end className={nav}>Início</NavLink>
            <button onMouseEnter={() => setMenu(true)} onClick={() => setMenu((v) => !v)} className="link-line uppercase tracking-[0.12em]">
              Produtos
            </button>
            <NavLink to="/contato" className={nav}>Contato</NavLink>
          </nav>
        </div>

        <Link to="/" aria-label="Dunna — página inicial">
          <Logo className="h-6 sm:h-7 lg:h-9" />
        </Link>

        <div className="flex items-center justify-end gap-5 sm:gap-6">
          <ThemeToggle />
          <button aria-label="Buscar" onClick={onSearch} className="transition-opacity hover:opacity-60">
            <Search className="size-[18px]" strokeWidth={1.25} />
          </button>
          <button aria-label="Carrinho" onClick={() => setOpen(true)} className="relative transition-opacity hover:opacity-60">
            <ShoppingBag className="size-[18px]" strokeWidth={1.25} />
            {count > 0 && <span className="absolute -right-2.5 -top-2 text-[10px] font-normal">{count}</span>}
          </button>
        </div>
      </div>

      {/* Lista de categorias (desktop) */}
      <AnimatePresence>
        {menu && (
          <motion.div {...fade} transition={{ duration: 0.2 }} className="absolute inset-x-0 top-full hidden border-b border-line bg-paper lg:block">
            <ul className="mx-auto flex max-w-7xl justify-center gap-10 px-8 py-6 text-[12px] tracking-[0.16em] uppercase">
              <li><Link to="/produtos" className="link-line">Ver tudo</Link></li>
              {CATEGORIES.map((c) => (
                <li key={c.slug}><Link to={`/produtos/${c.slug}`} className="link-line">{c.name}</Link></li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobile && (
          <motion.div {...fade} className="fixed inset-0 z-50 flex flex-col bg-paper px-6 py-6">
            <div className="flex items-center justify-between">
              <Logo className="h-6" />
              <button aria-label="Fechar menu" onClick={() => setMobile(false)}><X className="size-5" strokeWidth={1.25} /></button>
            </div>
            <nav className="mt-14 space-y-6 text-sm tracking-[0.16em] uppercase">
              <Link to="/" className="block">Início</Link>
              <Link to="/produtos" className="block">Produtos</Link>
              <div className="space-y-4 border-l border-line pl-5 text-smoke">
                {CATEGORIES.map((c) => (
                  <Link key={c.slug} to={`/produtos/${c.slug}`} className="block">{c.name}</Link>
                ))}
              </div>
              <Link to="/contato" className="block">Contato</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const results = q.trim().length > 1 ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q.toLowerCase())).slice(0, 8) : []

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div {...fade} className="fixed inset-0 z-[60] overflow-y-auto bg-paper">
          <div className="mx-auto max-w-4xl px-6 pt-8">
            <div className="flex justify-end">
              <button onClick={onClose} aria-label="Fechar busca"><X className="size-5" strokeWidth={1.25} /></button>
            </div>
            <form
              className="mt-16"
              onSubmit={(e) => {
                e.preventDefault()
                if (results[0]) {
                  navigate(`/produto/${results[0].slug}`)
                  onClose()
                }
              }}
            >
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar"
                className="w-full border-b border-line bg-transparent pb-3 text-2xl font-light outline-none placeholder:text-smoke/60 focus:border-ink"
              />
            </form>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              {results.map((p) => (
                <Link key={p.slug} to={`/produto/${p.slug}`} onClick={onClose} className="group block">
                  <div className="aspect-square overflow-hidden bg-mist">
                    <img src={p.images[0]} alt={p.name} className="product-img size-full object-cover transition-opacity group-hover:opacity-80" />
                  </div>
                  <p className="mt-3 text-[13px]">{p.name}</p>
                  <p className="text-[13px] text-smoke">{formatBRL(p.price)}</p>
                </Link>
              ))}
              {q.trim().length > 1 && results.length === 0 && <p className="col-span-full text-sm text-smoke">Nenhum produto encontrado.</p>}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CartDrawer() {
  const { lines, subtotal, discount, total, open, setOpen, setQty, remove, coupon, setCoupon } = useCart()
  const [code, setCode] = useState(coupon)
  const [msg, setMsg] = useState('')

  const checkout = () => {
    const text = [
      'Olá! Quero finalizar meu pedido na Dunna:',
      ...lines.map((l) => `• ${l.qty}x ${l.product.name} — ${formatBRL(l.product.price * l.qty)}`),
      discount ? `Cupom ${coupon}: -${formatBRL(discount)}` : '',
      `Total: ${formatBRL(total)}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div {...fade} className="fixed inset-0 z-50 bg-black/30" onClick={() => setOpen(false)} />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-line bg-paper"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="eyebrow">Carrinho</h2>
              <button aria-label="Fechar carrinho" onClick={() => setOpen(false)}><X className="size-5" strokeWidth={1.25} /></button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
                <p className="text-sm text-smoke">Seu carrinho está vazio.</p>
                <Link to="/produtos" onClick={() => setOpen(false)} className="eyebrow link-line">Ver produtos</Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
                  {lines.map((l) => (
                    <li key={l.slug} className="flex gap-4 py-5">
                      <img src={l.product.images[0]} alt="" className="product-img size-20 bg-mist object-cover" />
                      <div className="flex flex-1 flex-col text-[13px]">
                        <p>{l.product.name}</p>
                        <p className="text-smoke">{formatBRL(l.product.price)}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button aria-label="Diminuir" onClick={() => setQty(l.slug, l.qty - 1)}><Minus className="size-3" /></button>
                            <span className="w-4 text-center">{l.qty}</span>
                            <button aria-label="Aumentar" onClick={() => setQty(l.slug, l.qty + 1)}><Plus className="size-3" /></button>
                          </div>
                          <button onClick={() => remove(l.slug)} className="text-[11px] text-smoke underline underline-offset-4 hover:text-ink">Remover</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4 border-t border-line px-6 py-6 text-[13px]">
                  <form
                    className="flex gap-3 border-b border-line pb-2"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const c = code.trim().toUpperCase()
                      setCoupon(c)
                      setMsg(c === STORE.coupon ? 'Cupom aplicado' : 'Cupom inválido')
                    }}
                  >
                    <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Cupom de desconto" className="flex-1 bg-transparent uppercase outline-none placeholder:normal-case" />
                    <button className="eyebrow">Aplicar</button>
                  </form>
                  {msg && <p className="text-[12px] text-smoke">{msg}</p>}
                  <div className="flex justify-between text-smoke"><span>Subtotal</span><span>{formatBRL(subtotal)}</span></div>
                  {discount > 0 && <div className="flex justify-between text-smoke"><span>Desconto</span><span>-{formatBRL(discount)}</span></div>}
                  <div className="flex justify-between text-base"><span>Total</span><span>{formatBRL(total)}</span></div>
                  <button onClick={checkout} className="eyebrow w-full bg-ink py-4 text-paper transition-opacity hover:opacity-85">Finalizar compra</button>
                  <p className="text-center text-[11px] text-smoke">O pedido é finalizado pelo WhatsApp da loja.</p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 text-center">
        <Logo className="h-8 sm:h-10" />
        <nav className="flex gap-8 text-[12px] tracking-[0.16em] uppercase">
          <Link to="/" className="link-line">Início</Link>
          <Link to="/produtos" className="link-line">Produtos</Link>
          <Link to="/contato" className="link-line">Contato</Link>
        </nav>
        <div className="flex gap-6 text-smoke">
          <a href={`https://instagram.com/${STORE.instagram}`} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-ink"><InstagramIcon className="size-[18px]" /></a>
          <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-ink"><WhatsAppIcon className="size-[18px]" /></a>
        </div>
      </div>
      <p className="border-t border-line py-6 text-center text-[11px] tracking-wide text-smoke">
        Copyright Dunna Candle - {new Date().getFullYear()}. Todos os direitos reservados.
      </p>
    </footer>
  )
}

function CookieBanner() {
  const [show, setShow] = useState(() => {
    try {
      return !localStorage.getItem('dunna-cookies')
    } catch {
      return true
    }
  })
  if (!show) return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col items-center justify-center gap-3 border-t border-line bg-paper px-6 py-4 text-[12px] text-smoke sm:flex-row sm:gap-8">
      <p>Ao navegar por este site você aceita o uso de cookies para agilizar a sua experiência de compra.</p>
      <button
        onClick={() => {
          try {
            localStorage.setItem('dunna-cookies', '1')
          } catch {
            /* ignore */
          }
          setShow(false)
        }}
        className="eyebrow link-line text-ink"
      >
        Entendi
      </button>
    </div>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${STORE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-20 right-5 z-30 grid size-11 place-items-center rounded-full border border-line bg-paper text-ink shadow-sm transition-colors hover:bg-ink hover:text-paper sm:bottom-6"
    >
      <WhatsAppIcon className="size-5" />
    </a>
  )
}

export default function Layout() {
  const [search, setSearch] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Header onSearch={() => setSearch(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
      <CartDrawer />
      <CookieBanner />
      <WhatsAppButton />
    </div>
  )
}
