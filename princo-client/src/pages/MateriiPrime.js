import NavbarCustom from "../components/Navbar";
import {Accordion } from 'react-bootstrap';
import FormToAddAPalet from "../components/FormToAddAPallet";
import useFetch from '../javaScriptComponents/useFetch';
import FormToAddNewEntry from "../components/FormToAddNewEntry";
import TableOfEntries from "../components/TableOfEntryes";
import IpulMeu from "../components/IpulMeu";
import QrcodeCustom from "../components/QrCodeCustom";


const MateriiPrime = () => {
    const { data, isPending, error,setTrigerFetch } = useFetch(`${IpulMeu()}/stocuriMateriiPrime`);
    
    return (
        <> 
            <NavbarCustom />
            <Accordion flush 
            >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Adauga palet</Accordion.Header>
                    <Accordion.Body >
                         <FormToAddAPalet setTrigerFetch={setTrigerFetch} /> {/*Asa setezi o proprietate pentru o componenta */}
                    </Accordion.Body>
                </Accordion.Item>           
                {<h3>{error && error.toString()}</h3>}
                {!isPending && data.map(palet =>
                    <Accordion.Item eventKey={palet.idIntrare} key={palet.idIntrare}>
                        <Accordion.Header> <QrcodeCustom text={palet.dateOfCreate}/> Paletul {palet.dateOfCreate} cu {palet.material} </Accordion.Header>
                        <Accordion.Body>
                            <FormToAddNewEntry paletNr={palet.idIntrare} setTrigerFetch={setTrigerFetch} />
                            <TableOfEntries paletNr={palet.idIntrare} intrariPalet={palet.intrariMateriiPrime} error={error}/>
                            Acest palet a fost creat de {palet.userName} la {palet.dateOfCreate}
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>


        </>
    );
}

export default MateriiPrime;