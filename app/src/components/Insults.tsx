import React from "react";

const Insults = () => {
  return (
    <div className="insults">
      <div className="insults__content">
        <img
          className="insults__image"
          src="./public/images/william.png"
          alt="William"
        />
        <p className="insults__text">
          <span className="text__speaker">William: </span>Thou art a John-Apple!
        </p>
        <button className="insults__cta">Try Again</button>
      </div>
    </div>
  );
};

export default Insults;
