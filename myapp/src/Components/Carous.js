import React from 'react'
import img1 from  './images/karkidakam-1920.jpg'
import img2 from  './images/1920_hill.jpg'
import img3 from  './images/destination_wessing-1920x650.jpg'
import img4 from  './images/ipc-1920x650.jpg'
import img5 from  './images/riverreafting-1920x6501.jpg'
import { Carousel } from 'react-bootstrap'

const Carous = () => {


  return (
    <div>
        
        <Carousel>
        
      <Carousel.Item>
        <img src={img1} alt=''></img>
        
        
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt=''></img>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt=''></img>
       
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt=''></img>
       
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} alt=''></img>
       
      
      </Carousel.Item>
      

    </Carousel>

    </div>
  )
}

export default Carous