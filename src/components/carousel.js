import React, { Component } from 'react';

class Carousel extends Component {
  constructor(){
    super();
    this.renderCarouselImg = this.renderCarouselImg.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackwardClick = this.handleBackwardClick.bind(this);
    
  }

  handleBackwardClick () {
    let current = this.props.isCurrent;
    let lenCarousel = this.props.lenCarousel;
    if ((current -1) != -1) {
      current = (current -1)%lenCarousel;
      this.setState({isCurrent: 0});
    } 
    else{ 
      current = (lenCarousel -1);
    }
    this.setState({isCurrent: current});
  }

  handleForwardClick () {
    let current = this.props.isCurrent;
    let lenCarousel = this.props.lenCarousel;
    current = (current +1)%lenCarousel;

    this.setState({isCurrent: current});
  }

  renderCarouselImg(img, i) {
    let isCurrent = this.props.isCurrent;
    return ( 
      
        <li key={img}>
          <img className="carouselImg" className={i == isCurrent ? "isSeen": "isNotSeen"} src={img} alt={img} />
        </li>
      
      );
  }

  render() {
    let name = "carousel" + this.props.name
    if (this.props.lenCarousel > 1){
      return (
        <div className="imgCarouselDiv">
          <div className={name}>
           
            <ul className="imgCarouselList">

              {this.props.imgList.map((img, i) => {
                return this.renderCarouselImg(img, i);
              })}

            </ul>

            <div className="btnCarouselDiv">
              <button className="btnbackwardImg" onClick={(e)=>{this.handleForwardClick(e)}} > </button>
              <button className="btnforwardImg" onClick={(e)=>{this.handleBackwardClick(e)}} > </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="imgCarouselDiv">
          <div className={name}>
           
            <ul className="imgCarouselList">

              {this.props.imgList.map((img, i) => {
                return this.renderCarouselImg(img, i);
              })}

            </ul>
          </div>
        </div>
      );
    }

  }
}

export default Carousel;
