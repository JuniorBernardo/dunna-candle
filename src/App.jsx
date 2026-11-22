import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>

          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="produtos" element={<Products />} />
              <Route path="produtos/:category" element={<Products />} />
              <Route path="produto/:slug" element={<Product />} />
              <Route path="contato" element={<Contact />} />
              <Route path="conta" element={<NotFound title="Minha conta" text="A área do cliente chega em breve. Enquanto isso, fale com a gente pelo WhatsApp." />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}
