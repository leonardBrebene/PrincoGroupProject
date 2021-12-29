import NavbarCustom from "../components/Navbar";
import QrcodeCustom from "../components/QrCodeCustom";
import QrReader from 'react-qr-reader'
import { useState } from "react";
import { Card, Button, Modal, Accordion } from 'react-bootstrap';
import FormToAddNewEntryMP1 from "../components/FormToAddNewEntryMP1";
import TableOfEntriesSF1 from "../components/TableOfEntryesSF1";
import useFetch from "../javaScriptComponents/useFetch";
import IpulMeu from "../components/IpulMeu";
import FormToAddLotOrProvider from "../components/FormToAddLotOrProvider";

const DashBoard = () => {
  const [visibleQrCode, setVisibleQrCode] = useState(false);
  const [errorQr, setQrError] = useState('')
  const [scannedData, setScannedData] = useState('0')
  const [linkOfRequest, setLinkOfRequest] = useState('stocuriIntrariMateriiPrime1')
  const [visiblePalet, setVisiblePalet] = useState('0')
  const { data, error, setData } = useFetch(`${IpulMeu()}/stocuriPalet/${scannedData}`);
  const { data: dataIntrari, error: errorIntrari, setTrigerFetch: setTrigerFetchIntrari } = useFetch(`${IpulMeu()}/${linkOfRequest}/${visiblePalet}`);

  const handleError = (error) => {
    setQrError(error)
  }

  const handleScan = (result) => {
    console.log("Am scanat")
    if (result) {
      setData('0')
      console.log("result este"+result+"resultsubstring"+result.slice(-3))
      switch (result.slice(-3)) {
        case "MP1":
          setLinkOfRequest("stocuriIntrariMateriiPrime1")
          break;
        case "SF1":
          setLinkOfRequest("stocuriIntrariSemifabricate1")
          break;
        default:
          break;
      }
      setScannedData(result)
      setVisibleQrCode(false)
    }
  }

  return (
    <>
      <NavbarCustom />
      <FormToAddLotOrProvider setTrigerFetch={setTrigerFetchIntrari}/>
      <Modal show={visibleQrCode} size="md">
        <QrReader
          class="mx-auto"
          delay={500}
          style={{ width: '100%' }}
          onError={handleError}
          onScan={handleScan}
          disabled={visibleQrCode}
        />
        <Button onClick={() => setVisibleQrCode(false)} className="btn btn-primary btn-sm">Close scanning</Button>
      </Modal>
      <Button onClick={() => setVisibleQrCode(true)}>Scan QrCode</Button>

      {errorQr ? "There is an error of scan: " + errorQr : ""}
      {scannedData !== '0' && data !== '0' &&
        < Card className="border-0">
          <Accordion>
            <Accordion.Item eventKey={data.entryId} key={data.entryId}>
              <Accordion.Header onClick={() => { setVisiblePalet(data.entryId); setTrigerFetchIntrari(prevState => !prevState); }}>
                <QrcodeCustom text={data.uniqueId} /> Paletul {data.uniqueId} cu {data.nameOfPalet}
              </Accordion.Header>
              <Accordion.Body>
                {<h3>{errorIntrari && errorIntrari.toString()}</h3>}
                <FormToAddNewEntryMP1 paletNr={visiblePalet} setTrigerFetchIntrari={setTrigerFetchIntrari} />
                <TableOfEntriesSF1 paletNr={dataIntrari.entryId} intrariPalet={dataIntrari} error={error} />
                Acest palet a fost creat de {dataIntrari.userNameManager} la {dataIntrari.dateOfCreate}
              </Accordion.Body>

            </Accordion.Item>
          </Accordion>
        </Card>
      }

    </>
  )
}
export default DashBoard;
