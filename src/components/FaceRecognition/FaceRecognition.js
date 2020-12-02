import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {
	return(
		<div className='center ma'>
			<div className='absolute mt2'>
			<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='boxAroundFace' style={{top: box.topRow, right: box.rightColumn, bottom: box.bottomRow, left: box.leftColumn}}>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;