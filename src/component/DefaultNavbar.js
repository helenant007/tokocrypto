import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    let currentBalance = localStorage.getItem('currentBalance');
    if (!currentBalance) {
      localStorage.setItem('currentBalance', this.props.currentBalance);
    }
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" style={{ marginBottom: '50px' }}>
        <Link
          className="navbar-brand"
          to="/"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <img
            src={process.env.PUBLIC_URL + '/logo-tokopedia.png'}
            alt="Toped"
            width="145px"
          />
          {'  '}
          TokoCrypto
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                Saldo:{' '}
                {parseInt(this.props.currentBalance).toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumFractionDigits: 2
                })}
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img
                  src={process.env.PUBLIC_URL + '/toped.png'}
                  alt="Toped"
                  width="35px"
                  className="rounded-circle border border-success"
                />
              </DropdownToggle>
              <DropdownMenu right>
                <Link
                  to="/history"
                  style={{ textDecoration: 'none', color: '#16181b' }}
                >
                  <DropdownItem>Histori Transaksi</DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem href="https://tokopedia.com">
                  Kembali ke halaman utama Tokopedia
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default DefaultNavbar;
