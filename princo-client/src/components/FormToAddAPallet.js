import { Card, Form, Button, Accordion } from 'react-bootstrap';
import { useState } from "react";
import postObject from './postObject';

const FormToAddAPalet = () => {
    const [userInput, setUserInput] = useState("")
    const [materialInput, setMaterialInput] = useState("")


    async function handleSubmit() {
        const datesToBeSent = { userName: userInput, material: materialInput, dateOfCreate: new Date(Date.now()+2*3600*1000).toISOString().replace('T',' ').slice(0,19)}
        console.log(datesToBeSent)
        postObject("/stocuriMateriiPrime/adauga", datesToBeSent)
    }

    return (
        <>
            <Card style={{ maxWidth: '360px' }} >
                <Form onSubmit={(e) => console.log(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Creat de</Form.Label>
                        <Form.Control placeholder="Nume" onChange={(e) => setUserInput(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Materie Prima</Form.Label>
                        <Form.Control placeholder="Materie prima" onChange={(e) => setMaterialInput(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" name="dataOra" onClick={handleSubmit}>
                        Trimite
                    </Button>
                </Form>
            </Card>
        </>
    );

}
export default FormToAddAPalet;