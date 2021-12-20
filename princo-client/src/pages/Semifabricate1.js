import NavbarCustom from "../components/Navbar";
import FormToAddNewEntrySF1 from "../components/FormToAddNewEntrySF1";
import FormToAddPalletOrPieceSF1 from "../components/FormToAddPalletOrPieceSF1";
import { Accordion } from 'react-bootstrap';
import useFetch from '../javaScriptComponents/useFetch';
import IpulMeu from "../components/IpulMeu";
import QrcodeCustom from "../components/QrCodeCustom";
import TableOfEntriesSF1 from "../components/TableOfEntryesSF1";
import { useState } from "react"

const Semifabricate1 = () => {
    const [visiblePalet, setVisiblePalet] = useState('0')
    const { data, isPending, error, setTrigerFetch } = useFetch(`${IpulMeu()}/stocuriSemifabricate1`);
    const { data: dataIntrari, isPending: isPendingIntrari, error: errorIntrari, setTrigerFetch: setTrigerFetchIntrari } = useFetch(`${IpulMeu()}/stocuriIntrariSemifabricate/${visiblePalet}`);
    return (
        <>
            <NavbarCustom />
            <Accordion>
                <FormToAddPalletOrPieceSF1 setTrigerFetch={setTrigerFetch} /> {/*Asa setezi o proprietate pentru o componenta */}
                {<h3>{error && error.toString()}</h3>}
                {!isPending && data.map(palet =>
                    <Accordion.Item eventKey={palet.idIntrare} key={palet.idIntrare}>
                        <Accordion.Header onClick={() => { setVisiblePalet(palet.idIntrare); setTrigerFetchIntrari(prevState => !prevState); }}>
                            <QrcodeCustom text={palet.dateOfCreate} /> Paletul {palet.idIntrare} cu {palet.material}
                        </Accordion.Header>
                        {palet.idIntrare === visiblePalet && !isPendingIntrari && dataIntrari &&
                            <Accordion.Body>
                                {<h3>{errorIntrari && errorIntrari.toString()}</h3>}
                                <FormToAddNewEntrySF1 paletNr={visiblePalet} setTrigerFetchIntrari={setTrigerFetchIntrari} />
                                <TableOfEntriesSF1 paletNr={palet.idIntrare} intrariPalet={dataIntrari} error={error} />
                                Acest palet a fost creat de {palet.userName} la {palet.dateOfCreate}
                            </Accordion.Body>
                        }
                    </Accordion.Item>
                )}
            </Accordion>
        </>

    );
}

export default Semifabricate1;