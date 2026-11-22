import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CATEGORIES, PRODUCTS, getCategory } from '../data/products'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'

const SORTS = {
  relevancia: { label: 'Relevância', fn: () => 0 },
  menor: { label: 'Menor preço', fn: (a, b) => a.price - b.price },
  maior: { label: 'Maior preço', fn: (a, b) => b.price - a.price },
  az: { label: 'A - Z', fn: (a, b) => a.name.localeCompare(b.name) },
}

export default function Products() {
  const { category } = useParams()
  const cat = category ? getCategory(category) : null
  const [sort, setSort] = useState('relevancia')

  const list = useMemo(() => {
    const base = cat ? PRODUCTS.filter((p) => p.category === cat.slug) : PRODUCTS
    return [...base].sort(SORTS[sort].fn)
  }, [cat, sort])

  return (
    <div className="mx-auto max-w-7xl px-5 pt-14 sm:px-8">
      <h1 className="text-center text-2xl font-light tracking-[0.2em] uppercase sm:text-3xl">{cat ? cat.name : 'Produtos'}</h1>

      <div className="no-scrollbar mt-10 flex justify-start gap-7 overflow-x-auto border-b border-line pb-4 text-[12px] tracking-[0.14em] uppercase sm:justify-center">
        {[{ slug: null, name: 'Todos' }, ...CATEGORIES].map((c) => {
          const active = (cat?.slug ?? null) === c.slug
          return (
            <Link key={c.name} to={c.slug ? `/produtos/${c.slug}` : '/produtos'} className={`shrink-0 transition-colors ${active ? 'text-ink' : 'text-smoke hover:text-ink'}`}>
              <span className={active ? 'border-b border-ink pb-1' : ''}>{c.name}</span>
            </Link>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between text-[12px] text-smoke">
        <span>{list.length} produtos</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent outline-none">
          {Object.entries(SORTS).map(([k, v]) => (
            <option key={k} value={k}>{v.label}</option>
          ))}
        </select>
      </div>

      {list.length === 0 ? (
        <p className="py-32 text-center text-sm text-smoke">Em breve.</p>
      ) : (
        <div key={cat?.slug ?? 'todos'} className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
