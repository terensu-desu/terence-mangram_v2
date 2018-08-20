import React from "react";

import DisplayDataModule from "../../modules/DisplayDataModule";

const Modal = props => {
	const boxes = DisplayDataModule.getContactInfo();
	const boxesMap = boxes.map(item => (
		<div className="col-1-of-4">
			<div className="feature_box">
				<svg className="feature_box__icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d={item.path}/>
				</svg>
				<h3 className="feature_box__title">
					{item.title}
				</h3>
				<p className="feature_box__text">
					{item.text}
				</p>
			</div>
		</div>
	));
	return (
		<div className="contact__modal">
			<div className="row">
				{boxesMap}
			</div>
		</div>
	);
};

export default Modal;