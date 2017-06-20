import React, { Component } from 'react';

class LinkImages extends Component {
 

  render() {
    
    return (
      <div key={this.props.link} className="LinkImagesSection">
        <div className={this.props.name} >
          <a  className="anchorLink" href={this.props.link}>
            <img className="linkImg" src={this.props.img} alt={this.props.name} />  
          </a>
        </div>
      </div>
    );
  }
}

export default LinkImages;