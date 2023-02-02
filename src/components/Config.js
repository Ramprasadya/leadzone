import React, { useEffect, useState } from "react";
import Card from "./Card";

const Config = () => {
  //https://jsonplaceholder.typicode.com/users

  const [user, setUser] = useState([]);
  const [next, setnext] = useState(3)
  

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users?_start=0&_limit=3";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result);
      });
  }, []);

  const handlePrevClick=async()=>{
    
  }
  const handleNextClick=async()=>{
  
    const url =  `https://jsonplaceholder.typicode.com/users?_start=${next}&_limit=${next}`;
   await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result);
       setnext(next+3)
       
      });

  }
  return (
    <div>
      {user.map((item) => {
        return (
       
         <div className="col-6 text-center"  key={item.id}>
           
           <Card 
           id = {item.id}
             name={item.name}
             email={item.email}
             number={item.phone}
             web={item.website}
             username={item.username}
             city = {item.address.city}
             state = {item.address.street}
             compnay = {item.company.name}
           />
         </div>
       
        );
      })}
      <div class="d-flex justify-content-around">
      <button type="button" className="btn btn-primary" onClick={handlePrevClick}>Previous</button>
    <button type="button" className="btn btn-primary" onClick={handleNextClick}>Next</button>
      </div>
      
    </div>
  );
};

export default Config;
