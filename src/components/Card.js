import React from 'react'
import "./styles/card.css"
const Card = (props) => {
  return (
   <>
   <section className='section left' >
    <div>
    <p className='top'> {props.username}</p>
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
    <button className='left btns'> detail</button>
    </div>
   </section>

   {/* <div className='flex' >
   <button type="button" class="btn btn-success">Success</button>
   <button type="button" class="btn btn-success">Success</button>
   </div> */}
   </>
  )
}

export default Card