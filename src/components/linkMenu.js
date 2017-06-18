import React, { Component } from 'react';

class LinkMenu extends Component {
    constructor() {
      super();
      this.renderLinkOptions = this.renderLinkOptions.bind(this);
    }

    renderLinkOptions(elem) {
      
      let name=elem[0]["name"];
      let link=elem[0]["link"];
      let img= elem[0]["img"];
      let byline=elem[0]["byline"]

      
      return(
        <li key={name} className="linkDiv">
          
            <a key={name} className="anchorLink" href={link}>
              <img className="linkImg" src={img} alt={name} />  
              <span className="linkTitle">{name} </span>
              < br/>
              <span className="linkByline"> {byline} </span>
            </a>

          
        </li>
        
      );

    }

  render() {
    return (
      <ul className="linkMenu">
        
        {this.props.linkOptions.map(elem => {
          return this.renderLinkOptions(elem);
        })}
        
        
      </ul>
    );
  }
}

export default LinkMenu;