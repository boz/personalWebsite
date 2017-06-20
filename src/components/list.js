import React, { Component } from 'react';

class List extends Component {
  constructor(){
    super();
    this.renderList = this.renderList.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  renderListItem(lst){
    console.log("lst", lst);
    // const li = lst.map(item => {
    //   return (<li key={item} className="listListItem"> {item} </li>);
    // });
   
  }

  // const li = miniDict[indKey].map(item => {
          
  //         return (<li key={item} className="textList"> {item} </li>);
  //       });

  //       return (
  //         <div key={indVal} className="textDict">
  //           <ul> <span className="textListHeader"> {indKey} </span> {li} </ul>
  //         </div>
  //       );

  renderList(elem) {
    
    return elem.map(item => {
      console.log("item", item);
      return Object.keys(item).map(dictKey => {
        console.log("dictKey", dictKey);
        return ( 
          <div key={dictKey}>
            <div className="listTitle"> {dictKey} </div>
            <ul className="listItemHeader"> 
              {item[dictKey].map(lst => {
                console.log("lst", lst);
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