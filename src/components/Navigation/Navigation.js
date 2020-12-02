import React from 'react';

const Navigation = ({ onRouteChange, signedIn }) => {

		if(signedIn) {
			return (
		<nav style={{display: 'flex'}}>
			<p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Log out</p>
		</nav>
	);
	} else {
		return (
		<nav style={{display: 'flex'}}>
			<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
			<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
		</nav>
		);
	}
}

export default Navigation;