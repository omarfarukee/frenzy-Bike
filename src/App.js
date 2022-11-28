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
import PrivateRoute from './Page/Private/PrivateRoute';
import BikeBorard from './Layout/BikeBoard/BikeBorard';
import MyOrder from './Page/MyOrder/MyOrder';
import AddItems from './Page/AddItems/AddItems';
import MyProducts from './Page/AddItems/MyProducts/MyProducts';
import AllSellers from './Layout/BikeBoard/AllSellers/AllSellers';
import AllBuyers from './Layout/BikeBoard/AllBuyers/AllBuyers';
import Greeting from './Layout/BikeBoard/Greeting/Greeting';
import Payment from './Layout/BikeBoard/Payment/Payment';
import Report from './Page/Report/Report';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
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
            element:<PrivateRoute><ItemsOfBike></ItemsOfBike></PrivateRoute>,
            loader:async ({params}) =>{
          return fetch(`http://localhost:5000/items/${params.id}`)
            }
        },

      
      ]
    },
    {
      path:'/dashboard',
      element:<BikeBorard></BikeBorard>,
      children: [
        {
          path:'/dashboard/myOrder',
          element:<MyOrder></MyOrder>
        },
        {
          path:'/dashboard',
          element:<Greeting></Greeting>
        },
        {
          path:'/dashboard/addItem',
          element:<AddItems></AddItems>
        },
        {
          path:'/dashboard/myProducts',
          element:<MyProducts></MyProducts>
        },
        {
          path:'/dashboard/allSellers',
          element:<AllSellers></AllSellers>
        },
        {
          path:'/dashboard/allBuyers',
          element:<AllBuyers></AllBuyers>
        },
        {
          path:'/dashboard/reportAdmin',
          element:<Report></Report>
        },
        {
          path:'/dashboard/payments/:id',
          element: <Payment></Payment>,
          loader: ({params}) => fetch(`http://localhost:5000/bookedItem/${params.id}`)
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
