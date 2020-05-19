import React from 'react'

export default class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {}   
        };
            
    }

    async componentDidMount(){
        
        // let id = this.props.movieId;
        // console.log("In did mount movie id: ", id);
        // const url = `http://localhost:3001/movies/${id}`;
        // console.log(url);
        //const response = await fetch(url)
        
        //fetch(url).then(response => response.json().then(data => this.setState({movie: data})))
        //console.log(response);
        //let movieDetails = await response.json();
        //console.log("Details: ", movieDetails);
        //this.setState({movie: movieDetails}); 
    }
    
    render(props){
        console.log("Details Props:",this.props);
        return (
            
        <div>

        <ul>
            <h1>Descriptions</h1>
            <span><img src={this.props.poster} alt="" /></span><div>{this.props.title}</div>
        <div>{this.props.dvd}</div>
        <div>{this.props.genre}</div>
        <div>{this.props.actors}</div>
        <div>{this.props.plot}</div>
        </ul>
        </div>

        );
    }
}