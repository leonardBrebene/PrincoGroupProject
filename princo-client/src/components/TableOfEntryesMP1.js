import { Table } from 'react-bootstrap';


const TableOfEntriesMF = ({ intrariPalet,error }) => {
    const getColor=(number)=>{
        if(number<0){
            return "#ffff99"
        }
        return "#b3ff99"
    }
    return (
        <>
            {<h3>{error && error.toString()}</h3>} 
            <Table responsive striped bordered hover style={{padding:'2px', textAlign:'center', fontSize:'2.5vh'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Responsabil</th>
                        <th>DataIntroducerii</th>
                        <th>Material</th>
                        <th>Cantitate</th>
                        <th>Lot</th>
                        {/* <th>Angajat</th> */}
                    </tr>
                </thead>
                <tbody>
                    { intrariPalet.map(entry =>
                        <tr key={entry.dateOfCreate} style={{backgroundColor:getColor(entry.quantity)}}>    
                            <td>{entry.entryId}</td>
                            <td>{entry.userNameManager}</td>
                            <td>{entry.dateOfCreate}</td>
                            <td>{entry.piece}</td>
                            <td>{entry.quantity}</td>
                            <td>{entry.lotFK}</td>
                            {/* <td>{entry.employee}</td> */}
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TableOfEntriesMF;