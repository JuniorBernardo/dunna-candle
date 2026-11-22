import { Link } from 'react-router-dom'
import { formatBRL } from '../data/products'

export default function ProductCard({ product }) {
  const [front, back] = product.images
  return (
    <Link to={`/produto/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-mist">
        <img
          src={front}
          alt={product.name}
          loading="lazy"
          className={`product-img absolute inset-0 size-full object-cover transition-opacity duration-700 ${back ? 'group-hover:opacity-0' : 'group-hover:opacity-85'}`}
        />
        {back && <img src={back} alt="" loading="lazy" className="product-img absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />}
        {product.soldOut && <span className="absolute left-3 top-3 text-[10px] tracking-[0.2em] text-smoke uppercase">Esgotado</span>}
      </div>
      <div className="mt-4 text-center text-[13px]">
        <h3 className="tracking-wide">{product.name}</h3>
        <p className="mt-1 text-smoke">{formatBRL(product.price)}</p>
      </div>
    </Link>
  )
}
