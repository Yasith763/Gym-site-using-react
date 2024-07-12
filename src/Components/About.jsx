import React from 'react'
import aboutimage from '../images/about.png'

export default function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1><strong>LEARN MORE ABOUT US</strong></h1>
            <p>At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.</p>
            <button><strong>READ ME</strong></button>
        </div>
    </div>
  )
}
