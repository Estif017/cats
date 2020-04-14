import React from 'react';
import Card from './Cards';

const Cardlist = ({ robots }) => {
	return robots.map((kitty, i) => {
		return (
			<Card
				key={i}
				id={robots[i].id}
				name={robots[i].name}
				email={robots[i].email}
			/>
		);
	});
};

export default Cardlist;
