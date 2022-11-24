import './App.css';
import { Toaster } from 'react-hot-toast';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Layout/Main';
import Home from './Page/home/Home';
import Category from './Page/Category/Category';
import Blog from './Page/Bolg/Blog';
import SignUp from './Page/SignUp/SignUp';
import Login from './Page/Login/Login';
import Error from './Page/error/Error';
import ItemsOfBike from './Page/ItemsOfBike/ItemsOfBike';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/category',
            element:<Category></Category>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/items/:id',
            element:<ItemsOfBike></ItemsOfBike>,
            loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        },

      
      ]
    }
  ])


  return (
    // className='max-w-[1140px] mx-auto
    <div> 
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
