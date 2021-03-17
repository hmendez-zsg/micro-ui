import axios from "axios";
import React, { useEffect, useState } from "react";
import { IResponse } from "./types";

const Insults = () => {
  const [insult, setInsult] = useState("");

  const fetchInsult = async () => {
    const response = await axios.get<IResponse>(
      "http://localhost:8080/v2/api/simple/insult"
    );
    if (response && response.data && response.data.insult) {
      setInsult(response.data.insult);
      console.log(response.data.insult);
    }
  };

  useEffect(() => {
    if (insult === "") {
      fetchInsult();
    }
  }, [insult]);

  return (
    <div className="insults">
      <div className="insults__content">
        <img
          className="insults__image"
          src="./public/images/william.png"
          alt="William"
        />
        <If condition={insult && insult.length > 0}>
          <p className="insults__text">
            <span className="text__speaker">William: </span>
            {`${insult}!`}
          </p>
          <button className="insults__cta" onClick={fetchInsult}>
            Try Again
          </button>
        </If>
      </div>
    </div>
  );
};

export default Insults;
