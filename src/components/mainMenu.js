import React, { Component } from 'react';

import Menu from './menu';
import LinkMenu from './linkMenu';

class MainMenu extends Component {

  render() {
    return (
      <div className={this.props.name} >
       <div className={this.props.isTop ? "innerMainMenu":"fixMenu" }> 
       <div className="nameDiv">
          <h1 className="yourName"> {this.props.yourName} </h1>
        </div>
          
        <div className="oneLinerDiv">
          {this.props.oneLiner} 
        </div>
        <LinkMenu linkOptions={this.props.linkOptions} />
        <Menu offsetVal={this.props.offsetVal} pageSections={this.props.pageSections} menuStyle={this.props.scrollPosition} yourName={this.props.yourName} oneLiner={this.props.oneLiner} isTop={this.props.isTop} handleClick ={this.props.handleClick} linkOptions={this.props.linkOptions}/>
      </div>
      </div>
    );
  }
}

export default MainMenu;