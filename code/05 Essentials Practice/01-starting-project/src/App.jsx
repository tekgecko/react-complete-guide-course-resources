import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  });

  function handleChange(inputField, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputField]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      <Results userInput={userInput}/>
    </>
  );
}

export default App;
