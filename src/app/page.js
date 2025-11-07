"use client";

import { use, useState } from "react";

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
//   const [number, setNumber] = useState(Math.floor(Math.random() * 40000));

//   const [number1, setNumber1] = useState(Math.floor(Math.random() * 40000));

//   const [result, setResult] = useState(null);

//   const changeCount = () => {
//     setResult(number * number1);
//   };

//   return (
//     <div className="flex gap-5 h-screen w-screen justify-center items-center">
//       <div>{number}</div>
//       <div>*</div>
//       <div>{number1}</div>
//       <div>=</div>
//       <div>{result}</div>
//       <button onClick={changeCount}>See the answer!</button>
//     </div>
//   );
// }

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

// export default function Home() {
//   const [name, setName] = useState("");
//   const [showName, setShowName] = useState(false);
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onShowName = () => {
//     setShowName(true);
//   };
//   return (
//     <div className=" flex flex-col w-[300px] gap-3 m-auto mt-60">
//       <input
//         className="border rounded-md px-4 py-2 border-gray-200"
//         placeholder="Name"
//         value={name}
//         onChange={onChangeName}
//       ></input>
//       <button
//         onClick={onShowName}
//         className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//       >
//         Хадгалах
//       </button>
//       {showName && <p className="text-lg font-medium">{name}</p>}
//     </div>
//   );
// }

// export default function Home() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [showName, setShowName] = useState(false);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeAge = (e) => {
//     setAge(e.target.value);
//   };

//   const onShowName = () => {
//     setShowName(true);
//   };
//   return (
//     <div className=" flex flex-col w-[300px] gap-3 m-auto mt-60">
//       <input
//         className="border rounded-md px-4 py-2 border-gray-200"
//         placeholder="Name"
//         value={name}
//         onChange={onChangeName}
//       ></input>
//       <input
//         className="border rounded-md px-4 py-2 border-gray-200"
//         placeholder="Age"
//         value={age}
//         onChange={onChangeAge}
//       ></input>
//       <button
//         onClick={onShowName}
//         className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//       >
//         Хаpах
//       </button>
//       {showName && (
//         <p className="text-lg font-medium">
//           hi {name}, you are {age} years old.
//         </p>
//       )}
//     </div>
//   );
// }

export default function Home() {
  const [number, setNumber] = useState("");
  const [number1, setNumber1] = useState("");
  const calculateSum = () => {};

  return (
    <div className="flex flex-col h-screen items-center justify-center w-[300px] gap-3 ">
      <input
        className="border rounded-md px-4 py-2 border-gray-200"
        placeholder="number"
        value={number}
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <input
        className="border rounded-md px-4 py-2 border-gray-200"
        placeholder="number"
        value={number1}
        type="number"
        onChange={(e) => setNumber1(e.target.value)}
      ></input>
      <button onClick={calculateSum}>Calculate</button>
      <div>{Number(number) + Number(number1)}</div>
    </div>
  );
}
// export default function Home() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleSave = () => {
//     setTasks((prevTasks) => [...prevTasks, task]);
//   };

//   return (
//     <div className=" flex flex-col w-[300px] gap-3 m-auto mt-60">
//       <input
//         className="border rounded-md px-4 py-2 border-gray-200"
//         placeholder="Taks"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       ></input>
//       <button
//         onClick={handleSave}
//         className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//       >
//         Save
//       </button>
//       {tasks.map((task, index) => (
//         <div key={index}>{task}</div>
//       ))}
//     </div>
//   );
// }
