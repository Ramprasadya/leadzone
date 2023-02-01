import React from 'react'

const Card = (props) => {
  return (
    <div className='row'>
    <div className="col-6">
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
    <p className="card-text">{props.number}</p>
    <p className="card-text">{props.address}</p>
    <a href={props.web} target="_blank" rel='noreferrer' className="card-link">{props.web}</a>
    {/* <a href="/" className="card-link">Another link</a> */}
  </div>
</div>
</div>
</div>
  )
}

export default Card