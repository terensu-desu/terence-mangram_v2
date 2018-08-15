import React, { Fragment } from "react";

const List = props => {
	const mappedData = props.data.map(item => (
		<figure className="skills__skill" key={item.skill}>
			<a href={item.url} className="skills__link">
				<img src={item.image} alt={item.skill} className="skills__image"/>
				<figcaption className="skills__caption">
					{item.skill}
				</figcaption>
				</a>
		</figure>
	));

	return (
		<Fragment>
			<div className="row">
				<div className="skills__heading-box">
					<h4 className="skills__heading-text">{props.heading}</h4>
				</div>
			</div>
			<div className="row">
				<ul className="skills__skill-list">
					{mappedData}
				</ul>
			</div>
		</Fragment>
	);
}

export default List;