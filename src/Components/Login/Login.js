import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

     const [success, setSuccess] = useState()

     const { loginUserWithEmail,googleSingIn,githubSingIn } = useContext(AuthContext)
     const nevigate = useNavigate()
     const googleProvider = new  GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();


     const singClickHandler = (event) => {
          event.preventDefault();

          const form = event.target;
          const email = form.email.value
          const password = form.password.value

          loginUserWithEmail(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    setSuccess('Login successfuly')
                    nevigate('/')
               })
               .catch(error => {
                    console.error(error)
                    setSuccess('Something wrong')
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
          <div className='w-50 mx-auto mt-5'>
               <Form onSubmit={singClickHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='mb-2 '>
                         <Form.Text className="text-muted">
                              {success}
                         </Form.Text>

                    </div>
                    <Button variant="primary" type="submit">
                         Login
                    </Button>
                    <div>
                         <Form.Text className="text-muted">
                              If you don't have account <Link to='/register'> Please Register </Link>
                         </Form.Text>
                    </div>
                    <div className='mt-4'>
                         <ButtonGroup vertical>
                              <Button onClick={singInGoogle} className='mb-2 px-5' variant="outline-primary" >
                                   <FaGoogle /> Sing in with Google</Button>
                              <Button onClick={singInGithub} variant="outline-dark">
                                   <FaGithub /> Sing in with Github</Button>
                         </ButtonGroup>
                    </div>
               </Form>
          </div>
     );
};

export default Login;