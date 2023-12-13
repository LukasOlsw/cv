import "./App.scss";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="AMWrapper">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
