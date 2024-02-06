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

    fetchData = async () => {
        fetch()
    }

    componentDidMount() {
        this.fetchData() 
    }

    render() {
        console.log(this.state)
        console.log(this.props)
        let loading = this.state.loading
        let error = this.state.error
        return (
            <div>
    <Card className='bg-EpicodeTemaColore3 m-0 p-0' data-bs-theme="dark"  id='colRecensione'>
      <Card.Img variant="top" src={loading?"https://http.cat/images/102.jpg":error?"https://http.cat/images/400.jpg": this.state.fetchdata.img} />
      <Card.Body>
        <Card.Title>{loading?"Caricamento..":error?"ERRORE" : this.state.fetchdata.nome}</Card.Title>
        <Card.Text className='text-center'>
        {loading?<SpinnerEB/>:error?'ERRORE': this.state.fetchdata.nome}
        </Card.Text>
        <Button className='m-1' variant="EpicodeTemaColore1">{!loading && !error?"Aggiungi recensione": ""}</Button>
        <Button className='m-1' variant="EpicodeTemaColore5">{!loading && !error?"Aggiungi al carrello (€)": ""}</Button>
      </Card.Body>
    </Card>
            </div>
        )
    }
}

export default ColRecensione

