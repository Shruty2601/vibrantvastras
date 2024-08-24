import logo from './logo.svg';
import './App.css';
import Home from './Components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/about/About';
import Service from './Components/Service';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Profile from './Components/Profile';
import Dashboard from './Components/customerDashboard/Dashboard';
import CustomNavbar from './Components/customerNavbar/CustomNavbar';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './Components/PrivateRoutes'
import Store from './Components/store/Store';
import Banner from './Components/Banner';
import Cart from './Components/cart/Cart';
import { CartProvider } from './Components/Context';
import AdminViewproduct from './Components/adminPages/admin/adminViewProduct/AdminViewproduct';
import Admindashboard from './Components/adminPages/admin/adminDashboard/Admindashboard';
import Adminhome from './Components/adminPages/admin/adminHome/Adminhome';
import Addproduct from './Components/adminPages/admin/AddProduct/Addproduct';
import Uploadimage from './Components/adminPages/admin/adminUploadimage/Uploadimage';
import Addcategory from './Components/adminPages/admin/addCategory/Addcategory';
import Viewproduct from './Components/viewProduct/Viewproduct'
import Updateproduct from './Components/adminPages/admin/adminUpdateProduct/Updateproduct';
import Adminuser from './Components/adminPages/admin/adminUserList/Adminuser';
import UpdateUser from './Components/adminPages/admin/UpdateUser';
import Order from './Components/adminPages/admin/adminOrder/Order';
import UpdateOrder from './Components/adminPages/admin/adminUpdateOrder/UpdateOrder';
import Category from './Components/adminPages/admin/deleteCategory/Category';

const sayHello=()=>{
  alert("Hello,How are you");
  }

function App() {
  return (
    // <div  className='container'>
    //   <h1>This is root element</h1>   
    //   {
      
    //   /* <Home myFun={sayHello} title="Learn JavaScript"  description="We are learning JavaScrpit"  buttonName="like" />  
    //   <Home title="Lear React" description="We are learning Reacts" buttonName="click here"/>      
    //   <Home/>
    //   <About/>
    //   <Service/>
    //   <Login/>
    //   <Signup/>
    //   <Profile/>
    //   <Dashboard/> */
      
    //   }
    // </div>

     <CartProvider>
    <BrowserRouter>
    <ToastContainer/>
      
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Service/>}></Route>
            <Route path="/banner" element={<Banner/>}></Route>
           <Route path="/about"   element={<About/>}/>
           <Route path="/login"   element={<Login/>}/>
           <Route path="store/:categoryId" element={<Store/>}/>   
           <Route path="viewProduct/:productId" element={<Viewproduct/>}/> 

           {/* Admin-DashBoard Start */}
           
           <Route path="/admin-dashboard"  element={<Admindashboard/>}>
           <Route path="home" element={<Adminhome/>}/>
           <Route path="addProduct" element={<Addproduct/>}/>
           <Route path="uploadproductimage" element={<Uploadimage/>} />
           <Route path="category" element={<Addcategory/>} />
           <Route path="viewproduct" element={<AdminViewproduct/>} />
           <Route path="updateProduct/:productId" element={<Updateproduct/>} />
           <Route path="adminuser" element={<Adminuser/>} />
           <Route path="update-user/:userId" element={<UpdateUser/>} />
           <Route path="order" element={<Order/>} />
           <Route path="/admin-dashboard/order/update/:orderId" element={<UpdateOrder/>} />
           <Route path="/admin-dashboard/cat" element={<Category/>}/>
           
            </Route>  
        {/* Admin-DashBoard End */}

           <Route path="/signup"   element={<Signup/>}/>  
           <Route path="/user" element={<PrivateRoutes/>}>
           <Route path="dashboard" element={<Dashboard/>}/>
           <Route path="cart"  element={<Cart/>}/>

           </Route>
        </Routes>
    </BrowserRouter>
    </CartProvider>

  );
}
export default App;
