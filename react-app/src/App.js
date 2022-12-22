import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Splash from './components/Splash/Splash';
import Auth from './components/auth/Auth';
import Training from './components/Training/Training';
import Camp from './components/Camp/Camp';
import Competition from './components/Competition/Competition';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Coaches from './components/Coaches/Coaches';
import Updates from './components/Updates/Updates';
import ThankYou from './components/Thank-You-Email/ThankYou';
import FourOhFour from './components/fourohfour/fourohfour';
import { authenticate } from './store/session';
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <div className='page'> */}
        <NavBar />
        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/training' exact={true}>
            <Training />
          </Route>
          <Route path='/competition' exact={true}>
            <Competition />
          </Route>
          <Route path='/camp' exact={true}>
            <Camp />
          </Route>
          <Route path='/contact' exact={true}>
            <Contact />
          </Route>
          <Route path='/gallery' exact={true}>
            <Gallery />
          </Route>
          <Route path='/updates' exact={true}>
            <Updates />
          </Route>
          <Route path='/coaches' exact={true}>
            <Coaches />
          </Route>
          <Route path={'/thankyou'} exact={true}>
            <ThankYou />
          </Route>
          <Route path='/' exact={true} >
            <Splash />
          </Route>
          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
