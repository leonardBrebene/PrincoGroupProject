import { Card, Form, Button, Accordion, useAccordionButton } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';

const FormToAddNewEntrySF1 = ({ paletNr, setTrigerFetchIntrari }) => {

    const [numberPaletMP, setNumberPaletMP] = useState("")
    const [materialInput, setMaterialInput] = useState("")
    const [userInput, setUserInput] = useState("")
    const [quantityInput, setQuantitylInput] = useState()
    const [employeeName, setEmployeeName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    console.log("Am intrat in FormToAddEntry")
    async function handleSubmit() {

        if (numberPaletMP && materialInput && userInput && quantityInput && employeeName) {
            const datesToBeSent = {
                idIntrarePaletFK: paletNr, material: materialInput, idIntrarePaletMateriiPrimeFK: numberPaletMP,
                userName: userInput, dateOfCreate: new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 19),
                quantity: quantityInput, employee: employeeName
            }
            console.log(datesToBeSent)
            postObject("/stocuriIntrariSemifabricate1/adauga", datesToBeSent)
                .then(setTrigerFetchIntrari(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 
        } else {
            setErrorMessage("Ai lasat campuri neintroduse")
            setTimeout(() => {
                setErrorMessage("")
            }, 3000);
            setMaterialInput(""); setUserInput(""); setQuantitylInput(""); setEmployeeName("")
        }
    }


    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );
        return (
            <Button type="button" variant='outline-dark' onClick={decoratedOnClick}>{children}</Button>
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
                                <Form.Control required size="sm" placeholder="Nume" onChange={(e) => setUserInput(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Numarul paletului de materii prime din care provine piesa:</Form.Label>
                                <Form.Control required size="sm" placeholder="Numarul paletului de materii prime:" onChange={(e) => setNumberPaletMP(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Nume piesa:</Form.Label>
                                <Form.Control size="sm" placeholder="Nume piesa" onChange={(e) => setMaterialInput(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Cantitate</Form.Label>
                                <Form.Control size="sm" placeholder="Cantitate" onChange={(e) => setQuantitylInput(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Numele Angajatului</Form.Label>
                                <Form.Control size="sm" placeholder="Numele Angajatulu" onChange={(e) => setEmployeeName(e.target.value)} />
                            </Form.Group>
                            {errorMessage && <Button variant="danger">{errorMessage.toString()}</Button>}
                            <Button variant="dark" name="dataOra" onClick={handleSubmit} type="reset">
                                Trimite
                            </Button>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
        </Accordion>

    );

}
export default FormToAddNewEntrySF1;