import "./App.css";
import Navbar from "./components/Navbar/index";
import { AboutMe } from "./components/AboutMe";


function App() {
  const marginStyle = {
    marginTop: '10vh'
  };

  return (
    <div className="App">
      <Navbar />
      <div style={marginStyle}>
        <AboutMe/>
      </div>
    </div>
  );
}
export default App;
