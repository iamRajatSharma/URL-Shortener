import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()

    const [post, postList] = useState([]);
    const [deleteMessage, deletedMessage] = useState(false);

    async function fetchAllData() {
        await fetch("http://localhost:3333/urls/fetch")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                postList(resp)
            })
    }

    useEffect(() => {
        // const ls = localStorage.getItem("users")
        // const loggedIn = JSON.parse(ls)
        // if (loggedIn == null) {
        //     navigate("/signin")
        // }
        fetchAllData()
    }, [])

    async function deletePost(id) {
        await fetch(`http://localhost:3333/urls/delete/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                deletedMessage(true);
                setTimeout(() => {
                    deletedMessage(false)
                }, 5000)
                fetchAllData()
            })
    }


    async function search(e) {
        console.log(e)
        await fetch(`http://localhost:3333/post/searchData/${e}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                postList(resp)
            })
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        {
                            deleteMessage ?
                                <div className="alert alert-success">
                                    <strong>Record Deleted Successfully. !!!</strong>
                                </div>
                                : null
                        }
                        <input onChange={(e) => { search(e.target.value) }} type="text" className="form-control mb-4" placeholder="Search Post by Name, Category, Tags ...." />

                        <table className="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Total_Hits</th>
                                    <th>Added_Date</th>
                                    <th style={{ width: "230px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post.length > 0 ?
                                        post.map((item, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.hits}</td>
                                                <td>{item.date}</td>
                                                <td>
                                                    <Link className="btn btn-info" to={"/redirect/" + item._id} target={"_blank"} style={{ marginRight: "10px" }}>View</Link>
                                                    <Link to={"/edit/" + item._id} className="btn btn-success" style={{ marginRight: "10px" }}>Edit</Link>
                                                    <button onClick={() => { deletePost(item._id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                        :
                                        <tr className="text-center">
                                            <td colSpan={7}>NO RECORD FOUND</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;