import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap'
import Chart from 'react-google-charts'
import { trackPromise } from 'react-promise-tracker'
import Loader from '../components/Loaderpg'



class home extends Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.wait(Math.random() * (1600 - 1000) + 1000)
  }

  grap = () => {
    if (this.state.loading) {
      return <Loader />
    } else {
      return (
      <Card>
        <CardBody>
          <CardTitle>"hola"</CardTitle>
          <Chart
            width='auto'
            height='400px'
            chartType='PieChart'
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7]
            ]}
            options={{
              title: 'My Daily Activities'
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </CardBody>
      </Card>
      )
    }
  }

  grap2 = () => {
    if (this.state.loading) {
      return <Loader />
    } else {
      return (
        <Card>
        <CardBody>
          <CardTitle>"hola"</CardTitle>
          <Chart
            width='auto'
            height='300px'
            chartType='TreeMap'
            loader={<div>Loading Chart</div>}
            data={[
              [
                'Location',
                'Parent',
                'Market trade volume (size)',
                'Market increase/decrease (color)'
              ],
              ['Global', null, 0, 0],
              ['America', 'Global', 0, 0],
              ['Europe', 'Global', 0, 0],
              ['Asia', 'Global', 0, 0],
              ['Australia', 'Global', 0, 0],
              ['Africa', 'Global', 0, 0],
              ['Brazil', 'America', 11, 10],
              ['USA', 'America', 52, 31],
              ['Mexico', 'America', 24, 12],
              ['Canada', 'America', 16, -23],
              ['France', 'Europe', 42, -11],
              ['Germany', 'Europe', 31, -2],
              ['Sweden', 'Europe', 22, -13],
              ['Italy', 'Europe', 17, 4],
              ['UK', 'Europe', 21, -5],
              ['China', 'Asia', 36, 4],
              ['Japan', 'Asia', 20, -12],
              ['India', 'Asia', 40, 63],
              ['Laos', 'Asia', 4, 34],
              ['Mongolia', 'Asia', 1, -5],
              ['Iran', 'Asia', 18, 13],
              ['Pakistan', 'Asia', 11, -52],
              ['Egypt', 'Africa', 21, 0],
              ['S. Africa', 'Africa', 30, 43],
              ['Sudan', 'Africa', 12, 2],
              ['Congo', 'Africa', 10, 12],
              ['Zaire', 'Africa', 8, 10]
            ]}
            options={{
              minColor: '#f00',
              midColor: '#ddd',
              maxColor: '#0d0',
              headerHeight: 15,
              fontColor: 'black',
              showScale: true
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </CardBody>
      </Card>
      )
    }
  }

  render() {
    return (
      <>
        <div className='col-12 col-md-11 m-5'>
          <div class='row'>
            <div class='col-4'>
              <h1> Grafica 1 </h1>
            </div>
            <div class='col-8'>
              <this.grap/>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-11 m-5'>
          <div class='row'>
            <div class='col-8'>
            <this.grap2/>
            </div>
            <div class='col-4'>
              <h1> Grafica 2 </h1>
            </div>
          </div>
        </div>
      </>
    )

  }
}
export default home
