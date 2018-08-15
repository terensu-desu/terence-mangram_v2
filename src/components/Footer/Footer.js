import React  from "react";
import Logo from "../../assets/images/logo.png";

const Footer = props => {
	return (
		<div className="footer">
			<div className="row">
				<div className="footer__content">
					<img src={Logo} alt="Site logo" className="footer__logo" />
					<p className="footer__text">
						Created by <a href="http://www.terencemangram.com" className="footer__link">Terence Mangram</a>
					</p>
					<p className="footer__text">Tech Images from
						<a href="http://konpa.github.io/devicon/" className="footer__link"> Devicon</a>
					</p>
					<p className="footer__text">Social Icons from
						<a href="https://iconmonstr.com/" className="footer__link"> iconmonstr</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer