import React, { Component } from 'react';


export default ({ handleSubmit }) => {
	return (
		<div className= 'container-fluid'>
			<form onSubmit= { (e) => handleSubmit (e) }>
				<label> 
					<p>Búsqueda</p>
					<div className= 'input-group mb-3'>
						<input className= 'form-control' type="text" name= 'search' aria-label="Recipient's username" aria-describedby="button-addon2"/>
						<div className= 'input-group-append'>
							<button className= 'btn btn-outline-secondary' type="submit" value="Submit">Submit</button>
						</div>
					</div>
				</label>
			</form>
		</div>
	)
}

