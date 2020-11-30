import React from 'react'
import Gallery from 'react-grid-gallery'

const IMAGES = [
  {
    src: 'img/baby1.jpg',
    thumbnail: 'img/baby1.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: 'Baby 1',
  },
  {
    src: 'img/baby2.jpg',
    thumbnail: 'img/baby2.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby3.jpg',
    thumbnail: 'img/baby3.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby4.jpg',
    thumbnail: 'img/baby4.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby5.jpg',
    thumbnail: 'img/baby5.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby6.jpg',
    thumbnail: 'img/baby6.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby7.jpg',
    thumbnail: 'img/baby7.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby8.jpg',
    thumbnail: 'img/baby8.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby9.jpg',
    thumbnail: 'img/baby9.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby10.jpg',
    thumbnail: 'img/baby10.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby11.jpg',
    thumbnail: 'img/baby11.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  {
    src: 'img/baby12.jpg',
    thumbnail: 'img/baby12.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Baby 2',
  },
  // {
  //   src: 'img/baby12.jpg',
  //   thumbnail: 'img/baby12.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   caption: 'Baby 2',
  // },
]

const Photos = () => {
  return (
    <div>
      <Gallery images={IMAGES} />
    </div>
  )
}

export default Photos
