import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'


function BookCardEB(props) {

  const qtàNelCarrello = useSelector((state) => state.carrello.reduce((count, item) => {
    return item.asin === props.libro.asin ? count + 1 : count;
  }, 0))
  
    function trimmer(str) {
        if (str.length > 35) {
          return str.substring(0, 32) + "..."
        } else {
          return str
        }
      }

      return (
        <Card 
          className={props.bookEvidenza === props.libro.asin?"bg-dark text-white cardWrapper selectedBook":"bg-dark text-white cardWrapper"}     
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 4) 100%), url(${props.libro.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          >
          <Card.ImgOverlay className='p-2 d-flex flex-column'>
            <Card.Title className='fs-6'>{trimmer(props.libro.title)}</Card.Title>
            <Card.Text style={{margin:"0"}}>
              Genere: {props.libro.category}
            </Card.Text>
            <Card.Text>
              Asin: {props.libro.asin}
            </Card.Text>
            <Card.Text style={{margin:"0"}}
            >
              Nel carrello: 
            </Card.Text>
            <div className='d-flex justify-content-center mt-auto' >
            <Button variant="EpicodeTemaColore1" className='p-1 px-2 rounded-4'>Compra (€{props.libro.price})</Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      );
      
      
}

export default BookCardEB