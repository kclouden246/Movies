import React from 'react'

export default class Movies extends React.Component {
    state = {
        movies: [],        
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:3001/movies');
        let movieList = await response.json();
        console.log(movieList);
        this.setState({movies: movieList}); 
    }

    render(props){
        return (
        <ul>
            <h1>Movies</h1>
            { this.state.movies.map((movie, index) => <div style={{display: 'inline-block', height: '300px'}}><li style={{ listStyleType: "none", margin: "10px;" }} key={index}><img src={movie.poster} alt="" /></li></div>)}
        </ul>);
    }
}