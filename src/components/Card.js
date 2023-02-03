import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/card.css"
const Card = (props) => {

 

  const handleClick=(event)=>{
    event.preventDefault();
    
   
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
    <Link  to= "user"><button className='left btns'  onClick={handleClick} >detail</button></Link>
    </div>
   </section>
{/* 
   <div  > <Detail compnay={props.compnay}  /></div> */}
  
   </>
  )
  
}

export default Card