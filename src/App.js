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
import Welcome from './Components/Welcome'
import BodyEB from './Components/BodyEB'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImpostazioniEB from './Components/ImpostazioniEB'
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  const [carrello, setCarrello] = useState([])
  const [filtroTitolo, setFiltroTitolo] = useState(null)
  const [filtroGenere, setFiltroGenere] = useState(null)
  const [filtroPrezzoMin, setFiltroPrezzoMin] = useState(0)
  const [filtroPrezzoMax, setFiltroPrezzoMax] = useState(Infinity)
 
  let totalBooklist = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks
  ]

  return (
  <Provider store={store}>

<BrowserRouter>
  <NavbarEB carrello={carrello} setCarrello={setCarrello} filtroTitolo={filtroTitolo} setFiltroTitolo={setFiltroTitolo} filtroGenere={filtroGenere} setFiltroGenere={setFiltroGenere} filtroPrezzoMin={filtroPrezzoMin} setFiltroPrezzoMin={setFiltroPrezzoMin} filtroPrezzoMax={filtroPrezzoMax} setFiltroPrezzoMax={setFiltroPrezzoMax} />
  <Welcome  />
  <Routes>
    <Route path='/' element={
      <BodyEB carrello={carrello} setCarrello={setCarrello} filtroTitolo={filtroTitolo}  filtroGenere={filtroGenere} filtroPrezzoMin={filtroPrezzoMin} filtroPrezzoMax={filtroPrezzoMax} totalBooklist={totalBooklist} />
    } >
    </Route>
    <Route path='/impostazioni' element={<ImpostazioniEB/>}></Route>
    <Route path='*' element={<h1>Not found</h1>}></Route>
  </Routes>
  <FooterEB />
</BrowserRouter>
    
      </Provider>
  )
}

export default App
