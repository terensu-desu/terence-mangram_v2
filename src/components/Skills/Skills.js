import React from "react";
import DisplayDataModule from "../../modules/DisplayDataModule";
import List from "./List";

const Skills = () => {
	const { frontEnd, backEnd, tools } = DisplayDataModule.getAllSkills();

	const frontEndSection = <List heading="Front-End" data={frontEnd} />
	const backEndSection = <List heading="Back-End" data={backEnd} />
	const toolsSection = <List heading="Tools" data={tools} />

	return (
		<div className="skills" id="skills">
			<div className="heading-box">
				<h2 className="heading-secondary">
					Skills
				</h2>
			</div>
			<div className="skills__container">
				{frontEndSection}
				{backEndSection}
				{toolsSection}
			</div>
		</div>
	);
}

export default Skills;