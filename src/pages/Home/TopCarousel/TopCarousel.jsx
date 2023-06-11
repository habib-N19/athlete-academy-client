import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import image from '../../../../../pics/1.jpg'
const TopCarousel = () => {
  return (
    <div className='w-[500px] mx-auto'>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={500}
        stopOnHover={true}
        autoPlay={true}
        interval={3000}
      >
        {/* TODO: banner image missing */}
        <div>
          <img src={image} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={image} />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={image} />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default TopCarousel
