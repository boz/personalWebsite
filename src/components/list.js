import React, { Component } from 'react';

class List extends Component {
  constructor(){
    super();
    this.renderList = this.renderList.bind(this);
    
  }

  renderList(elem) {
    
    return elem.map(item => {
      return Object.keys(item).map(dictKey => {
        return ( 
          <div key={dictKey}>
            <div className="listTitle"> {dictKey} </div>
            <ul className="listItemHeader"> 
              {item[dictKey].map(lst => {
                return (<li key={lst} className="listListItem"> {lst} </li>);
              })}
            </ul> 
          </div>
        );
      })
    })
  }

  render() {
    return (
      <div className="listSection">
        <div className={this.props.name} >
          <div className="listHeader"> {this.props.name} </div>
          <div className="listText">

            {this.props.stateName.map(elem => {
              return this.renderList(elem);
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default List;