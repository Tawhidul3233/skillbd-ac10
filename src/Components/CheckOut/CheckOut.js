import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CheckOut = () => {
     const checkOutData = useLoaderData()
     const { thumbnail_url, price, title, Instructor, student } = checkOutData

     return (
          <div >
               <Container >
                    <Row >
                         <Col className='mx-auto mt-5 border grid col-8' >
                              <div className='d-lg-flex '>
                                   <div className='mt-2 ' >
                                        <Card.Img style={{ height: '200px', width: '300px' }} variant="top" src={thumbnail_url} />
                                   </div>
                                   <div className='mx-3 mt-2  '>
                                        <h2 className='text-primary my-2  ' variant="primary">{price}.00</h2>
                                        <h4 className=' text-center'>{title} Course 2022 </h4>
                                        <div className='d-flex my-4 '>
                                             <Card.Img className='rounded me-3' style={{ height: '60px', width: '60px' }} variant="top" src={Instructor?.img} />
                                             <div>
                                                  <h6>Instructor</h6>
                                                  <Card.Text className='m-0'> {Instructor?.name} </Card.Text>
                                             </div>
                                             <div className='ms-3'>
                                                  <h6>Enrolled</h6>
                                                  <Card.Text className='m-0'> {student} student </Card.Text>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className=' my-5 text-center'>
                                   <Button className=' w-50' variant="primary"> Pay to Access </Button>{' '}
                              </div>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default CheckOut;