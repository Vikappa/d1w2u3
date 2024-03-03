import {useState, useEffect} from 'react'
import BookCardEB from './BookCardEB'
import { Col, Container, Row } from 'react-bootstrap'
function BloccoLibri(props) {

  const [carrello, setCarrello] = useState(props.carrello)
const [filtroTitolo, setFiltroTitolo] = useState(props.filtroTitolo)
const [filtroGenere, setFiltroGenere] = useState(props.filtroGenere)
const [filtroPrezzo, setFiltroPrezzo] = useState({min: props.filtroPrezzoMin, max: props.filtroPrezzoMax})
const [arrayLibriDaMostrare, setArrayLibriDaMostrare] = useState(props.totalBooklist)

    return (
      <Container>
        <Row>
      {arrayLibriDaMostrare.map((libro, index) => {
    return (
          <Col xs={6} md={3} lg={2}>
        <BookCardEB key={index} libro={libro} carrello={carrello} setCarrello={setCarrello} />
          </Col>
)
})}
        </Row>
</Container>
    )
  }
  
  export default BloccoLibri