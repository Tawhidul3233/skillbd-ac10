import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsFillPeopleFill, BsStar } from "react-icons/bs";

const Course = ({ course }) => {

     const { id, thumbnail_url, title, Instructor,rating, details, price } = course;

     console.log(id)
     return (
          <div className='m-2 ' >
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={thumbnail_url} />
                    <Card.Body>
                         <Card.Title>{title}</Card.Title>
                         <div className='d-flex justify-content-around align-items-center my-2'>
                              <Card.Img className='rounded' style={{ height: '30px', width: '30px' }} variant="top" src={Instructor?.img} />
                              <Card.Text className='m-0'> {Instructor?.name} </Card.Text>
                              <Card.Text className='d-flex align-items-center'> <BsStar className='me-1'> </BsStar>  {rating?.number} </Card.Text>
                         </div>
                         <Card.Text>
                             {details.slice(0, 80)}...
                         </Card.Text>
                         <div className='d-flex justify-content-between '>
                              <h2 variant="primary">{price}</h2>
                              <Button variant="primary"> <small>Know Details</small></Button>
                         </div>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default Course;