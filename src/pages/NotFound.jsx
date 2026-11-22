import { Link } from 'react-router-dom'

export default function NotFound({ title = 'Página não encontrada', text = 'O endereço que você acessou não existe.' }) {
  return (
    <div className="mx-auto max-w-md px-6 py-32 text-center">
      <h1 className="text-xl font-light tracking-[0.2em] uppercase">{title}</h1>
      <p className="mt-4 text-[13px] text-smoke">{text}</p>
      <Link to="/produtos" className="eyebrow link-line mt-10 inline-block">Ver produtos</Link>
    </div>
  )
}
