import React from "react";

const Link = props => {
	const handleOnClick = (event, name) => {
		const links = document.getElementsByClassName("navigation__link");
		for(let element of links) {
			element.classList.remove("navigation__link--active");
		}
		event.target.classList.add("navigation__link--active");
	};
	return (
		<a 
			href={`#${props.name}`} 
			className="navigation__link"
			onClick={(event) => handleOnClick(event, props.name)}>
			{props.name}
		</a>
	);
};

export default Link;