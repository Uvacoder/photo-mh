import React from 'react'
// Import SRLWrapper
import { SRLWrapper } from 'simple-react-lightbox'

function Photos() {
  return (
    <div className='MyComponent'>
      <SRLWrapper>
        <a href='img/baby1.jpg' data-attribute='SRL'>
          <img src='img/baby1.jpg' alt='baby 1' />
        </a>
        <a href='img/baby2.jpg' data-attribute='SRL'>
          <img src='img/baby2.jpg' alt='Whatever' />
        </a>
      </SRLWrapper>
    </div>
  )
}

export default Photos
