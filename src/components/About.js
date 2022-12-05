import {useState} from 'react'

function About(){
	const [village,setVillage]=useState("america");
	const [country,setCountry]=useState("India")
	return(	
		<div>
			
			<input
				onChange={(e)=>setVillage(e.target.value)}/>


				<button onClick={()=>console.log(village)}>Submit</button>
			
		</div>
	)
}

export default About



