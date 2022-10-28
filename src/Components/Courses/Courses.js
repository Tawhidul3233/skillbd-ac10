import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Categories/Categories';
import Course from '../Course/Course';

const Courses = () => {

     const courses = useLoaderData();

     return (
          <div className='mt-4'>
               <Container>
                    <Row>
                         <Col lg='2' className=''>
                              <Category> </Category>
                         </Col>
                         <Col lg='10'  >
                              <h5> All Courses {courses.length} </h5>
                              <div className=' d-flex flex-wrap justify-content-center' >
                                   {
                                        courses.map(course => <Course key={course.id} course={course}> </Course>)
                                   }
                              </div>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Courses;