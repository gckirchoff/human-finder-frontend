import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ changeOnInput, onPictureSubmit }) => {
	return(
		<div>
			<p className='f3'>
				{'If you see the box, you just found a genuine human being'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={changeOnInput}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onPictureSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;