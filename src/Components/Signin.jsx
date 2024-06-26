import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Signin() {

    const navigate = useNavigate();

    const [email, enterEmail] = useState();
    const [password, enterPassword] = useState();
    const [error, errorUpdated] = useState(false);
    const [errorMsg, errorMessage] = useState()

    useEffect(() => {
        const ls = localStorage.getItem("users")
        const loggedIn = JSON.parse(ls)
        if (loggedIn != null) {
            navigate("/add")
        }
    }, [])

    async function doLogin() {
        await fetch("https://url-backend-nine.vercel.app/users/login", {
            method: "POST",
            body: JSON.stringify({ "email": email, "password": password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp => {
                if (resp.name) {
                    let data = { "email": resp.email, "name": resp.name }
                    localStorage.setItem("users", JSON.stringify(data))
                    navigate("/add")
                }
                else {
                    enterEmail('')
                    enterPassword('')
                    errorUpdated(true)
                    setTimeout(() => {
                        errorUpdated(false)
                    }, 5000)
                    errorMessage(resp.msg)
                }
            }))
    }

    return (
        <>
        <Header />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        {
                            error ?
                                <div className="alert alert-danger">
                                    <strong>{errorMsg}</strong>
                                </div>
                                : null
                        }
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>User Sign in</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" defaultValue={email} value={email} onChange={(e) => { enterEmail(e.target.value) }} placeholder="Enter Email" required="" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3">
                                        <label className="form-label">Password</label>
                                        <input type="text" className="form-control" defaultValue={password} value={password} onChange={(e) => { enterPassword(e.target.value) }} placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button type="submit" onClick={() => { doLogin() }} className="btn btn-primary mt-3">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}
export default Signin;
