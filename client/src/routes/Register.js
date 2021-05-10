import React, { useState } from 'react'

const Register = () => {

    const [inputs, setInputs] = useState({
        user_email: '',
        user_name: '',
        user_password: '',
    })

    const {user_name, user_password, user_email} = inputs

    const onChange = e => {
        setInputs({...inputs, [e.target.name]
        : e.target.value})
    }

    return (
        <>
            <div style={{ minHeight: '100vh' }} className="container d-flex align-items-center justify-content-center">
                <div class="card border-primary bg-secondary text-center mb-3 w-100" style={{ maxWidth: "400px" }}>
                    <div class="card-header">
                        <h1 className="mt-5 text-white">Register</h1>
                    </div>
                    <div class="card-body text-primary">
                        <form>
                            <input
                                className="form-control my-3"
                                type="email"
                                name="user_email"
                                placeholder="Email"
                            />
                            <input
                                className="form-control my-3"
                                type="password"
                                name="user_password"
                                placeholder="Password"
                            />
                            <input
                                className="form-control my-3"
                                type="text"
                                name="user_name"
                                placeholder="Name"
                            />
                            <div className="col-md-12">
                                <button className="btn btn-success btn-block">
                                    Submit
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-light mt-3">
                         Have an account? Log in
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
