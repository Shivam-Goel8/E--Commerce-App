// src/components/LoginModal.js
import { useState } from 'react';
import './style.css'

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        
    };

    const handleGoogleLogin = () => {
        console.log("Logging in with Google");
        
    };

    return (
        <div className='loginCon'>
            <button className="button" onClick={() => setIsOpen(true)} style={{ width: 'auto' }}>Login</button>
            {isOpen && (
                <div className="modal" onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
                    <div className="modal-content animate">
                        <span onClick={() => setIsOpen(false)} className="close" title="Close Modal">&times;</span>

                        <div className="container">

                            <input
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" onClick={handleSubmit}>Login</button>
                            <button type="button" className="google-login" onClick={handleGoogleLogin}>Login with Google</button>

                        </div>
                        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                            <button type="button" className="cancelbtn" onClick={() => setIsOpen(false)}>Cancel</button>
                            <span className="psw"><p>Forgot</p> <a href="/">password?</a></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
