import React from 'react'
import Header from './Header'
import { BACKGROUND_IMG } from '../utils/constants'

const Browse = () => {
  return (
    <div>
      <Header />
      <img className='relative' src={BACKGROUND_IMG} alt="" />
    </div>
  )
}

export default Browse
