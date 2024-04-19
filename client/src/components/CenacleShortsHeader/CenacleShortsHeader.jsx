import React, { useEffect } from 'react';

import './style.css';
import ShortView from '../ShortView/ShortView';

const CenacleShortsHeader = ({ width }) => {
  
  useEffect(() => {
    document.getElementById("shortheader").style.width = width + 'px';
  }, [width]);
  
  return (
    <div id="shortheader" className='cenacleHeaderView'>
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView />
      <ShortView add={"AddCSS"} />
    </div>
  )
}

export default CenacleShortsHeader;