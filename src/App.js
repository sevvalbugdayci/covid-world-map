import "./App.css";
import WorldMap from "./WorldMap";
import CountryDetail from "./components/CountryDetail";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WorldMap />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
