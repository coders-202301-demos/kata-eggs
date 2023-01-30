import { useState } from "react";
import "./Egg.css";

const Egg = (): JSX.Element => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <button
      className={`egg${status ? " egg--on" : ""}`}
      onClick={toggleStatus}
    ></button>
  );
};

export default Egg;
