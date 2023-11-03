// import logo from './logo.svg';
// import './App.css';

import Header from "./user/Header";
import LatestProduct from "./user/LatestProduct";
import Slide from "./user/Slide";
import Navbar from "./user/Navbar";



function App() {
  return (
    <div className="App">

      <Header />
   
      <Navbar/>
      <Slide />
      <LatestProduct />
    </div>
  );
}

export default App;
