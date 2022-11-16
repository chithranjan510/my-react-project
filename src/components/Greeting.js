import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }

  return <div>
    <h1>Hello World</h1>
    {!changedText && <Output>its good to see you</Output>}
    {changedText && <Output>everything changed</Output>}
    <button onClick={changeTextHandler}>change</button>
  </div>
}

export default Greeting;