import React from 'react'
import {  useNavigate } from 'react-router-dom'
import "./styles/card.css"
const Card = (props) => {

 let navigate = useNavigate()

  const handleClick=(event)=>{
    const id = props.id
    event.preventDefault();
    let path = `/user/:${id}`
    navigate(path)
  
   
  }
  return (
   <>
   <section className='section left' >
    <div>
    <p className='top1'>{props.username}</p>
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
    <button className='left btns' to=""    onClick={handleClick} >detail</button>
    </div>
   </section>

   
   </>
  )
  
}

export default Card