import React from 'react';

const Chemistry=(reaction)=>{
	return(
		<div className="bg-yellow dib br2 pa2 ma1 grow">
		<h2>{reaction.name}</h2>
		<h2>{reaction.word}</h2>
		</div>
		);
}
export default Chemistry;