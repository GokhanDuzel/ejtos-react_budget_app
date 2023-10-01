import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => { 
    if(newBudget > 20000) {
        alert("Budget value cannot exceed 20000");
        return;  
    }
    setNewBudget(event.target.value);
    console.log(budget)
    console.log(newBudget)
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    }); 
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        max={20000}
      ></input>
      {/* <button type="button" className="btn btn-info" onClick={increaseBudget}>Change budget</button> */}
    </div>
  );
};
export default Budget;
