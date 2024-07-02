import React from 'react'

import "../App.css"

function Hero() {
    return (

        <div className='hero'>
            <span className='gap'>Get Bahria Town Pet Sitters, Groomers, Dog Walkers and <br /> Pet Boarding Near You.</span>

            <div>
                <input  type="text" placeholder='Taxi or Boarding?' />
                <button className='button'>Get Pet Service</button>
            </div>
        </div>


    )
}

export default Hero