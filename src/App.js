import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        isLargeRow={true}
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
