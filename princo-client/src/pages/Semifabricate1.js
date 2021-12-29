import NavbarCustom from "../components/Navbar";
import FormToAddPalletOrPiece from "../components/FormToAddPalletOrPiece";
import { Accordion } from 'react-bootstrap';
import useFetch from '../javaScriptComponents/useFetch';
import IpulMeu from "../components/IpulMeu";
import QrcodeCustom from "../components/QrCodeCustom";
import TableOfEntriesSF1 from "../components/TableOfEntryesSF1";
import { useState } from "react"
import FormToAddNewEntrySF1 from "../components/FormToAddNewEntrySF1";

const Semifabricate1 = () => {
    const [visiblePalet, setVisiblePalet] = useState('0')
    const { data, isPending, error, setTrigerFetch } = useFetch(`${IpulMeu()}/stocuriPaleti/semifabricate1`);
    const { data: dataIntrari, isPending: isPendingIntrari, error: errorIntrari, setTrigerFetch: setTrigerFetchIntrari } = useFetch(`${IpulMeu()}/stocuriIntrariSemifabricate1/${visiblePalet}`);
    return (
        <>
            <NavbarCustom />
            <Accordion>
                <FormToAddPalletOrPiece setTrigerFetch={setTrigerFetch} typeOfPalet={'semifabricate1'} /> {/*Asa setezi o proprietate pentru o componenta */}
                {<h3>{error && error.toString()}</h3>}
                {!isPending && data.map(palet =>
                    <Accordion.Item eventKey={palet.entryId} key={palet.entryId}>
                        <Accordion.Header onClick={() => { setVisiblePalet(palet.entryId); setTrigerFetchIntrari(prevState => !prevState); }}>
                            <QrcodeCustom text={palet.uniqueId} /> Paletul {palet.uniqueId} cu {palet.nameOfPalet}
                        </Accordion.Header>
                        {palet.entryId === visiblePalet && !isPendingIntrari && dataIntrari &&
                            <Accordion.Body>
                                {<h3>{errorIntrari && errorIntrari.toString()}</h3>}
                                <FormToAddNewEntrySF1 paletNr={palet.entryId} setTrigerFetchIntrari={setTrigerFetchIntrari}/>
                                <TableOfEntriesSF1 paletNr={palet.entryId} intrariPalet={dataIntrari} error={error} />
                                Acest palet a fost creat de {palet.userNameManager} la {palet.dateOfCreate}
                            </Accordion.Body>
                        }
                    </Accordion.Item>
                )}
            </Accordion>
        </>

    );
}

export default Semifabricate1;