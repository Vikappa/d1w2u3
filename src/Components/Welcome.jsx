import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

function Welcome() {
    return (
      <Alert className="text-center p-2 m-2" data-bs-theme="dark" >
        <Alert.Heading>Benvenuto su EpiBook!</Alert.Heading>
        <p className='m-0'>
          Libri epici da pagare tra due anni se ti sono piaciuti!
        </p>
      </Alert>
    )
}

export default Welcome