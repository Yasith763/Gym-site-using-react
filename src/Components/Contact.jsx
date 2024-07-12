import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
        <h1><strong>CONTACT US</strong></h1>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='E-mail' required/>
            <textarea placeholder='Write Here.............' name='message'></textarea>
            <input type='submit' value='send'/>
        </form>

    </div>
  )
}
