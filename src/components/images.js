import React, { Component } from 'react';

class Images extends Component {
 
  render() {
    return (
      <div className="ImagesSection">
        <div className={this.props.name} >


          <div className="ImagesDiv">

            <img className="projectImg" src={this.props.img} alt={this.props.img} />
          
          </div>
        </div>
      </div>
    );
  }
}

export default Images;