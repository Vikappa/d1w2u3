import {useState, useEffect} from "react"

function BodyEB(props) {

console.log(props)

const [carrello, setCarrello] = useState(props.carrello)
const [filtroTitolo, setFiltroTitolo] = useState(props.filtroTitolo)
const [filtroGenere, setFiltroGenere] = useState(props.filtroGenere)
const [filtroPrezzo, setFiltroPrezzo] = useState({min: props.filtroPrezzoMin, max: props.filtroPrezzoMax})
const [arrayLibriDaMostrare, setArrayLibriDaMostrare] = useState(props.totalBooklist)



  return (
<>
</>
  )
}

export default BodyEB
