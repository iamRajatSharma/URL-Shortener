import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Redirect() {

    const urlData = useParams()

    const singleData = () => {
        fetch(`http://localhost:3333/urls/fetch&update/${urlData.id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                const redirect_to = resp.long;
                window.location.href = redirect_to;
            })
    }

    useEffect(() => {
        singleData()
    }, [])

    return (
        <>
        </>
    )
}
export default Redirect;