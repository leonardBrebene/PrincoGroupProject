import { Table } from 'react-bootstrap';


const TableOfEntries = ({ intrariPalet,error }) => {
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
                        <th>Paletul M.P.</th>
                    </tr>
                </thead>
                <tbody>
                    { intrariPalet.map(entry =>
                        <tr key={entry.idIntrareSemifabricat}>    
                            <td>{entry.idIntrareSemifabricat}</td>
                            <td>{entry.userName}</td>
                            <td>{entry.dateOfCreate}</td>
                            <td>{entry.material}</td>
                            <td>{entry.quantity}</td>
                            <td>{entry.employee}</td>
                            <td>{entry.idIntrarePaletMateriiPrimeFK}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TableOfEntries;