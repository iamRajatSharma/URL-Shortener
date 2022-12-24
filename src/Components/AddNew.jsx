import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNew() {

    const navigate = useNavigate()
    const ls = localStorage.getItem("users")
    const loggedIn = JSON.parse(ls)

    const [url, updatedURL] = useState();
    const [name, updatedName] = useState();
    const [saveMsg, savedMsg] = useState(false);
    const [msg, setMsg] = useState();

    useEffect(() => {
        // if (loggedIn == null) {
        //     navigate("/signin")
        // }

    }, [])

    async function save() {
        let short = new Date()
        short = +short
        let todayDate = new Date().toJSON()
        todayDate = todayDate.split("T")[0]
        await fetch("http://localhost:3333/urls/save", {
            method: "POST",
            body: JSON.stringify({ short: short, name: name, long: url, email: loggedIn.email, date: todayDate }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setMsg(resp)
                savedMsg(true)
                setTimeout(() => {
                    savedMsg(false)
                }, 5000)
            })
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        {
                            saveMsg ?
                                msg.varient == "danger" ?
                                    <div className="alert alert-danger">
                                        <strong>{msg.msg}</strong>
                                    </div>
                                    :
                                    <div className="alert alert-success">
                                        <strong>{msg.msg}</strong>
                                    </div>
                                : null
                        }
                        <div className="card">
                            <div className="card-header">
                                <strong>Create New Shortener URL</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Enter Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Name" onChange={(e) => updatedName(e.target.value)} />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Paste/Enter URL</label>
                                        <input type="text" className="form-control" placeholder="Paste/Enter URL" onChange={(e) => updatedURL(e.target.value)} />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button onClick={() => { save() }} type="submit" className="btn btn-primary mt-3">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    )
}
export default AddNew;