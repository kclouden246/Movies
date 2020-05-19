import React from 'react'

export default class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {}   
        };
            
    }

    async componentDidMount(){
        
        let id = this.props.movieId;
        console.log("In did mount movie id: ", id);
        const url = `http://localhost:3001/movies/${id}`;
        console.log(url);
        //const response = await fetch(url)
        
        fetch(url).then(response => response.json().then(data => this.setState({movie: data})))
        //console.log(response);
        //let movieDetails = await response.json();
        //console.log("Details: ", movieDetails);
        //this.setState({movie: movieDetails}); 
    }
    
    render(props){
        return (
        <div>

        <ul>
            <h1>Descriptions</h1>
            <span><img src={this.state.movie.poster} alt="" /></span><div>{this.state.movie.title}</div>
        <div>{this.state.movie.dvd}</div>
        <div>{this.state.movie.genre}</div>
        <div>{this.state.movie.actors}</div>
        <div>{this.state.movie.plot}</div>
        </ul>
        </div>

        );
    }
}