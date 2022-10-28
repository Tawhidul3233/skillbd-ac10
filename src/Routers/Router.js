import { Container } from "react-bootstrap";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Categories from "../Components/Categories/Categories";
import Category from "../Components/Category/Category";

import Courses from "../Components/Courses/Courses";
import CoursesDetails from "../Components/CoursesDetails/CoursesDetails";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";


export const routes = createBrowserRouter([
     {
          path: '/',
          element: <Main> </Main>,
          children: [
               {
                    path: '/',
                    element: <Home> </Home>
               },
               {
                    path: '/courses',
                    element: <Courses> </Courses>,
                    loader: () => {
                         return fetch('http://localhost:5000')
                    }
               },
               {
                    path: '/blog',
                    element: <Blog> </Blog>
               },
               {
                    path: '/courses/:id',
                    element: <CoursesDetails> </CoursesDetails>,
                    loader: ({ params }) => {
                         return fetch(`http://localhost:5000/courses/${params.id}`)
                    }
               },
               {
                    path: '/categories/:id',
                    element: <Category> </Category>,
                    loader: ({ params }) => {
                         return fetch(`http://localhost:5000/categories/${params.id}`)
                    }
               },
               {
                    path: '/categories/06',
                    element: <Container>
                         <div className="my-4 d-flex">
                              <Categories> </Categories>
                              <div>
                                   <h3 className="my-5 mx-auto"> This Course Coming soon....</h3>
                                   <img className="w-50" src="https://th.bing.com/th/id/R.67e0dfa24ed3a688353e03f24b12ea32?rik=DWPbatLgf1slGg&riu=http%3a%2f%2fwww.ruthiecollins.co.uk%2fwp-content%2fuploads%2f2017%2f06%2fCOURSES-COMING-SOON.png&ehk=y08b7T1Qu398Ug9OOwuNYq8w9ANYQkfQrrnfYA860Is%3d&risl=&pid=ImgRaw&r=0" alt="" />
                              </div>
                         </div>
                    </Container>
               },
               {
                    path: '/register',
                    element: <Register> </Register>
               },
               {
                    path: '/login',
                    element: <Login> </Login>
               },
               {
                    path: '/*',
                    element:
                         <div className="my-5">
                              <h3 className="my-5"> Page Not Found </h3>
                              <img className="w-full" src="https://optinmonster.com/wp-content/uploads/2021/07/404-page-examples-featured-image-updated.png" alt="" />
                         </div>
               }
          ]
     }
])