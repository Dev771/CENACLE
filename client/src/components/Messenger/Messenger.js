import React from 'react'
import Mleft from './partials/Mleft'
import Right from '../HomeBody/Right'
import Mmain from './partials/Mmain'
import './partials/Mstyle.css'

const Messenger = () => {
  return (
    <div>
      <main >
        <div className='container message'>
        <Mleft/>
        <Mmain />
        </div>
      </main>
    </div>
  )
}

export default Messenger