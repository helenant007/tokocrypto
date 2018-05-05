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

class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      currentBalance: props.currentBalance
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
      localStorage.setItem('currentBalance', this.state.currentBalance);
    } else {
      this.setState({
        currentBalance: currentBalance
      });
    }
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" style={{ marginBottom: '50px' }}>
        <NavbarBrand href="#">
          <img
            src={process.env.PUBLIC_URL + '/logo-tokopedia.png'}
            alt="Toped"
            width="145px"
          />
          {'  '}
          TokoCrypto
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Saldo:{' '}
                {parseInt(this.state.currentBalance).toLocaleString('id-ID', {
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
                <DropdownItem>Histori Transaksi</DropdownItem>
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
