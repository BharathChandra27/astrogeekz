import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{ color: "#fff", fontSize: "1.7rem" }}>
          CosmicNerds
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/articles/" style={{ color: "#fff" }}>
                Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactme/" style={{ color: "#fff" }}>
                How to reach me
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <span style={{ color: "#d6dbdf" }}>Author :: </span>
            <span style={{ color: "#85c1e9" }}>Bharath Chandra</span>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
