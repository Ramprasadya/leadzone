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
          <div key={item.id}>
            {" "}
            <Card
              name={item.name}
              email={item.email}
              number={item.phone}
              web={item.website}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Config;