import React from "react";

import Link from "../Link";
import Logo from "../../assets/images/logo.png";

const Navigation = ({handleClick}) => {
	return (
		<div className="navigation">
			<nav className="navigation__nav">
				<div className="navigation__logo-box">
					<img src={Logo} alt="Site Logo" className="navigation__logo"/>
				</div>
				<ul className="navigation__list">
					<li className="navigation__item">
						<Link name="about" />
					</li>
					<li className="navigation__item">
						<Link name="portfolio" />
					</li>
					<li className="navigation__item">
						<Link name="skills" />
					</li>
					<li className="navigation__item">
						<Link name="resume" />
					</li>
					<li className="navigation__item navigation__item--contact">
						<button className="navigation__link" onClick={handleClick}>
							Contact
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
