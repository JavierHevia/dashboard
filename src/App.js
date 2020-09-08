import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Route from 'react-router-dom/Route'
// import Agregar from './pages/agregar'
import Home from './pages/home'
import Contact from './pages/contac'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 1500) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.wait(2000);
    // this.fetchGitHub();
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route exact path='/who' component={Contact} />
            <Footer />

          </div>
        </BrowserRouter>
      </div>
    )

  }
}

export default App
