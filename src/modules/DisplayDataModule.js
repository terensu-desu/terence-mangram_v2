// Module stores display data to keep components clean and easy to read.
// Data can be retrieved via methods or new methods can be made.

// ------------Images for skills section------------
import HTML5 from "../assets/images/html5.svg";
import CSS3 from "../assets/images/css3.svg";
import SASS from "../assets/images/sass.svg";
import JavaScript from "../assets/images/javascript.svg";
import React from "../assets/images/react.svg";
import Redux from "../assets/images/redux.svg";
import jQuery from "../assets/images/jquery.svg";

import NodeJS from "../assets/images/nodejs.svg";
import Express from "../assets/images/express.svg";
import MongoDB from "../assets/images/mongodb.svg";
import Mongoose from "../assets/images/mongoose.png";

import Jest from "../assets/images/jest.svg";
import Linux from "../assets/images/linux.svg";
import NPM from "../assets/images/npm.svg";
import Git from "../assets/images/git.svg";
import GitHub from "../assets/images/github.svg";
import Heroku from "../assets/images/heroku.svg";


const DisplayDataModule = () => {
	const projects = [
		{
      title: "Nihon ALT",
      tools: "React, React Router, Redux, Node.js + Express, MongoDB + Mongoose",
      description: "An online repository for English teachers in Japan. Designed to be quick and easy to find materials, users can search, like, and even upload their own files. Admins can review flagged comments and verify uploaded content from their dashboard.",
      videoLink: "https://www.youtube.com/embed/gTKgvghLx98",
      url: "https://nihon-alt.herokuapp.com/"
    },
    {
      title: "Buddies",
      tools: "Node.js + Express, MongoDB + Mongoose",
      description: "A project done with two friends at Nagoya University aimed at making life easier for foreigners in Japan with an Airbnb approach. Users can find or request services that offer to help them in various ways and rate their experiences.",
      videoLink: "https://www.youtube.com/embed/gu3rACIDd4A",
      url: "https://buddiesjp.herokuapp.com/"
    },
    {
      title: "Trello Clone",
      tools: "React, React Router, Redux, Thunk",
      description: "A little challenge to work my Redux skills. Registered users can create boards, lists, and list items and modify each. The challenges were with modifying a nested JSON database and using immutable update patterns with the Redux store!",
      videoLink: "https://www.youtube.com/embed/fnxOI-NDIsE",
      url: "https://trello-clone-f42b4.firebaseapp.com/"
    },
    {
      title: "Burger Builder",
      tools: "React, React Router, Redux",
      description: "This fun little app is an example of my experience with React best practices and implementation. Users can create an account, login, build a burger, order it, see their order history, and even build a burger while not logged in.",
      videoLink: "https://www.youtube.com/embed/00K1s89hUKo",
      url: "https://burger-builder-ef58a.firebaseapp.com/",
    }
	];

  const frontEnd = [
    {
      skill: "HTML5",
      image: HTML5,
      url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
    },
    {
      skill: "CSS3",
      image: CSS3,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
    },
    {
      skill: "SASS",
      image: SASS,
      url: "https://sass-lang.com/"
    },
    {
      skill: "JavaScript",
      image: JavaScript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      skill: "React",
      image: React,
      url: "https://reactjs.org/"
    },
    {
      skill: "Redux",
      image: Redux,
      url: "https://redux.js.org/"
    },
    {
      skill: "jQuery",
      image: jQuery,
      url: "https://jquery.com/"
    }
  ];
  
  const backEnd = [
    {
      skill: "Node.js",
      image: NodeJS,
      url: "https://nodejs.org/"
    },
    {
      skill: "Express",
      image: Express,
      url: "https://expressjs.com/"
    },
    {
      skill: "MongoDB",
      image: MongoDB,
      url: "https://www.mongodb.com/"
    },
    {
      skill: "Mongoose",
      image: Mongoose,
      url: "http://mongoosejs.com/"
    },
  ];

  const tools = [
    {
      skill: "Jest",
      image: Jest,
      url: "https://jestjs.io/"
    },
    {
      skill: "Linux",
      image: Linux,
      url: "https://www.linux.org/"
    },
    {
      skill: "NPM",
      image: NPM,
      url: "https://www.npmjs.com/"
    }, 
    {
      skill: "Git",
      image: Git,
      url: "https://git-scm.com/"
    },
    {
      skill: "GitHub",
      image: GitHub,
      url: "https://github.com/"
    }, 
    {
      skill: "Heroku",
      image: Heroku,
      url: "https://www.heroku.com/"
    }
  ];

	const getAllProjects = () => {
		return projects;
	};

  const getAllSkills = () => {
    return {
      frontEnd: frontEnd,
      backEnd: backEnd,
      tools: tools
    };
  };

	return {
		getAllProjects: getAllProjects,
    getAllSkills: getAllSkills
	};
};

export default DisplayDataModule();