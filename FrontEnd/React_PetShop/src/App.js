import './App.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { Routes, Route } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import Product from './components/Product';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import ViewProduct from './components/ViewProduct';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Customer from './components/Customer';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import ViewCustomer from './components/ViewCustomer';
import User from './components/User';
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';
import UpdateUser from './components/UpdateUser';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import Shop from './components/Shop';
import ContactForm from "./components/Contact";
import About from './components/About';
import Unauthorized from './components/Unauthorized';
import Order from './components/Order';
import AddOrder from './components/AddOrder';
import ViewOrder from './components/ViewOrder';
import UpdateOrder from './components/UpdateOrder';
import Profile from './components/Profile';
import OrderHistory from './components/OrderHistory';
import BuyNow from './components/BuyNow';
import OrderPlaced from './components/OrderPlaced';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Carousel />} />

        
        <Route exact path='/products' element={<Product />} />
        <Route exact path='/customers' element={<Customer />} />
        <Route exact path='/users' element={<User />} />
        <Route exact path='/orders' element={<Order />} />

        
        <Route exact path='/products/add' element={<AddProduct />} />
        <Route exact path='/customers/add' element={<AddCustomer />} />
        <Route exact path='/users/add' element={<AddUser />} />
        <Route exact path='/orders/add' element={<AddOrder />} />

        <Route exact path='/products/update/:productId' element={<UpdateProduct />} />
        <Route exact path='/customers/update/:customerId' element={<UpdateCustomer />} />
        <Route exact path='/users/update/:userId' element={<UpdateUser />} />
        <Route exact path='/orders/update/:orderId' element={<UpdateOrder />} />

        <Route exact path='/products/view/:productId' element={<ViewProduct />} />
        <Route exact path='/customers/view/:customerId' element={<ViewCustomer />} />
        <Route exact path='/users/view/:userId' element={<ViewUser />} />
        <Route exact path='/orders/view/:orderId' element={<ViewOrder />} />

        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/buy/:productId' element={<BuyNow />} />
        <Route exact path='/order-placed' element={<OrderPlaced />} />
        <Route exact path='/history' element={<OrderHistory />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/contact' element={<ContactForm />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/unauth' element={<Unauthorized />} />

        <Route exact path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
