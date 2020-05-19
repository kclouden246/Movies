import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import Movies from './Movies'

let wrapper;
beforeAll(() => {
  global.fetch = jest.fn(); // mocking `fetch()` API
});

// beforeEach(async () => {
//   wrapper = shallow(<Movies />);
//     await flushPromises()
// });

afterEach(() => {
  //wrapper.unmount();
  fetch.mockClear();
});

function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

test("Check if movies appear in list", async () => {
  const wrapper = shallow(<Movies/>, { disableLifecycleMethods: true })
  await flushPromises()
  wrapper.instance().setState({movies: [mockMovie]});
  wrapper.update();
  expect(wrapper.find('li').length).toBeGreaterThan(0)
});

test("Get movies returns at least one movie", async ()=>{
  const spyDidMount = jest.spyOn(Movies.prototype,"componentDidMount");
  const fetchMock = jest.fn()
  global.fetch = fetchMock
  fetchMock.mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(mockMovie);
      }
    })
  })
  const wrapper = shallow(<Movies/>);
  await flushPromises()
  wrapper.instance().componentDidMount();

  //didMount.then(() => {
    wrapper.update();
    expect(spyDidMount).toHaveBeenCalled();
    expect(wrapper.instance().state.movies.length).toBeGreaterThan(0);
    
    spyDidMount.mockRestore();
    fetch.mockClear();
 //});

  
});

test("display a single movie ID", async () => {
    const fetchMock = jest.fn()
    const oldFetch = global.fetch
    global.fetch = fetchMock
     fetchMock.mockImplementation(() => {
       return Promise.resolve({
         json: () => {
           return Promise.resolve(mockMovie);
         }
       })
     })


    const wrapper = shallow(<Movies />)
    await flushPromises()
    wrapper.update()

    //ASSERT
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
    let firstMovie = wrapper.instance().state.movies[0];
    expect(firstMovie.movieId).toBe(1)
    
    //TEARDOWN
    //global.fetch = oldFetch
    //fetch.mockClear();
})

let mockMovie = [{movieId:1,metascore:"67",boxOffice:"$389,804,217",website:"https://marvel.com/guardians",imdbRating:"7.7",imdbVotes:"449,175",runtime:"136 min",language:"English",rated:"PG-13",production:"Walt Disney Pictures",released:"05 May 2017",imdbid:"tt3896198",plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",director:"James Gunn",title:"Guardians of the Galaxy Vol. 2",actors:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",response:"True",type:"movie",awards:"Nominated for 1 Oscar. Another 12 wins & 42 nominations.",dvd:"22 Aug 2017",year:"2017",poster:"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",country:"USA",genre:"Action, Adventure, Comedy, Sci-Fi",writer:"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)"}]
