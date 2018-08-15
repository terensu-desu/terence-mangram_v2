import React from "react";

const Button = props => {
	return (
		<a
			href={props.url}
			className={`btn ${props.classes}`}
			onClick={props.onClick}>
			{props.text}
		</a>
	);
}

export default Button;