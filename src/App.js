import "./App.css";
import Input from "./components/Input";

function App() {



  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Inputs</h1>
        </div>
        
      <div className="row">
        <Input title="<Input />" label="Label" type="text" placeholder="Placeholder">Default</Input>
      </div>

      <div className="row">
        <Input color="error" title="<Input error/>" label="Label" type="text" placeholder="Placeholder">Default</Input>
      </div>



      <div className="row footer">
          <p> created by <span className="spanName">Dwightx</span> - devChallenges.io</p>
        </div>

      </div>
    </div>
  );
}

export default App;