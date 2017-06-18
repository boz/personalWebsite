import React, { Component } from 'react';

class LinkImages extends Component {
 
  render() {
    return (
      <div className="LinkImagesSection">
        <div className={this.props.name} >
          <a key={this.props.name} className="anchorLink" href={this.props.link}>
              <img className="linkImg" src={this.props.img} alt={this.props.name} />  
          </a>
        </div>
      </div>
    );
  }
}

export default LinkImages;