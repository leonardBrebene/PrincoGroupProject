import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Container,Row, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const NavbarCustom = () => {
    const navigate = useNavigate()

    const changeHref = (href) => {
        navigate(href)
    }

    return (<Navbar bg="dark" variant="dark">
        <Container fluid="md">
            <Row>
            <Navbar.Brand onClick={() => changeHref("/")}>Princo Group</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={() => changeHref("/")}>Acasa</Nav.Link>
                <Nav.Link onClick={() => changeHref("/materiiprime")}>Materii prime</Nav.Link>
                <Nav.Link onClick={() => changeHref("/semifabricate1")} >Semifabricate 1</Nav.Link>
                <Nav.Link onClick={() => changeHref("/semifabricate2")}>Semifabricate 2</Nav.Link>
                <Nav.Link onClick={() => changeHref("/produseFinite")}>Produse Finite</Nav.Link>
                <Nav.Link onClick={() => changeHref("/angajati")}>Angajati</Nav.Link>
                <Nav.Link onClick={() => changeHref("/rezultate")} >Rezultate</Nav.Link>
            </Nav>
            </Row>
        </Container>
    </Navbar>);
}

export default NavbarCustom;