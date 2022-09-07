
import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Nav />
      {/* Banner */}
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES " fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
