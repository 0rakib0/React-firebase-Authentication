import { Link } from "react-router-dom"
import { useState } from "react";

const Register = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        setSuccess('')
        setError('')
        
        
        .then(result =>{
            const user = result.user
            setSuccess('User Successfully created!')
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {success && <p>{success}</p>}
                    {error && <p>{error}</p>}
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have account? <Link to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register