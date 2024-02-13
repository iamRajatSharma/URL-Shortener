import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Signup() {

    // const navigate = useNavigate()

    const [name, enterName] = useState();
    const [email, enterEmail] = useState();
    const [password, enterPassword] = useState();
    const [error, errorUpdated] = useState(false);
    const [errorMsg, errorMessage] = useState()

    async function saveUser() {
        // const check = { name: name, email: email, password: password }

        await fetch("http://localhost:3333/users/save", {
            method: "POST",
            body: JSON.stringify({ name: name, email: email, password: password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp => {
                errorUpdated(true)
                setTimeout(() => {
                    errorUpdated(false)
                }, 5000)
                errorMessage(resp.msg)
            }))
    }

    return (
        <>
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
                                <strong>User Sign Up</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" defaultValue={name} onClick={(e) => { enterName(e.target.value) }} placeholder="Enter Name" required="" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" defaultValue={email} onClick={(e) => { enterEmail(e.target.value) }} placeholder="Enter Email" required="" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" defaultValue={password} onClick={(e) => { enterPassword(e.target.value) }} placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button type="submit" onClick={() => { saveUser() }} className="btn btn-primary mt-3">Sign Up</button>
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
export default Signup;