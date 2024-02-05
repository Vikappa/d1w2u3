import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class ColRecensione extends Component {

    state = {
        asinEvidenza: this.props.asinEvidenza,
        carrello: this.props.carrello,
        setCarrello: this.props.setCarrello,
        loading: true,
        error: false
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
      
  render() {
    return (
        <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
<p>PROVA</p>
        </div>
    )
  }
}

export default ColRecensione;
