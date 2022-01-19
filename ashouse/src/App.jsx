
import './App.css';
import MainHeader from './Component/Header/MainHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Footer from './Component/Footer/Footer';
import Product from './Component/Pages/Product/Product';
import SignupForm from './Component/Form/SignupForm';
import SigninForm from './Component/Form/SigninForm';
import { useState } from 'react'
import Reviewtab from './Component/Pages/Review/Reviewtab';
import MainMenu from './Component/Menu/MainMenu';
import { AuthProvider} from "./contexts/AuthContext";
import './Component/common.css'
import Privacy from './Component/Footer/Privacy';
import About from './Component/Footer/About';

function App() {

  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <AuthProvider>
      <div>
        <Router>
          <div>
            <MainHeader handelNavigation={(item) => { handelNavigation(item) }} />
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Home />} exacet = {true} />
              <Route path='/review' element={<Reviewtab />} exacet = {true}/>
              <Route path='/products' element={<Product />} exacet = {true}/>
              <Route path='/products/mainmenu' element={<MainMenu />} exacet = {true} />
              <Route path='/mainmenu' element={<MainMenu />} exacet = {true} />
              <Route path='/privacy' element={<Privacy />} exacet = {true}/>
              <Route path='/about' element={<About />} exacet = {true}/>
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </Router>
        <SigninForm isOpen={showSignInForm} handleClose={() => { showHideSignInForm(false) }} />
        <SignupForm isOpen={showSignUpForm} handleClose={() => { showHideSignUpForm(false) }} />
      </div>
    </AuthProvider>
  );

  function handelNavigation(path) {
    switch (path) {
      case '/signin':
        showHideSignInForm(true);
        break;
      case '/signup':
        showHideSignUpForm(true);
        break;
      default:
        break;
    }
  }

  function showHideSignInForm(isShow) {
    setShowSignInForm(isShow);
  }

  function showHideSignUpForm(isShow) {
    setShowSignUpForm(isShow);
  }
}

export default App;