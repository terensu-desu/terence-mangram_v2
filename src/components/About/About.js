import React from "react";

const About = props => (
	<div className="about" id="about">
		<div className="heading-box">
			<h2 className="heading-secondary">
				About
			</h2>
		</div>
		<div className="about__container">
			<p className="about__text">
				Born in Spain and raised in Florida, I've just moved to Chicago (April 5th!) after living and working in Japan as a public school English teacher for four years. My journey as a web developer actually sparked while I was busy teaching phonics and grammar full time.
			</p>
			<p className="about__text">
				The first website I created was Chubu ALT, a solution to the problem English teachers have with creating or finding new material to teach with. Although it started with copy and pasted HTML and CSS, I was really proud of what I accomplished. Eventually it would evolve into Nihon ALT - a React based app with a lot more functionality.
			</p>
			<p className="about__text">
				So from that point on, I was a student again. I've been building fun and challenging projects and try to solve problems I imagine or have had. I've learned a lot, from HTML5, CSS5, and JavaScript to React and Redux to NodeJS and MongoDB, and more.
			</p>
			<p className="about__text">
				I am actively looking for employment in Chicago, so feel free to contact me! I'd be happy to talk shop, expand on my story, chat about Japan, the language, Formula 1, bouldering, tennis, video games, books, or whatever you like! I'm also active in the local freeCodeCamp group.
			</p>
		</div>
	</div>
);

export default About;