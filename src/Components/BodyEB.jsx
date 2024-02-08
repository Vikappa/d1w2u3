import {useState, useEffect} from "react"
import ColBooklist from "./ColBooklist"
import ColRecensione from "./ColRecensione"

function BodyEB(props) {

const [carrello, setCarrello] = useState(props.carrello)
const [filtroTitolo, setFiltroTitolo] = useState(props.filtroTitolo)
const [filtroGenere, setFiltroGenere] = useState(props.filtroGenere)
const [filtroPrezzo, setFiltroPrezzo] = useState({min: props.filtroPrezzoMin, max: props.filtroPrezzoMax})
const [arrayLibriDaMostrare, setArrayLibriDaMostrare] = useState(props.totalBooklist)
const [bookEvidenza, setBookEvidenza] = useState(null)


  return (
    <div className="container-fluid w-100 d-flex">
    <ColBooklist arrayLibriDaMostrare={arrayLibriDaMostrare} setArrayLibriDaMostrare={setArrayLibriDaMostrare} 
    filtroTitolo={filtroTitolo}
    filtroGenere={filtroGenere} 
    filtroPrezzo={filtroPrezzo}
    carrello={carrello}
    bookEvidenza={bookEvidenza}
    setBookEvidenza={setBookEvidenza}
    />
    <ColRecensione bookEvidenza={bookEvidenza} setBookEvidenza={setBookEvidenza} />
    </div>
  )
}

export default BodyEB
