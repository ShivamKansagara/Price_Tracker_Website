import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Carousel from './MyComponents/Carousel';
import Accordion from './MyComponents/Accordion';
function App() {
  return (
    <>
    <div >
      <div  style={{ backgroundColor: "#000000" }}>
      <Navbar/>
      <br />
      <Carousel/>
      </div>
      <div style={{ backgroundColor: "#000000" }}>
      <Accordion/>
      </div>
    </div>
    </>
  );
}

export default App;
