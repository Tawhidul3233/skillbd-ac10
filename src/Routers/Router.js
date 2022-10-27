import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import CoursesDetails from "../Components/CoursesDetails/CoursesDetails";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";


export const routes = createBrowserRouter ([
     {
          path:'/',
          element: <Main> </Main>,
          children:[
               {
                    path:'/',
                    element: <Home> </Home>
               },
               {
                    path:'/courses',
                    element: <Courses> </Courses>,
                    loader: ()=>{
                         return fetch('http://localhost:5000/')
                    }
               },
               {
                    path:'/blog',
                    element: <Blog> </Blog>
               },
               {
                    path:'/courses/:id',
                    element: <CoursesDetails> </CoursesDetails>,
                    loader: (params)=>{
                         return fetch(`http://localhost:5000/courses/${params.id}`)
                    }
               },
               {
                    path:'/register',
                    element: <Register> </Register>
               },
               {
                    path:'/login',
                    element: <Login> </Login>
               },
               {
                    path:'/*',
                    element: 
                    <div className="my-5"> 
                         <h3 className="my-5"> Page Not Found </h3>
                         <img className="w-full" src="https://optinmonster.com/wp-content/uploads/2021/07/404-page-examples-featured-image-updated.png" alt="" />
                    </div>
               }
          ]
     }
])