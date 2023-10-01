import { Link } from "react-router-dom"
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";


const Register = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        const check = e.target.tearms.checked;
        setSuccess('')
        setError('')

        if (password.length < 6) {
            setError('Email must be 6 character or more')
            return
        } else if (!/['A-Z']/.test(password)) {
            setError('In Password one Charecter must be Uppercase')
            return
        } else if (!check) {
            setError('For Regiter You Need to Accespt Our Tearms & Condition')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user
                setSuccess('User Successfully created!')
                updateProfile(user, {
                    displayName: name,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9-ZoUBzGmjdoOCD0r-tSujLrtT_qKi7sqCaoDH2TzA&s'
                })
                .then(()=>{
                    console.log('name and pic set')
                })
                .catch(error=>{
                    setError(error.message)
                })
                sendEmailVerification(user)
                .then(()=>{
                    alert('Email Check and Verifay Your Email!')
                })
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-12">
                    {success && <p className="text-xl text-green-400 text-center mt-5 mx-6">{success}</p>}
                    {error && <p className="text-xl text-red-400 text-center mt-5 px-6">{error}</p>}
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name="email" placeholder="Enter email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" name="name" placeholder="Enter Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name="password" placeholder="Enter password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <input type="checkbox" className="items-start" name="tearms" id="tearms" />
                                <label htmlFor="tearms">Accespt Our Tearm & Condition</label>
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