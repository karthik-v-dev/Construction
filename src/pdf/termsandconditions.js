import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './pdf.css';
export default function TermsAndConditions(props) {
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	const { pdf } = props;

	return (
		<div className='pdfset'>
			<h2 className='linktitle '>Terms And Conditions</h2>
			<div className='setcenter'>
				<Document
					file={pdf}
					options={{ workerSrc: '/pdf.worker.js' }}
					onLoadSuccess={onDocumentLoadSuccess}
				>
					{Array.from(new Array(numPages), (el, index) => (
						<Page
							key={`page_${index + 1}`}
							pageNumber={index + 1}
						/>
					))}
				</Document>
			</div>
		</div>
	);
}
