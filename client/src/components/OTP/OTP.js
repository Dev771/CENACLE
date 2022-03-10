import React from 'react';
import './OTP.css';

const OTP = () => {
  return (
    <div>
        <div class="circle">
        </div>
        <div class="whaat">
            <div class="flexin">
                <h2 class='title'>OTP dede:</h2>
                <div class='input-feild'>
                    <label><FaVoicemail /></label>
                    <input type='text' required placeholder='OTP' name='OTP' className=''  />
                </div>
                <div class="create">
                    <label class="btn btn-primary waygod" for="create-post">Register Crow</label>
                </div>
            </div>
            <div>
             <img src="sideimg.svg" class='imageOTP' alt='' />
            </div>
        </div>
    </div>
  )
}

export default OTP