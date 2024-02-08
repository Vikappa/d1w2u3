import { useState, useEffect } from 'react'

function BloccoRecensioni(props) {
    const [state, setState] = useState(props)

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            ...props 
        }))
    }, [props]) //Aggiorna lo state ogni volta che cambiano le props


    return (
        <div>
            
        </div>
    )
}

export default BloccoRecensioni
