import "./App.css";
import ButtonComponent from "./components/MainComponens";
import ImageComponent from "./components/ClassComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Progetto react</h1>
        <ImageComponent src="https://placecats.com/300/200" alt="kitten" />
        <ButtonComponent
          buttonSize="buttonSize"
          style="btn"
          textColor="btn2"
          value="text"
        />
      </header>
    </div>
  );
}

export default App;
