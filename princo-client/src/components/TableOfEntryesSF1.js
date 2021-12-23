import { Table } from 'react-bootstrap';


const TableOfEntries = ({ intrariPalet, error }) => {
    const getColor=(number)=>{
        if(number<0){
            return "#ffff99"
        }
        return "#b3ff99"
    }
    return (
        <>
            {<h3>{error && error.toString()}</h3>}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>IdIntrare</th>
                        <th>Lot</th>
                        <th>DataIntroducerii</th>
                        <th>Material</th>
                        <th>Cantitate</th>
                        <th>Piese folosite</th>
                        <th>Responsabil</th>
                        <th>Angajat</th>
                        <th>Paletul anterior</th>
                    </tr>
                </thead>
                <tbody>
                    {intrariPalet.map(entry =>
                        <tr key={entry.dateOfCreate} style={{backgroundColor:getColor(entry.quantity)}}> 
                            <td>{entry.entryId}</td>
                            <td>{entry.lot}</td>
                            <td>{entry.dateOfCreate}</td>
                            <td>{entry.piece}</td>
                            <td>{entry.quantity}</td>
                            <td>{entry.quantityOnLastPalet}</td>
                            <td>{entry.userNameManager}</td>
                            <td>{entry.employee}</td>
                            <td>{entry.lastPaletUniqueFK}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TableOfEntries;