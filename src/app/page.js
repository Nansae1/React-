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

export default function Home() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 40000));

  const [number1, setNumber1] = useState(Math.floor(Math.random() * 40000));

  const [result, setResult] = useState(null);

  const changeCount = () => {
    setResult(number * number1);
  };

  return (
    <div className="flex gap-5 h-screen w-screen justify-center items-center">
      <div>{number}</div>
      <div>*</div>
      <div>{number1}</div>
      <div>=</div>
      <div>{result}</div>
      <button onClick={changeCount}>See the answer!</button>
    </div>
  );
}

// export default function Home () {
//   const [color, setColor] = useState("orange");
//   const changeColor = () => {
//     setColor("red");
//   };
//   return (
//     <>
//       <div>My favorite color is {color}</div>
//       <button onClick={changeColor}>Click me!</button>
//     </>
//   )
// }

// export default function Home() {
//   function calculateSum() {}
//   return (
//     <div className="flex gap-40 h-screen w-screen justify-center items-center">
//       <div className="flex  ">
//         <input type="number" placeholder="enter first number"></input>
//         <div>+</div>
//         <input type="number" placeholder="enter second number"></input>
//         <div>=</div>
//         <div></div>
//       </div>
//       <button onClick={calculateSum} className="border-2 border-black flex ">
//         calculateSum
//       </button>
//     </div>
//   );
// }
