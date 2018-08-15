import React, { Component } from "react";
import DisplayDataModule from "../../modules/DisplayDataModule";
import Card from "../Card/";

class Portfolio extends Component {
	state = { displayData: null };
	componentDidMount() {
		const data = DisplayDataModule.getAllProjects();
		this.setState({ displayData: data });
	}
	render() {
		let cards = null;
		const { displayData } = this.state;
		if(displayData) {
			cards = displayData.map(item => <Card key={item.title} data={item} />);
		}
		return (
			<div className="portfolio" id="portfolio">
				<div className="heading-box">
					<h2 className="heading-secondary">Portfolio</h2>
				</div>
				<div className="portfolio__container">
					{cards}
				</div>
			</div>
		);
	}
}

export default Portfolio;