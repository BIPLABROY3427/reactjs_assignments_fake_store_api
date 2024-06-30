import { useState, useEffect } from 'react';
import axios from 'axios';
import cloud from './LoginCloud.svg';
import shopicon from './loginshopimg.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [modelopen, setModelopen] = useState(false);
    const [userdata, setUserdata] = useState({
        username: "mor_2314",
        password: "83r5^_"
    });
    const fetchData = async () => {
        try {
            const res = await axios.post("https://fakestoreapi.com/auth/login", userdata);
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                toast.success("Login Successfull");
            } else {
                toast.error("Login Failed");
            }
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }
    return (
        <>
            <ToastContainer />
            <div className="modal fade" id="loginmodel" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog loginmodelbg modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center align-items-center g-2">
                                <div className="logincol1 d-none d-md-block p-3">
                                    <img src={cloud} alt="Login Cloud" className="img-fluid logincloudimg ms-auto d-block" />
                                    <p className='fs-4'>Get access to your Orders, Wishlist and Recommendations</p>
                                    <img src={shopicon} className='loginshopicon center img-fluid' alt="Login Shop" />
                                </div>
                                <div className="container">
                                    <h3 className='fs-3'>Login</h3>
                                    <p className='fs-6 text-muted pointer'>New Here? <span className='text-primary'>Create Account</span></p>
                                    <form className='p-3' onSubmit={onSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="text" className="form-label" value="mor_2314">Username</label>
                                            <input type="text" className="form-control" autoComplete='off' value={userdata.username} onChange={(e) => setUserdata({ ...userdata, username: e.target.value })} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" value={userdata.password} onChange={(e) => setUserdata({ ...userdata, password: e.target.value })} />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login