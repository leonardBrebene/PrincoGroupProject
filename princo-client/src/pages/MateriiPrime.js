import NavbarCustom from "../components/Navbar";
import {Accordion } from 'react-bootstrap';
import FormToAddPalletOrPieceMP from "../components/FormToAddPalletOrPieceMP";
import useFetch from '../javaScriptComponents/useFetch';
import FormToAddNewEntryMP from "../components/FormToAddNewEntryMP";
import TableOfEntriesMF from "../components/TableOfEntryesMF";
import IpulMeu from "../components/IpulMeu";
import QrcodeCustom from "../components/QrCodeCustom";
import { useState } from "react"


const MateriiPrime = () => {
    const [visiblePalet, setVisiblePalet] = useState('0')
    const { data, isPending, error,setTrigerFetch } = useFetch(`${IpulMeu()}/stocuriMateriiPrime`);
    const { data: dataIntrari, isPending: isPendingIntrari, error: errorIntrari, setTrigerFetch: setTrigerFetchIntrari } = useFetch(`${IpulMeu()}/stocuriIntrariMateriiPrime/${visiblePalet}`);
    return (
        <> 
            <>
            <NavbarCustom />
            <Accordion>
                <FormToAddPalletOrPieceMP setTrigerFetch={setTrigerFetch} /> {/*Asa setezi o proprietate pentru o componenta */}
                {<h3>{error && error.toString()}</h3>}
                {!isPending && data.map(palet =>
                    <Accordion.Item eventKey={palet.idIntrare} key={palet.idIntrare}>
                        <Accordion.Header onClick={() => { setVisiblePalet(palet.idIntrare); setTrigerFetchIntrari(prevState => !prevState); }}>
                            <QrcodeCustom text={palet.dateOfCreate} /> Paletul {palet.idIntrare} cu {palet.material}
                        </Accordion.Header>
                        {palet.idIntrare === visiblePalet && !isPendingIntrari && dataIntrari &&
                            <Accordion.Body>
                                {<h3>{errorIntrari && errorIntrari.toString()}</h3>}
                                <FormToAddNewEntryMP paletNr={visiblePalet} setTrigerFetchIntrari={setTrigerFetchIntrari} />
                                <TableOfEntriesMF paletNr={palet.idIntrare} intrariPalet={dataIntrari} error={error} />
                                Acest palet a fost creat de {palet.userName} la {palet.dateOfCreate}
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