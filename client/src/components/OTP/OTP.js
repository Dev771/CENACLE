import React ,{useState} from 'react';
import './OTP.css';
import img2 from '../../img/sideimg2.svg';
import { FaMailBulk } from 'react-icons/fa';
import {useParams , useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {verifyOTP} from '../../actions/Auth';


const OTP = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Otp ,setOtp] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        dispatch(verifyOTP(id, Otp, navigate ))
    }


  return (
    <div style={{overflowY : "hidden" , height : "90vh"}}>
        <div class="circle">
        </div>
        <form class="whaat" onSubmit={handleSubmit}>
            <div class="flexin">
                <h2 class='title'>OTP dede:</h2>
                <div class='input-feild'>
                    <label><FaMailBulk /></label>
                    <input type='text' required placeholder='OTP' name='OTP' className='' onChange={(e) => setOtp(e.target.value)} />
                </div>
                <div class="create">
                    <button type="submit" class="btn btn-primary waygod" for="create-post">Register Crow</button>
                </div>
            </div>
            <div>
             <img src={img2} class='imageOTP' alt='' />
            </div>
        </form>
    </div>
  )
}

export default OTP