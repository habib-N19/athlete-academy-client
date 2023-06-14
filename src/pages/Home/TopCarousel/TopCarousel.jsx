import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
const TopCarousel = () => {
  return (
    <div className=' mx-auto'>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={500}
        stopOnHover={true}
        autoPlay={true}
        interval={4000}
      >
        {/* TODO: banner image missing */}
        <div>
          <img
            src='https://i.ibb.co/JxRDMvh/image.png

'
          />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src='https://i.ibb.co/Jt3yMvP/image.png' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src='https://i.ibb.co/M2kpr6K/image.png' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default TopCarousel
