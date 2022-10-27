import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routers/Router';

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
