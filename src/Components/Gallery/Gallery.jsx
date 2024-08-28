import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.jpg'

const Gallery = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />      
        <img src={gallery_2} alt="" />      
        <img src={gallery_3} alt="" />      
        <img src={gallery_4} alt="" />      
        
      </div>
      <a href="https://photos.google.com/share/AF1QipMzis9TrMDKsYgquwF8EIoyP8irKOtzOzQLyNbzKjK5bsN5eEI4FXnVJOA1AShllw?key=TFhXcTc2MGhtMmYyUTRvT0NWR1ZCeXRoU1RQZXlR"><button className='btn'>See more here</button></a>
    </div>
  )
}

export default Gallery

