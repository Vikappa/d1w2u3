import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCardEB(props) {
    console.log(props)


    function trimmer(str) {
        if (str.length > 40) {
          return str.substring(0, 37) + "...";
        } else {
          return str;
        }
      }

      return (
        <div className='cardWrapper'>
            <Card>
                <Card.Img variant="top" src={props.libro.img} className='bookCardCover' />
                <Card.Body className='d-flex flex-column p-1 p-md-3'> 
                    <Card.Title>{trimmer(props.libro.title)}</Card.Title>
                    <div className='d-flex flex-column justify-content-center'>
                        <Card.Text className='d-none d-md-inline fs-6 m-0'>
                            Asin: {props.libro.asin}
                        </Card.Text>
                        <Card.Text className='d-none d-md-inline fs-6'>
                            Genere: {props.libro.category}
                        </Card.Text>
                    </div>
                    <div className='mt-auto d-flex flex-column justify-content-center'>
                        <Button variant="primary" className="p-0 m-1">Aggiungi al carrello</Button>
                        <Button variant="primary" className="p-0 m-1">Recensioni</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCardEB;