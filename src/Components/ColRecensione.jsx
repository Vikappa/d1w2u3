import React, { Component } from 'react'
import SpinnerEB from '../SpinnerEB'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import fantasyBooks from '../books/fantasy.json'
import historyBooks from '../books/history.json'
import horrorBooks from '../books/horror.json'
import romanceBooks from '../books/romance.json'
import scifiBooks from '../books/scifi.json'

class ColRecensione extends Component {

    state = {
        asinEvidenza: this.props.asinEvidenza,
        carrello: this.props.carrello,
        setCarrello: this.props.setCarrello,
        loading: true,
        error: false,
        fetchdata: this.fetchData
    }

    getBookByAsin = (asin) => {
        let totalBooklist = [
            ...fantasyBooks,
            ...historyBooks,
            ...horrorBooks,
            ...romanceBooks,
            ...scifiBooks
          ]
          
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
        fetch(('https://striveschool-api.herokuapp.com/api/comments/'+ this.state.asinEvidenza), {headers: {"Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MDE4N2U1YzAwMTgxNGM1ZjYiLCJpYXQiOjE3MDcxODA5NjUsImV4cCI6MTcwODM5MDU2NX0.m18iQGAjFbus5eW2GN5NBb-m4kxJt6NRqXwEYXveaVU"}})
        .then(response => response.json())
        .then(data => {
            this.setState({ error: false })
            this.setState({ loading: false })
            console.log(data)
        })
        .catch(error => {
            this.setState({ error: true })
            this.setState({ loading: false })
        })
    }

    componentDidMount() {
        this.fetchData() 
    }

    render() {
        let loading = this.state.loading
        let error = this.state.error
        return (
            <div>
    <Card className='bg-EpicodeTemaColore3 m-0 p-0' data-bs-theme="dark"  id='colRecensione'>
      <Card.Img variant="top" src={loading?"https://http.cat/images/102.jpg":error?"https://http.cat/images/400.jpg": this.state.fetchdata.img} />
      <Card.Body>
        <Card.Title>{loading?"Caricamento..":error?"ERRORE" : this.state.fetchdata.nome}</Card.Title>
        <div className='text-center'>
        {loading?<SpinnerEB/>:error?'ERRORE': this.state.fetchdata.nome}
        </div>
        <Button className='m-1' variant="EpicodeTemaColore1">{!loading && !error?"Aggiungi recensione": ""}</Button>
        <Button className='m-1' variant="EpicodeTemaColore5">{!loading && !error?"Aggiungi al carrello (€)": ""}</Button>
      </Card.Body>
    </Card>
            </div>
        )
    }
}

export default ColRecensione

