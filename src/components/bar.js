import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

class Navbar extends React.Component {

  render() {
    return (
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav>
          <NavItem eventKey='home'>
            <NavIcon>
              <a href='/'> <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>
            <NavText>
              <a href='/'> Home </a>
            </NavText>
          </NavItem>
          <NavItem eventKey='charts'>
            <NavIcon>
              <a href='/ministerio/maga'><i className='fa fa-leaf' style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>

            <NavText>
              <a href='/ministerio/maga'> MAGA </a>
            </NavText>

          </NavItem>

          <NavItem eventKey='charts2'>
            <NavIcon>
              <a href='/ministerio/mcd'><i className='far fa-futbol' style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>

            <NavText>
              <a href='/ministerio/mcd'> MCD </a>
            </NavText>

          </NavItem>

          <NavItem eventKey='charts3'>
            <NavIcon>
              <a href='/ministerio/mindef'><i className='fas fa-shield-alt' style={{ fontSize: '1.75em' }} /></a>
            </NavIcon>

            <NavText>
              <a href='/ministerio/mindef'> MINDEF </a>
            </NavText>

          </NavItem>

        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default Navbar
