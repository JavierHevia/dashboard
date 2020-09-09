import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, CardGroup, CardSubtitle, CardHeader } from 'reactstrap'
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
                <Card className="text-center">
                    <CardBody>
                        <CardTitle>Ministerio de Cultura y Deportes</CardTitle>
                        <Chart
                            width={'auto'}
                            height={'auto'}
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
                                ['2015', 0.69, 'color: #ABBEE6', null],
                                ['2016', 0.76, 'color: #CBAACB', null],
                                ['2017', 0.86, 'color: #FFFFB5', null],
                                ['2018', 0.86, 'color: #FFCCB6', null],
                                ['2019', 0.84, 'color: #F3B0C3', null],
                                ['2020', 0.84, 'color: #8ED1FC', null],
                            ]}
                            options={{
                                width: '100%',
                                height: 400,
                                bar: { groupWidth: '100%' },
                                legend: { position: 'none' },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '6' }}
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
                            <h1>  ¿Cuánto de presupuesto nacional se le asignó? </h1>
                            <CardBody>
                                Presupuesto asignado de 2015 a 2020
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
