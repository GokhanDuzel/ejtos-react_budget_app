import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-info">
      Currency  
      <select
        name="Location"
        id="Location"
        onChange={(event) => changeCurrency(event.target.value)}
      >
        <option className="dropdown-item" value="$">
          $ Dollar
        </option>
        <option className="dropdown-item" value="£">
          £ Pound
        </option>
        <option className="dropdown-item" value="€">
          € Euro
        </option>
        <option className="dropdown-item" value="₹">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default Currency;
