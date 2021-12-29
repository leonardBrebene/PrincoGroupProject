import { Card, Form, Button, Accordion, Stack } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';
import ButtonForAcordionForm from '../javaScriptComponents/ButtonForAcordionForm';
import CloseButtonForAcordionForm from '../javaScriptComponents/CloseButtonForAcordionForm';

const FormToAddLotOrProvider = ({ setTrigerFetch }) => {
    const [userNameManagerInput, setUserNameManagerInput] = useState("")
    const [providerInput, setProviderInput] = useState("")
    const [lotInput, setLotInput] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const showErrorAndSetinputsToNull = () => {
        setErrorMessage("Ai lasat campuri neintroduse")
        setTimeout(() => {
            setErrorMessage("")
        }, 3000);
        setUserNameManagerInput(""); setProviderInput("");
    }

    async function handleSubmitProvider() {
        if (userNameManagerInput && providerInput) {
            const datesToBeSent = {
                userNameManager: userNameManagerInput, provider: providerInput,
                uniqueId: 'empty', dateOfCreate: "empty"
            }
            console.log(datesToBeSent)

            postObject("/stocuriPalet/adauga", datesToBeSent, setErrorMessage)
                .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 
        } else showErrorAndSetinputsToNull();
    }

    async function handleSubmitLot() {
        if (userNameManagerInput && lotInput) {
            const datesToBeSent = { userNameManager: userNameManagerInput, nameOfLot: lotInput, dateOfCreate: '' }
            console.log(datesToBeSent)

            postObject("/lot/adauga", datesToBeSent, setErrorMessage)
                .then(setTrigerFetch(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch 

        } else showErrorAndSetinputsToNull();
    }


    return (
        <>
            <Accordion defaultActiveKey="0" >
                <Card >
                    <Card.Header>
                        <Stack direction="horizontal" gap={3}>
                            <ButtonForAcordionForm eventKey="1" className="bg-light border">Adauga furnizor</ButtonForAcordionForm>
                            <ButtonForAcordionForm eventKey="2" className="bg-light border">Adauga lot</ButtonForAcordionForm>
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
                                    <Form.Label>Denumire furnizor</Form.Label>
                                    <Form.Control size="sm" placeholder="IsoGroup" onChange={(e) => setProviderInput(e.target.value)} />
                                </Form.Group>
                                {errorMessage && <Button variant="danger">{errorMessage.toString()}</Button>}
                                <Button variant="dark" name="dataOra" onClick={handleSubmitProvider} type="reset">
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
                                    <Form.Control size="sm" placeholder="AndreiDobre" onChange={(e) => setUserNameManagerInput(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-1" >
                                    <Form.Label>Denumire lot</Form.Label>
                                    <Form.Control size="sm" placeholder="princolot213" onChange={(e) => setLotInput(e.target.value)} />
                                </Form.Group>
                                {errorMessage && <Button variant="danger">{errorMessage.toString()}</Button>}
                                <Button variant="dark" name="dataOra" onClick={handleSubmitLot} type="reset">
                                    Trimite
                                </Button>
                                <CloseButtonForAcordionForm eventKey="2" >Inchide formular</CloseButtonForAcordionForm>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion >
        </>);
}

export default FormToAddLotOrProvider;