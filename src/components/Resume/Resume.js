import React from "react";
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import Spinner from "../UI/Spinner";
import ResumePDF from "../../assets/files/TerenceMangramResume.pdf";

const Resume = props => (
	<div className="resume" id="resume">
		<div className="heading-box">
			<h2 className="heading-secondary">Resume</h2>
		</div>
		<div className="resume__container">
			<Document file={ResumePDF} loading={<Spinner/>} >
				<Page 
					pageNumber={1} 
					scale={1.2} 
					className="resume__file" 
					renderAnnotations={false}
					renderTextLayer={false}
				/>
			</Document>
			<div className="row">
				<div className="resume__link-box">
					<a 
						href="https://drive.google.com/open?id=1ZDSBxAciIqDPf0Db8mW-uaN1M1z627Xb" 
						className="resume__link">
							Click to Download
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Resume;