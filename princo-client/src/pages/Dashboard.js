import NavbarCustom from "../components/Navbar";
import QrcodeCustom from "../components/QrCodeCustom";
import QrReader from 'react-qr-reader'
import { useState } from "react";
import { Card, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

const DashBoard = () => {
  const [visibleQrCode, setVisibleQrCode] = useState(false);
  const [qrCodeText, setQrCodeText] = useState("setQrcode");
  const [error, setError] = useState('')
  const [scannedData, setScannedData] = useState('')
  const [myImage, setMyImage] = useState()

  const handleError = (error) => {
    setError(error)
  }
  const handleScan = (result) => {
    console.log("Am scanat")
    if (result) {
      setScannedData(result)
      setVisibleQrCode(false)
    }
  }

  const getdate = () => {
    return new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 19)
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
    <Card className="border-0">
      <Card.Body>
        <Card.Text>
          {error ? "There is an error of scan: " + error : ""}
          {scannedData ? "Text scanat: " + scannedData : ""}

        </Card.Text>
      </Card.Body>
    </Card>

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
        <div id="the_canvas_element_id">
          <QrcodeCustom text={qrCodeText ? qrCodeText : "princoGroup"} />
          <p>202105061839</p>
        </div>
        <button onClick={() => { setQrCodeText("fractia" + getdate()) }}>Genereaza</button>
        <h3>Error {error}</h3>
        <h3>Scaned by Webcam {scannedData}</h3>
        <Button onClick={() => {
          var c = document.getElementById('the_canvas_element_id');
          const canvas = document.getElementById("the_canvas_element_id")
          var myImage = canvas.toDataUrl()
          setMyImage(myImage)
        }}></Button>
        <canvas id="the_canvas_element_id"  />

      </Card.Body>
    </Card>
  </>
)
}
export default DashBoard;
