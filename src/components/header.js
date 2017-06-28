import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

        <div className="headerInnerDiv">

          <div className="imgDiv">
            <img className="yourImg" src={this.props.yourImg} alt={this.props.name} />
          </div>

          <div className="headerBuffer"></div>

          <div className="nameDiv">
            <div className="yourName"> {this.props.yourName} </div>
          </div>
          
          <div className="oneLinerDiv">
            {this.props.oneLiner} 
          </div>
          
        </div>
        
      </div>
    );
  }
}
//yourImg is a string but it is an image
Header.propTypes = {
  name: PropTypes.string,
  yourImg: PropTypes.string,
  yourName: PropTypes.string,
  oneLiner: PropTypes.string
}
export default Header;