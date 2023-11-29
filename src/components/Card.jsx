import React from 'react';

const Card = (props) => {
	return (
		<div>
			<div className="card">
        <img src={props.img} />
        <h3>{props.movieName}</h3>
        <p>{props.description}</p>
      </div>
		</div>
	);
}

export default Card;
