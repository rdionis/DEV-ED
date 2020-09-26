import React from "react";

//using the props keyword

// const Tweet = (props) => {
//   return (
//     <div className="tweet">
//       <h3>{props.name}</h3>
//       <p>{props.message}</p>
//       <h4>{props.likes}</h4>
//     </div>
//   );
// };

//simplified way --> destructuring
const Tweet = ({ name, message, likes }) => {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h4>{likes}</h4>
    </div>
  );
};

export default Tweet;
