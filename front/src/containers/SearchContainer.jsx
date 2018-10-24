import React, { Component } from 'react';
import Home from '../components/Home';
import FilterInput from '../components/FilterInput';
import axios from 'axios';

export default class SearchContainer extends Component {
	constructor (props){
		super(props);
			this.state={
				movies : [],
				movie : {}
			}
		this.handleSubmit= this.handleSubmit.bind (this);
		this.handleClick= this.handleClick.bind (this);
	}
	
	handleSubmit (event){
		event.preventDefault();
		const title= event.target.search.value;
		axios.get (`https://www.omdbapi.com/?apikey=20dac387&s=${title}`)
			.then (data => this.setState ({ movies : data.data.Search }));
			// .then (data => console.log (data.data.Search))
	}

	handleClick (e ,movie){
		const movieId= movie.imdbID;
		console.log (movie, ' <===== MOVIE')
		axios.get (`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}`)
			.then (data => this.setState ({ movie : data.data }));
		e.preventDefault();
	}


	render(){
		// console.log (this.props.handleSubmit, ' <====')
		return (
			<div>
				<FilterInput handleSubmit= { this.handleSubmit } />
				<Home handleClick={ this.handleClick } movies= { this.state.movies } /> 
			</div>
		)
	}
}