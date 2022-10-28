import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { BsStar, BsFillPersonBadgeFil, BsHouseFill, BsPersonFill } from "react-icons/bs";

const CoursesDetails = ({ }) => {
     const courseDetails = useLoaderData()
     const { title, Instructor, rating, thumbnail_url, details, price, student } = courseDetails;
     console.log(details)
     return (
          <div >
               <Container>
                    <Row >
                         <Col sm={8}>
                              <h2 className='my-4 text-center'>{title} Course 2022 </h2>
                              <div className='d-flex justify-content-around align-items-center my-4'>
                                   <Card.Img className='rounded' style={{ height: '60px', width: '60px' }} variant="top" src={Instructor?.img} />
                                   <div>
                                        <h6>Instructor</h6>
                                        <Card.Text className='m-0'> {Instructor?.name} </Card.Text>
                                   </div>
                                   <div>
                                        <h6> Published Date : </h6>
                                        <Card.Text className='m-0'> {Instructor?.published_date} </Card.Text>
                                   </div>
                                   <div>
                                        <h6> {rating?.badge} </h6>
                                        <Card.Text className='d-flex align-items-center'> <BsStar> </BsStar>
                                             <BsStar className='mx-1'></BsStar> <BsStar></BsStar> <BsStar className='mx-1'></BsStar> <BsStar className='me-1'></BsStar>   {rating?.number} </Card.Text>
                                   </div>
                              </div>
                              <div>
                                   <Card.Img variant="top" src={thumbnail_url} />
                              </div>
                              <div>
                                   <h4 className='my-3'>Course Overview : </h4>
                                   <p>{details}</p>
                              </div>
                         </Col>
                         <Col sm={4} className="mt-5">
                              <div  className=' text-end '>
                                   <Card.Img style={{ height: '120px', width: '250px' }} variant="top" src={thumbnail_url} />
                                   <h2 className='text-primary my-2  ' variant="primary">{price}.00</h2>
                                   <div  >
                                        <p> <BsHouseFill> </BsHouseFill> Instructor : {Instructor?.name}</p>
                                   </div>
                                   <div  >
                                        <p> <BsPersonFill> </BsPersonFill> Enrolled : {student} student</p>
                                   </div>
                                   <div  >
                                        <p> <BsPersonFill> </BsPersonFill>  Duration : 16 weeks</p>
                                   </div>
                                   <div  >
                                        <p> <BsPersonFill> </BsPersonFill> Language : Banglish</p>
                                   </div>
                                   <div >
                                        <Button href='/courses' variant="primary"> Enroll Now </Button>{' '}
                                   </div>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default CoursesDetails;