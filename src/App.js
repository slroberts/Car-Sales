import React from "react";
import {connect} from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//create one mapStateToProps and then pass down state via props.
const mapStateToProps = (state) => {
  return {
    car: state.carReducer.car,
    additionalPrice: state.carReducer.additionalPrice,
    additionalFeatures: state.carReducer.additionalFeatures,
  };
};

export default connect(mapStateToProps)(App);
