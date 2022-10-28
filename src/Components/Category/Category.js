import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Course from '../Course/Course';

const Category = () => {
     const categories = useLoaderData();
     console.log(categories);
     return (
          <div className='d-flex mt-4 '>
               <Container>
                    <Row>
                         <Col lg='2' className=''>
                              <Categories> </Categories>
                         </Col>
                         <Col lg='10' className=' d-flex flex-wrap md:justify-content-center ' >
                              {
                                   categories.map(course => <Course key={course.id} course={course}> </Course>)
                              }
                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default Category;