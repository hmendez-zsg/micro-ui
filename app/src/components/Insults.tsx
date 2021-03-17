import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "./AppContext";
import { IAppContext, IResponse } from "./types";

const Insults = () => {
  const appContext: IAppContext = useContext(AppContext);
  const [insult, setInsult] = useState("");

  const fetchInsult = async () => {
    const response = await axios.get<IResponse>(appContext.serviceHost);
    if (response && response.data && response.data.insult) {
      setInsult(response.data.insult);
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
