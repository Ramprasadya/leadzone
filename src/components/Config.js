import React, { useEffect, useState } from "react";
import Card from "./Card";

const Config = () => {
  //https://jsonplaceholder.typicode.com/users

  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result);
      });
  }, []);

  return (
    <div>
      {user.map((item) => {
        return (
        <div className="container-fluid py-5 ">
         <div className="row">
         <div className="col-6 text-center"  key={item.id}>
           
           <Card
             name={item.name}
             email={item.email}
             number={item.phone}
             web={item.website}
             address={item.address.city}
           />
         </div>
         </div>
         </div>
        );
      })}
    </div>
  );
};

export default Config;
