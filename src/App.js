import './App.css'
import './index.css'
import fantasyBooks from './books/fantasy.json'
import historyBooks from './books/history.json'
import horrorBooks from './books/horror.json'
import romanceBooks from './books/romance.json'
import scifiBooks from './books/scifi.json'
import React, { useState } from 'react'
import NavbarEB from './Components/NavbarEB'
import FooterEB from './Components/FooterEB'
import BodyEB from './Components/BodyEB'

function App() {
  const [carrello, setCarrello] = useState([])
  const [filtroTitolo, setFiltroTitolo] = useState(null)
  const [filtroGenere, setFiltroGenere] = useState(null)
  const [filtroPrezzoMin, setFiltroPrezzoMin] = useState(0)
  const [filtroPrezzoMax, setFiltroPrezzoMax] = useState(Infinity)

  const totalBooklist = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks
  ]

  return (
    <>
<NavbarEB carrello={carrello} setCarrello={setCarrello} filtroTitolo={filtroTitolo} setFiltroTitolo={setFiltroTitolo} filtroGenere={filtroGenere} setFiltroGenere={setFiltroGenere} filtroPrezzoMin={filtroPrezzoMin} setFiltroPrezzoMin={setFiltroPrezzoMin} filtroPrezzoMax={filtroPrezzoMax} setFiltroPrezzoMax={setFiltroPrezzoMax} />
<BodyEB carrello={carrello} setCarrello={setCarrello} filtroTitolo={filtroTitolo}  filtroGenere={filtroGenere} filtroPrezzoMin={filtroPrezzoMin} filtroPrezzoMax={filtroPrezzoMax}/>
<FooterEB />
    </>
  )
}

export default App
