import {Component} from 'react'

class Events extends Component{
	state={
		username:"",
		age:""
	}
	  
	handleClick=()=>{
		console.log(this.state.username)
		console.log(this.state.age)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		return(
			<div>
			   <input
				   name="username"
				   onChange={this.handleChange}
				   placeholder="Enter username"/>
			   <input
				   age="90"
				   onChange={this.handleChange}
				   placeholder="Enter age"/>
			   <button onClick={this.handleClick}>Submit</button>
 			</div>
 		)
 	}
 }
 	export default Events
			 