import NavbarCustom from "../components/Navbar";
import { Card, Form, Button, Accordion, useAccordionButton } from 'react-bootstrap';
import FormToAddAPalet from "../components/FormToAddAPallet";
import useFetch from '../javaScriptComponents/useFetch';
import { useState, useEffect } from "react";
import FormToAddNewEntry from "../components/FormToAddNewEntry";
import TableOfEntries from "../components/TableOfEntryes";


const MateriiPrime = () => {
    const { data, isPending, error, setData } = useFetch("http://192.168.0.17:8080/stocuriMateriiPrime");
    const[tableCanbeViewed, setTableCanbeViewed]=useState(false)
    //const [data, setData] = useState('')

    return (
        <>
            <NavbarCustom />
            Materii Prime
            <Accordion flush //on={()=>{fetchDates(); console.log("am intrat in onLoad")}}
            >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Adauga palet</Accordion.Header>
                    <Accordion.Body >
                        <FormToAddAPalet />
                    </Accordion.Body>
                </Accordion.Item>
                {<h3>{error && error.toString()}</h3>}
                {!isPending && data.map(palet =>
                    <Accordion.Item eventKey={palet.idIntrare} key={palet.idIntrare}>
                        <Accordion.Header onClick={()=>setTableCanbeViewed(true)}>Paletul {palet.id} cu {palet.material} </Accordion.Header>
                        <Accordion.Body>
                            <FormToAddNewEntry paletNr={palet.idIntrare} />
                            {tableCanbeViewed&&<TableOfEntries paletNr={palet.idIntrare}/>}
                            Acest palet a fost creat de {palet.userName} la {palet.dateOfCreate}
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>


        </>
    );
}

export default MateriiPrime;