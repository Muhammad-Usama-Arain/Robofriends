import React from 'react';

const Card = ({id, name, email}) => {
	//const {id, name, email} = prop;
	return(
		<div className="tc bg-light-blue dib grow shadow-5 bw2 br3 pa2 ma2">
			<img src={`https://robohash.org/${id}?200x200`} alt="" />
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>

		);
	} 

export default Card;