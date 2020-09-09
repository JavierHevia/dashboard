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
            {/* <Chart
              chartType="ColumnChart"
              data={
                [["", "", { role: "style" }, { role: 'annotation' }],
                ['', 3.64, 'color: #ff6900', 'MINDEF'],
                ['', 22.2, 'color: #fcb900', 'MINEDUC'],
                ['', 10.6, 'color: #abb8c3', 'MSPAS']
                ]}
              width="100%"
              height="300px"
              legendToggle
            /> */}
            <Chart
              width={'auto'}
              height={'300px'}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  'Element',
                  'Porcentaje',
                  { role: 'style' },
                  {
                    sourceColumn: 0,
                    role: 'annotation',
                    type: 'string',
                    calc: 'stringify',
                  },
                ],
                ['', 8.94, '#b87333', '3. MINDEF'],
                ['', 19.3, 'gold', '1. MINEDUC'],
                ['', 10.49, 'silver', '2. MSPAS'],

              ]}
              options={{

                width: '70%',
                height: '100%',
                bar: { groupWidth: '100%' },
                legend: { position: 'none' },
              }}
              // For tests
              rootProps={{ 'data-testid': '6' }}
            />

            <Chart
              // width='900px'
              // height='300px'
              chartType="Table"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: 'string', label: '' },
                  { type: 'string', label: '' },
                  { type: 'number', label: '% presupuesto actual' },
                ],
                // [4,'Ministerio de Educación', { v: 22.24, f: '22.24' }],
                // [8,'Ministerio de Salud Publica y Asistencia Social', { v: 10.64, f: '10.64' }],
                // [55,'Ministerio de Defensa Nacional', { v: 3.64, f: '3.64' }],

                [4, 'Universidad de San Carlos de Guatemala ', { v: 2.37, f: '2.37' }],
                [5, 'Ministerio de Agricultura Ganadería y alimentación', { v: 1.94, f: '1.94' }],
                [6, 'Ministerio de Trabajo y Prevención Social', { v: 1.07, f: '1.07' }],
                [7, 'Ministerio de Cultura y Deportes', { v: 0.84, f: '0.84' }],
                [8, 'Ministerio de Relaciones Exteriores', { v: 0.78, f: '0.78' }],
                [9, 'Ministerio de Finanzas Publicas', { v: 0.51, f: '0.51' }],
                [10, 'Ministerio de Energía y Minas', { v: 0.11, f: '0.11' }],

              ]}
              options={{
                showRowNumber: false,
                sortColumn: 2,
                sortAscending: false,
                width: '100%',
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
              width='100%'
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
        <div className='col-12 col-md-12 m-5'>
          <div class='row'>
            <div class='col-md-auto'>
            </div>
            <div class='col-3'>
              <h1>  Top de Ministerios </h1>
              <CardBody>
                Porcentaje asignado del presupuesto de la nación para el año 2020
              </CardBody>
            </div>
            <div class='col-8'>
              <this.grap />
            </div>
          </div>
        </div>

        <div className='col-12 col-md-11 m-5'>
          <div class='row'>
            <div class='col-8'>
              {/* <this.grap2/> */}
            </div>
            <div class='col-4'>
              {/* <h1> Grafica 2 </h1> */}
            </div>
          </div>
        </div>
      </>
    )

  }
}
export default home
