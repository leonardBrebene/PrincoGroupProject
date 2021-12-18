import { Card, Form, Button, Accordion, useAccordionButton } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';

const FormToAddNewEntry = ({ paletNr, setTrigerFetch }) => {
    const [userInput, setUserInput] = useState("")
    const [materialInput, setMaterialInput] = useState("")
    const [quantityInput, setQuantitylInput] = useState()
    const [employeeName, setEmployeeName] = useState("")

    console.log("Am intrat in FormToAddEntry")
    async function handleSubmit() {

        const datesToBeSent = {
            idIntrareFK: paletNr, material: materialInput,
            userName: userInput, dateOfCreate: new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 19),
            quantity: quantityInput, employee: employeeName
        }
        console.log(datesToBeSent)
        postObject("/stocuriIntrariMateriiPrime/adauga", datesToBeSent)
            .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 

    }


    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <Button
                type="button"
                onClick={decoratedOnClick}
            >
                {children}
            </Button>
        );
    }

    return (

        <Accordion defaultActiveKey="0" >
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="1">Adauga o intrare</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body style={{ maxWidth: '360px', border: '0' }} >
                        <Form >
                            <Form.Group className="mb-1" >
                                <Form.Label>Intrare introdusa de:</Form.Label>
                                <Form.Control size="sm" placeholder="Nume" onChange={(e) => setUserInput(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Materie Prima</Form.Label>
                                <Form.Control size="sm" placeholder="Materie prima" onChange={(e) => setMaterialInput(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Cantitate</Form.Label>
                                <Form.Control size="sm" placeholder="Cantitate" onChange={(e) => setQuantitylInput(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Numele Angajatului</Form.Label>
                                <Form.Control size="sm" placeholder="Numele Angajatulu" onChange={(e) => setEmployeeName(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" name="dataOra" onClick={handleSubmit} type="reset">
                                Trimite
                            </Button>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
        </Accordion>

    );

}
export default FormToAddNewEntry;