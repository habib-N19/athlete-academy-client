import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const TopCarousel = () => {
  return (
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
        <img src='assets/1.jpeg' />
        <p className='legend'>Legend 1</p>
      </div>
      <div>
        <img src='assets/2.jpeg' />
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src='assets/3.jpeg' />
        <p className='legend'>Legend 3</p>
      </div>
    </Carousel>
  )
}

export default TopCarousel
