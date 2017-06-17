import React, { Component } from 'react';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;


class Menu extends Component {
  constructor() {
    super();
    this.renderPageOptions = this.renderPageOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(e){
    this.props.handleClick(e.target.value);
  }


  renderPageOptions(elem) {
    
    return(
      <Link key={elem} activeClass="active" to={elem} spy={true} smooth={true} offset={-25} duration={500} onSetActive={this.handleSetActive} handleClick={this.props.handleClick}>
        <button className="menuButton" onClick={e => {this.handleClick(e);}} type="button" value={elem}> {elem} </button>
      </Link>

    );


  }

  render() {
    return (
      <div className="menu">
        
        {this.props.pageSections.map(elem => {
          return this.renderPageOptions(elem);
        })}
        
        
      </div>
    );
  }
}

export default Menu;