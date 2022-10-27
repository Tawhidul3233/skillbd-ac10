import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Course = ({ course }) => {

     const { id , thumbnail_url, title} = course;

     console.log(id)
     return (
          <div className='m-2 ' >
               <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={thumbnail_url} />
                    <Card.Body>
                         <Card.Title>{title}</Card.Title>
                         <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                         </Card.Text>
                         <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default Course;