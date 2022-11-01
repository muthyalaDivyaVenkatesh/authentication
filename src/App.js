import './App.css';
import Login from './Auth/components/login/Login';
import { Route, BrowserRouter, Routes, Outlet } from 'react-router-dom';
import SignIn from './Auth/components/signin/Signin';
import Home from './Home/Home';
import Dogs from './pets/Dogs';
import Cats from './pets/Cats';
import Others from './pets/Others';
import Pets from './pets/Pets';
import { Header } from './ui/Header/Header';
import { ContextClickValue } from './context/ContextClick';
// import Login from './Auth/components/login/Login';
import { ContextHeader } from './ui/Header/Header';
import Cart from './Auth/components/cart/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
          </Route>
        </Routes>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="pets" element={< Outlet />}>
            <Route index element={<Pets />} />
            <Route path="dogs" element={<Dogs />} />
            <Route path="cats" element={<Cats />} />
            <Route path="others" element={<Others />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
