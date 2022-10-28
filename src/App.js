import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routers/Router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
