import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import books from '../data/horror.json'

import history from '../data/history.json'
import fantasy from '../data/fantasy.json'
import romance from '../data/romance.json'

let booksArray = [books, history, fantasy, romance]
console.log(booksArray)

class Latest extends Component {

    state = {
        selectedBook: null,
    }


    render() {
        return (
            <Container className="mb-5 fluid">
                <div className="mb-5">
                
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm" className="text-light formWidth">
                        <Form.Label>Select books</Form.Label>
                        <Form.Control as="select" size="sm" custom 
                        onChange={(e) => this.setState({selectedBook: e.target.value })}>
                        <option value="horror">Horror</option>
                        <option value="history">History</option>
                        <option value="fantansy">Fantansy</option>
                        <option value="romance">Romance</option>
                        </Form.Control>
                    </Form.Group>
                    <p className="text-light">Choose category: {this.state.selectedBook}</p>
                </div>
                <h1 className="text-light mt-5 text-left bold">Horror</h1>
                <div className="d-flex">
                      {                      
                          books.map(book => (  
                            <div >
                                <Card className="mr-4 mb-3 p-0 cardborder"  style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={book.img}  style={{ height: '20rem' }} />
                                    <Card.Body className="cardbody">
                                        <Card.Title className="clamp">{book.title}</Card.Title>
                                        <h5 className="d-inline-block">
                                          Category:   {book.category}
                                        </h5>                               
                                        <div className="d-flex justify-content-between">
                                            <Button variant="warning">Buy</Button>
                                            <h6  className="d-inline-block">€{book.price}</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </div>
                                ))
                      } 
                </div>

                    <h1 className="text-light mt-5 text-left bold">History</h1>
                <div className="d-flex">
                      {                      
                          booksArray[1].map(book => (  
                            <div>
                                <Card className="mr-4 mb-3 p-0 cardborder" key={book.id}  style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={book.img}  style={{ height: '20rem' }} />
                                    <Card.Body>
                                        <Card.Title className="clamp">{book.title}</Card.Title>
                                        <h5 className="d-inline-block">
                                          Category:   {book.category}
                                        </h5>                               
                                        <div className="d-flex justify-content-between">
                                            <Button variant="warning">Buy</Button>
                                            <h6  className="d-inline-block">€{book.price}</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </div>
                                ))
                      } 
                </div>

                <h1 className="text-light mt-5 text-left bold">Fantasy</h1>
                <div className="d-flex">
                      {                      
                          booksArray[2].map(book => (  
                            <div>
                                <Card className="mr-4 mb-3 p-0 cardborder" key={book.id}  style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={book.img}  style={{ height: '20rem' }} />
                                    <Card.Body>
                                        <Card.Title className="clamp">{book.title}</Card.Title>
                                        <h5 className="d-inline-block">
                                          Category:   {book.category}
                                        </h5>                               
                                        <div className="d-flex justify-content-between">
                                            <Button variant="warning">Buy</Button>
                                            <h6  className="d-inline-block">€{book.price}</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </div>
                                ))
                      } 
                </div>

                <h1 className="text-light mt-5 text-left bold">Romance</h1>
                <div className="d-flex">
                      {                      
                          booksArray[3].map(book => (  
                            <div>
                                <Card className="mr-4 mb-3 p-0 cardborder" key={book.id}  style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={book.img}  style={{ height: '20rem' }} />
                                    <Card.Body>
                                        <Card.Title className="clamp">{book.title}</Card.Title>
                                        <h5 className="d-inline-block">
                                          Category:   {book.category}
                                        </h5>                               
                                        <div className="d-flex justify-content-between">
                                            <Button variant="warning">Buy</Button>
                                            <h6  className="d-inline-block">€{book.price}</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </div>
                                ))
                      } 
                </div>



            </Container>
        )
    }
}

export default Latest