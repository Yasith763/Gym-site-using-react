import React from 'react'

export default function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2><strong>{props.title}</strong></h2>
            <p>A gym, short for gymnasium,is an indoor venue for exercise and sports. The word is derived from the ancient Greek term </p>
        </div>

    </div>
  )
}
