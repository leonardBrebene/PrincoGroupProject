import NavbarCustom from "../components/Navbar";
import {Form,Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

const Semifabricate1 = () => {
    return (<div><NavbarCustom/><div>
        Semifabricate1
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
                <Button  onClick={() => console.log("AmfostApasat")}>
                    Submit
                </Button>
            </Form>
    </div>
    </div>  );
}
 
export default Semifabricate1;