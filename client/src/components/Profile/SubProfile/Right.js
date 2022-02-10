import React from 'react';
import Cam from '@material-ui/icons/CameraAlt'

const Right = () => {

    return (
        <div>
            <div class="right">
                <div className='Profile'>
                    <div style={{ background: 'blue' }} >
                        <span>
                            <button className='cameraButton'><Cam style={{ color: 'white' }} /></button>  
                        </span>
                        <button className='cameraButton'>
                            <Cam style={{ color: 'white' }} />
                        </button>
                    </div>
                    <div>
                        <button type='button'>Hello</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Right
