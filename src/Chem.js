import React from 'react';
import Chemistry from './Chemistry';


const Chem=({reaction})=>{
	return(
		<div>
		{
			reaction.map((user,i)=>{
                return( 
                	<Chemistry 
                	key={i}
                	name={reaction[i].name}
                	word={reaction[i].word}
                	/>
                	);
				})
			
		}
		</div>
		);

}
export default Chem;