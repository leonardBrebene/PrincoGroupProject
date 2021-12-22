import { Table } from 'react-bootstrap';


const TableOfEntriesMF = ({ intrariPalet,error }) => {
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
                        <th>Lot</th>
                        <th>Angajat</th>
                    </tr>
                </thead>
                <tbody>
                    { intrariPalet.map(entry =>
                        <tr key={entry.entryId}>    
                            <td>{entry.entryId}</td>
                            <td>{entry.userNameManager}</td>
                            <td>{entry.dateOfCreate}</td>
                            <td>{entry.piece}</td>
                            <td>{entry.quantity}</td>
                            <td>{entry.lot}</td>
                            <td>{entry.employee}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TableOfEntriesMF;