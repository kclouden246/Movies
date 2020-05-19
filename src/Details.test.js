import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import Details from './Details'

function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

test("ensure data displays", ()=>{
    let wrapper = shallow(<Details poster={mockMovie.poster} title={mockMovie.title} actors={mockMovie.actors} genre={mockMovie.genre} plot={mockMovie.plot} released={mockMovie.released}/>)
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('#title').text()).toBe("Guardians of the Galaxy Vol. 2");
    expect(wrapper.find('#released').text()).toBe("05 May 2017");
    expect(wrapper.find('#genre').text()).toBe("Action, Adventure, Comedy, Sci-Fi");
    expect(wrapper.find('#plot').text()).toBe("The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.");
    expect(wrapper.find('#actors').text()).toBe("Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel");
});

let mockMovie = {movieId:1,metascore:"67",boxOffice:"$389,804,217",website:"https://marvel.com/guardians",imdbRating:"7.7",imdbVotes:"449,175",runtime:"136 min",language:"English",rated:"PG-13",production:"Walt Disney Pictures",released:"05 May 2017",imdbid:"tt3896198",plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",director:"James Gunn",title:"Guardians of the Galaxy Vol. 2",actors:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",response:"True",type:"movie",awards:"Nominated for 1 Oscar. Another 12 wins & 42 nominations.",dvd:"22 Aug 2017",year:"2017",poster:"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",country:"USA",genre:"Action, Adventure, Comedy, Sci-Fi",writer:"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)"}