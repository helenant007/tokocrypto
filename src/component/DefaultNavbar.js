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
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
              <NavLink>Sisa Duit anda: xxxx</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img
                  src={process.env.PUBLIC_URL + '/toped.png'}
                  alt="Toppers"
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
