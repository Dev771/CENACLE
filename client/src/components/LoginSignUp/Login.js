import React, { useState } from 'react'
import { FaUser, FaVoicemail, FaLock, FaFacebook, FaGooglePlus, FaLinkedin, FaClone, } from 'react-icons/fa'
import './styles.css';
import { useNavigate } from 'react-router-dom'
import img1 from '../../img/sideimg.svg'
import img2 from '../../img/sideimg2.svg'

const RegistrationForm = () => {


    // Login 
    const navigate = useNavigate();
    const [Lusername, setLusername] = useState();
    const [Lpassword, setLPassword] = useState();
    const [LusernameMsg, setLusernameMsg] = useState();
    const [LpasswordMsg, setLPasswordMsg] = useState();
    const [formMsg, setFormMsg] = useState();
    // const { userData, setUserData } = useContext(UserContext);
    // const history = useHistory();
    // if (userData && userData !== null && userData.user && userData.user !== null && userData.user !== '') {
    //     history.push('/')
    // }

    const Loginsubmit = async (e) => {
        e.preventDefault();
        setFormMsg('')
        let check = true
        if (!Lusername) {
            check = false
            alert('please fill username')
        }
        else {
            setLusernameMsg('')
        }
        if (!Lpassword || Lpassword.length < 5) {
            check = false
            alert('please enter password (atleast 5 characters long)')
        }
        else {
            setLPasswordMsg('')
        }
        if (check) {
            try {
                // const loginRes = await login({ username: Lusername, password: Lpassword })
                // console.log(loginRes)
                setFormMsg('')
                // const [token, data, username] = loginRes
                // setUserData({ token, username: username, user: data })
                window.location = '/'

            }
            catch (err) {
                alert(err.message)

            }
        }
    }


    // Registration

    const [uname, setRUsername] = useState();
    const [password, setRPassword] = useState();
    // const [cpassword, setCPassword] = useState();
    const [fName, setRFName] = useState();
    const [lName, setRLName] = useState();
    // const [gender, setGender] = useState('m');
    const [email, setREmail] = useState();
    const [mobileNo, setMobileNo] = useState();
    const [usernameMsg, setUsernameMsg] = useState();
    const [passwordMsg, setPasswordMsg] = useState();
    const [cPasswordMsg, setCPasswordMsg] = useState();
    const [fNameMsg, setFNameMsg] = useState();
    const [lNameMsg, setLNameMsg] = useState();
    const [genderMsg, setGenderMsg] = useState();
    const [emailMsg, setEmailMsg] = useState();
    const [mobileNoMsg, setMobileNoMsg] = useState();
    // const [formMsg, setFormMsg] = useState();
    // const { setUserData } = useContext(UserContext);
    const Regsubmit = async (e) => {
        e.preventDefault();
        setFormMsg('')
        let check = true
        if (!fName) {
            check = false
            alert('please fill full name')
        }
        else {
            setFNameMsg('')
        }
        if (!lName) {
            check = false
            alert('please fill last name')
        }
        else {
            setLNameMsg('')
        }
        if (!email) {
            check = false
            alert('please fill email id')
        }
        else {
            setEmailMsg('')
        }
        if (!uname) {
            check = false
            alert('please fill username')
        }
        else {
            setUsernameMsg('')
        }
        // if (!mobileNo) {
        //     check = false
        //     setMobileNoMsg('please fill mobile number')
        // }
        // else {
        //     setMobileNoMsg('')
        // }
        // if (!gender) {
        //     check = false
        //     setGenderMsg('please select gender')
        // }
        // else {
        //     setGenderMsg('')
        // }
        if (!password || password.length < 5) {
            check = false
            alert('please enter password (atleast 5 characters long)')
        }
        else {
            setPasswordMsg('')
        }
        // if (cpassword !== password) {
        //     check = false
        //     setCPasswordMsg('Password and confirm password do not match')
        //     console.log("password does not match")
        // }
        // else {
        //     setCPasswordMsg('')
        // }
        if (check) {
            try {
                const newUser = { fName, lName, email, password, uname }
                // const regRes = await register(newUser)
                setFormMsg('')
                // const [token, data, username] = regRes
                // setUserData({ token, username: username, user: data })
                window.location = '/';
            }
            catch (err) {
                console.log('in regForm-registerSubmit ', err)
                alert(err.message)
            }
        }
    }






    const [state, setstate] = useState(false);

    const SignUp = () => {
        setstate(true);
        navigate('/login/SignUp');
    }

    const SignIn = () => {
        setstate(false);
        navigate('/login/SignIn');
    }



    return (
        <div>
            <div className={`container-1 ${state ? "sign-up-button" : ""}`}>
                <div className='form-container'>
                    <div className='signin-signup'>
                        <form action='' className='sign-in-form' onSubmit={Loginsubmit}>
                            <h2 className='title'>Sign In</h2>
                            <div className='input-feild'>
                                <label><FaUser /></label>
                                <input type='text' placeholder='Username' className='' onChange={(e) => setLusername(e.target.value)} />
                                {/* <ErrorMsg id="LusernameMessage" value={LusernameMsg} /> */}
                            </div>
                            <div className='input-feild'>
                                <label><FaLock /></label>
                                <input type='Password' placeholder='Password' className='' onChange={(e) => setLPassword(e.target.value)} />
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
                                <a href='sd' className='social-icons'>
                                    <FaGooglePlus />
                                </a>
                                <a href='dsd' className='social-icons'>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </form>

                        <form action='' className='sign-up-form' onSubmit={Regsubmit}>
                            <h2 className='title'>Registration</h2>
                            <div className='input-feild'>
                                <label><FaClone /></label>
                                <input type='text' placeholder='First Name' className='' onChange={(e) => setRFName(e.target.value)} />
                            </div>
                            <div className='input-feild'>
                                <label><FaClone /></label>
                                <input type='text' placeholder='Last Name' className='' onChange={(e) => setRLName(e.target.value)} />
                            </div>
                            <div className='input-feild'>
                                <label><FaVoicemail /></label>
                                <input type='email' placeholder='Email' className='' onChange={
                                    (e) =>
                                        setREmail(e.target.value)
                                } />
                            </div>
                            <div className='input-feild'>
                                {/* <label>Password</label> */}
                                <label><FaLock /></label>
                                <input type='Password' placeholder='Password' className='' onChange={(e) =>
                                    setRPassword(e.target.value)

                                } />
                            </div>
                            <input type='submit' value='Register' className='btn-2 solid' />
                            <label className='social-text'>Or Register Using</label>
                            <div className='social-media'>
                                <a href='asd' className='social-icons'>
                                    <FaFacebook />
                                </a>

                                {/* <GoogleBtn></GoogleBtn> */}
                                <a href='sd' className='social-icons'>
                                    <FaGooglePlus />
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