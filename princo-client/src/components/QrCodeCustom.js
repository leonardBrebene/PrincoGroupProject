import QRCode from 'qrcode'
import {useEffect,useState} from 'react'
const QrcodeCustom = ({text}) => {
    const [src,setSrc]=useState('')
    useEffect(() => {
        QRCode.toDataURL(text).then(setSrc)
    }, [text])
    return (
    <div>
    <img src={src} alt="qrCodeImage" style={{maxHeight:"65px",zIndex:"10px"}} />
    </div>  
    );
}
 
export default QrcodeCustom;