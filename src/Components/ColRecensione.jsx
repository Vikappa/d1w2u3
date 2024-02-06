import React, { Component } from 'react'
import SpinnerEB from '../SpinnerEB'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ColRecensione extends Component {

    state = {
        asinEvidenza: this.props.asinEvidenza,
        carrello: this.props.carrello,
        setCarrello: this.props.setCarrello,
        loading: true,
        error: false,
        fetchdata: this.fetchData
    }

    componentDidUpdate(prevProps) {
        if (this.props.asinEvidenza !== prevProps.asinEvidenza) {
            this.setState({ asinEvidenza: this.props.asinEvidenza })
            this.props.setAsinEvidenza(this.props.asinEvidenza)
        }

        if (this.props.carrello !== prevProps.carrello) {
            this.setState({ carrello: this.props.carrello })
        }
    }

    componentDidMount() {
        // this.fetchData() 
    }

    render() {
        console.log(this.state)
        console.log(this.props)
        let loading = this.state.loading
        return (
            <div>
    <Card>
      <Card.Img variant="top" src="https://http.cat/images/102.jpg" />
      <Card.Body>
        <Card.Title>{loading?"Caricamento..":this.state.fetchdata.nome}</Card.Title>
        <Card.Text className='text-center'>
<SpinnerEB/>
        </Card.Text>
        <Button className='m-1' variant="EpicodeTemaColore1">Aggiungi recensione</Button>
        <Button className='m-1' variant="EpicodeTemaColore5">Aggiungi al carrello (manymoney€)</Button>
      </Card.Body>
    </Card>
            </div>
        )
    }
}

export default ColRecensione

