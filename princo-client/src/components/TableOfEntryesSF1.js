import { Table} from 'react-bootstrap';


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
            <Table responsive striped bordered hover size="sm" style={{padding:'2px', textAlign:'center', fontSize:'2.5vh'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Lot</th>
                        <th>Data Intrare</th>
                        <th>Piesa rez.</th>
                        <th>Piesa fol.</th>
                        <th>Cant.</th>
                        <th>Cant.Fol</th>
                        <th>Resp</th>
                        <th>Angajat</th>
                        <th>Pal. ant.</th>
                        <th>Op. teh.</th>
                    </tr>
                </thead>
                <tbody>
                    {intrariPalet.map(entry =>
                        <tr key={entry.dateOfCreate} style={{backgroundColor:getColor(entry.quantity)}}> 
                            <td>{entry.entryId}</td>
                            <td>{entry.lotFK}</td>
                            <td>{entry.dateOfCreate}</td>
                            <td>{entry.newPiece}</td>
                            <td>{entry.oldPiece}</td>
                            <td>{entry.quantity}</td>
                            <td>{entry.quantityOnLastPalet}</td>
                            <td>{entry.userNameManager}</td>
                            <td>{entry.employee}</td>
                            <td>{entry.lastPaletFK}</td>
                            <td>{entry.operatieTehnica}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </>
    );
}

export default TableOfEntries;