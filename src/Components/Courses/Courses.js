import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from '../Course/Course';

const Courses = () => {

     const courses = useLoaderData();

     return (
          <div className='mt-4'>
               <Container>
                    <Row>
                         <Col lg='3' className=''>
                              <Category> </Category>
                         </Col>
                         <Col lg='9'  >
                              <h3> All Courses {courses.length} </h3>
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