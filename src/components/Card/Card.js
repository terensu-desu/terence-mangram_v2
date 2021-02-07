import React from "react";
import PropTypes from "prop-types";

const Card = ({ 
	data: { 
			title,
			tools,
			videoLink,
			description,
			url 
		}
	}) => {

	return (
		<div className="card">
			<div className="card__title-box">
				<h3 className="card__title">
					{title}
				</h3>
			</div>
			<div className="card__video-box">
				<iframe
					title={title}
          className="card__video"
          src={videoLink}
          frameBorder="0"
          allowFullScreen
        />
      </div>
			<div className="card__description-box">
				<p className="card__description-text">
					{description}
				</p>
			</div>
			<div className="card__detail-box">
				<div className="card__details">
					<p className="card__detail-text">
						{tools}
					</p>
				</div>
				<div className="card__details">
					<a className="card__detail-link" href={url}>
						Visit {title}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object.isRequired
}

export default Card;