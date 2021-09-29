import { Component } from 'react'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
// import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// Books data
import horror from '../data/horror.json'
import history from '../data/history.json'
import fantasy from '../data/fantasy.json'
import romance from '../data/romance.json'

let booksArray = [
    {genre: 'Horror', category: horror}, 
    {genre: 'History', category:history},
    {genre: 'Fantasy',category:fantasy},
    {genre: 'Romance',category:romance}
]
// console.log(booksArray)

class Latest extends Component {

    state = {
        category: booksArray[0].category,
        genre: booksArray[0].genre,
    }


    render() {
        return (
            <Container className="mb-5 fluid">
                <div className="mb-5">
                
                <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Browse Books
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            booksArray.map((category,i) => (
                            <Dropdown.Item key={i} 
                            onClick={() => this.setState({
                                category: category.category, genre: category.genre})}
                            >{category.genre}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
                   
                </div>
                <h1 className="text-light mt-5 text-left bold">{this.state.genre}</h1>
                <div className="d-flex">
                      {                      
                          this.state.category.map(book => (  
                            <div key={book.asin}>
                                <Card className="mr-4 mb-3 p-0 cardborder"  style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={book.img} alt=" " style={{ height: '20rem' }} />
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

                    {/* <h1 className="text-light mt-5 text-left bold">History</h1>
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
                </div> */}



            </Container>
        )
    }
}

export default Latest