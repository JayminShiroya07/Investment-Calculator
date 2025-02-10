import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

const INITITA_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITITA_VALUES);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  const inputIsValid = userInput.duration >= 1 && 
                        userInput.annualInvestment >=1 &&
                        userInput.expectedReturn >=1 &&
                        userInput.initialInvestment >=1;

  return (
    <>
      <Header/> 
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a valid data..!</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </>
  );
}

export default App;
