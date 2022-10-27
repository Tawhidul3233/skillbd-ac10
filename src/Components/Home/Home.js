import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Home = () => {
     return (
          <div className=' mt-5' >
               <Container>
                    <Row >
                         <Col lg='6' className='mt-5 '>
                              <h3>Join Bangladesh's largest learning platform today.</h3>
                              <p className='my-4'> 
                                   "Online educational platform skillbd has raised $2 million in seed funding from Surge, Sequoia Capital India’s rapid scale-up programme, to increase investment in product and technology. "
                              </p>
                              <Button variant="primary">Join Today </Button>{' '}
                         </Col>
                         <Col lg='6' className='mt-5'>
                              <img src="./img/join.webp" alt="" />
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Home;