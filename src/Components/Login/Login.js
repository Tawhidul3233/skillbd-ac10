import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';


const Login = () => {
     return (
          <div className='w-50 mx-auto mt-5'>
               <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                         Login
                    </Button>
                    <div className='mt-4'>
                         <ButtonGroup vertical>
                              <Button className='mb-2 px-5' variant="outline-primary" >
                                   <FaGoogle /> Sing in with Google</Button>
                              <Button variant="outline-dark">
                                   <FaGithub /> Sing in with Github</Button>
                         </ButtonGroup>
                    </div>
               </Form>
          </div>
     );
};

export default Login;