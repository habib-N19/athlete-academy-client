import React from 'react'

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className='mx-auto my-6 text-center md:w-1/5'>
      <h2 className='mb-3 text-4xl uppercase'>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}

export default SectionTitle
