import React from 'react';
import ReactDOM from 'react-dom';

class CompanyCell extends React.Component {

  render() {
    return (
      <div className="column is-half-mobile is-one-quarter-tablet">
        <figure>
          <div className="comp-img" style={{backgroundImage: 'url(img/' + this.props.companyPicture + ')'}}></div>
        </figure>
      </div>
    );
  }
}

export default CompanyCell;