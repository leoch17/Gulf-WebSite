import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Partners from './components/pages/Partners';
import Information from './components/pages/Information';
import Contact from './components/pages/Contact';
import Passenger from './components/pages/Products/Passenger';
import Motorcycle from './components/pages/Products/Motorcycle';
import Truck from './components/pages/Products/Truck';
import Agrofluid from './components/pages/Products/Agrofluid';
import Transmission from './components/pages/Products/Transmission';
import Hydraulic from './components/pages/Products/Hydraulic';
import Refrigerant from './components/pages/Products/Refrigerant';
import Comercio_anzoategui from './components/pages/Commerces/comercio-anzoategui';
import Comercio_barinas from './components/pages/Commerces/comercio-barinas';
import Comercio_falcon from './components/pages/Commerces/comercio-falcon';
import Comercio_lara from './components/pages/Commerces/comercio-lara';
import Comercio_tachira from './components/pages/Commerces/comercio-tachira';
import Comercio_trujillo from './components/pages/Commerces/comercio-trujillo';
import Comercio_zulia from './components/pages/Commerces/comercio-zulia';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/partners' component={Partners} />
          <Route path='/information' component={Information} />
          <Route path='/contact' component={Contact} />
          <Route path='/passenger' component={Passenger} />
          <Route path='/motorcycle' component={Motorcycle} />
          <Route path='/truck' component={Truck} />
          <Route path='/agrofluid' component={Agrofluid} />
          <Route path='/transmission' component={Transmission} />
          <Route path='/hydraulic' component={Hydraulic} />
          <Route path='/refrigerant' component={Refrigerant} />
          <Route path='/comercio-anzoategui' component={Comercio_anzoategui} />
          <Route path='/comercio-barinas' component={Comercio_barinas} />
          <Route path='/comercio-falcon' component={Comercio_falcon} />
          <Route path='/comercio-lara' component={Comercio_lara} />
          <Route path='/comercio-tachira' component={Comercio_tachira} />
          <Route path='/comercio-trujillo' component={Comercio_trujillo} />
          <Route path='/comercio-zulia' component={Comercio_zulia} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
