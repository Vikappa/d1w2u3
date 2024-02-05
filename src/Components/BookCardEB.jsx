import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class BookCardEB extends Component {

    trimString(str) {
        if (str.length < 45) {
          return str;
        } else {
          return str.substring(0, 42) + "...";
        }
      }
      
      updateBookEvidenza(asin){
        this.props.setAsinEvidenza(asin)
      }
      

  render() {
    console.log(this.props)
    return (
      <div className='p-2 m-0 col-6 col-md-4 col-lg-3 col-xl-2 bookWrapper '>
        <Card className={this.props.book.asin !== this.props.asinEvidenza? "m-0 p-0 bookCard bg-EpicodeTemaColore2" : "m-0 p-0 bookCard bg-EpicodeTemaColore5 bookEvidenza"}
         data-bs-theme="dark"
         onClick={() => this.updateBookEvidenza(this.props.book.asin)}
         >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className='d-flex flex-column justify-content-between p-1 p-md-2 p-lg-3'>
            <div>
              <Card.Title className='fs-6'>{this.trimString(this.props.book.title)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.book.category}</Card.Subtitle>
              <Card.Text className='d-none d-md-block'>
                Asin:{this.props.book.asin}
              </Card.Text>
            </div>
            <Card.Link href="#">Aggiungi (€{this.props.book.price})</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default BookCardEB;
