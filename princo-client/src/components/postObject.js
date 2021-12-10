
const postObject = async (restoflink, item) => {
    //const[response,setResponse]=useState()
    // item={...item,id: Math.floor(Math.random() * 9999)}
    console.log(item.toString())
   const res= await fetch(`http://localhost:8080/${restoflink}`, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body:JSON.stringify(item)
    })
    const dates = await res.json();
    return dates
}
export default postObject;