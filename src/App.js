import './App.css';
import Row from './components/Row'
import Banner from './components/Banner'
import requests from './backend/requests'
import Nav from './components/Nav'

const App = () =>  {
  return (
    <div className="app">
      {/* Header */}
      <Nav/>

      {/* Banner */}
      <Banner/>

      <Row title="Netflix Originals" isLargePost={true} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending now"fetchUrl={requests.fetchTrending}  />
      <Row title="Top Rated"fetchUrl={requests.fetchTopRated}  />
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}  />
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}  />
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}  />
      <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}  />
      <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}  />

    </div>
  );
}

export default App;
