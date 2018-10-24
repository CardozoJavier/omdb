import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Movies from '../components/Movies';
import SingleMovie from '../components/SingleMovie';
import FilterInput from '../components/FilterInput';

export default class Main extends Component {

	constructor(props){
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
		return (
			<div className= 'container'>				
				<h1>OMDB</h1>

				<FilterInput handleSubmit= { this.handleSubmit }/>
				<Switch>
					<Route exact path= '/movies/:movieId' render= { () => <SingleMovie movie= { this.state.movie } /> } />
					<Route exact path= '/' render= { () => <Movies movies= { this.state.movies } handleClick= { this.handleClick } />	}/>
				</Switch>
			
			</div>
		)
	}
}