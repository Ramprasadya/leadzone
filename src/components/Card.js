import React, { useState } from 'react'
import "./styles/card.css"
const Card = (props) => {

  const [id, setId] = useState(null)

  const handleClick=(event)=>{
  setId(id)
  }
  return (
   <>
   <section className='section left' >
    <div>
    <p className='top'>{props.username}</p>
    </div>
    <div className='left'>
      <p className='bold'>CONTACT</p>
      <p>{props.name}</p>
    </div>
    <div className='left'>
      <p className='bold'>CITY</p>
      <p>{props.city}</p>

    </div>
    <div className='left'>
      <p className='bold'>STATE</p>
      <p>{props.state}</p>
    </div>
    <div>
    <button className='left btns' type='submit' value={id}   onClick={handleClick} >detail</button>
    </div>
   </section>

  
   </>
  )
}

export default Card