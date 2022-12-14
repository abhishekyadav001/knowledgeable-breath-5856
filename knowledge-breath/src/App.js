import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Allroutes from "./Components/Allroutes";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />  
      <Allroutes/>
      <Footer />
    </div>
  );
}

export default App;
