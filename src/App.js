import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Route from 'react-router-dom/Route'
// import Agregar from './pages/agregar'
import Home from './pages/home'
import Contact from './pages/contac'
import Maga from './pages/MAGA'
import MCD from './pages/MCD'
import MINDEF from './pages/MINDEF'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Navbar from './components/bar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Scroll from 'react-scroll';


var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

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
        <Navbar />
        <BrowserRouter>
          {/* <Nav /> */}
          {/* <Element name="test7" className="element" style={{
            position: 'relative',
            height: '1090px',
            overflow: 'scroll',
            // marginBottom: '100px'
          }}> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/who' component={Contact} />
            <Route exact path='/ministerio/maga' component={Maga} />
            <Route exact path='/ministerio/mcd' component={MCD} />
            <Route exact path='/ministerio/mindef' component={MINDEF} />
          {/* </Element> */}
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    )
  }
}

export default App
