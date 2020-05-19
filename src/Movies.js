import React from 'react'
import Details from './Details'

export default class Movies extends React.Component {
    state = {
        movies: [],   
        movieId: 0,
        visible: false,
        selectedMovie: {}
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:3001/movies');
        let movieList = await response.json();
        this.setState({movies: movieList}); 
    }

    render(props){
        return (
        <div>
            {this.state.visible !== false ?   
            <div>
                <Details poster={this.state.selectedMovie.poster} title={this.state.selectedMovie.title} released={this.state.selectedMovie.released} plot={this.state.selectedMovie.plot} actors={this.state.selectedMovie.actors} genre={this.state.selectedMovie.genre} />
            </div>
            : <div></div>}
            <ul>        
                <h1>Movies</h1>
                { this.state.movies.map((movie, index) => 
                <a style={{display: 'inline-block', height: '300px'}} key={index} id={index} onClick={() =>this.callMovieDetails(index)}><li style={{ listStyleType: "none", margin: "10px" }} ><img src={movie.poster} alt="" /></li></a>)}
            </ul>
        </div>
        );
    }

    callMovieDetails(id){
        console.log("id", id)
        let selectedMovie = this.state.movies[id];
        this.setState({visible: true, selectedMovie: selectedMovie})
    }
}
