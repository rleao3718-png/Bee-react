import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Comportamento from './pages/Comportamento'
import Habitat from './pages/Habitat'
import Curiosidades from './pages/Curiosidades'
import Apicultura from './pages/Apicultura'
import Especies from './pages/Especies'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comportamento" element={<Comportamento />} />
          <Route path="/habitat" element={<Habitat />} />
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/apicultura" element={<Apicultura />} />
          <Route path="/especies" element={<Especies />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}