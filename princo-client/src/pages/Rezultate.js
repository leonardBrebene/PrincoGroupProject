import NavbarCustom from "../components/Navbar";
import { Form, Button } from 'react-bootstrap';

const Rezultate = () => {
    return (
        <div><NavbarCustom /><div>
            Rezultate
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={() => console.log("AmfostApasat")}>
                    Submit
                </Button>
            </Form>
        </div>
        </div>
    );
}

export default Rezultate;