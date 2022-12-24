import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Edit() {

    const navigate = useNavigate()

    const [post, postDetails] = useState([]);
    const [name, updatedName] = useState();
    const [long, updatedLong] = useState();
    const [deleteMsg, deletedMsg] = useState(false);
    const params = useParams()
    const id = params.id;

    const singleData = () => {
        fetch(`http://localhost:3333/urls/fetch/${id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                postDetails(resp)
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

    async function updateCategory() {
        await fetch(`http://localhost:3333/urls/update/${id}`, {
            method: "POST",
            body: JSON.stringify({ name: name, long: long }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                deletedMsg(true)
                setTimeout(() => {
                    deletedMsg(false)
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
                            deleteMsg ?
                                <div className="alert alert-success">
                                    <strong>Category Updated Successfully. !!!</strong>
                                </div>
                                : null
                        }
                        <div className="card">
                            <div className="card-header">
                                <strong>Update New Shortener URL</strong>
                                <Link to="/" className="btn btn-dark" style={{ float: "right" }}>Home Page</Link>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Enter Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Name" defaultValue={post.name} onChange={(e) => updatedName(e.target.value)} />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Paste/Enter URL</label>
                                        <input type="text" className="form-control" placeholder="Paste/Enter URL" defaultValue={post.long} onChange={(e) => { updatedLong(e.target.value) }} />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button onClick={() => { updateCategory() }} type="submit" className="btn btn-primary mt-3">Update Category</button>
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
export default Edit;