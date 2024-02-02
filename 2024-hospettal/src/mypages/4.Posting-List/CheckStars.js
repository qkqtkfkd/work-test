import React, { useState, useRef } from "react";


const RATINGS = [0,1, 2, 3, 4];

function CheckStars(){
    const starsRef = useRef([]);
    const [clickIndex, setClickIndex] = useState(null);
  
    const checkStars = (clickIndex) => {
      console.log("click", clickIndex);
      starsRef.current.forEach((star, i) => {
        if (i <= clickIndex) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
      setClickIndex(clickIndex);
    };
  
    return (
      <div>
        {RATINGS.map((index) => (
          <span
            key={index}
            ref={(el) => (starsRef.current[index] = el)}
            onClick={() => checkStars(index)}
          >
            ★
          </span>
        ))}
      </div>
    );
  }
  



export default CheckStars;