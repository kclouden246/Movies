import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import Movies from './Movies'

let wrapper;
beforeAll(() => {
  global.fetch = jest.fn(); // mocking `fetch()` API
});

beforeEach(() => {
  wrapper = shallow(<Movies />);
});

afterEach(() => {
  wrapper.unmount();
});

// test("Check if movies appear in list", async () => {
//   const wrapper = shallow(<Movies/>, { disableLifecycleMethods: true })
//   wrapper.instance().state.movies = [{title: "test movie"}];
//   wrapper.update();
//   expect(wrapper.find('li').length).toBeGreaterThan(0)
// });

// test("Get movies returns at least one movie", async ()=>{
//   const spyDidMount = jest.spyOn(Movies.prototype,"componentDidMount");
//   fetch.mockImplementation(() => {
//     return Promise.resolve({
//       status: 200,
//       json: () => {
//       return Promise.resolve(movie);
//      }
//    });
//  });
//   const wrapper = shallow(<Movies/>);
  
//   const didMount = wrapper.instance().componentDidMount();

//   didMount.then(() => {
//     // updating the wrapper
//     wrapper.update();
//     expect(spyDidMount).toHaveBeenCalled();
//     //expect(wrapper.state().movies.length).toBeGreaterThan(0);
//     expect(wrapper.find("movieId").length).toBeGreaterThan(0);
//     spyDidMount.mockRestore();
//     fetch.mockClear();
//  });

  
// });

test("display a single movie ID", async () => {
    const movie = []
    const fetchMock = jest.fn()
    const oldFetch = global.fetch
    global.fetch = fetchMock
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return mockMovie;
        }
      })
    })


    const wrapper = shallow(<Movies />)
    await wrapper.instance().componentDidMount();
    wrapper.update()

    console.log("HERE " + wrapper.instance().state.movies.length)
    //ASSERT
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
    //let firstMovie = wrapper.state('movies');
    let firstMovie = wrapper.instance().state.movies[0];
    console.log("First Movie: ",firstMovie.movieId)
    expect(firstMovie.movieId).toBe(1)
    //expect(wrapper.text()).toBe(1)
    
    //TEARDOWN
    global.fetch = oldFetch
})

let mockMovie = [{"movieId":1,"metascore":"67","boxOffice":"$389,804,217","website":"https://marvel.com/guardians","imdbRating":"7.7","imdbVotes":"449,175","runtime":"136 min","language":"English","rated":"PG-13","production":"Walt Disney Pictures","released":"05 May 2017","imdbid":"tt3896198","plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","director":"James Gunn","title":"Guardians of the Galaxy Vol. 2","actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","response":"True","type":"movie","awards":"Nominated for 1 Oscar. Another 12 wins & 42 nominations.","dvd":"22 Aug 2017","year":"2017","poster":"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg","country":"USA","genre":"Action, Adventure, Comedy, Sci-Fi","writer":"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)"}]
