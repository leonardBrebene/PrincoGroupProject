import NavbarCustom from "../components/Navbar";
import QrReader from 'react-qr-reader'
import { useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap';
import FormToAddNewEntryMP from "../components/FormToAddNewEntryMP";
import TableOfEntries from "../components/TableOfEntryesMF";
import useFetch from "../javaScriptComponents/useFetch";
import IpulMeu from "../components/IpulMeu";

const DashBoard = () => {
  const [visibleQrCode, setVisibleQrCode] = useState(false);
  const [errorQr, setQrError] = useState('')
  const [scannedData, setScannedData] = useState('0')


  const { data, error, setData } = useFetch(`${IpulMeu()}/stocuriMateriiPrime/${scannedData}`);

  const handleError = (error) => {
    setQrError(error)
  }
  const handleScan = (result) => {
    console.log("Am scanat")
    if (result) {
      setData('0')
      setScannedData(result)
      setVisibleQrCode(false)
    }
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

      {scannedData !== '0' && data !== '0' &&
        < Card className="border-0">
          <Card.Body>
            {errorQr ? "There is an error of scan: " + errorQr : ""}
            <FormToAddNewEntryMP paletNr={data.idIntrare} />
            <TableOfEntries paletNr={data.idIntrare} intrariPalet={data.intrariMateriiPrime} error={error} />
          </Card.Body>
        </Card>
      }

    </>
  )
}
export default DashBoard;
