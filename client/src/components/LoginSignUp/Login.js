import React, { useState, useEffect } from 'react'
import { FaUser, FaVoicemail, FaLock, FaFacebook, FaGooglePlus, FaLinkedin, FaClone, FaGoogle } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom'
import img1 from '../../img/sideimg.svg'
import img2 from '../../img/sideimg2.svg'
import { signIn, signUp, GoogleSignUp } from '../../actions/Auth';
import GoogleLogin from 'react-google-login';
import useStyles from './Styles';
import Icon from './icon';
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
const images = ['https://i.ibb.co/192hXc5/G1.png', 'https://i.ibb.co/VJhf3mB/G2.png', 'https://i.ibb.co/0jBDP4H/G3.png', 'https://i.ibb.co/HHzjGkB/B1.png', 'https://i.ibb.co/GJ20Nw4/B2.png', 'https://i.ibb.co/HV8HR6Q/B3.png'];
var image = images[Math.floor(Math.random() * images.length)];
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', imageURL: image};

const RegistrationForm = () => {


    // Login 
    const classes = useStyles();
    const navigate = useNavigate();
    const { action } = useParams();
    const dispatch = useDispatch();
    const [isSignUp, setisSignUp] = useState(action === 'SignUp' ? true : action === 'SignIn' ? false : 'Error');
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const imageUrl= "https://i.ibb.co/192hXc5/G1.png";

    let hasSixChar = formData.password.length >= 6;
	let hasLowerChar = /(.*[a-z].*)/.test(formData.password);
	let hasUpperChar = /(.*[A-Z].*)/.test(formData.password);
	let hasNumber = /(.*[0-9].*)/.test(formData.password);
	let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(formData.password);
    

    const switchState = () => {
        setisSignUp(!isSignUp);
        if(!isSignUp) {
            navigate('/auth/SignUp');
        } else {
            navigate('/auth/SignIn');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp) {
            
            // eslint-disable-next-line no-lone-blocks
            { hasSixChar && hasLowerChar && hasUpperChar && hasNumber && hasSpecialChar ?
                 (dispatch(signUp(formData, navigate))) : (
                     console.log("error")
                 )
            }
        } else {
            dispatch(signIn(formData, navigate));
        }

    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    

    const googleSuccess = (res) => {
        const result = res?.profileObj;
        const token  = res?.tokenId;
        try {
            dispatch(GoogleSignUp(result, token, navigate));

        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = () => {
        console.log("Google Sign In Was A Failure Just Like U!!!!, Try Again Dumb Ass");
    }

    const SignUp = () => {
        setisSignUp(true);
        navigate('/login/SignUp');
    }

    const SignIn = () => {
        setisSignUp(false);
        navigate('/login/SignIn');
    }

    useEffect(() => {
        setisSignUp(action === 'SignUp' ? true : action === 'SignIn' ? false : "Error");
        
        if(isSignUp === 'Error') {
            navigate('/Error');
        }
        
        setFormData(initialState);
        
    }, [action, navigate, isSignUp])

    return (
        <div>
            <div className={`container-1 ${isSignUp ? "sign-up-button" : ""}`}>
                <div className='form-container'>
                    <div className='signin-signup'>
                        <form action='' className='sign-in-form' onSubmit={handleSubmit}>
                            <h2 className='title'>Sign In</h2>
                            <div className='input-feild'>
                                <label><FaUser /></label>
                                <input type='email' required placeholder='Email' name='email' value={formData.email} className='' onChange={handleChange} />
                                {/* <ErrorMsg id="LusernameMessage" value={LusernameMsg} /> */}
                            </div>
                            <div className='input-feild'>
                                <label><FaLock /></label>
                                <input type='Password' required placeholder='Password' name='password' className='' value={formData.password} onChange={handleChange} />
                                {/* <ErrorMsg id="LpasswordMessage" value={LpasswordMsg} /> */}
                            </div>
                            <input type='submit' value='Login' className='btn-2 solid' />
                            <label className='social-text'>Or Login Using</label>
                            <div className='social-media'>
                                <a href='asd' className='social-icons'>
                                    <FaFacebook />
                                </a>
                                {/*  <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                                */}
                                {/* <GoogleBtn></GoogleBtn> */}
                                <GoogleLogin 
                                    clientId='478668842778-9dp0645g3thr4oga6kfrldi9ktehvsce.apps.googleusercontent.com'
                                    render={(renderProps) => (

                                        <span className='social-icons'>
                                            <FaGoogle onClick={renderProps.onClick} disabled={renderProps.disabled} />
                                        </span>
                                    )}
                                    onSuccess={googleSuccess}
                                    onFailure={googleFailure}
                                    cookiePolicy='single_host_origin'
                                />
                                <a href='dsd' className='social-icons'>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </form>

                        <form action='' className='sign-up-form' onSubmit={handleSubmit}>
                            <h2 className='title'>Registration</h2>
                            <div className='name'>
                                <div className='input-feild-a'>
                                    <label><FaClone /></label>
                                    <input type='text' required name='firstName' onChange={handleChange} value={formData.firstName} placeholder='First Name' className='' />
                                </div>
                                <div className='input-feild-a'>
                                    <label><FaClone /></label>
                                    <input type='text' required name='lastName' placeholder='Last Name' value={formData.lastName} className='' onChange={handleChange} />
                                </div>
                            </div>
                            <div className='input-feild'>
                                <label><FaVoicemail /></label>
                                <input type='email' required placeholder='Email' name='email' className='' value={formData.email} onChange={handleChange} />
                            </div>
                            <div className='input-feild'>
                                {/* <label>Password</label> */}
                                <label><FaLock /></label>
                                <input type='Password' required name='password' placeholder='Password' className='' value={formData.password} onChange={handleChange} />
                            </div>
                            {/* <div className='passwordcheck'>
                            <small>at least 6 characters</small>
                            <small>one lowercase</small>
                            <small>one uppercase</small>
                            <small>one number</small>
                            <small>one special symbol</small>
                            </div> */}
                            {formData.password && (
                                <div className="ml-1" style={{ columns: 2 }}>
                                    <div>
                                        {hasSixChar ? (
                                            <span className="text-success">
                                                {/* <CheckCircleIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>at least 6 characters</small>
                                            </span>
                                        ) : (
                                            <span className="text-danger">
                                                {/* <CancelIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>at least 6 characters</small>
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        {hasLowerChar ? (
                                            <span className="text-success">
                                                {/* <CheckCircleIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one lowercase</small>
                                            </span>
                                        ) : (
                                            <span className="text-danger">
                                                {/* <CancelIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one lowercase</small>
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        {hasUpperChar ? (
                                            <span className="text-success">
                                                {/* <CheckCircleIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one uppercase</small>
                                            </span>
                                        ) : (
                                            <span className="text-danger">
                                                {/* <CancelIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one uppercase</small>
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        {hasNumber ? (
                                            <span className="text-success">
                                                {/* <CheckCircleIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one number</small>
                                            </span>
                                        ) : (
                                            <span className="text-danger">
                                                {/* <CancelIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one number</small>
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        {hasSpecialChar ? (
                                            <span className="text-success">
                                                {/* <CheckCircleIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one special symbol</small>
                                            </span>
                                        ) : (
                                            <span className="text-danger">
                                                {/* <CancelIcon
                                                    className="mr-1"
                                                    fontSize="small"
                                                /> */}
                                                <small>one special symbol</small>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className='input-feild'>
                                {/* <label>Password</label> */}
                                <label><FaLock /></label>
                                <input type='Password' required name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} className='' onChange={handleChange} />
                            </div>
                            {formData.password && formData.confirmPassword && (
                                    formData.password === formData.confirmPassword ? (
                                        <span className="text-success">
                                          <small>Password does match</small>  
                                        </span>
                                    ) : (
                                        <span className="text-danger">
                                           <small>Password does not match</small>  
                                        </span>
                                    )
                            )}
                            <input type='submit' value='Register' className='btn-2 solid' />
                            <label className='social-text'>Or Register Using</label>
                            <div className='social-media'>
                                <a href='asd' className='social-icons'>
                                    <FaFacebook />
                                </a>
                                <GoogleLogin 
                                    clientId='478668842778-9dp0645g3thr4oga6kfrldi9ktehvsce.apps.googleusercontent.com'
                                    render={(renderProps) => (

                                        <span className='social-icons'>
                                        <FaGoogle onClick={renderProps.onClick} disabled={renderProps.disabled} />
                                        </span>
                                    )}
                                    onSuccess={googleSuccess}
                                    onFailure={googleFailure}
                                    cookiePolicy='single_host_origin'
                                />
                                {/* <GoogleBtn></GoogleBtn> */}
                                <a href='sd' className='social-icons'>
                                    <FaGooglePlus
                                     />
                                </a>
                                <a href='dsd' className='social-icons'>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='panel-container'>
                    <div className='panel left-panel'>
                        <div className='content'>
                            <h3>Create New Account</h3>
                            <p>If you dont have an Account please create a new one</p>
                            <input type='button' value='Sign Up' className='btn-2 transparent' onClick={SignUp} />
                        </div>
                        <img src={img1} className='image' alt='' />
                    </div>

                    <div className='panel right-panel'>
                        <div className='content'>
                            <h3>Already Have A Account ....!</h3>
                            <p>I already have an account</p>
                            <input type='button' value='Login' className='btn-2 transparent' onClick={SignIn} />
                        </div>
                        <img src={img2} className='image' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm