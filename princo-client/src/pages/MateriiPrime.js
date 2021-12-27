import NavbarCustom from "../components/Navbar";
import {Accordion } from 'react-bootstrap';
import FormToAddPalletPieceOrLot from "../components/FormToAddPalletPieceOrLot";
import useFetch from '../javaScriptComponents/useFetch';
import FormToAddNewEntryMP1 from "../components/FormToAddNewEntryMP1";
import TableOfEntriesMP1 from "../components/TableOfEntryesMP1";
import IpulMeu from "../components/IpulMeu";
import QrcodeCustom from "../components/QrCodeCustom";
import { useState } from "react"


const MateriiPrime = () => {
    const [visiblePalet, setVisiblePalet] = useState('0')
    const { data, isPending, error,setTrigerFetch } = useFetch(`${IpulMeu()}/stocuriPaleti/materiiPrime1`);
    const { data: dataIntrari, isPending: isPendingIntrari, error: errorIntrari, setTrigerFetch: setTrigerFetchIntrari } = useFetch(`${IpulMeu()}/stocuriIntrariMateriiPrime1/${visiblePalet}`);
    return (
        <> 
            <>
            <NavbarCustom />
            <Accordion>
                <FormToAddPalletPieceOrLot setTrigerFetch={setTrigerFetch} typeOfPalet={'materiiPrime1'} /> {/*Asa setezi o proprietate pentru o componenta */}
                {<h3>{error && error.toString()}</h3>}
                {!isPending &&data&& data.map(palet =>
                    <Accordion.Item eventKey={palet.entryId} key={palet.entryId}>
                        <Accordion.Header onClick={() => { setVisiblePalet(palet.entryId); setTrigerFetchIntrari(prevState => !prevState); }}>
                            <QrcodeCustom text={palet.uniqueId} /> Paletul {palet.uniqueId} cu {palet.nameOfPalet}
                        </Accordion.Header>
                        {palet.entryId === visiblePalet && !isPendingIntrari && dataIntrari &&
                            <Accordion.Body>
                                {<h3>{errorIntrari && errorIntrari.toString()}</h3>}
                                <FormToAddNewEntryMP1 paletNr={palet.entryId} setTrigerFetchIntrari={setTrigerFetchIntrari} />
                                <TableOfEntriesMP1 paletNr={palet.entryId} intrariPalet={dataIntrari} error={error} />
                                Acest palet a fost creat de {palet.userNameManager} la {palet.dateOfCreate}
                            </Accordion.Body>
                        }
                    </Accordion.Item>
                    
                )}
            </Accordion>
        </>


        </>
    );
}

export default MateriiPrime;