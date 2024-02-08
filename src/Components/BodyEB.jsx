import {useState, useEffect} from "react"
import BloccoLibri from "./BloccoLibri"
import BloccoRecensioni from "./BloccoRecensioni"

function BodyEB(props) {

const [carrello, setCarrello] = useState(props.carrello)
const [filtroTitolo, setFiltroTitolo] = useState(props.filtroTitolo)
const [filtroGenere, setFiltroGenere] = useState(props.filtroGenere)
const [filtroPrezzo, setFiltroPrezzo] = useState({min: props.filtroPrezzoMin, max: props.filtroPrezzoMax})
const [arrayLibriDaMostrare, setArrayLibriDaMostrare] = useState(props.totalBooklist)
const [bookEvidenza, setBookEvidenza] = useState(null)


  return (
<div className="d-flex flex-column flex-md-row container-fluid">
<BloccoLibri filtroTitolo={filtroTitolo} filtroGenere={filtroGenere} 
filtroPrezzo={filtroPrezzo} arrayLibriDaMostrare={arrayLibriDaMostrare} 
bookEvidenza={bookEvidenza} setBookEvidenza={setBookEvidenza}
carrello={carrello} setCarrello={setCarrello}
/>
<BloccoRecensioni carrello={carrello} setCarrello={setCarrello}
bookEvidenza={bookEvidenza} setBookEvidenza={setBookEvidenza}
/>
</div>
  )
}

export default BodyEB
