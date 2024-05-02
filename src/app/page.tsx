
import React from 'react'
import Carousel from './Components/Carousel'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Solotions from './Components/Solutions'
import GetInTouch from './Components/GetInTouch'
const page = () => {
  return (
    <div className='bg-black'>

<Carousel/>
<Hero/>


<Services/>
<Solotions/>
<GetInTouch/>

    </div>
  )
}

export default page