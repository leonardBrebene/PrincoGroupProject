import { Card, Form, Button, useAccordionButton, Accordion, Stack } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';

const FormToAddAPalet = ({ setTrigerFetch }) => {
    const [userInput, setUserInput] = useState("")
    const [materialInput, setMaterialInput] = useState("")
    const [pieceInput, setPieceInput] = useState("")


    async function handleSubmitPalet() {
        const datesToBeSent = { userName: userInput, material: materialInput, dateOfCreate: new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 19) }
        console.log(datesToBeSent)
        postObject("/stocuriMateriiPrime/adauga", datesToBeSent)
            .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 
    }

    async function handleSubmitPiece() {
        const datesToBeSent = { userName: userInput, pieceInput: pieceInput, dateOfCreate: new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 19) }
        console.log(datesToBeSent)
        postObject("/stocuriMateriiPrime/adauga", datesToBeSent)
            .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 
    }


    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log("Custom Toglle"),
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
            <Card >
                <Card.Header>
                    <Stack direction="horizontal" gap={3}>
                        <CustomToggle  eventKey="1" className="bg-light border">Adauga tip palet</CustomToggle>
                        <CustomToggle  eventKey="2" className="bg-light border">Adauga tip piesa</CustomToggle>
                    </Stack>
                </Card.Header>
                    < Accordion.Collapse eventKey="1">
                        <Card.Body style={{ maxWidth: '360px', border: '0' }} >
                            <Form >
                                <Form.Group className="mb-1" >
                                    <Form.Label>Creat de</Form.Label>
                                    <Form.Control size="sm" placeholder="Nume" onChange={(e) => setUserInput(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-1" >
                                    <Form.Label>Nume palet</Form.Label>
                                    <Form.Control size="sm" placeholder="Nume palet" onChange={(e) => setMaterialInput(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" name="dataOra" onClick={handleSubmitPalet} type="reset">
                                    Trimite
                                </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                
                    < Accordion.Collapse eventKey="2">
                        <Card.Body style={{ maxWidth: '360px', border: '0' }} >
                            <Form >
                                <Form.Group className="mb-1" >
                                    <Form.Label>Responsabil</Form.Label>
                                    <Form.Control size="sm" placeholder="Responsabil" onChange={(e) => setUserInput(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-1" >
                                    <Form.Label>Nume piesa</Form.Label>
                                    <Form.Control size="sm" placeholder="Nume piesa" onChange={(e) => setPieceInput(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" name="dataOra" onClick={handleSubmitPiece} type="reset">
                                    Trimite
                                </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                
                

            </Card>
        </Accordion >
    );

}
export default FormToAddAPalet;