import React from 'react'

const Testimonial = () => {
  return (
    <div className=' hero min-h-screen bg-base-200 w-11/12 mx-auto my-20 rounded'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src='../../../../public/testimonial.jpeg'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h4 className='text-2xl font-semibold'>
            A Summer Camp Transformation in Cricket -Adin
          </h4>
          <p className='py-6'>
            The summer camp for cricket I joined exceeded all expectations. The
            coaches were knowledgeable, passionate, and created a motivating
            environment. They personalized the training sessions, focusing on
            technique and skill development. The friendly competitions fostered
            teamwork and camaraderie. I saw remarkable improvements in my
            performance, with refined batting, increased bowling accuracy, and
            heightened game awareness. Implementing the strategies learned
            resulted in a significant boost during matches. The camp transformed
            me as a cricketer, instilling self-belief and a passion to excel. I
            highly recommend this camp to aspiring cricketers seeking
            exceptional coaching, personalized attention, and a supportive
            environment. Thank you to the coaching staff for an incredible
            experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
