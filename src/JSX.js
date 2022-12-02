import React from 'react'
function JSX(){
	/*return(
		<div>
		<h1>good morning</h1>
		</div>
	)*/
		return React.createElement(
			"div",
			{id:"one",className:"classone"},
			React.createElement("h1",null,"good morning")
			
		)
}
export default JSX