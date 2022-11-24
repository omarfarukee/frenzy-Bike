import './App.css';
import { Toaster } from 'react-hot-toast';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Layout/Main';
import Home from './Page/home/Home';
import Category from './Page/Category/Category';
import Blog from './Page/Bolg/Blog';
import SignUp from './Page/SignUp/SignUp';
import Login from './Page/Login/Login';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
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
