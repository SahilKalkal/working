import React from 'react';

const SearchBox=({SearchChange})=>(
	<div className="tc">
	<input
	type="search"
	name="search"
	placeholder=" Search Reactions "
	onChange={SearchChange}
	/>
	</div>
	
)
export default SearchBox;