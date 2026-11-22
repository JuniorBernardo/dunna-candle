import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct } from '../data/products'

const CartContext = createContext(null)
const KEY = 'dunna-cart'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)
  const [coupon, setCoupon] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {
      /* armazenamento indisponível */
    }
  }, [items])

  const add = (slug, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.slug === slug)
      if (found) return prev.map((i) => (i.slug === slug ? { ...i, qty: i.qty + qty } : i))
      return [...prev, { slug, qty }]
    })
    setOpen(true)
  }
  const setQty = (slug, qty) =>
    setItems((prev) => (qty <= 0 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => (i.slug === slug ? { ...i, qty } : i))))
  const remove = (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug))

  const value = useMemo(() => {
    const lines = items.map((i) => ({ ...i, product: getProduct(i.slug) })).filter((l) => l.product)
    const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0)
    const discount = coupon === 'PRIMEIRADUNNA' ? subtotal * 0.1 : 0
    const count = lines.reduce((s, l) => s + l.qty, 0)
    return { lines, subtotal, discount, total: subtotal - discount, count, open, setOpen, add, setQty, remove, coupon, setCoupon }
  }, [items, open, coupon])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
