import React from "react";

const About = () => (
	<div className="about" id="about">
		<div className="heading-box">
			<h2 className="heading-secondary">About</h2>
		</div>
		<div className="about__container">
			<p className="about__text">
				I'm a world traveler, I've lived in Spain and Japan, and visited a handful of other countries to boot.
				I'm a teacher, I taught English at public schools while I lived in Japan and was a teaching assist at the Northwestern's Web Developer Bootcamp in Chicago.
				I'm a student, I'm constantly immersing myself in a subject, like when I taught myself to code through JavaScript and now as I learn Rust.
			</p>
			<p className="about__text">
				I'm a web developer based in Chicago, Illinois, an expert with React, Redux, and modern CSS. I'm a huge proponent of testing and discovery.
				I believe a software developer should be curious and follow up that curiousity by finding answers, or more questions.
				I have been the lead front-end developer of my current project for over 2 years, helping train up recent graduates, onboard and support offshore developers, and introduce and push maintenance of best practices.
			</p>
			<p className="about__text">
				The first significantly used website I created was Chubu ALT, a solution to the problem English teachers have with creating or finding new material to teach with.
				Although it started with copy and pasted HTML, CSS, and a sprinkle of PHP, I was really proud of what I accomplished. 
				During all the copying and pasting, I said, "There must be a way to write script that does this for me on the fly."
				I went in search of answers, but not really understanding JavaScript, I had to learn the basics of writing code and train up before DRYing out my website.
				Eventually, all that learning would evolve into	Nihon ALT - a React based app with a lot more functionality and way, way less redundant code.
				It's in the projects list, check it out.
			</p>
			<p className="about__text">
				So from that point on, I understand what it meant to be a constant learner. Whenever I have a challenge, the first thing I do is research.
				Research could mean reading up on a subject, asking team members or the greater community, or simply breaking it - one of my favorite choices.
				I've been building fun and challenging projects and try to solve problems I imagine or have had ever since.
				My most recent accomplishments is the completion of a two year project that rewrote a huge monolithic Flex (Flash/ActionScript) and Weblogic app in React with Redux and Springboot.
			</p>
			<p className="about__text">
				Feel free to reach out to me about anything. I'd be happy to talk shop, expand on my story, chat about Japan, the language, Formula 1, bouldering, tennis, video games, books, or Chicago!
			</p>
			<ul className="about__links-box">
				<li className="about__item">
					<a href="https://github.com/terensu-desu" className="about__link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="about__icon"
							viewBox="0 0 24 24"
						>
							<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
						</svg>
					</a>
				</li>
				<li className="about__item">
					<a
						href="https://www.linkedin.com/in/terence-mangram/"
						className="about__link"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="about__icon"
							viewBox="0 0 24 24"
						>
							<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default About;
