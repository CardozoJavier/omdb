import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component{
	constructor (props){
		super(props);
	}

	render (){
		const { movies, handleClick } = this.props;
		// console.log (handleClick, ' <====');
		// const handleClick= this.props.handleClick && this.props.handleClick.bind(this);
		return (
			<div className="container">
				<div className="row">
						{ //onClick= { (e) => handleClick(e,movie) } 
							movies &&	movies.map (movie => (
								<div className="card" style={{ width: '18rem', margin: '1vh' }} key= {movie.imdbID}>
										<img className="card-img-top"
										src= {
													movie.Poster != 'N/A' ? 
													movie.Poster : 
													'http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg'
												} alt="Card image cap"/>									
									<div className="card-body">
										<h5 className="card-title">{ movie.Title }</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<Link to= {`/movies/${movie.imdbID}`} > 
										<button onClick= { (e) => handleClick(e,movie) } > Ver descripción </button>
									</Link>
									</div>
								</div>
							))
						}
				</div>
			</div>
		)
	}
}

