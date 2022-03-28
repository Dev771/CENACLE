import React from 'react'
import './sharebutton.css'

const Sharebutton = ({SbuttonClose}) => {

  const Copy = (e) => {
    navigator.clipboard.writeText(e.target.name);
    // alert("link copied!!!");
  }

  return (
      <div className='Sharecrow'>
        <div className="share-dialog is-open">
            <header>
                <h3 className="dialog-title">Share this With your Frands</h3>
                <input type="button" className='closeButton' value="X" onClick={() => SbuttonClose(false)}/>
            </header>
            <div className="link">
                <div className="pen-url " id="url">https://cenacle.online/</div>
                <button type="button" name={"https://cenacle.online/"} onClick={(e) => Copy(e)} className="copy-link">Copy Link</button>
            </div>
        </div>
    </div>
  )
}

export default Sharebutton