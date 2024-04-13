import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Redirect() {

    const urlData = useParams()
    var redirect_to
    const singleData = () => {
        fetch(`http://localhost:3333/urls/fetch&update/${urlData.id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setTimeout(() => {
                    redirect_to = resp.long;
                    window.location.href = redirect_to;
                }, 3000)
            })
    }

    useEffect(() => {
        singleData()
    }, [])


    return (
        <div className="text-center">
            <p className="h1">Please wait while we are redirecting</p>
        </div>
    )
}
export default Redirect;