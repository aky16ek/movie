import './App.scss';
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Home from "./page/Home";
import Popular from "./page/Popular";
import TopRated from "./page/TopRated";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./componets/MovieDetails";
import ActorDetails from "./page/ActorDetails";
import Search from "./componets/Search";




function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={ <Home/> }/>
        <Route path={"/popular"} element={ <Popular/> }/>
        <Route path={"/topRated"} element={ <TopRated/> }/>
        <Route path={"/movie/movie_details/:movieId"} element={ <MovieDetails/> }/>
        <Route path={"/person/person_details/:personId"} element={ <ActorDetails/> }/>
        <Route path={"/person/person_details/:personId"} element={ <ActorDetails/> }/>
          <Route path={"/movie/search_movie/:id"} element={<Search/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
