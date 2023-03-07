import React from 'react';
import ReactDOM from 'react-dom';
import CompanyCell from './CompanyCell';

class CompanyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyImages: ['comp-ammirati.svg','comp-codeadvantage.png', 'comp-aws.svg', 'comp-ucs.png'],
    };
  }

  render() {
    return (
      <div className="columns is-multiline is-mobile">
        {this.state.companyImages.map((el, ind) => <CompanyCell companyPicture={el} key={'company ' + (ind+1)} />)}
      </div>
    );
  }
}

export default CompanyTable;