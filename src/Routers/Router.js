import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
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
                    path:'/faq',
                    element: <Faq> </Faq>
               },
               {
                    path:'/*',
                    element: " page not found "
               }
          ]
     }
])