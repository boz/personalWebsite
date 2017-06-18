import React, { Component } from 'react';
import Scroll from 'react-scroll';
import ScrollEvent from 'react-onscroll';

import Header from './header';
import Menu from './menu';
import LinkMenu from './linkMenu';
import DictionarySection from './dictionarySection';
import TextSection from './textSection';

import yourImg from '../lauren_profile.jpg';
import calendarGlyph from '../calendar.png';
import notebookGlyph from '../notebook.png';
import newspaperGlyph from '../newspaper.png';
import facebookGlyph from '../facebook.png';
import githubGlyph from '../github.png';
import linkedInGlyph from '../linkedin.png';


var Link       = Scroll.Link;
var Element    = Scroll.Element;


class App extends Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);

    this.state = {
      yourName: "Lauren Gordon-Fahn",
      oneLiner: "San Francisco Junior Developer, In Love With Javascript!",
      yourImg: yourImg,
      pageSections: ["Top", "Projects", "Stack", "About Me", 
      "Contacts"],

      aboutMe:[
        [
          {"none": "I am a passionate and compassionate problem solver with a B.S. in Theoretical Mathmatics, a Masters in Acupuncture & Chinese Medicine, and Hackbright bootcamp under my belt. I am in love with making organization tools that are user friendly through software engineering. I love solving problems with a team be it engieering or of the human body."}
        ],
        [
          {"Traits of Math Mind":  
            [
              "Logical Thought", "Organization of large bodies of information", "A love for Algorithmic thought", "The importance of examiing a problem near and far"
            ]
          }
        ],
        [
          {"Traits of an Acupuncture's Thinking" : 
            [
              "Listening", "Asking Constructive, timely, questions", "Organizing stratigic long term plans for treatment", "Explaining information that is not native to someone", "Merging and explaining two different perspecitives on treatment", "Problem solving with in the confines of patients lives"
            ]
          }
        ],
        [
          {"Traits of an Bootcamp Graduate":  
            [
              "Fast learner", "Deadicated to learning and exploring technology", "Finding Creative ways to integrate past life skills to make exciting projects", "Being humble and googling my heart out"
            ]
          }
        ]
      ],
      
      linkOptions:[
        [{
          "name":"LinkedIn", "byline":"link","link": "https://www.linkedin.com/in/lauren-gordon-fahn/", "img":linkedInGlyph
        }], 
        [{
          "name":"GitHub", "byline":"link", "link": "https://github.com/laurengordonfahn", "img": githubGlyph
        }],
        [{ 
          "name": "Facebook", "byline":"link","link": "https://www.facebook.com/search/top/?q=Lauren+Gordon+New&init=public", "img": facebookGlyph
        }], 
        [{
          "name": "Daily", "byline": "project", "link": "http://dailytrackingcalendar.herokuapp.com", "img": calendarGlyph
        }], 
        [{
          "name": "Notebook", "byline": "project", "link": "http://notebookonline.herokuapp.com", "img": notebookGlyph
        }]
      ],

      stack:[
        [
          {"Languages":["Python","Ruby","JavaScript(ES6, Ajax, JSON)", "HTML", "CSS", "SQL"]},
          {"Operating Systems":["Mac OS X", "Linux"]},
          {"Frameworks/Libraries": ["Flask", "React", "jQuery", "Bootstrap"]},
          {"Database/Tools": ["PostgreSQL", "Git", "Github", "Command Line"]}
        ]
      ],

      projects: [
        [ {"first": "Daily"},
          {"img": {
            "name":"Daily", "byline":"dailyimg", "link": "", "img": githubGlyph}
          },
          {"linkImg": {
            "name":"GitHub", "byline":"githublink", "link": "https://github.com/laurengordonfahn/daily", "img": githubGlyph}
          },
          {"linkImg": {
            "name":"Daily", "byline":"dailylink", "link": "https://dailytrackingcalendar.herokuapp.com", "img": calendarGlyph}
          },
          
          {"none": "Daily is an emotion tracking calendar. A personal calendar that enables users to summarize their emotions from a day in three adjectives and a representative color. With trending graphics and easy at-a-glance understanding of how they are feeling over time. Built with React and a Flask server."},
          {"Tech Stack": [" PostgreSQL, SQLAlchemy, Python, Flask, React, Javascript, Ajax, Unittest"]}
          
        ],
        [
          {"first": "Notebook"},
          {"img": {
            "name":"Notebook", "byline":"notebookimg", "link": "", "img": githubGlyph}
          },
          {"linkImg": {
            "name":"GitHub", "byline":"link", "githubnotebooklink": "https://github.com/laurengordonfahn/notebook", "img": githubGlyph}
          },
          {"linkImg": {
            "name":"Notebook", "byline":"link", "notebooklink": "https://notebookonline.herokuapp.com", "img": notebookGlyph}
          },
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
      offsetVal: -250
    
    };
  }

  handleScrollCallback() {

    if(window.scrollY > 250){
      
      this.setState({isTop : true, offsetVal: 0});
    } 
    else if (window.scrollY < 250) {
      this.setState({isTop: false, offsetVal: 0});
    }
  }

  handleClick(to) {
    
    if (to ==="Overview") {
     
      this.setState({isTop: false, subSection: to});
    } 
    
    else if (to === "Top") {
      this.setState({isTop: true, subSection: to});
    }
    else if (to !== "Overview"){

      this.setState({isTop: false, subSection: to});
      
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
        />

        <Element name="Projects" className="element">
          <TextSection 
            name="Projects" 
            stateName={this.state.projects} 
          />
        </Element>

        <Element name="Stack" className="element">
          <TextSection name="Stack" stateName={this.state.stack} />
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

export default App;
