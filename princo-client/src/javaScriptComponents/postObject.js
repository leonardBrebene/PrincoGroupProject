import IpulMeu from "../components/IpulMeu";

const postObject = async (restoflink, item, setErrorMessage) => {
    console.log(item.toString())
    const res = await fetch(`${IpulMeu()}${restoflink}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    const dates = await res.json();
    if (dates.message) {
        setErrorMessage(dates.message.toString())
        setTimeout(() => {
            setErrorMessage("")
        }, 3000);
    }
    return dates
}
export default postObject;