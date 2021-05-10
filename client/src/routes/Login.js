import React from 'react'
import './login.css'

const Login = (props) => {
    return (
        <div style={{ minHeight: '100vh' }} className="container d-flex align-items-center justify-content-center">
                <div class="card border-primary bg-secondary text-center mb-3 w-100" style={{ maxWidth: "400px" }}>
                    <div class="card-header">
                        <h1 className="mt-5 text-white">Login</h1>
                    </div>
                    <div class="card-body text-primary">
                        <form >
                            <input
                                className="form-control my-3"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                className="form-control my-3"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <div className="col-md-12">
                                <button onClick={() => props.setAuth(true)} className="btn btn-success btn-block">
                                    Login
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-light mt-3">
                         Dont have an account? Sign up
                    </div>
                </div>
            </div>
    )
}

export default Login
