import { Card, Form, Button, useAccordionButton, Accordion, Stack } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';

const FormToAddPalletOrPiece = ({ setTrigerFetch, typeOfPalet }) => {
    const [userNameManagerInput, setUserNameManagerInput] = useState("")
    const [nameOfPalet, setNameOfPalet] = useState("")
    const [pieceInput, setPieceInput] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    async function handleSubmitPalet() {

        if (userNameManagerInput && nameOfPalet) {
            const datesToBeSent = {
                userNameManager: userNameManagerInput, nameOfPalet: nameOfPalet, typeofPalet: typeOfPalet,
                uniqueId: 'empty', dateOfCreate: new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 19)
            }
            console.log(datesToBeSent)
            postObject("/stocuriMateriiPrime/adauga", datesToBeSent)
                .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 

        } else {
            setErrorMessage("Ai lasat campuri neintroduse")
            setTimeout(() => {
                setErrorMessage("")
            }, 3000);
            setUserNameManagerInput(""); setNameOfPalet("")
        }
    }


    async function handleSubmitPiece() {

        if (userNameManagerInput && pieceInput) {
            const datesToBeSent = { userName: userNameManagerInput, pieceInput: pieceInput, dateOfCreate: new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 19) }
            console.log(datesToBeSent)
            postObject("/stocuriMateriiPrime/adauga", datesToBeSent)
                .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 

        } else {
            setErrorMessage("Ai lasat campuri neintroduse")
            setTimeout(() => {
                setErrorMessage("")
            }, 3000);
            setUserNameManagerInput(""); setPieceInput("")
        }
    }


    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey);
        return (
            <Button type="button" variant="outline-dark" onClick={decoratedOnClick}>{children}</Button>
        );
    }
    function CloseCustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey);
        return (
            <Button type="button" variant="outline-danger" size="sm" style={{ position: "relative", right: "-40%" }} onClick={decoratedOnClick}>{children}</Button>
        );
    }

    return (
        <Accordion defaultActiveKey="0" >
            <Card >
                <Card.Header>
                    <Stack direction="horizontal" gap={3}>
                        <CustomToggle eventKey="1" className="bg-light border">Adauga tip palet</CustomToggle>
                        <CustomToggle eventKey="2" className="bg-light border">Adauga tip piesa</CustomToggle>
                    </Stack>
                </Card.Header>
                < Accordion.Collapse eventKey="1">
                    <Card.Body style={{ maxWidth: '360px', border: '0' }} >
                        <Form >
                            <Form.Group className="mb-1" >
                                <Form.Label>Responsabil</Form.Label>
                                <Form.Control size="sm" placeholder="AndreiDobre" onChange={(e) => setUserNameManagerInput(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Denumire palet</Form.Label>
                                <Form.Control size="sm" placeholder="scandura 5x4" onChange={(e) => setNameOfPalet(e.target.value)} />
                            </Form.Group>
                            {errorMessage && <Button variant="danger">{errorMessage.toString()}</Button>}
                            <Button variant="dark" name="dataOra" onClick={handleSubmitPalet} type="reset">
                                Trimite
                            </Button>
                            <CloseCustomToggle eventKey="1" >Inchide formular</CloseCustomToggle>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>

                < Accordion.Collapse eventKey="2">
                    <Card.Body style={{ maxWidth: '360px', border: '0' }} >
                        <Form >
                            <Form.Group className="mb-1" >
                                <Form.Label>Responsabil</Form.Label>
                                <Form.Control size="sm" placeholder="Responsabil" onChange={(e) => setUserNameManagerInput(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Nume piesa</Form.Label>
                                <Form.Control size="sm" placeholder="Nume piesa" onChange={(e) => setPieceInput(e.target.value)} />
                            </Form.Group>
                            {errorMessage && <Button variant="danger">{errorMessage.toString()}</Button>}
                            <Button variant="dark" name="dataOra" size="sm" onClick={handleSubmitPiece} type="reset">
                                Trimite
                            </Button>
                            <CloseCustomToggle eventKey="2" >Inchide formular</CloseCustomToggle>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion >
    );

}
export default FormToAddPalletOrPiece;