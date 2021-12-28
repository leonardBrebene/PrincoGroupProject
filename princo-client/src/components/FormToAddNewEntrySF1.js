import { Card, Form, Button, Accordion, useAccordionButton,DropdownButton } from 'react-bootstrap';
import { useState } from "react";
import postObject from '../javaScriptComponents/postObject';
import useFetch from '../javaScriptComponents/useFetch';
import IpulMeu from './IpulMeu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const FormToAddNewEntrySF1 = ({ paletNr, setTrigerFetchIntrari }) => {

    const [lastPaletFK, setLastPaletUniqueFK] = useState("")
    const [oldPieceInput, setOldPieceInput] = useState("")
    const [newPieceInput, setNewPieceInput] = useState("")
    const [quantityInput, setQuantitylInput] = useState()
    const [quantityOnLastPalet, setQuantityOnLastPalet] = useState()
    const [lotInput, setLotInput] = useState("")
    const [userNameManagerInput, setUserNameManager] = useState("")
    const [employeeName, setEmployeeName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const { data: dataLots, isPending: isPendingLots, error: errorLots, setTrigerFetch: setTrigerFetchLots } = useFetch(`${IpulMeu()}/stocuriLoturi`);
    console.log("Am intrat in FormToAddEntry")
    async function handleSubmit() {

        if (lastPaletFK && oldPieceInput && userNameManagerInput && quantityInput && employeeName && quantityOnLastPalet && lotInput) {
            const datesToBeSent = {
                paletEntryFK: paletNr, lastPaletFK : lastPaletFK, oldPiece: oldPieceInput, newPiece: newPieceInput, quantity: quantityInput, quantityOnLastPalet: quantityOnLastPalet,
                lotFK: lotInput, dateOfCreate:'',
                userNameManager: userNameManagerInput, employee: employeeName
            }
            console.log(datesToBeSent)
            postObject("/stocuriIntrariSemifabricate1/adauga", datesToBeSent,setErrorMessage)
                .then(console.log("A fost postat"))
                .then(setTrigerFetchIntrari(prevState => !prevState)) //dupa ce ai facut post declanseaza un fetch
            setOldPieceInput("");setNewPieceInput(""); setUserNameManager(""); setQuantitylInput(""); setEmployeeName(""); setOldPieceInput(""); setQuantityOnLastPalet(""); setLotInput("") 
        } else {
            setTrigerFetchIntrari(prevState => !prevState);
            setErrorMessage("Ai lasat campuri neintroduse")
            setTimeout(() => {
                setErrorMessage("")
            }, 3000);
            setOldPieceInput("");setNewPieceInput(""); setUserNameManager(""); setQuantitylInput(""); setEmployeeName(""); setOldPieceInput(""); setQuantityOnLastPalet(""); setLotInput("")
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
                            <Form.Group className="mb-1" >
                                <Form.Label>Numarul paletului din care provine piesa:</Form.Label>
                                <Form.Control required size="sm" placeholder="Numarul paletului de unde provine piesa:" onChange={(e) => setLastPaletUniqueFK(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Nume piesa folosita:</Form.Label>
                                <Form.Control required size="sm" placeholder="Nume piesa folosita:" onChange={(e) => setOldPieceInput(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Nume piesa rezultata:</Form.Label>
                                <Form.Control required size="sm" placeholder="Nume piesa rezultata:" onChange={(e) => setNewPieceInput(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Numar de piese folosite</Form.Label>
                                <Form.Control size="sm" placeholder="Numar de piese folosite" onChange={(e) => setQuantityOnLastPalet(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Numar de piese rezultate</Form.Label>
                                <Form.Control size="sm" placeholder="Numar de piese rezultate" onChange={(e) => setQuantitylInput(e.target.value)} />
                            </Form.Group>

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
                                <Form.Control required size="sm" placeholder="Nume" onChange={(e) => setUserNameManager(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" >
                                <Form.Label>Numele Angajatului</Form.Label>
                                <Form.Control size="sm" placeholder="Nume Angajat" onChange={(e) => setEmployeeName(e.target.value)} />
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
export default FormToAddNewEntrySF1;