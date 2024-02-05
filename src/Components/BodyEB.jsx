import React, { useState, Component } from'react'
import BookCardEB from './BookCardEB'
import ColRecensione from './ColRecensione'

class BodyEB extends Component {
 
    state = {carrello: this.props.carrello,
        filtroGenere: this.props.filtroGenere,
        filtroTitolo: this.props.filtroTitolo,
    filtroPrezzoMin: this.props.filtroPrezzoMin,
    filtroPrezzoMax: this.props.filtroPrezzoMax,
    totalBooklist: this.props.totalBooklist,
    asinEvidenza: null,
}

setAsinEvidenza = (asin) => {
    this.setState({ asinEvidenza: asin }, () => {
    })
}


    render(){
        return(this.state.totalBooklist.length > 0?
            <div className='container'>
                <div className='row align-items-center justify-content-center m-0 p-0'>
                <div className={`${this.state.asinEvidenza === null ? `col-md-12` : `col-md-6`} d-flex flex-wrap justify-content-center gap-2 w-100`} id='colBooks'>
                        {
                            this.state.totalBooklist.map((book, index) => (
                            <BookCardEB key={index} book={book} asinEvidenza={this.state.asinEvidenza} setAsinEvidenza={this.setAsinEvidenza}/>
                            ))
                        }
                    </div>
                    <div className={this.state.asinEvidenza === null ? 'col-0 d-none' : 'col-3 d-block m-0 p-0'} id='colRecensione'>
                        {<ColRecensione asinEvidenza={this.state.asinEvidenza} setAsinEvidenza={this.setAsinEvidenza} carrello={this.state.carrello} setCarrello={this.props.setCarrello} />}
                    </div>
                </div>
            </div>
            :
            <img src="https://http.cat/status/404" alt="not found"></img>
        )
    }

}

export default BodyEB