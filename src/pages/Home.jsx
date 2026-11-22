import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { BANNERS, CATEGORIES, byCategory } from '../data/products'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { Logo } from '../components/Icons'

function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pb-20 pt-20 text-center sm:pt-28">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
        <Logo className="mx-auto h-16 sm:h-24 lg:h-32" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="eyebrow mt-8 text-smoke"
      >
        Velas aromáticas · Cera de coco 100% vegetal
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
        <Link to="/produtos" className="eyebrow link-line mt-10 inline-block">Ver coleção</Link>
      </motion.div>
    </section>
  )
}

function Banner() {
  const slides = [BANNERS.hero, BANNERS.b1, BANNERS.b2, BANNERS.b3]
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [slides.length])
  return (
    <section className="relative">
      <div className="relative aspect-[16/5] overflow-hidden bg-mist">
        <AnimatePresence initial={false}>
          <motion.img
            key={i}
            src={slides[i]}
            alt={`Banner Dunna ${i + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="product-img absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="mt-4 flex justify-center gap-3">
        {slides.map((_, k) => (
          <button key={k} aria-label={`Banner ${k + 1}`} onClick={() => setI(k)} className={`h-px w-8 transition-colors ${k === i ? 'bg-ink' : 'bg-line'}`} />
        ))}
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="no-scrollbar flex justify-start gap-8 overflow-x-auto sm:justify-center sm:gap-12">
        {CATEGORIES.map((c) => (
          <Link key={c.slug} to={`/produtos/${c.slug}`} className="group flex w-20 shrink-0 flex-col items-center text-center">
            <div className="size-16 overflow-hidden rounded-full bg-mist sm:size-[72px]">
              <img src={c.image} alt={c.name} className="product-img size-full object-cover transition-opacity group-hover:opacity-80" />
            </div>
            <span className="mt-3 text-[11px] tracking-[0.1em] uppercase">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Section({ title, href, products }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <Reveal className="mb-10 flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="eyebrow">{title}</h2>
        <Link to={href} className="text-[12px] text-smoke link-line">Ver tudo</Link>
      </Reveal>
      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
        {products.slice(0, 8).map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 0.06}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Values() {
  const items = ['Cera de coco 100% vegetal', '35 horas de queima', 'Essência premium']
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="grid divide-y divide-line border-y border-line text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((t) => (
          <p key={t} className="eyebrow py-8 text-smoke">{t}</p>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Categories />
      <Section title="Vela Gold" href="/produtos/vela-gold" products={byCategory('vela-gold')} />
      <Values />
      <Section title="Home Spray" href="/produtos/home-spray" products={byCategory('home-spray')} />
      <Section
        title="Difusores e Wax Melts"
        href="/produtos/wax-melts"
        products={[...byCategory('difusor-aromatico'), ...byCategory('wax-melts')]}
      />
    </>
  )
}
