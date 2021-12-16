import NavbarCustom from "../components/Navbar";
import { Card, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import QrcodeCustom from "../components/QrCodeCustom";
import { useState } from "react";

const Semifabricate2 = () => {
    const [qrCodeText, setQrCodeText] = useState("setQrcode");
    const [errorQr, setQrError] = useState('')
    const [scannedData, setScannedData] = useState('0')



    const handleError = (error) => {
        setQrError(error)
    }
    const handleScan = (result) => {
        console.log("Am scanat")
        if (result) {
            setScannedData(result)
        }
    }

    const getdate = () => {
        return new Date(Date.now() + 2 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 22)
    }
    return (
        <div>
            <NavbarCustom />
            Semifabricate2
            <Card >
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
        </div>);
}

export default Semifabricate2;