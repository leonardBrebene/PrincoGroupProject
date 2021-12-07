import NavbarCustom from "../components/Navbar";
import QrcodeCustom from "../components/QrCodeCustom";
import QrReader from 'react-qr-reader'
import { useState, useRef } from "react";

const DashBoard = () => {
  const [qrCodeText, setQrCodeText] = useState("someText");
  const [error, setError] = useState('')
  const [scannedData, setScannedData] = useState('')

  const handleError = (error) => {
    setError(error)
  }
  const handleScan = (result) => {
    if (result) {
      setScannedData(result)
    }
  }

const getdate=()=>{
  return new Date(Date.now()).toISOString()
}

  return (
    <div><NavbarCustom />
      <p>Dashboard</p>
      <input
        type="text"
        value={qrCodeText}
        onChange={(e) => {
          setQrCodeText(e.target.value);
        }}
        required
      />
      <QrcodeCustom text={qrCodeText?qrCodeText:getdate()} />
      <button onClick={()=>{setQrCodeText("fractia"+getdate())}}>Genereaza</button>
      <QrReader
        delay={300}
        style={{ width: '40%' }}
        onError={handleError}
        onScan={handleScan}
      />
      <h3>Error {error}</h3>
      <h3>Scaned by Webcam {scannedData}</h3>
    </div>
  )
}
export default DashBoard;
