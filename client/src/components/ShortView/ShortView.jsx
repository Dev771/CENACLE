import React, { useState } from 'react'

import Plus from '../../img/Plus.png';
import './style.css';

const ShortView = ({ add }) => {

  const [shortLoaded, setShortLoaded] = useState(false);

  return (
    <div className={`shortViewHomePage ${add} ${shortLoaded || add !== undefined ? "" : "skeleton"} `}>
      <div className='text'>
        {
          add !== undefined ? (
            <img src={Plus} alt='plus' />
          ) : (null)
        }
      </div>
    </div>
  )
}

export default ShortView;