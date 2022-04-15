import Navbar from "./Components/Navbar";
import Home from "./views/Home";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
