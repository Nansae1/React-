"use client";

import { useState } from "react";

// import Image from "next/image";
// import { useState } from "react";

// export default function Home() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const decreaseCount = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div className="flex gap-5 h-screen w-screen justify-center items-center">
//       <button onClick={decreaseCount} className="text-5xl">
//         -
//       </button>
//       <div className="text-5xl">{count}</div>
//       <button onClick={increaseCount} className="text-5xl">
//         +
//       </button>
//     </div>
//   );
// }

// export default function Home() {
//   const [number, setNumber] = useState(43);
//   const changeCount = () => {
//     setNumber(30);
//   };

//   const [color, setColor] = useState("orange");
//   const changeColor = () => {
//     setColor("red");
//   };

//   return (
//     <div className="flex gap-5 h-screen w-screen justify-center items-center">
//       <div>45-15={number}</div>
//       <button onClick={changeCount}>See right answer!</button>

//       <div>My favorite color is {color}</div>
//       <button onClick={changeColor}>Click me!</button>
//     </div>
//   );
// }

export default function Home() {
  function calculateSum() {}
  return (
    <>
      <div className="flex">
        <input type="number" placeholder="enter first number"></input>
        <div>-</div>
        <input type="number" placeholder="enter second number"></input>
        <div>=</div>
        <div></div>
      </div>
      <button onClick={calculateSum}>calculateSum</button>
    </>
  );
}
