import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from "./MyComponents/Header";
import {HomePage} from "./MyComponents/HomePage"
import {Trending} from "./MyComponents/Trending"
import {Explore} from "./MyComponents/Explore"
import {Categories} from "./MyComponents/Categories"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/trending" element={<Trending />}/>
          <Route exact path="/explore" element={<Explore />}/>
          <Route exact path="/categories" element={<Categories />}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
