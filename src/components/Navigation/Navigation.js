import React from "react";

import Logo from "../../assets/images/logo.png";

const Navigation = props => {
	return (
		<div className="navigation">
			<nav className="navigation__nav">
				<div className="navigation__logo-box">
					<img src={Logo} alt="Site Logo" className="navigation__logo"/>
				</div>
				<ul className="navigation__list">
					<li className="navigation__item">
						<a href="#about" className="navigation__link">
							About
						</a>
					</li>
					<li className="navigation__item">
						<a href="#portfolio" className="navigation__link">
							Portfolio
						</a>
					</li>
					<li className="navigation__item">
						<a href="#skills" className="navigation__link">
							Skills
						</a>
					</li>
					<li className="navigation__item">
						<a href="#resume" className="navigation__link">
							Resume
						</a>
					</li>
					<li className="navigation__item navigation__item--contact">
						<a href="#!" className="navigation__link" onClick={props.handleClick}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
