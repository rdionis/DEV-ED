// https://www.youtube.com/watch?v=dGcsHMXbSOA&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE

import React, { useState } from "react";
import "../App.css";
import Tweet from "./Tweet";
import data from "../data.json";

const App = () => {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users] = useState(data);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      {/*adding a className in React */}
      <div className="counter-container">
        <h1 className={isRed ? "red" : ""}>Change my colour!</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
      <div className="tweet-container">
        {users.map((user) => (
          <Tweet name={user.name} message={user.message} likes={user.likes} />
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="app">

  //     {/* <Tweet name="Dev ED" message="This is a random tweet" likes="500 likes" />
  //     <Tweet
  //       name="John Snow"
  //       message="I am the true king"
  //       likes="1 000 likes"
  //     />
  //     <Tweet name="Traversy Media" message="700k my dudes" likes="200 likes" />
  //     <Tweet
  //       name="Mosh"
  //       message="My new course is available"
  //       likes="10.000 likes"
  //     /> */}
  //     {/* <button onClick={sayHello}>Hello</button> */}
  //     {/*We add the curly braces here to the "onClick" to be able to write JavaScript // without the braces (and with ""), it would be plain html*/}
  //   </div>
  // );
};

export default App;
