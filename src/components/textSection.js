import React, { Component } from 'react';
import Images from './images';
import LinkImages from './linkImages';
class TextSection extends Component {
  constructor(){
    super();
    this.renderText = this.renderText.bind(this);
    this.renderLinkImgDiv = this.renderLinkImgDiv.bind(this);
    
  }

  renderLinkImgDiv (obj) {
    let name=obj.name;
    let byLine=obj.byLine;
    let link=obj.link;
    let img=obj.img;

    return(
      <LinkImages key={link} name={name} link={link} img={img} />
      
    );
        
  }

  renderText(elem) {
    
    return elem.map(miniDict => { 
      
      const indKey = Object.keys(miniDict)[0];
      const indVal = miniDict[indKey];
      
    
      if(indKey ==="first" || indKey==="none"){
        
        return ( 
          
          <div key={indVal} className={indKey}>{indVal} </div> 
         
        );

      } 
      else if (indKey ==="img"){
        
        let name=indVal.name;
        let byline=indVal.byline;
        let link=indVal.link;
        let img=indVal.img;
    
        return(

          <Images key={byline} name={name} byline={byline} link={link} img={img} />
        );
      } 
      else if (indKey==="linkImg"){
        
        return(
          <div className="textLinkImgDiv">
            {indVal.map(obj => {
              return this.renderLinkImgDiv(obj);
            })}
          </div>
        );
      
        
      }

      else {
      
        const li = miniDict[indKey].map(item => {
          
          return (<li key={item} className="textList"> {item} </li>);
        });

        return (
          <div key={indVal} className="textDict">
            <ul> <span className="textListHeader"> {indKey} </span> {li} </ul>
          </div>
        );
      }
        
    });
  
  }

  render() {
    
    return (
      <div className="textSection">
        <div className={this.props.name} >
          <div className="textHeader"> {this.props.name} </div>
          <div className="textText">

            {this.props.stateName.map(elem => {
              return this.renderText(elem);
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default TextSection;