import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
    this.renderList = this.renderList.bind(this);
    
  }

  renderList(elem) {
    Object.keys(elem).map(item => {
      return ( 
        <p key={item} className="listItem"> {item} </p> 
      );
    });
  }

  render() {
    return (
      <div className={this.props.name} >
        <div className="dark"> </div>
        <div className="headerInnerDiv">
          <div className="imgDiv">
            <img className="yourImg" src={this.props.yourImg} alt={this.props.name} />
          </div>
          <div className="headerBuffer">
          </div>
          
        </div>
      </div>
    );
  }
}

export default Header;