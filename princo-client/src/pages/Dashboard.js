import NavbarCustom from "../components/Navbar";
import QrcodeCustom from "../components/QrCodeCustom";
import QrReader from 'react-qr-reader'
import { useState } from "react";
import { Card, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import FormToAddNewEntry from "../components/FormToAddNewEntry";
import TableOfEntries from "../components/TableOfEntryes";
import useFetch from "../javaScriptComponents/useFetch";
import IpulMeu from "../components/IpulMeu";

const DashBoard = () => {
  const [visibleQrCode, setVisibleQrCode] = useState(false);
  const [qrCodeText, setQrCodeText] = useState("setQrcode");
  const [errorQr, setQrError] = useState('')
  const [scannedData, setScannedData] = useState('')

  const { data, isPending, error } = useFetch(`${IpulMeu()}/stocuriMateriiPrime`);

  const handleError = (error) => {
    setQrError(error)
  }
  const handleScan = (result) => {
    console.log("Am scanat")
    if (result) {
      setScannedData(result)
      setVisibleQrCode(false)
    }
  }

  const getdate = () => {
    return new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 22)
  }


  return (
    <>
      <NavbarCustom />
      <p>Dashboard</p>
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

      {/* <Card className="border-0">
        <Card.Body>
          {errorQr ? "There is an error of scan: " + errorQr : ""}
          {scannedData && !isPending&& <FormToAddNewEntry paletNr={palet.idIntrare} /> &&
            <TableOfEntries paletNr={palet.idIntrare} intrariPalet={palet.intrariMateriiPrime} error={errorQr} />}
        </Card.Body>
      </Card> */}

      <Card className="fixed-bottom" >
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              value={qrCodeText}
              onChange={(e) => {
                setQrCodeText(e.target.value);
              }}
              placeholder="text=>QrCode"
            />
          </InputGroup>
          <div >
            <QrcodeCustom text={qrCodeText ? qrCodeText : "princoGroup"} />
            <p>202105061839</p>
          </div>
          <button onClick={() => { setQrCodeText("fractia" + getdate()) }}>Genereaza</button>
          <h3>Error {errorQr}</h3>
          <h3>Scaned by Webcam {scannedData}</h3>
        </Card.Body>
      </Card>
    </>
  )
}
export default DashBoard;
