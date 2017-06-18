import React, { Component } from 'react';
import Images from './images';
import LinkImages from './linkImages';
class TextSection extends Component {
  constructor(){
    super();
    this.renderText = this.renderText.bind(this);
    
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
        let byLine=indVal.byLine;
        let link=indVal.link;
        let img=indVal.img;
    
        return(

          <Images key={byLine} name={name} byLine={byLine} link={link} img={img} />
        );
      } 
      else if (indKey==="linkImg"){
        let name=indVal.name;
        let byLine=indVal.byLine;
        let link=indVal.link;
        let img=indVal.img;
       
        return(

          <LinkImages key={byLine} name={name} byLine={byLine} link={link} img={img} />
        );
      }

      else {
      
        const li = miniDict[indKey].map(item => {
          
          return (<li key={item} className="textList"> {item} </li>);
        });

        return (
          <div key={indVal} className="textDict">
            <ul> {indKey} {li} </ul>
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