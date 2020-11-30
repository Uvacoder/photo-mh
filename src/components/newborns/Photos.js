import React from 'react'
// Import SRLWrapper
import { SRLWrapper } from 'simple-react-lightbox'
import Masonry from 'react-masonry-css'

function Photos() {
  return (
    <div className='MyComponent'>
      <SRLWrapper>
        <Masonry
          breakpointCols={3}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'>
          {/* array of JSX items */}

          <a href='img/baby1.jpg' data-attribute='SRL'>
            <img src='img/baby1-thumb.jpg' alt='baby 1' />
          </a>
          <a href='img/baby2.jpg' data-attribute='SRL'>
            <img src='img/baby2-thumb.jpg' alt='baby 2' />
          </a>
          <a href='img/baby3.jpg' data-attribute='SRL'>
            <img src='img/baby3-thumb.jpg' alt='baby 3' />
          </a>
          <a href='img/baby4.jpg' data-attribute='SRL'>
            <img src='img/baby4-thumb.jpg' alt='baby 4' />
          </a>
          <a href='img/baby5.jpg' data-attribute='SRL'>
            <img src='img/baby5-thumb.jpg' alt='baby 5' />
          </a>
          <a href='img/baby6.jpg' data-attribute='SRL'>
            <img src='img/baby6-thumb.jpg' alt='baby 6' />
          </a>
          <a href='img/baby7.jpg' data-attribute='SRL'>
            <img src='img/baby7-thumb.jpg' alt='baby 7' />
          </a>
          <a href='img/baby8.jpg' data-attribute='SRL'>
            <img src='img/baby8-thumb.jpg' alt='baby 8' />
          </a>
          <a href='img/baby9.jpg' data-attribute='SRL'>
            <img src='img/baby9-thumb.jpg' alt='baby 9' />
          </a>
          <a href='img/baby10.jpg' data-attribute='SRL'>
            <img src='img/baby10-thumb.jpg' alt='baby 10' />
          </a>
          <a href='img/baby11.jpg' data-attribute='SRL'>
            <img src='img/baby11-thumb.jpg' alt='baby 11' />
          </a>
          <a href='img/baby12.jpg' data-attribute='SRL'>
            <img src='img/baby12-thumb.jpg' alt='baby 12' />
          </a>
        </Masonry>
      </SRLWrapper>
    </div>
  )
}

export default Photos
