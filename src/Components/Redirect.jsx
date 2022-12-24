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
                console.log(resp)
                const redirect_to = resp.long;
                // console.log(redirect_to)
                window.location.href = redirect_to;
            })
    }

    useEffect(() => {
        // const ls = localStorage.getItem("users")
        // const loggedIn = JSON.parse(ls)
        // if (loggedIn == null) {
        //     navigate("/signin")
        // }
        singleData()
    }, [])

    return (
        <>
        </>
    )
}
export default Redirect;