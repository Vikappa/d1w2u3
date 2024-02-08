import {useState, useEffect} from 'react'
import BookCardEB from './BookCardEB'
function BloccoLibri(props) {

    const [bookEvidenza, setBookEvidenza] = useState(props.bookEvidenza)
    const [arrayLibriDaMostrare, setArrayLibriDaMostrare] = useState(props.arrayLibriDaMostrare)
    const [carrello, setCarrello] = useState(props.carrello)
    return (
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
      {arrayLibriDaMostrare.map((libro, index) => {
    return (
        
        <BookCardEB key={index} libro={libro} bookEvidenza={bookEvidenza} setBookEvidenza={setBookEvidenza} carrello={carrello} setCarrello={setCarrello} />
        
    )
  })}
      </div>
    )
  }
  
  export default BloccoLibri