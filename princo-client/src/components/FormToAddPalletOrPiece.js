import { Card, Form, Button,  Accordion, Stack } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';
import ButtonForAcordionForm from '../javaScriptComponents/ButtonForAcordionForm';
import CloseButtonForAcordionForm from '../javaScriptComponents/CloseButtonForAcordionForm';

const FormToAddPalletOrPiece = ({ setTrigerFetch, typeOfPalet }) => {
    const [userNameManagerInput, setUserNameManagerInput] = useState("")
    const [nameOfPalet, setNameOfPalet] = useState("")
    const [pieceInput, setPieceInput] = useState("")
    const [volumeInput, setVolumeInput] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const showErrorAndSetinputsToNull = () => {
        setErrorMessage("Ai lasat campuri neintroduse")
        setTimeout(() => {
            setErrorMessage("")
        }, 3000);
        setUserNameManagerInput(""); setNameOfPalet(""); setPieceInput("");setVolumeInput("")
    }

    async function handleSubmitPalet() {
        if (userNameManagerInput && nameOfPalet) {
            const datesToBeSent = {
                userNameManager: userNameManagerInput, nameOfPalet: nameOfPalet, typeofPalet: typeOfPalet,
                uniqueId: 'empty', dateOfCreate: 'empty'
            }
            console.log(datesToBeSent)

            postObject("/stocuriPalet/adauga", datesToBeSent, setErrorMessage)
                .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 
        } else showErrorAndSetinputsToNull();
    }


    async function handleSubmitPiece() {
        if (userNameManagerInput && pieceInput) {
            const datesToBeSent = { userName: userNameManagerInput, pieceInput: pieceInput,volume:volumeInput, dateOfCreate:'empty' }
            console.log(datesToBeSent)

            postObject("/stocuriMateriiPrime/adauga", datesToBeSent, setErrorMessage)
                .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 

        } else showErrorAndSetinputsToNull();
    }

    return (
        <Accordion defaultActiveKey="0" >
            <Card >
                <Card.Header>
                    <Stack direction="horizontal" gap={3}>
                        <ButtonForAcordionForm eventKey="1" className="bg-light border">{"Adauga palet " + typeOfPalet}</ButtonForAcordionForm>
                        <ButtonForAcordionForm eventKey="2" className="bg-light border">{"Adauga piesa " + typeOfPalet}</ButtonForAcordionForm>
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
                            <CloseButtonForAcordionForm eventKey="1" >Inchide formular</CloseButtonForAcordionForm>
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

                            <Form.Group className="mb-1" >
                                <Form.Label>Volum piesa cm3</Form.Label>
                                <Form.Control size="sm" placeholder="12" onChange={(e) => setVolumeInput(e.target.value)} />
                            </Form.Group>
                            {errorMessage && <Button variant="danger">{errorMessage.toString()}</Button>}
                            <Button variant="dark" name="dataOra" size="sm" onClick={handleSubmitPiece} type="reset">
                                Trimite
                            </Button>
                            <CloseButtonForAcordionForm eventKey="2" >Inchide formular</CloseButtonForAcordionForm>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
        </Accordion >
    );

}
export default FormToAddPalletOrPiece;