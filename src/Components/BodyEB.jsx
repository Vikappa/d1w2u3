import React, { useState, Component } from'react'
import BookCardEB from './BookCardEB'

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
    this.setState({asinEvidenza: asin})
}

    render(){
        return(
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className={"col-md-12 d-flex flex-wrap"} id='colBooks'>
                        {
                            this.state.totalBooklist.map((book, index) => (
                            <BookCardEB key={index} book={book} asinEvidenza={this.state.asinEvidenza} setAsinEvidenza={this.setAsinEvidenza}/>
                            ))
                        }
                    </div>
                    <div className='col-0 d-none' id='colRecensione'>
                        {}
                    </div>
                </div>
            </div>
        )
    }


}

export default BodyEB;  