import React, { Component } from 'react';
import Scroll from 'react-scroll';
import ScrollEvent from 'react-onscroll';
import ReactTimeout from "react-timeout";

import Header from './header';
import Menu from './menu';
import LinkMenu from './linkMenu';
import DictionarySection from './dictionarySection';
import TextSection from './textSection';
import List from './list';

import yourImg from '../lauren_profile.jpg';
import calendarGlyph from '../calendar.png';
import notebookGlyph from '../notebook.png';
import newspaperGlyph from '../newspaper.png';
import facebookGlyph from '../facebook.png';
import githubGlyph from '../github.png';
import linkedInGlyph from '../linkedin.png';
import daily1 from '../daily1.png';
import daily2 from '../daily2.png';
import daily3 from '../daily3.png';
import notebook1 from '../notebook1.png';
import notebook2 from '../notebook2.png';



var Link       = Scroll.Link;
var Element    = Scroll.Element;


class App extends Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
    this.reSetOffSet = this.reSetOffSet.bind(this);

    this.state = {
      yourName: "Lauren Gordon-Fahn",
      oneLiner: "San Francisco Junior Developer, In Love With Javascript!",
      yourImg: yourImg,
      pageSections: ["Projects", "Stack", "About Me", "Contacts"],

      aboutMe:[
        [
          {"none": "I am a passionate and compassionate problem solver with a B.S. in Theoretical Mathmatics, a Masters in Acupuncture & Chinese Medicine, and Hackbright bootcamp under my belt. I am in love with making organization tools that are user friendly through software engineering. I love solving problems with a team be it engieering or of the human body."}
        ],
        [
          {"Traits of Math Mind":  
            [
              "A love for Logical Thought and problem solving", "Organization of large bodies of information", "The importance of examiing a problem near and far"
            ]
          }
        ],
        [
          {"Traits of an Acupuncture's Thinking" : 
            [
              "Listening", "Dedicated to team work", "Organizing stratigic long term plans for treatment", "Explaining information that is not native to someone"
            ]
          }
        ],
        [
          {"Traits of an Bootcamp Graduate":  
            [
              "Fast dedicated learner", "Being humble and googling my heart out"
            ]
          }
        ]
      ],
      
      linkOptions:[
        [{
          "name":"LinkedIn", "byline":"LinkedInlink","link": "https://www.linkedin.com/in/lauren-gordon-fahn/", "img":linkedInGlyph
        }], 
        [{
          "name":"GitHub", "byline":"GitHublink", "link": "https://github.com/laurengordonfahn", "img": githubGlyph
        }],
        [{ 
          "name": "Facebook", "byline":"facebookLink","link": "https://www.facebook.com/search/top/?q=Lauren+Gordon+New&init=public", "img": facebookGlyph
        }], 
        [{
          "name": "Daily", "byline": "DailyProjectLink", "link": "http://dailytrackingcalendar.herokuapp.com", "img": calendarGlyph
        }], 
        [{
          "name": "Notebook", "byline": "NotebookProjectLink", "link": "http://notebookonline.herokuapp.com", "img": notebookGlyph
        }]
      ],

      stack:[
        [ {"Languages":["Python","Ruby","JavaScript(ES6, Ajax, JSON)", "HTML", "CSS", "SQL"]},
          {"Operating Systems":["Mac OS X", "Linux"]},
          {"Frameworks/Libraries": ["Flask", "React", "jQuery", "Bootstrap"]},
          {"Database/Tools": ["PostgreSQL", "Git", "Github", "Command Line"]}
        ]
      ],

      projects: [
        [ {"first": "Daily"},
          {"img": {
            "name":"Daily", "byline":"dailyimg", "img": [daily1, daily2, daily3]}
          },
          {"linkImg": [
            {
            "name":"GitHub", "byline":"githublink", "link": "https://github.com/laurengordonfahn/daily", "img": githubGlyph
            },
            {
            "name":"Daily", "byline":"dailylink", "link": "https://dailytrackingcalendar.herokuapp.com", "img": calendarGlyph
            }
          ]},
          
          {"none": "Daily is an emotion tracking calendar. A personal calendar that enables users to summarize their emotions from a day in three adjectives and a representative color. With trending graphics and easy at-a-glance understanding of how they are feeling over time. Built with React and a Flask server."},
          {"Tech Stack": [" PostgreSQL, SQLAlchemy, Python, Flask, React, Javascript, Ajax, Unittest"]}
          
        ],
        [
          {"first": "Notebook"},
          {"img": {
            "name":"Notebook", "byline":"notebookimg1", "img": [notebook1, notebook2]}
          },
          {"linkImg": [
            {
            "name":"GitHub", "byline":"GitHubLink", "link": "https://github.com/laurengordonfahn/notebook", "img": githubGlyph
            },{
            "name":"Notebook", "byline":"noteBookLink", "link": "https://notebookonline.herokuapp.com", "img": notebookGlyph
            }
          ]},
          {"none": "Notebook is a one page dynamic notebook application. Built on a Flask RESTful API. Allows a user to create, edit, reorganize, and delete notes. Sign-In with Facebook."
          },
          {"Tech Stack": ["PostgreSQL, SQLAlchemy, Python, Flask, Javascript, jQuery, Ajax, OAuth2, Unittest"]}
  
        ],

      ],

      experience: [
        // [
        //   {"github":["laurengordonfahn"]},
        //   {"linkedin": ["linkedin.com/in/lauren-gordon-fahn"]}
        // ],
          
      ],

      subSection: "Overview",
      isTop: false,
      y: window.scrollY ,
      offSetVal: -150,
      headerHeight: 260
      
    
    };
  }

  reSetOffSet() {
    this.props.setTimeout(
      function() {
        this.setState({ offSetVal: -80 });
      }.bind(this), 8
    );
  }

  handleScrollCallback() {
    const headerHeight = this.state.headerHeight
    if (window.scrollY > 310){
      this.reSetOffSet();
      let sections = this.state.pageSections;
      if (sections[0] != 'Top') {
        sections.unshift('Top');
        this.setState({pageSections : sections}); 
      }
      
    } else {
      let sections = this.state.pageSections.filter(val => val != 'Top');
      this.setState({pageSections : sections}); 
    }

    if (window.scrollY > headerHeight){
      
      this.setState({isTop : true});
    } 
    else if (window.scrollY < headerHeight) {
    
      this.setState({isTop: false, offSetVal: -150});
    }
  }

  handleClick(to) {
    const headerHeight = this.state.headerHeight
    if (to ==="Projects") {
      if (this.state.y < headerHeight){
        this.setState({isTop: false, offSetVal: -150,subSection: to});
      } else {
      this.setState({isTop: false, offSetVal: -80,subSection: to});
      }
    } 
    
    else if (to === "Top") {
      this.setState({isTop: false, offSetVal: -80, subSection: to});
    }
    else if (to !== "Projects"){

      this.setState({isTop: false, offSetVal: -80, subSection: to});
      
    }
    
   
  }

  render() {
    return (
      <div className="App">

        <ScrollEvent 
          handleScrollCallback={this.handleScrollCallback} 
        />

         <Element name="Top" className="element">
          <Header 
            name="header" 
            yourImg={this.state.yourImg} 
            yourName={this.state.yourName} 
            oneLiner={this.state.oneLiner} 
          />
        </ Element>
        
         <Menu 
          name="Menu" 
          pageSections={this.state.pageSections} 
          isTop={this.state.isTop} 
          handleClick={this.handleClick} 
          linkOptions={this.state.linkOptions}
          offSetVal={this.state.offSetVal} 
        />
        

        <Element name="Projects" className="element">
          <TextSection 
            name="Projects" 
            stateName={this.state.projects} 
          />
        </Element>

        <Element name="Stack" className="element">
          <List name="Stack" stateName={this.state.stack} />
        </Element>

        <Element name="About Me" className="element">
          <TextSection name="About Me" stateName={this.state.aboutMe} />
        </Element>

        <Element name="Contacts" className="element">
          <LinkMenu linkOptions={this.state.linkOptions} />
        </Element>
        

      </div>
    );
  }
}

export default ReactTimeout(App);
