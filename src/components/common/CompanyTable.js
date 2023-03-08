import React from "react";
import ReactDOM from "react-dom";
import CompanyCell from "./CompanyCell";

import AmmaratiImg from "../../img/comp-ammirati.svg";
import CodeAdvantageImg from "../../img/comp-codeadvantage.png";
import AwsImg from "../../img/comp-aws.svg";
import UcsImg from "../../img/comp-ucs.png";

class CompanyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyImages: [AmmaratiImg, CodeAdvantageImg, AwsImg, UcsImg],
    };
  }

  render() {
    return (
      <div className="columns is-multiline is-mobile">
        {this.state.companyImages.map((el, ind) => (
          <CompanyCell companyPicture={el} key={"company " + (ind + 1)} />
        ))}
      </div>
    );
  }
}

export default CompanyTable;
