import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import About from "../About"
const LoadScreen = () => {
    const [data,setData] = useState([]);
    const [done, setDone] = useState('');

    useEffect(() => {
        setTimeout(() =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
            setDone(true);
            });
        }, 2000);
    });
    
    return (
        <>
          {!done ? (
            <ReactLoading
              type={"bars"}
              color={"#03fc4e"}
              height={100}
              width={100}
            />
          ) : (
            <About />
          )}
        </>
      );

}

export default LoadScreen;