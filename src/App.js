import "./App.css";
import LineSlideOnHover from "./LineSlideOnHover";
import OuterBorderOnHover from "./OuterBorderOnHover";

function App() {
  return (
    <div className="App">
      <h1 className="title">Button Hover Effects</h1>
      <div className="container">
        <div className="buttonEffect">
          <OuterBorderOnHover />
        </div>
        <div className="buttonEffect">
          <LineSlideOnHover />
        </div>
        <div className="buttonEffect">
          <OuterBorderOnHover />
        </div>
      </div>
    </div>
  );
}

export default App;
