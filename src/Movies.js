import React from 'react'
import Details from './Details'

export default class Movies extends React.Component {
    state = {
        movies: [],   
        movieId: 0,
        visible: true
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
                <Details movieId={1} />
            </div>
            : <div></div>}
            <ul>        
                <h1>Movies</h1>
                { this.state.movies.map((movie, index) => 
                <a style={{display: 'inline-block', height: '300px'}} key={movie.movieId} id={movie.movieId} onClick={this.callMovieDetails}><li style={{ listStyleType: "none", margin: "10px" }} ><img src={movie.poster} alt="" /></li></a>)}
            </ul>
        </div>
        );
    }

    callMovieDetails(event){
        console.log("event", event)
        this.setState({visible: true, movieId:1})
        
    }
}
