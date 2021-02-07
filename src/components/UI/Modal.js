import React from "react";

import DisplayDataModule from "../../modules/DisplayDataModule";

const Modal = () => {
	const boxes = DisplayDataModule.getContactInfo();
	const boxesMap = boxes.map(item => (
		<div className="contact__modal-row">
			<div className="contact__modal-image-container">
				<a href={item.link}>
					<svg className="contact__modal-image"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d={item.path}/>
					</svg>
				</a>
			</div>
			<div className="contact__modal-text-container">
				<h3 className="contact__modal-title">
					{item.title}
				</h3>
				<p className="contact__modal-text">
					{item.text}
				</p>
			</div>
		</div>
	));
	return (
		<div className="contact__modal">
			{boxesMap}
		</div>
	);
};

export default Modal;