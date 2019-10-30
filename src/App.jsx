import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const App = () => {
    return (
        <Container fluid className="text-center m-4">
            <h4>Construindo...</h4>
            <Spinner animation="border" role="status" className="m-4">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default App
