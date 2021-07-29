import React, { useState, useEffect } from "react"; 
import axios  from "axios"; 

function Alaeddine() {

    const [usersList, setUsersList] = useState([]);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsersList(response.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
          {usersList.map((user, index) => (<h1 key={index}>{user.name}</h1>))}
             
        </div>
      );

}

export default Alaeddine;