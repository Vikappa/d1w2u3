import {useState, useEffect} from "react"
import { Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import BookCardEB from "./BookCardEB"

function ColBooklist(props) {
console.log(props)

let libriDaMostrare = props.arrayLibriDaMostrare
return (
    <div className="d-flex flex-wrap justify-content-center">
        {libriDaMostrare.map((libro, index) => { 
            return (

                <BookCardEB key={index} libro={libro} index={index} />
            
            )
        })}
    </div>
)
}

export default ColBooklist