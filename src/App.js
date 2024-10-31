import "./App.css";
import ErrorButton from "./ErrorButton/ErrorButton";
import LineSlideOnHover from "./LineSlideOnHover/LineSlideOnHover";
import OuterBorderOnHover from "./OuterBorderOnHover/OuterBorderOnHover";

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
          <ErrorButton />
        </div>
      </div>
    </div>
  );
}

export default App;
