import Restrauntcard from "./Restrauntcard ";
import retailer_data from "../utils/mockData/";
import { useState, useEffect } from "react";
const Body = () => {
  let [ListofRetailers, setListofReatilers] = useState(retailer_data);
  return (
    <div className="body">
      <div className="filter">
        {/* <input type="text" placeholder="Search" /> */}
        <button
          className="filetr-btn"
          onClick={() => {
            ListofRetailers = ListofRetailers.filter((ret) =>
              ret.retailer.categories.includes("alcohol")
            );
            setListofReatilers(ListofRetailers);
          }}
        >
          Drug stores
        </button>
      </div>
      <div className="retailer-container">
        {ListofRetailers.map((retailer) => (
          <Restrauntcard key={retailer.retailer.id} retData={retailer} />
        ))}
      </div>
    </div>
  );
};
export default Body;
