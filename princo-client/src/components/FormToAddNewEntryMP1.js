import { Card, Form, Button, Accordion, useAccordionButton, DropdownButton } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';
import useFetch from '../javaScriptComponents/useFetch';
import IpulMeu from './IpulMeu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const FormToAddNewEntryMP1 = ({ paletNr, setTrigerFetchIntrari }) => {
    const [userNameManagerInput, setUserNameManagerInput] = useState("")
    const [pieceInput, setPieceInput] = useState("")
    const [quantityInput, setQuantitylInput] = useState()
    const [employeeName, setEmployeeName] = useState("")
    const [lotInput, setLotInput] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    console.log("Am intrat in FormToAddEntry")
    const { data: dataLots, isPending: isPendingLots, error: errorLots, setTrigerFetch: setTrigerFetchLots } = useFetch(`${IpulMeu()}/stocuriLoturi`);
    async function handleSubmit() {

        if (pieceInput && userNameManagerInput && quantityInput && lotInput) {
            const datesToBeSent = {
                paletEntryFK: paletNr, piece: pieceInput,
                userNameManager: userNameManagerInput, dateOfCreate: '',
                quantity: quantityInput, employee: employeeName, lotFK: lotInput
            }
            console.log(datesToBeSent)

            postObject("/stocuriIntrariMateriPrime/adauga", datesToBeSent, setErrorMessage)
                .then(console.log("aiintrataici"))
                .then(setTrigerFetchIntrari(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch
            setPieceInput(""); setUserNameManagerInput(""); setQuantitylInput(""); setEmployeeName(""); setLotInput("");
        } else {
            setErrorMessage("Ai lasat campuri neintroduse")
            setTimeout(() => {
                setErrorMessage("")
            }, 3000);
            setPieceInput(""); setUserNameManagerInput(""); setQuantitylInput(""); setEmployeeName(""); setLotInput("");
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

    function CloseCustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey);
        return (
            <Button type="button" variant="outline-danger" size="sm" style={{ position: "relative", right: "-40%" }} onClick={decoratedOnClick}>{children}</Button>
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
                            {dataLots?//daca
                                <DropdownButton id="dropdown-basic-button" title= {lotInput?"Lot ales "+lotInput: "Alege lot"} >
                                    {dataLots.map(lot=>
                                    <DropdownItem key={lot.entryId} onClick={()=>setLotInput(lot.entryId)}>{lot.nameOfLot}</DropdownItem>)}
                                </DropdownButton>
                                //dacanu
                                :setTrigerFetchLots(prevState => !prevState)
                            }
                            <Form.Group className="mb-1" >
                                <Form.Label>Intrare introdusa de:</Form.Label>
                                <Form.Control required size="sm" placeholder="Nume" onChange={(e) => setUserNameManagerInput(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Materie Prima</Form.Label>
                                <Form.Control size="sm" placeholder="Materie prima" onChange={(e) => setPieceInput(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Cantitate</Form.Label>
                                <Form.Control size="sm" placeholder="Cantitate" onChange={(e) => setQuantitylInput(e.target.value)} />
                            </Form.Group>

                            {errorMessage && <Button variant="danger">{errorMessage.toString()}</Button>}
                            <Button variant="dark" name="dataOra" onClick={handleSubmit} type="reset">
                                Trimite
                            </Button>
                            <CloseCustomToggle eventKey="1" >Inchide formular</CloseCustomToggle>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
        </Accordion>

    );

}
export default FormToAddNewEntryMP1;