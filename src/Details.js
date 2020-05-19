import React from 'react'

export default class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {}   
        };
            
    }
    
    render(props){
        return (
            <div>
            <ul>
                <h1>Descriptions</h1>
                <span><img src={this.props.poster} alt="" /></span>
                <div id="title">{this.props.title}</div>
                <div id="released">{this.props.released}</div>
                <div id="genre">{this.props.genre}</div>
                <div id="actors">{this.props.actors}</div>
                <div id="plot">{this.props.plot}</div>
            </ul>
            </div>

        );
    }
}