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
import Springboot from "../assets/images/springio-icon.svg";
import SQL from "../assets/images/sql.svg";
import Express from "../assets/images/express.svg";
import MongoDB from "../assets/images/mongodb.svg";
import Mongoose from "../assets/images/mongoose.png";

import Webpack from "../assets/images/webpack.svg";
import Jest from "../assets/images/jest.svg";
import TestingLibrary from "../assets/images/testing-library.png";
import Linux from "../assets/images/linux.svg";
import NPM from "../assets/images/npm.svg";
import Yarn from "../assets/images/yarn.svg";
import Git from "../assets/images/git.svg";
import Bamboo from "../assets/images/bamboo.svg";
import Bitbucket from "../assets/images/bitbucket.svg";
import JIRA from "../assets/images/jira.svg";
import GitHub from "../assets/images/github.svg";


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
      skill: "JavaScript",
      image: JavaScript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      skill: "SASS",
      image: SASS,
      url: "https://sass-lang.com/"
    },
    {
      skill: "CSS3",
      image: CSS3,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
    },
    {
      skill: "jQuery",
      image: jQuery,
      url: "https://jquery.com/"
    },
    {
      skill: "HTML5",
      image: HTML5,
      url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
    }
  ];
  
  const backEnd = [
    {
      skill: "Spring Boot",
      image: Springboot,
      url: "https://spring.io/projects/spring-boot"
    },
    {
      skill: "Oracle SQL",
      image: SQL,
      url: "https://www.oracle.com/database/technologies/appdev/sqldeveloper-landing.html"
    },
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
    }
  ];

  const tools = [
    {
      skill: "Testing Library",
      image: TestingLibrary,
      url: "https://testing-library.com/"
    },
    {
      skill: "Jest",
      image: Jest,
      url: "https://jestjs.io/"
    },
    {
      skill: "NPM",
      image: NPM,
      url: "https://www.npmjs.com/"
    },
    {
      skill: "Yarn",
      image: Yarn,
      url: "https://yarnpkg.com/"
    }, 
    {
      skill: "Git",
      image: Git,
      url: "https://git-scm.com/"
    },
    {
      skill: "Bamboo",
      image: Bamboo,
      url: "https://www.atlassian.com/software/bamboo"
    },
    {
      skill: "Webpack",
      image: Webpack,
      url: "https://webpack.js.org/"
    },
    {
      skill: "Bitbucket",
      image: Bitbucket,
      url: "https://www.atlassian.com/software/bitbucket"
    },
    {
      skill: "JIRA",
      image: JIRA,
      url: "https://www.atlassian.com/software/jira"
    },
    {
      skill: "Linux",
      image: Linux,
      url: "https://www.linux.org/"
    },
    {
      skill: "GitHub",
      image: GitHub,
      url: "https://github.com/"
    }
  ];

  const contactBoxes = [
    {
      title: "Mail",
      text: "Send me an email - I try to respond to most things that hit my inbox.",
      link: "mailto:tmangram@gmail.com",
      path: "M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"
    },
    {
      title: "Github",
      text: "Find all the code I do and all the repos I like right here.",
      link: "https://github.com/terensu-desu",
      path: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
    },
    {
      title: "LinkedIn",
      text: "Read a bit more about me and my background. Feel free to message me here, too.",
      link: "https://www.linkedin.com/in/terence-mangram/",
      path: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
    },
    {
      title: "Twitter",
      text: "My twitter use is random, but check it out if you like!",
      link: "https://twitter.com/TMangram",
      path: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"
    },
    {
      title: "Flickr",
      text: "View the pictures that I've taken from my adventures. I recommend my pictures from Japan.",
      link: "https://www.flickr.com/people/mynomadmind/",
      path: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.5 8.5c-.98 0-1.865.404-2.502 1.054-.634-.649-1.519-1.054-2.498-1.054-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5c.979 0 1.864-.404 2.498-1.054.637.649 1.522 1.054 2.502 1.054 1.933 0 3.5-1.566 3.5-3.5s-1.567-3.5-3.5-3.5zm0 6c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5c1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5z"
    }
  ];

	const getAllProjects = () => projects;

  const getAllSkills = () => ({
      frontEnd: frontEnd,
      backEnd: backEnd,
      tools: tools
  });

  const getContactInfo = () => contactBoxes;

	return {
		getAllProjects: getAllProjects,
    getAllSkills: getAllSkills,
    getContactInfo: getContactInfo
	};
};

export default DisplayDataModule();