import { Table, Nav, Container, } from 'react-bootstrap';
import useFetch from '../javaScriptComponents/useFetch';


const TableOfEntries = ({ paletNr }) => {
    const { data, isPending, error, setData } = useFetch(`http://192.168.0.17:8080//stocuriIntrariMateriiPrime/${paletNr}`);
    return (
        <>
            {<h3>{error && error.toString()}</h3>}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>IdIntrare</th>
                        <th>Responsabil</th>
                        <th>DataIntroducerii</th>
                        <th>Material</th>
                        <th>Cantitate</th>
                        <th>Angajat</th>
                    </tr>
                </thead>
                <tbody>
                    {!isPending && data.map(entry =>
                        <tr key={entry.idIntrareMateriiPrime}>    
                            <td>{entry.idIntrareMateriiPrime}</td>
                            <td>{entry.userName}</td>
                            <td>{entry.dateOfCreate}</td>
                            <td>{entry.material}</td>
                            <td>{entry.quantity}</td>
                            <td>{entry.employee}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TableOfEntries;