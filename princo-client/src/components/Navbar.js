import { Navbar, Nav, Container, } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const NavbarCustom = () => {
    const navigate = useNavigate()

    const changeHref = (href) => {
        navigate(href)
    }

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container >
                <Navbar.Brand onClick={() => changeHref("/")}>Princo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => changeHref("/materiiprime")}>Mat.prime</Nav.Link>
                        <Nav.Link onClick={() => changeHref("/semifabricate1")}>Semif.1</Nav.Link>
                        <Nav.Link onClick={() => changeHref("/semifabricate2")}>Semif.2</Nav.Link>
                        <Nav.Link onClick={() => changeHref("/produseFinite")}>Prod.Finite</Nav.Link>
                        <Nav.Link onClick={() => changeHref("/rebuturi")}>Rebuturi</Nav.Link>
                        <Nav.Link onClick={() => changeHref("/vanzari")}>Vanzari</Nav.Link>
                        <Nav.Link onClick={() => changeHref("/angajati")}>Angajati</Nav.Link>
                        <Nav.Link onClick={() => changeHref("/rezultate")} >Rezultate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>);
}

export default NavbarCustom;