import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import books from '../data/horror.json'
import Dropdown from 'react-bootstrap/Dropdown'
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
                    <Dropdown className="mr">
                        <Dropdown.Toggle variant="warning" id="dropdown-basic" className="browseBtn">
                            Browse
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Histor</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="d-flex">
                      {
                          // <Col xs={12} md={3} className="mr-1" >                        
                          books.map(book => (  
                            <div>
                                <Card className="mr-3 mb-3 p-0 cardborder" key={book.id}  style={{ width: '16rem' }}>
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
                          // {/* </Col> */}
                      } 
                </div>

                {/* <Row className="justify-content-center">
                      {

                      }
                </Row> */}
            </Container>
        )
    }
}

export default Latest