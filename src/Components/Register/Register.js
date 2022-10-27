import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Register = () => {

     const [success, setSuccess] = useState()


     const { newUserCreateEmail, googleSingIn, githubSingIn } = useContext(AuthContext)
     const nevigate = useNavigate()
     const googleProvider = new  GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     const onSubmitClickHandler = (event) => {
          event.preventDefault();

          const form = event.target;
          const email = form.email.value
          const password = form.password.value
          const photoURL = form.photoURL.value

          console.log(email, password)

          newUserCreateEmail(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    setSuccess('Register successfull')
                    nevigate('/')
               })
               .catch(error => {
                    console.error(error)
               })

     }

     const singInGoogle = ()=>{
          googleSingIn(googleProvider)
          .then(result =>{
               const user = result.user;
               console.log(user)
               nevigate('/')
          })
          .catch(error => console.error(error))
          
     }


     const singInGithub = ()=>{
          githubSingIn(githubProvider)
          .then(result =>{
               const user = result.user;
               console.log(user)
               nevigate('/')
          })
          .catch(error => console.error(error))
     }

     return (
          <div className='w-50 mx-auto my-5'>
               <Form onSubmit={onSubmitClickHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Your name</Form.Label>
                         <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Photo URL</Form.Label>
                         <Form.Control name="photoURL" type="text" placeholder="PhotoURL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <div>
                         <Form.Text className="text-muted">
                              {success}
                         </Form.Text>
                    </div>

                    <Button variant="primary" type="submit">
                         Register
                    </Button>
                    <div className='mt-2'>
                         <Form.Text className="text-muted">
                              Already have an account <Link to='/login'> Please Login </Link>
                         </Form.Text>
                    </div>
                    <div className='mt-4'>
                         <ButtonGroup vertical>
                              <Button onClick={singInGoogle} className='mb-2 px-5' variant="outline-primary" >
                                   <FaGoogle /> Continue with Google</Button>
                              <Button onClick={singInGithub} variant="outline-dark">
                                   <FaGithub /> Continue with Github</Button>
                         </ButtonGroup>
                    </div>
               </Form>
          </div>
     );
};

export default Register;