import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import auth from "../../firebase.config"

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef(null)
    const handleLgin = e =>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        setError('')
        setSuccess('')

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setSuccess('Successfully Login!')
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const handleResetPassword = () =>{
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            alert('Please Check Email!')
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {success && <p className="text-xl text-green-400 text-center mt-5 mx-6">{success}</p>}
                    {error && <p className="text-xl text-red-400 text-center mt-5 px-6">{error}</p>}
                    <form onSubmit={handleLgin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" name="email" placeholder="Enter email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover" onClick={handleResetPassword}>Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Dont have account? <Link to='/register'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login