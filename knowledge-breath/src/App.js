import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Allroutes from "./Components/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />  
      <Home/>
      {/* <Allroutes/> */}
    </div>
  );
}

export default App;
